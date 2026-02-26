import { useTranslation } from 'react-i18next'
import { Button } from '@flowtech/shared/components'
import { useSmoothScroll } from '@flowtech/shared/hooks'

const Hero = () => {
  const { t } = useTranslation('hero')
  const { t: tCommon } = useTranslation('common')
  const { scrollTo } = useSmoothScroll()

  const features = [
    t('features.1'),
    t('features.2'),
    t('features.3'),
    t('features.4'),
  ]

  return (
    <section id="hero" className="py-16 md:py-24 lg:py-40">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin font-roboto tracking-tight text-text-primary leading-tight">
          {t('title')}
        </h1>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 md:mt-10">
          {features.map((feature, i) => (
            <span
              key={i}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-light text-text-secondary border border-separator rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12">
          <Button
            variant="primary"
            className="!bg-brand-purple !text-white hover:!opacity-90 px-6 sm:px-8 py-3 text-sm sm:text-base"
            onClick={() => scrollTo('contacts')}
          >
            {tCommon('buttons.sendRequest')}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20 pt-10 md:pt-12 border-t border-separator">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-thin font-roboto text-brand-purple">{tCommon('stats.hours')}</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-thin font-roboto text-brand-purple">{tCommon('stats.specialists')}</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-thin font-roboto text-brand-purple">{tCommon('stats.modifications')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
