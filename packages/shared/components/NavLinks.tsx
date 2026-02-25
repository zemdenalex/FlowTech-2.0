import { useTranslation } from 'react-i18next'

const NAV_ITEMS = ['about', 'product', 'schools', 'news', 'contacts'] as const

interface NavLinksProps {
  className?: string
  itemClassName?: string
  onClick?: (id: string) => void
}

const NavLinks = ({ className = '', itemClassName = '', onClick }: NavLinksProps) => {
  const { t } = useTranslation('common')

  return (
    <nav className={className}>
      {NAV_ITEMS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={itemClassName}
          onClick={(e) => {
            if (onClick) {
              e.preventDefault()
              onClick(id)
            }
          }}
        >
          {t(`nav.${id}`)}
        </a>
      ))}
    </nav>
  )
}

export default NavLinks
