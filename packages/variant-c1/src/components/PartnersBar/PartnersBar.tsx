import { useTranslation } from 'react-i18next'
import { GradientBox } from '@flowtech/shared/components'

const PartnersBar = () => {
  const { t } = useTranslation('common')

  const partners = t('partners.items', { returnObjects: true }) as string[]

  return (
    <GradientBox
      direction="tl"
      className="py-8 md:py-12"
    >
      <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[var(--color-gd-text-subtle)] font-normal text-center mb-6 md:mb-8">
          {t('partners.title')}
        </p>

        {/* Partner badges */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
          {Array.isArray(partners) &&
            partners.map((name, i) => (
              <span
                key={i}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-gd-text-overlay)] backdrop-blur-sm border border-[var(--color-gd-text-border)] rounded-full text-[11px] sm:text-xs md:text-sm font-normal text-[var(--color-gd-text-muted)] text-center"
              >
                {name}
              </span>
            ))}
        </div>
      </div>
    </GradientBox>
  )
}

export default PartnersBar
