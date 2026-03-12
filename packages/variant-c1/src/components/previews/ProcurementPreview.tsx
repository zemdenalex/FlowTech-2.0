import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ProcurementPreview = () => {
  const { t } = useTranslation('procurement')

  const steps = [1, 2, 3, 4]

  return (
    <section id="procurement" className="bg-bg-secondary py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-bg-primary rounded-2xl shadow-lg shadow-black/5 p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Accent element — LEFT */}
            <div className="relative lg:order-first order-last">
              <div className="relative grid grid-cols-2 gap-2 sm:gap-4 p-3 sm:p-6 md:p-8 rounded-xl bg-gradient-to-br from-brand-purple/5 to-brand-purple/15 border border-brand-purple/10">
                {steps.map((i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center rounded-lg bg-bg-secondary/80 backdrop-blur-sm border border-separator py-3 px-2 sm:py-6 sm:px-4"
                  >
                    <span className="text-xl sm:text-3xl md:text-4xl font-light text-brand-purple mb-1 sm:mb-2">
                      {String(i).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-normal text-text-muted text-center leading-snug">
                      {t(`process.steps.${i}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Text side */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-text-primary mb-4 md:mb-6">
                {t('title')}
              </h2>
              <p className="text-sm md:text-base font-normal text-text-secondary leading-relaxed mb-4 md:mb-6 text-justify">
                {t('preview.teaser')}
              </p>

              <ol className="space-y-3 mb-6">
                {steps.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sm font-medium text-brand-purple shrink-0 mt-0.5">
                      {String(i).padStart(2, '0')}.
                    </span>
                    <span className="text-sm md:text-base font-normal text-text-secondary">
                      {t(`process.steps.${i}`)}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-6">
                <Link
                  to="/procurement"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple hover:text-text-primary transition-colors"
                >
                  {t('buttons.learnMore', { ns: 'common' })} &rarr;
                </Link>
                <a
                  href="#contacts"
                  className="inline-flex items-center gap-2 text-sm font-normal border border-brand-purple/50 text-brand-purple hover:bg-brand-purple hover:text-white rounded-full px-5 py-2 transition-colors"
                >
                  {t('buttons.getQuote', { ns: 'common' })}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcurementPreview
