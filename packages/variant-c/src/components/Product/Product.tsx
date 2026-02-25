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
    <section id="product" className="bg-bg-secondary py-20 md:py-32 relative overflow-hidden">
      {/* Decorative gradient line on right */}
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-gd70 to-transparent" />

      <div className="container">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-[0.15em] uppercase text-text-primary mb-16 text-right">
          {t('title')}
        </h2>

        {/* Cascading offset cards */}
        <div className="space-y-8 md:space-y-12 mb-20">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-6 md:gap-10 items-center ${
                i % 2 === 0 ? 'md:ml-0 md:mr-12' : 'md:mr-0 md:ml-12'
              }`}
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
              <div className="w-full md:w-1/2 border border-brand-purple/30 rounded-2xl p-8 bg-bg-primary/50 backdrop-blur-sm hover:border-brand-purple/60 transition-colors duration-300">
                <h3 className="text-2xl md:text-3xl font-thin tracking-wider uppercase text-text-primary mb-4">
                  {card.title}
                </h3>
                <p className="text-base font-light text-text-secondary leading-relaxed">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech specs — dramatic large-number presentation */}
        <div>
          <h3 className="text-2xl md:text-3xl font-thin tracking-[0.15em] uppercase text-text-primary mb-10 text-center">
            {t('specs.title')}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {SPEC_KEYS.map((key) => (
              <div
                key={key}
                className="text-center p-6 border border-brand-purple/20 rounded-xl bg-bg-primary/30 backdrop-blur-sm hover:border-brand-purple/50 transition-colors duration-300"
              >
                <div className="text-2xl md:text-3xl font-thin text-brand-purple mb-2">
                  {t(`specs.${key}.value`)}
                </div>
                <div className="text-xs md:text-sm font-light text-text-muted uppercase tracking-wider">
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
