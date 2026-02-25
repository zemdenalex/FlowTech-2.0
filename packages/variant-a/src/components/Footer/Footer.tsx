import { useTranslation } from 'react-i18next'
import { NavLinks, SocialLinks } from '@flowtech/shared/components'
import { useSmoothScroll } from '@flowtech/shared/hooks'
import Logo from '/assets/Logo-white.png'

const Footer = () => {
  const { t } = useTranslation('common')
  const { scrollTo } = useSmoothScroll()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-separator">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img alt="FlowTech" src={Logo} className="object-contain h-10" />
          </div>

          {/* Nav Links */}
          <NavLinks
            className="flex flex-wrap justify-center gap-4"
            itemClassName="text-sm text-text-muted hover:text-text-primary transition-colors"
            onClick={scrollTo}
          />

          {/* Social Links */}
          <div className="flex justify-center md:justify-end">
            <SocialLinks className="flex items-center gap-4 text-text-muted" iconSize={20} />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-separator text-center">
          <p className="text-text-muted text-sm">
            &copy; {year} FlowTech. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
