import { useState } from 'react'
import { LanguageSwitcher, ThemeToggle, NavLinks, SocialLinks } from '@flowtech/shared/components'
import { useSmoothScroll } from '@flowtech/shared/hooks'
import Logo from '/assets/Logo-white.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollTo } = useSmoothScroll()

  const handleNavClick = (id: string) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-separator">
      <div className="flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <div className="w-24 flex-shrink-0">
          <img alt="FlowTech" src={Logo} className="object-contain h-10" />
        </div>

        {/* Desktop Nav */}
        <NavLinks
          className="hidden md:flex items-center gap-6"
          itemClassName="text-sm font-light text-text-secondary hover:text-text-primary transition-colors"
          onClick={handleNavClick}
        />

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden md:flex" />
          <ThemeToggle />
          <SocialLinks className="hidden md:flex items-center gap-3 text-text-secondary" iconSize={18} />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-sm border-t border-separator">
          <NavLinks
            className="flex flex-col items-center gap-4 py-6"
            itemClassName="text-lg font-light text-text-secondary hover:text-text-primary transition-colors"
            onClick={handleNavClick}
          />
          <div className="flex items-center justify-center gap-4 pb-4">
            <LanguageSwitcher />
            <SocialLinks className="flex items-center gap-3 text-text-secondary" iconSize={18} />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
