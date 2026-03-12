import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavLinks, SocialLinks } from '@flowtech/shared/components'
import { useSmoothScroll } from '@flowtech/shared/hooks'

const C1_NAV_ITEMS = ['about', 'product', 'education', 'developers', 'laboratory', 'procurement', 'contacts'] as const

const Footer = () => {
  const { t } = useTranslation('common')
  const { scrollTo } = useSmoothScroll()
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleNav = (id: string) => {
    if (isHome) {
      scrollTo(id)
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <footer className="bg-gradient-to-b from-gd0 to-gd40 py-10 md:py-14 relative overflow-hidden z-[3]">
      {/* Large watermark — behind everything, bottom-anchored to avoid overlap with content */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <img src="/assets/logo-white.png" alt="" className="h-[40px] sm:h-[50px] md:h-[70px] w-auto opacity-[0.03] brightness-0 dark:brightness-100" />
      </div>

      <div className="px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-5 md:gap-6">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              if (isHome) {
                scrollTo('hero')
              } else {
                navigate('/')
              }
            }}
          >
            <img
              src="/assets/logo-white.png"
              alt="FlowTech"
              className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity dark:brightness-100 brightness-0"
            />
          </a>

          {/* Navigation */}
          <NavLinks
            items={C1_NAV_ITEMS}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            itemClassName="text-xs md:text-sm font-normal tracking-wider uppercase text-[var(--color-gd-text-muted)] hover:text-[var(--color-gd-text)] transition-colors"
            onClick={handleNav}
          />

          {/* Divider */}
          <div className="w-16 md:w-24 h-px bg-[var(--color-gd-text-border)]" />

          {/* Social links — above watermark */}
          <SocialLinks
            className="flex items-center gap-5 text-[var(--color-gd-text-subtle)] hover:text-[var(--color-gd-text-muted)] transition-colors relative z-20"
            iconSize={18}
          />

          {/* Copyright */}
          <p className="text-[10px] md:text-xs font-normal text-[var(--color-gd-text-subtle)] tracking-wider">
            &copy; 2024&ndash;2026 ООО «Инженер Атмосферы». {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
