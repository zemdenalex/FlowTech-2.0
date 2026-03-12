import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const DevelopersPage = () => {
  const { t } = useTranslation('developers')
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
        <p className="text-base md:text-lg font-normal text-text-secondary leading-relaxed mb-6 max-w-4xl text-justify">
          {t('subtitle')}
        </p>

        {/* Intro */}
        <p className="text-base md:text-lg font-normal text-text-muted italic leading-relaxed mb-12 md:mb-16 max-w-4xl text-justify">
          {t('intro')}
        </p>

        {/* Features */}
        <div className="space-y-4 md:space-y-6 mb-12 md:mb-16 max-w-4xl">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex rounded-r-xl overflow-hidden">
              {/* Gradient left border */}
              <div className="w-0.5 flex-shrink-0 bg-gradient-to-b from-accent-from to-accent-to" />
              <div className="flex-1 bg-bg-secondary/40 p-5 md:p-7">
                <h3 className="text-base md:text-lg font-light text-text-primary mb-2">
                  {t(`features.${i}.title`)}
                </h3>
                <p className="text-sm md:text-base font-normal text-text-muted leading-relaxed text-justify">
                  {t(`features.${i}.description`)}
                </p>
              </div>
            </div>
          ))}
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

export default DevelopersPage
