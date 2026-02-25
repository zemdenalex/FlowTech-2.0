import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@flowtech/shared/components'
import ADT from '/assets/ADT.png'

const SPEC_KEYS = ['workingSection', 'speed', 'precision', 'power', 'weight', 'dimensions'] as const

const Product = () => {
  const { t } = useTranslation('product')

  return (
    <section id="product" className="bg-bg-primary py-16 md:py-24">
      <SectionHeading>{t('title')}</SectionHeading>

      <div className="container mt-10 md:mt-16">
        {/* Two-column: image left, description right */}
        <div className="md:grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center mb-8 md:mb-0">
            <img src={ADT} alt={t('subtitle')} className="max-w-full h-auto object-contain" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-roboto font-medium mb-4">
              {t('subtitle')}
            </h3>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>

        {/* Tech Specs Grid */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-roboto font-medium text-center mb-8">
            {t('specs.title')}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {SPEC_KEYS.map((key) => (
              <div
                key={key}
                className="relative rounded-2xl p-[2px] bg-gradient-to-br from-gd0 via-gd70 to-gd100"
              >
                <div className="bg-bg-primary rounded-2xl p-4 md:p-6 h-full">
                  <p className="text-text-muted text-sm md:text-base mb-1">
                    {t(`specs.${key}.label`)}
                  </p>
                  <p className="text-text-primary text-lg md:text-2xl font-medium">
                    {t(`specs.${key}.value`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
