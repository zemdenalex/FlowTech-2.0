import { useTranslation } from 'react-i18next'

const DEFAULT_NAV_ITEMS = ['about', 'product', 'schools', 'news', 'contacts'] as const

interface NavLinksProps {
  className?: string
  itemClassName?: string
  onClick?: (id: string) => void
  items?: readonly string[]
}

const NavLinks = ({ className = '', itemClassName = '', onClick, items = DEFAULT_NAV_ITEMS }: NavLinksProps) => {
  const { t } = useTranslation('common')

  return (
    <nav className={className}>
      {items.map((id) => (
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
