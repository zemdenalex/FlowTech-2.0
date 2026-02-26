import { useTranslation } from 'react-i18next'
import { NavLinks, SocialLinks } from '@flowtech/shared/components'
import { useSmoothScroll } from '@flowtech/shared/hooks'

const Footer = () => {
  const { t } = useTranslation('common')
  const { scrollTo } = useSmoothScroll()

  return (
    <footer className="bg-gradient-to-b from-gd0 to-brand-main py-10 md:py-12 relative overflow-hidden">
      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[60px] sm:text-[100px] md:text-[200px] font-thin tracking-[0.2em] md:tracking-[0.3em] uppercase text-white opacity-[0.03] whitespace-nowrap">
          FlowTech
        </span>
      </div>

      <div className="px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('hero')
            }}
            className="text-xl md:text-2xl font-thin tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/80 hover:text-white transition-colors"
          >
            FlowTech
          </a>

          {/* Navigation */}
          <NavLinks
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            itemClassName="text-xs md:text-sm font-light tracking-wider uppercase text-white/50 hover:text-white/80 transition-colors"
            onClick={scrollTo}
          />

          {/* Divider */}
          <div className="w-16 md:w-24 h-px bg-white/20" />

          {/* Social links */}
          <SocialLinks
            className="flex items-center gap-4 text-white/50 hover:text-white/80 transition-colors"
            iconSize={18}
          />

          {/* Copyright */}
          <p className="text-[10px] md:text-xs font-light text-white/30 tracking-wider">
            &copy; {new Date().getFullYear()} FlowTech. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
