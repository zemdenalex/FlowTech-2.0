import { useTranslation } from 'react-i18next'
import { SocialLinks } from '@flowtech/shared/components'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-bg-secondary border-t border-separator py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <span className="text-lg font-thin font-roboto text-text-primary tracking-wide">
          FlowTech
        </span>

        {/* Copyright */}
        <p className="text-sm text-text-muted font-light">
          &copy; {new Date().getFullYear()} FlowTech. {t('footer.rights')}
        </p>

        {/* Social links */}
        <SocialLinks
          className="flex items-center gap-4 text-text-muted hover:[&>a]:text-text-primary [&>a]:transition-colors"
          iconSize={18}
        />
      </div>
    </footer>
  )
}

export default Footer
