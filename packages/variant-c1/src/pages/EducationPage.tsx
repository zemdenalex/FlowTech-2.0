import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const EducationPage = () => {
  const { t } = useTranslation('education')
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
        <p className="text-base md:text-lg font-normal text-text-secondary leading-relaxed mb-12 md:mb-16 max-w-5xl text-justify">
          {t('subtitle')}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-bg-secondary/40 border border-brand-purple/15 rounded-xl p-6 md:p-8"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-accent-from to-accent-to" />
                <h3 className="text-base md:text-lg font-light text-text-primary">
                  {t(`features.${i}.title`)}
                </h3>
              </div>
              <p className="text-sm md:text-base font-normal text-text-muted leading-relaxed pl-[18px] md:pl-[20px] text-justify">
                {t(`features.${i}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Mishustin quote */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="relative bg-bg-secondary dark:bg-[#252350] border border-brand-purple/25 rounded-2xl p-6 md:p-10 overflow-hidden">
            {/* Decorative quotation marks — fully visible inside card */}
            <span className="block text-[36px] md:text-[48px] leading-none text-brand-purple/15 font-serif select-none">
              &ldquo;
            </span>

            <blockquote className="relative text-sm md:text-lg font-light text-text-primary leading-relaxed italic mb-6 md:mb-8 text-justify">
              {t('mishustin.quote')}
            </blockquote>

            <span className="block text-[36px] md:text-[48px] leading-none text-brand-purple/15 font-serif select-none text-right -mt-4 mb-4">
              &rdquo;
            </span>

            <div className="relative flex items-center gap-3 md:gap-4">
              <img
                src="/assets/Mishustin.png"
                alt={t('mishustin.name')}
                className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] rounded-full object-cover border-2 border-brand-purple/30"
              />
              <p className="font-medium text-text-primary text-xs md:text-sm">
                {t('mishustin.name')}
              </p>
            </div>
          </div>
        </div>

        {/* What is ADT */}
        <div className="mb-12 md:mb-16 max-w-4xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-text-primary mb-6">
            {t('whatIsADT.title')}
          </h2>
          <p className="text-base md:text-lg font-normal text-text-secondary leading-relaxed text-justify">
            {t('whatIsADT.description')}
          </p>
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

export default EducationPage
