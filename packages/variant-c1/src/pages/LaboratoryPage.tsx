import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const LaboratoryPage = () => {
  const { t } = useTranslation('laboratory')
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

        {/* Intro */}
        <p className="text-base md:text-lg font-normal text-text-secondary leading-relaxed mb-12 md:mb-16 max-w-4xl text-justify">
          {t('intro')}
        </p>

        {/* Goals */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-text-primary mb-8">
            {t('goals.title')}
          </h2>
          <ul className="space-y-4 md:space-y-5 max-w-4xl">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-accent-from to-accent-to" />
                <span className="text-sm md:text-base font-normal text-text-secondary leading-relaxed">
                  {t(`goals.items.${i}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Regulation */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-text-primary mb-6">
            {t('regulation.title')}
          </h2>
          <p className="text-base md:text-lg font-normal text-text-secondary leading-relaxed mb-6 max-w-4xl text-justify">
            {t('regulation.intro')}
          </p>
          <div className="space-y-4 md:space-y-5 max-w-4xl">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-bg-secondary/40 border border-brand-purple/15 rounded-xl p-5 md:p-6"
              >
                <p className="text-sm md:text-base font-normal text-text-secondary leading-relaxed text-justify">
                  {t(`regulation.items.${i}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-text-primary mb-6">
            {t('equipment.title')}
          </h2>
          <p className="text-base md:text-lg font-normal text-text-secondary leading-relaxed mb-6 max-w-4xl text-justify">
            {t('equipment.intro')}
          </p>
          <ul className="space-y-3 md:space-y-4 max-w-3xl">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-accent-from to-accent-to" />
                <span className="text-sm md:text-base font-normal text-text-secondary leading-relaxed">
                  {t(`equipment.items.${i}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Credentials */}
        <div className="bg-bg-secondary/30 border-l-2 border-brand-purple/40 rounded-r-lg p-6 md:p-8 max-w-4xl">
          <p className="text-base md:text-lg font-normal text-text-primary leading-relaxed text-justify">
            {t('credentials')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LaboratoryPage
