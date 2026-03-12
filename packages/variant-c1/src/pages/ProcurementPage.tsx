import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ProcurementPage = () => {
  const { t } = useTranslation('procurement')
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

        {/* Description */}
        <p className="text-base md:text-lg font-normal text-text-secondary leading-relaxed mb-12 md:mb-16 max-w-4xl text-justify">
          {t('description')}
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12 md:mb-16">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-bg-secondary/40 border border-brand-purple/15 rounded-xl p-6 md:p-8"
            >
              <h3 className="text-base md:text-lg font-normal text-text-primary mb-3">
                {t(`features.${i}.title`)}
              </h3>
              <p className="text-sm md:text-base font-normal text-text-muted leading-relaxed text-justify">
                {t(`features.${i}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-text-primary mb-8">
            {t('process.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-separator rounded-xl p-6 text-left">
                <span className="text-4xl md:text-5xl font-light bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent mb-3 block">
                  {String(i).padStart(2, '0')}
                </span>
                <p className="text-sm md:text-base font-normal text-text-secondary leading-relaxed">
                  {t(`process.steps.${i}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/contacts"
          className="px-8 py-3 bg-gradient-to-r from-accent-from to-accent-to text-white rounded-full font-normal hover:opacity-90 transition-opacity inline-block"
        >
          {t('cta')}
        </Link>
      </div>
    </div>
  )
}

export default ProcurementPage
