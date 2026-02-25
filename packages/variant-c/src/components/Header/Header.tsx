import { useState } from 'react'
import { LanguageSwitcher, ThemeToggle, NavLinks, SocialLinks } from '@flowtech/shared/components'
import { useSmoothScroll } from '@flowtech/shared/hooks'
import { useScrolled } from '../../hooks/useScrolled'

const Header = () => {
  const scrolled = useScrolled(50)
  const { scrollTo } = useSmoothScroll()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (id: string) => {
    scrollTo(id)
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('hero')
          }}
          className="text-xl font-thin tracking-[0.2em] uppercase text-text-primary"
        >
          FlowTech
        </a>

        {/* Desktop nav */}
        <NavLinks
          className="hidden md:flex items-center gap-8"
          itemClassName="text-sm font-light tracking-wider uppercase text-text-secondary hover:text-text-primary transition-colors"
          onClick={handleNav}
        />

        {/* Controls */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <SocialLinks
            className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors"
            iconSize={18}
          />
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-primary"
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

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-bg-primary/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-6 p-2 text-text-primary"
            aria-label="Close menu"
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          <NavLinks
            className="flex flex-col items-center gap-6"
            itemClassName="text-2xl font-thin tracking-[0.2em] uppercase text-text-primary hover:text-brand-purple transition-colors"
            onClick={handleNav}
          />

          <div className="flex items-center gap-4 mt-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <SocialLinks
            className="flex items-center gap-4 text-text-muted"
            iconSize={22}
          />
        </div>
      )}
    </header>
  )
}

export default Header
