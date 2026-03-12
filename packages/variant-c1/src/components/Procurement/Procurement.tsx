import { useTranslation } from 'react-i18next'
import { GradientBox } from '@flowtech/shared/components'

const FEATURE_COUNT = 4
const STEP_COUNT = 4

const Procurement = () => {
  const { t } = useTranslation('procurement')

  return (
    <section id="procurement">
      <GradientBox direction="br" className="py-12 md:py-24">
        <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-white mb-3 md:mb-4">
            {t('title')}
          </h2>

          <p className="text-sm md:text-lg font-light text-white/70 mb-6 md:mb-10 tracking-wide">
            {t('subtitle')}
          </p>

          {/* Description */}
          <p className="text-sm md:text-base font-light text-white/80 leading-relaxed mb-8 md:mb-12">
            {t('description')}
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
            {Array.from({ length: FEATURE_COUNT }, (_, i) => (
              <div key={i} className="flex items-start gap-3 md:gap-4">
                <span className="mt-1.5 md:mt-2 flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-white/80 to-white/40" />
                <div>
                  <h3 className="text-sm md:text-base font-medium text-white mb-1">
                    {t(`features.${i + 1}.title`)}
                  </h3>
                  <p className="text-sm md:text-base font-light text-white/70 leading-relaxed">
                    {t(`features.${i + 1}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Process steps */}
          <div className="mb-10 md:mb-14">
            <h3 className="text-lg md:text-2xl font-light uppercase text-white/90 mb-6 md:mb-8 tracking-wider">
              {t('process.title')}
            </h3>
            <div className="space-y-4 md:space-y-6 max-w-3xl">
              {Array.from({ length: STEP_COUNT }, (_, i) => (
                <div key={i} className="flex items-start gap-4 md:gap-6">
                  <span className="text-2xl md:text-4xl font-light bg-gradient-to-r from-white/80 to-white/40 bg-clip-text text-transparent flex-shrink-0 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm md:text-base font-light text-white/90 leading-relaxed pt-1 md:pt-2">
                    {t(`process.steps.${i + 1}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contacts"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent-from to-accent-to text-white rounded-full font-light hover:opacity-90 transition-opacity"
          >
            {t('cta')}
          </a>
        </div>
      </GradientBox>
    </section>
  )
}

export default Procurement
