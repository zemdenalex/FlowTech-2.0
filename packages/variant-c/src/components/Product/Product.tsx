import { useTranslation } from 'react-i18next'

const SPEC_KEYS = ['workingSection', 'speed', 'precision', 'power', 'weight', 'dimensions'] as const

const Product = () => {
  const { t } = useTranslation('product')

  const cards = [
    {
      title: t('subtitle'),
      body: t('description'),
      image: '/assets/ADT.png',
    },
    {
      title: t('courses.title'),
      body: t('courses.description'),
      image: '/assets/Schools1.png',
    },
  ]

  return (
    <section id="product" className="bg-bg-secondary py-16 md:py-32 relative overflow-hidden">
      {/* Decorative gradient line on right */}
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-gd70 to-transparent" />

      <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-thin tracking-[0.1em] md:tracking-[0.15em] uppercase text-text-primary mb-10 md:mb-16 text-right">
          {t('title')}
        </h2>

        {/* Cascading offset cards */}
        <div className="space-y-8 md:space-y-12 mb-16 md:mb-20">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-4 md:gap-10 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-gd70/30 to-gd100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <img
                  src={card.image}
                  alt={card.title}
                  className="relative w-full rounded-xl object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 border border-brand-purple/30 rounded-2xl p-5 md:p-8 bg-bg-primary/50 backdrop-blur-sm hover:border-brand-purple/60 transition-colors duration-300">
                <h3 className="text-lg sm:text-xl md:text-3xl font-thin tracking-wider uppercase text-text-primary mb-3 md:mb-4">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base font-light text-text-secondary leading-relaxed">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech specs */}
        <div>
          <h3 className="text-xl md:text-3xl font-thin tracking-[0.1em] md:tracking-[0.15em] uppercase text-text-primary mb-8 md:mb-10 text-center">
            {t('specs.title')}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
            {SPEC_KEYS.map((key) => (
              <div
                key={key}
                className="text-center p-4 md:p-6 border border-brand-purple/20 rounded-xl bg-bg-primary/30 backdrop-blur-sm hover:border-brand-purple/50 transition-colors duration-300"
              >
                <div className="text-lg sm:text-xl md:text-3xl font-thin text-brand-purple mb-1 md:mb-2">
                  {t(`specs.${key}.value`)}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-light text-text-muted uppercase tracking-wider">
                  {t(`specs.${key}.label`)}
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
