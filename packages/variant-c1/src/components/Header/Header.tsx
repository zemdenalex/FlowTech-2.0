import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher, ThemeToggle, SocialLinks } from '@flowtech/shared/components'
import { useSmoothScroll } from '@flowtech/shared/hooks'
import { useScrolled } from '../../hooks/useScrolled'

const PAGE_ROUTES: Record<string, string> = {
  about: '/about',
  product: '/product',
  education: '/education',
  developers: '/developers',
  laboratory: '/laboratory',
  procurement: '/procurement',
  contacts: '/contacts',
}

const SCROLL_SECTIONS: string[] = []

const NAV_ITEMS = ['about', 'product', 'education', 'developers', 'laboratory', 'procurement', 'contacts'] as const

const Header = () => {
  const scrolled = useScrolled(50)
  const { scrollTo } = useSmoothScroll()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const { t } = useTranslation('common')

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleScrollNav = (id: string) => {
    setMobileOpen(false)
    if (isHome) {
      scrollTo(id)
    } else {
      navigate(`/#${id}`)
    }
  }

  const handleLogo = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isHome) {
      scrollTo('hero')
    } else {
      navigate('/')
    }
  }

  const renderNavItem = (id: string, className: string) => {
    if (SCROLL_SECTIONS.includes(id)) {
      return (
        <a
          key={id}
          href={`#${id}`}
          className={className}
          onClick={(e) => {
            e.preventDefault()
            handleScrollNav(id)
          }}
        >
          {t(`nav.${id}`)}
        </a>
      )
    }
    return (
      <Link
        key={id}
        to={PAGE_ROUTES[id]}
        className={className}
        onClick={() => setMobileOpen(false)}
      >
        {t(`nav.${id}`)}
      </Link>
    )
  }

  // On mobile, always show a solid blurred bg so header is readable
  // On desktop, transparent until scrolled
  const headerBg = scrolled || mobileOpen
    ? 'bg-bg-primary/90 backdrop-blur-md shadow-lg'
    : 'bg-bg-primary/60 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-4 md:px-6">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogo}
            className="flex-shrink-0"
          >
            <img
              src="/assets/logo-white.png"
              alt="FlowTech"
              className="h-8 w-auto dark:hidden brightness-0"
            />
            <img src="/assets/logo-white.png" alt="FlowTech" className="h-8 w-auto hidden dark:block" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-4">
            {NAV_ITEMS.map((id) =>
              renderNavItem(
                id,
                `text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-colors ${
                  scrolled
                    ? 'text-text-secondary hover:text-text-primary'
                    : 'text-[var(--color-gd-text-muted)] hover:text-[var(--color-gd-text)]'
                }`
              )
            )}
          </nav>

          {/* Controls — desktop */}
          <div className={`hidden xl:flex items-center gap-2 flex-shrink-0 ${
            scrolled ? 'text-text-muted' : 'text-[var(--color-gd-text-muted)]'
          }`}>
            <LanguageSwitcher />
            <ThemeToggle />
            <SocialLinks
              className="flex items-center gap-2 hover:text-text-primary transition-colors"
              iconSize={16}
            />
          </div>

          {/* Mobile/tablet burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`xl:hidden p-2 ${scrolled ? 'text-text-primary' : 'text-[var(--color-gd-text)]'}`}
            aria-label="Toggle menu"
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay — separate from header for proper z-index */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 bg-bg-primary z-[100] flex flex-col overflow-y-auto">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-text-primary"
              aria-label="Close menu"
            >
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          {/* Nav items — scrollable, compact */}
          <nav className="flex flex-col items-center gap-3.5 py-4 flex-1 justify-center">
            {NAV_ITEMS.map((id) =>
              renderNavItem(
                id,
                'text-sm sm:text-base font-medium tracking-[0.1em] uppercase text-text-primary hover:text-brand-purple transition-colors py-0.5 text-center'
              )
            )}
          </nav>

          {/* Controls at bottom */}
          <div className="flex flex-col items-center gap-4 pb-8">
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <SocialLinks
              className="flex items-center gap-4 text-text-muted"
              iconSize={20}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Header
