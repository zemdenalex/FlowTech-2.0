import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ProductPreview = () => {
  const { t } = useTranslation('product')

  return (
    <section id="product" className="bg-bg-secondary py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-bg-primary rounded-2xl shadow-lg shadow-black/5 p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image side — LEFT */}
            <div className="relative lg:order-first order-last">
              <img
                src="/assets/product-1.jpg"
                alt={t('title')}
                className="relative w-full rounded-xl object-cover"
              />
            </div>

            {/* Text side */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-text-primary mb-4 md:mb-6">
                {t('title')}
              </h2>
              <p className="text-sm md:text-base font-normal text-text-secondary leading-relaxed mb-4 md:mb-6 text-justify">
                {t('preview.teaser')}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {['workingSection', 'speed', 'anglesAttack', 'anglesSlip', 'power', 'powerSupply', 'protection'].map((key) => (
                  <div key={key} className="border border-separator rounded-lg px-3 py-2">
                    <span className="block text-xs font-normal text-text-muted uppercase tracking-wider mb-1">
                      {t(`specs.${key}.label`)}
                    </span>
                    <span className="text-sm md:text-base font-normal text-text-primary">
                      {t(`specs.${key}.value`)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-6">
                <Link
                  to="/product"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple hover:text-text-primary transition-colors"
                >
                  {t('buttons.learnMore', { ns: 'common' })} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPreview
