import { useTranslation } from 'react-i18next'
import { GradientBox } from '@flowtech/shared/components'

const WHY_ITEM_COUNT = 5
const EQUIPMENT_ITEM_COUNT = 6

const Laboratory = () => {
  const { t } = useTranslation('laboratory')

  return (
    <section id="laboratory">
      <GradientBox direction="bl" className="py-12 md:py-24">
        <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-white mb-3 md:mb-4">
            {t('title')}
          </h2>

          <p className="text-sm md:text-lg font-light text-white/70 mb-6 md:mb-10 tracking-wide">
            {t('subtitle')}
          </p>

          {/* Intro */}
          <p className="text-sm md:text-base font-light text-white/80 italic leading-relaxed mb-8 md:mb-12">
            {t('intro')}
          </p>

          {/* Why section */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-lg md:text-2xl font-light uppercase text-white/90 mb-3 md:mb-4 tracking-wider">
              {t('why.title')}
            </h3>
            <ul className="space-y-3 md:space-y-4 max-w-3xl">
              {Array.from({ length: WHY_ITEM_COUNT }, (_, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4">
                  <span className="mt-1.5 md:mt-2 flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-white/80 to-white/40" />
                  <span className="text-sm md:text-base font-light text-white/90 leading-relaxed">
                    {t(`why.items.${i + 1}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment section */}
          <div>
            <h3 className="text-lg md:text-2xl font-light uppercase text-white/90 mb-3 md:mb-4 tracking-wider">
              {t('equipment.title')}
            </h3>
            <ul className="space-y-3 md:space-y-4 max-w-3xl">
              {Array.from({ length: EQUIPMENT_ITEM_COUNT }, (_, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4">
                  <span className="mt-1.5 md:mt-2 flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-white/80 to-white/40" />
                  <span className="text-sm md:text-base font-light text-white/90 leading-relaxed">
                    {t(`equipment.items.${i + 1}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GradientBox>
    </section>
  )
}

export default Laboratory
