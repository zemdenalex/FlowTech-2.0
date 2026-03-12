import { useEffect, useRef, useCallback } from 'react'

/**
 * Particle-based airflow animation.
 * Particles flow horizontally, deflecting around the mouse cursor AND
 * around page elements (sections, cards, headings, images).
 *
 * Visual rules:
 * - Particles that deflect sharply (high angle/force) become whiter
 * - Particles flowing linearly stay dark gray/black
 * - Drawn as dotted/dashed trails rather than continuous lines
 */

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  baseY: number
  size: number
  opacity: number
  trail: [number, number][]
  maxTrail: number
  speed: number
  deflection: number  // 0 = linear, 1 = max deflection
}

interface Obstacle {
  x: number
  y: number
  w: number
  h: number
  rx: number  // radius x (half width + padding)
  ry: number  // radius y (half height + padding)
}

const PARTICLE_COUNT = 180
const BASE_SPEED = 1.8
const CURSOR_RADIUS = 100
const OBSTACLE_PADDING = 20
const TRAIL_MAX = 12
const DOT_GAP = 6  // gap between trail dots

// Selectors for elements that particles should flow around
const OBSTACLE_SELECTORS = [
  'section > div > div',     // card containers
  'h1', 'h2',               // headings
  'blockquote',             // quotes
  'img',                    // images
  '.rounded-2xl',          // card elements
  '.rounded-xl',           // rounded containers
  'button', 'a.inline-block', // buttons/CTAs
]

const FlowAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const obstaclesRef = useRef<Obstacle[]>([])
  const rafRef = useRef(0)
  const isDarkRef = useRef(false)
  const lastTimeRef = useRef(0)

  const collectObstacles = useCallback(() => {
    const obstacles: Obstacle[] = []
    const selector = OBSTACLE_SELECTORS.join(', ')
    const elements = document.querySelectorAll(selector)

    elements.forEach(el => {
      const rect = el.getBoundingClientRect()
      // Skip tiny elements or off-screen ones
      if (rect.width < 40 || rect.height < 20) return
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return

      const scrollY = window.scrollY
      const x = rect.left + rect.width / 2
      const y = rect.top + scrollY + rect.height / 2
      obstacles.push({
        x, y,
        w: rect.width,
        h: rect.height,
        rx: rect.width / 2 + OBSTACLE_PADDING,
        ry: rect.height / 2 + OBSTACLE_PADDING,
      })
    })

    obstaclesRef.current = obstacles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
      canvas.width = window.innerWidth * dpr
      canvas.height = pageHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = pageHeight + 'px'
      collectObstacles()
    }
    resize()
    window.addEventListener('resize', resize)

    const resizeObs = new ResizeObserver(resize)
    resizeObs.observe(document.body)

    // Recompute obstacles on scroll (viewport-relative elements shift)
    let scrollTick = 0
    const onScroll = () => {
      scrollTick++
      if (scrollTick % 10 === 0) collectObstacles()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Dark mode
    const checkDark = () => {
      isDarkRef.current = document.documentElement.classList.contains('dark')
    }
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    // Mouse (page coordinates)
    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.pageX, y: e.pageY }
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    // Create particle
    const W = () => window.innerWidth
    const H = () => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)

    const createParticle = (randomX = false): Particle => {
      const h = H()
      return {
        x: randomX ? Math.random() * W() : -10 - Math.random() * 60,
        y: Math.random() * h,
        vx: BASE_SPEED + Math.random() * 1.2,
        vy: (Math.random() - 0.5) * 0.4,
        baseY: Math.random() * h,
        size: 1.2 + Math.random() * 1.8,
        opacity: 0.15 + Math.random() * 0.35,
        trail: [],
        maxTrail: TRAIL_MAX + Math.floor(Math.random() * 6),
        speed: BASE_SPEED + Math.random() * 1.2,
        deflection: 0,
      }
    }

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => createParticle(true))

    // Collect obstacles initially after a short delay (DOM needs to render)
    setTimeout(collectObstacles, 500)

    // Elliptical obstacle deflection
    const deflectFromObstacle = (
      px: number, py: number,
      obs: Obstacle
    ): [number, number, number] => {
      // Normalized distance from obstacle center (elliptical)
      const dx = (px - obs.x) / obs.rx
      const dy = (py - obs.y) / obs.ry
      const d2 = dx * dx + dy * dy

      if (d2 > 4) return [0, 0, 0]  // too far
      if (d2 < 0.01) return [0.5, 0, 0.5]  // inside center, push right

      const d = Math.sqrt(d2)
      if (d < 1.15) {
        // Inside or very close — push out strongly
        const force = (1.15 - d) * 3
        const nx = dx / d
        const ny = dy / d
        return [nx * force * obs.rx / 100, ny * force * obs.ry / 100, Math.min(force, 1)]
      }

      // Nearby — gentle deflection (potential flow style)
      if (d < 2) {
        const force = (2 - d) / 2 * 0.8
        const nx = dx / d
        const ny = dy / d
        return [nx * force * 0.3, ny * force * 0.3, force * 0.3]
      }

      return [0, 0, 0]
    }

    // Animation loop
    const animate = (now: number) => {
      rafRef.current = requestAnimationFrame(animate)
      if (!ctx || !canvas) return

      const dt = lastTimeRef.current ? Math.min((now - lastTimeRef.current) / 16.67, 3) : 1
      lastTimeRef.current = now

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const dark = isDarkRef.current
      const obstacles = obstaclesRef.current
      const w = W()
      const h = H()

      ctx.save()
      ctx.scale(dpr, dpr)

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i]
        let totalDeflection = 0

        // Mouse avoidance
        const dmx = p.x - mx
        const dmy = p.y - my
        const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy)
        if (mouseDist < CURSOR_RADIUS && mouseDist > 0) {
          const force = (CURSOR_RADIUS - mouseDist) / CURSOR_RADIUS
          p.vx += (dmx / mouseDist) * force * 0.4 * dt
          p.vy += (dmy / mouseDist) * force * 0.4 * dt
          totalDeflection += force
        }

        // Page element avoidance
        for (let j = 0; j < obstacles.length; j++) {
          const [fx, fy, def] = deflectFromObstacle(p.x, p.y, obstacles[j])
          if (def > 0) {
            p.vx += fx * dt
            p.vy += fy * dt
            totalDeflection += def
          }
        }

        // Gentle sine drift
        p.vy += Math.sin(p.x * 0.003 + p.baseY * 0.001) * 0.015 * dt

        // Restore horizontal flow
        p.vx = p.vx * 0.97 + p.speed * 0.03
        p.vy *= 0.96

        // Move
        p.x += p.vx * dt
        p.y += p.vy * dt

        // Track deflection (smoothed)
        p.deflection = p.deflection * 0.92 + Math.min(totalDeflection, 1) * 0.08

        // Update trail
        p.trail.push([p.x, p.y])
        if (p.trail.length > p.maxTrail) p.trail.shift()

        // Reset if off-screen
        if (p.x > w + 50 || p.y < -100 || p.y > h + 100) {
          particlesRef.current[i] = createParticle(false)
          continue
        }

        // --- Draw: dotted trail ---
        if (p.trail.length < 2) continue

        // Color: linear = dark gray/black, deflected = white
        const defl = p.deflection
        let r: number, g: number, b: number
        if (dark) {
          // Dark mode: gray → white
          const brightness = 120 + defl * 135
          r = brightness
          g = brightness
          b = brightness + (1 - defl) * 30  // slight blue tint when linear
        } else {
          // Light mode: dark gray → light/white
          const brightness = 60 + defl * 180
          r = brightness
          g = brightness
          b = brightness + (1 - defl) * 20
        }

        // Draw trail as dots with gaps
        for (let t = 0; t < p.trail.length; t++) {
          if (t % DOT_GAP >= DOT_GAP - 2) continue  // create gaps

          const [tx, ty] = p.trail[t]
          const trailAlpha = (t / p.trail.length) * p.opacity * (0.5 + defl * 0.5)

          ctx.beginPath()
          ctx.arc(tx, ty, p.size * (0.6 + defl * 0.4), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r|0}, ${g|0}, ${b|0}, ${trailAlpha})`
          ctx.fill()
        }

        // Draw the head particle (larger, more visible)
        const headAlpha = p.opacity * (0.6 + defl * 0.4)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (0.8 + defl * 0.6), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r|0}, ${g|0}, ${b|0}, ${headAlpha})`
        ctx.fill()
      }

      // Subtle cursor glow
      if (mx > -1000 && mx < w + 200 && my > 0 && my < h + 200) {
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, CURSOR_RADIUS)
        const alpha = dark ? 0.04 : 0.03
        grad.addColorStop(0, `rgba(140, 140, 180, ${alpha})`)
        grad.addColorStop(1, 'rgba(140, 140, 180, 0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(mx, my, CURSOR_RADIUS, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
      observer.disconnect()
      resizeObs.disconnect()
    }
  }, [collectObstacles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-[1] hidden sm:block"
      style={{ height: '100%' }}
    />
  )
}

export default FlowAnimation
