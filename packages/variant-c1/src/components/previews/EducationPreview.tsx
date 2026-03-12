import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const EducationPreview = () => {
  const { t } = useTranslation('education')

  return (
    <section id="education" className="bg-bg-primary py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-bg-secondary rounded-2xl shadow-lg shadow-black/5 p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text side */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.05em] md:tracking-[0.1em] uppercase text-text-primary mb-4 md:mb-6">
                {t('title')}
              </h2>
              <p className="text-sm md:text-base font-normal text-text-secondary leading-relaxed mb-4 md:mb-6 text-justify">
                {t('preview.teaser')}
              </p>

              <ul className="space-y-3 mb-6">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-purple/60 shrink-0" />
                    <span className="text-sm md:text-base font-normal text-text-secondary">
                      {t(`features.${i}.title`)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-6">
                <Link
                  to="/education"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple hover:text-text-primary transition-colors"
                >
                  {t('buttons.learnMore', { ns: 'common' })} &rarr;
                </Link>
                <a
                  href="#contacts"
                  className="inline-flex items-center gap-2 text-sm font-normal border border-brand-purple/50 text-brand-purple hover:bg-brand-purple hover:text-white rounded-full px-5 py-2 transition-colors"
                >
                  {t('cta')}
                </a>
              </div>
            </div>

            {/* Image side — RIGHT */}
            <div className="relative">
              <img
                src="/assets/education.png"
                alt={t('title')}
                className="relative w-full max-h-[400px] rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationPreview
