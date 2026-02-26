import { useTranslation } from 'react-i18next'

const Product = () => {
  const { t } = useTranslation('product')
  const { t: tSchools } = useTranslation('schools')

  const cards = [
    {
      title: tSchools('educational.title'),
      description: tSchools('educational.subtitle'),
    },
    {
      title: tSchools('research.title'),
      description: tSchools('research.subtitle'),
    },
    {
      title: tSchools('development.title'),
      description: tSchools('development.subtitle'),
    },
  ]

  const specs = [
    { label: t('specs.workingSection.label'), value: t('specs.workingSection.value') },
    { label: t('specs.speed.label'), value: t('specs.speed.value') },
    { label: t('specs.precision.label'), value: t('specs.precision.value') },
    { label: t('specs.power.label'), value: t('specs.power.value') },
    { label: t('specs.weight.label'), value: t('specs.weight.value') },
    { label: t('specs.dimensions.label'), value: t('specs.dimensions.value') },
  ]

  return (
    <section id="product" className="py-16 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-thin font-roboto text-text-primary mb-4 md:mb-6">
          {t('title')}
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-light text-text-secondary max-w-3xl mb-10 md:mb-16 leading-relaxed">
          {t('description')}
        </p>

        {/* Three cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
          {cards.map((card, i) => (
            <div
              key={i}
              className="border border-separator rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow bg-bg-primary"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-3 md:mb-4">
                <span className="text-brand-purple font-light text-sm md:text-lg">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-sm md:text-base font-medium text-text-primary mb-2 md:mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm font-light text-text-muted leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical specs */}
        <div>
          <h3 className="text-xl md:text-2xl font-thin font-roboto text-text-primary mb-6 md:mb-8">
            {t('specs.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {specs.map((spec, i) => (
              <div key={i} className="py-3 md:py-4 border-b border-separator">
                <p className="text-xs md:text-sm text-text-muted mb-1">{spec.label}</p>
                <p className="text-sm md:text-lg font-light text-text-primary">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
