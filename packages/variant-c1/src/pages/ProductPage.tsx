import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const specKeys = ['workingSection', 'speed', 'anglesAttack', 'anglesSlip', 'power', 'powerSupply', 'dimensions', 'protection'] as const

const ProductPage = () => {
  const { t } = useTranslation('product')
  const { t: tc } = useTranslation('common')

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Back link */}
        <Link
          to="/"
          className="text-sm font-normal text-text-muted hover:text-text-primary transition-colors mb-8 inline-block"
        >
          &larr; {tc('backToHome')}
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] md:tracking-[0.15em] uppercase text-text-primary mb-4">
          {t('title')}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-normal text-text-secondary mb-6 max-w-4xl">
          {t('subtitle')}
        </p>

        {/* Product image */}
        <div className="mb-8">
          <img
            src="/assets/product-1.jpg"
            alt={t('subtitle')}
            className="w-full max-w-2xl rounded-xl object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg font-normal text-text-secondary leading-relaxed mb-6 max-w-4xl text-justify">
          {t('description')}
        </p>

        {/* Pricing */}
        <p className="text-sm md:text-base font-normal text-text-muted italic mb-12 md:mb-16">
          {t('pricing')}
        </p>

        {/* Specs grid */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-text-primary mb-8">
            {t('specs.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {specKeys.map((key) => (
              <div
                key={key}
                className="bg-bg-secondary/50 border border-brand-purple/15 rounded-xl p-5 md:p-6"
              >
                <p className="text-xs md:text-sm font-normal text-text-muted uppercase tracking-wider mb-2">
                  {t(`specs.${key}.label`)}
                </p>
                <p className="text-lg md:text-xl font-normal text-text-primary">
                  {t(`specs.${key}.value`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-text-primary mb-8">
            {t('capabilities.title')}
          </h2>
          <ul className="space-y-3 md:space-y-4 max-w-3xl">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-accent-from to-accent-to" />
                <span className="text-sm md:text-base font-normal text-text-secondary leading-relaxed">
                  {t(`capabilities.items.${i}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div className="bg-bg-secondary/30 border border-brand-purple/15 rounded-2xl p-6 md:p-10 max-w-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-text-primary mb-4">
            {t('courses.title')}
          </h2>
          <p className="text-sm md:text-base font-normal text-text-secondary leading-relaxed text-justify">
            {t('courses.description')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
