import { useTranslation } from 'react-i18next'
import { NavLinks, SocialLinks } from '@flowtech/shared/components'
import { useSmoothScroll } from '@flowtech/shared/hooks'

const Footer = () => {
  const { t } = useTranslation('common')
  const { scrollTo } = useSmoothScroll()

  return (
    <footer className="bg-gradient-to-b from-gd0 to-brand-main py-12 relative overflow-hidden">
      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[120px] md:text-[200px] font-thin tracking-[0.3em] uppercase text-white opacity-[0.03] whitespace-nowrap">
          FlowTech
        </span>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('hero')
            }}
            className="text-2xl font-thin tracking-[0.3em] uppercase text-white/80 hover:text-white transition-colors"
          >
            FlowTech
          </a>

          {/* Navigation */}
          <NavLinks
            className="flex flex-wrap justify-center gap-6"
            itemClassName="text-sm font-light tracking-wider uppercase text-white/50 hover:text-white/80 transition-colors"
            onClick={scrollTo}
          />

          {/* Divider */}
          <div className="w-24 h-px bg-white/20" />

          {/* Social links */}
          <SocialLinks
            className="flex items-center gap-4 text-white/50 hover:text-white/80 transition-colors"
            iconSize={20}
          />

          {/* Copyright */}
          <p className="text-xs font-light text-white/30 tracking-wider">
            &copy; {new Date().getFullYear()} FlowTech. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
