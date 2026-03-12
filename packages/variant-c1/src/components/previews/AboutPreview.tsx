import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const AboutPreview = () => {
  const { t } = useTranslation('about')

  return (
    <section id="about" className="bg-bg-primary py-12 md:py-20">
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

              <p className="text-sm md:text-base font-normal text-text-muted leading-relaxed mb-6 text-justify">
                {t('founders')}
              </p>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple hover:text-text-primary transition-colors"
                >
                  {t('buttons.learnMore', { ns: 'common' })} &rarr;
                </Link>
              </div>
            </div>

            {/* Image side — award logo */}
            <div className="relative flex items-center justify-center">
              <img
                src="/assets/award-logo.png"
                alt="Премия «Страну меняют люди»"
                className="relative w-full max-w-[320px] rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
