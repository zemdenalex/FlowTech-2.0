import { useEffect, useRef } from 'react'

/**
 * WebGL shader image effect — organic shimmer, chromatic aberration,
 * pixel-grid displacement, cursor glow, and iridescent ring.
 * Adapted from ITAM About section.
 */

const VERT = `
attribute vec2 a_pos;
varying vec2 vUv;
void main() {
    vUv = a_pos * 0.5 + 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
}`

const FRAG = `
precision mediump float;

uniform sampler2D u_image;
uniform vec2      u_mouse;
uniform vec2      u_prevMouse;
uniform float     u_mouseEntered;
uniform float     u_time;
uniform vec2      u_resolution;
uniform vec2      u_imageSize;

varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
        f.y);
}
vec3 palette(float t) {
    return 0.5 + 0.5 * cos(6.28318 * (vec3(0.0, 0.333, 0.667) + t));
}

void main() {
    /* Cover-fit */
    float imgAspect    = u_imageSize.x / u_imageSize.y;
    float canvasAspect = u_resolution.x / u_resolution.y;
    vec2 scale = canvasAspect > imgAspect
        ? vec2(1.0, canvasAspect / imgAspect)
        : vec2(imgAspect / canvasAspect, 1.0);
    vec2 uvCover = (vUv - 0.5) * scale + 0.5;

    float aspect  = u_resolution.x / u_resolution.y;
    vec2 mouseVec = (vUv - u_mouse) * vec2(aspect, 1.0);
    float dist    = length(mouseVec);
    vec2  dir     = normalize(mouseVec + vec2(1e-5));

    /* Organic shimmer (always on) */
    vec2 bgD = vec2(
        vnoise(vUv * 5.0 + vec2(u_time * 0.18, 0.0)),
        vnoise(vUv * 5.0 + vec2(0.0, u_time * 0.18))
    ) * 0.003;
    float shimmer = vnoise(vUv * 7.5 + u_time * 0.22) * 0.002;

    /* Pixel-grid displacement (mouse velocity driven) */
    vec2 mouseDir    = u_mouse - u_prevMouse;
    vec2 gridUV      = floor(uvCover * 20.0) / 20.0;
    vec2 cellCenter  = gridUV + vec2(0.025);
    vec2 cellToMouse = cellCenter - u_mouse;
    float cellDist   = length(cellToMouse * vec2(aspect, 1.0));
    float gridStr    = smoothstep(0.5, 0.0, cellDist) * u_mouseEntered;
    vec2  gridOff    = gridStr * (-mouseDir) * 0.45;

    vec2 disp = dir * shimmer + bgD + gridOff;
    vec2 uv   = clamp(uvCover + disp, 0.001, 0.999);

    /* Chromatic aberration */
    float aberr = 0.001 + gridStr * 0.006;
    vec2  rOff  = dir * aberr;
    vec4 cR = texture2D(u_image, clamp(uv + rOff, 0.001, 0.999));
    vec4 cG = texture2D(u_image, uv);
    vec4 cB = texture2D(u_image, clamp(uv - rOff, 0.001, 0.999));
    vec4 color = vec4(cR.r, cG.g, cB.b, 1.0);

    /* Cursor glow */
    float glow = smoothstep(0.35, 0.0, dist) * u_mouseEntered * 0.10;
    color.rgb += vec3(glow);

    /* Iridescent ring */
    float ring = smoothstep(0.22, 0.10, dist) * (1.0 - smoothstep(0.07, 0.0, dist));
    color.rgb += palette(u_time * 0.12 + dist * 3.5) * ring * 0.18 * u_mouseEntered;

    /* Fresnel rim */
    float edge = min(min(uvCover.x, 1.0 - uvCover.x), min(uvCover.y, 1.0 - uvCover.y));
    float rim  = smoothstep(0.1, 0.0, edge);
    color.rgb += palette(u_time * 0.06) * rim * 0.03;

    gl_FragColor = color;
}`

function makeShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)
  if (!s) return null
  gl.shaderSource(s, src)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error('[GlassImage] shader:', gl.getShaderInfoLog(s))
    gl.deleteShader(s)
    return null
  }
  return s
}

function makeProgram(gl: WebGLRenderingContext) {
  const vs = makeShader(gl, gl.VERTEX_SHADER, VERT)
  const fs = makeShader(gl, gl.FRAGMENT_SHADER, FRAG)
  if (!vs || !fs) return null
  const p = gl.createProgram()!
  gl.attachShader(p, vs)
  gl.attachShader(p, fs)
  gl.linkProgram(p)
  gl.deleteShader(vs)
  gl.deleteShader(fs)
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.error('[GlassImage] link:', gl.getProgramInfoLog(p))
    gl.deleteProgram(p)
    return null
  }
  return p
}

interface GlassImageProps {
  src: string
  alt: string
  className?: string
}

const GlassImage = ({ src, alt, className = '' }: GlassImageProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Touch/mobile: skip WebGL, show fallback
    if (window.matchMedia('(hover: none)').matches) return

    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
    }) as WebGLRenderingContext | null
    if (!gl) return

    const prog = makeProgram(gl)
    if (!prog) return

    // Geometry
    const posLoc = gl.getAttribLocation(prog, 'a_pos')
    const vbo = gl.createBuffer()!
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    )

    // Uniforms
    const uImage = gl.getUniformLocation(prog, 'u_image')
    const uMouse = gl.getUniformLocation(prog, 'u_mouse')
    const uPrevMouse = gl.getUniformLocation(prog, 'u_prevMouse')
    const uMouseEntered = gl.getUniformLocation(prog, 'u_mouseEntered')
    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uResolution = gl.getUniformLocation(prog, 'u_resolution')
    const uImageSize = gl.getUniformLocation(prog, 'u_imageSize')

    // Texture
    const tex = gl.createTexture()!
    gl.bindTexture(gl.TEXTURE_2D, tex)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

    // State
    let rafId = 0
    const t0 = performance.now()
    let mouseX = 0.5, mouseY = 0.5
    let prevMouseX = 0.5, prevMouseY = 0.5
    let mouseEntered = 0, mouseEnteredTarget = 0
    let imageLoaded = false
    let imgW = 1, imgH = 1

    // Resize
    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = wrap.offsetWidth * dpr
      canvas.height = wrap.offsetHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    const resizeObs = new ResizeObserver(updateSize)
    resizeObs.observe(wrap)
    updateSize()

    // Render loop
    const render = () => {
      rafId = requestAnimationFrame(render)
      if (!imageLoaded) return

      const t = (performance.now() - t0) * 0.001
      mouseEntered += (mouseEnteredTarget - mouseEntered) * 0.055
      prevMouseX += (mouseX - prevMouseX) * 0.04
      prevMouseY += (mouseY - prevMouseY) * 0.04

      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(prog)

      gl.uniform1i(uImage, 0)
      gl.uniform2f(uMouse, mouseX, mouseY)
      gl.uniform2f(uPrevMouse, prevMouseX, prevMouseY)
      gl.uniform1f(uMouseEntered, mouseEntered)
      gl.uniform1f(uTime, t)
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.uniform2f(uImageSize, imgW, imgH)

      gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
      gl.enableVertexAttribArray(posLoc)
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
    rafId = requestAnimationFrame(render)

    // Load image
    const glImg = new Image()
    glImg.crossOrigin = 'anonymous'
    glImg.onload = () => {
      imgW = glImg.naturalWidth
      imgH = glImg.naturalHeight
      gl.bindTexture(gl.TEXTURE_2D, tex)
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, glImg)
      imageLoaded = true
    }
    glImg.src = src

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect()
      const nx = (e.clientX - r.left) / r.width
      const ny = 1.0 - (e.clientY - r.top) / r.height
      const over = nx >= 0 && nx <= 1 && ny >= 0 && ny <= 1
      mouseEnteredTarget = over ? 1 : 0
      if (over) {
        mouseX = nx
        mouseY = ny
      }
    }
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      cancelAnimationFrame(rafId)
      resizeObs.disconnect()
      document.removeEventListener('mousemove', onMouseMove)
      gl.deleteTexture(tex)
      gl.deleteBuffer(vbo)
      gl.deleteProgram(prog)
    }
  }, [src])

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10"
      />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default GlassImage
