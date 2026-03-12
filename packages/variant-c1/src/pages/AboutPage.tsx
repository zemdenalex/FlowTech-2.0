import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AboutPage = () => {
  const { t } = useTranslation('about')
  const { t: tc } = useTranslation('common')
  const [imgError, setImgError] = useState(false)

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

        {/* Company name */}
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-text-muted font-normal mb-10 md:mb-16">
          {t('companyName')}
        </p>

        {/* Description */}
        <p
          className="text-base md:text-lg font-normal text-text-secondary leading-relaxed mb-8 max-w-4xl text-justify"
          dangerouslySetInnerHTML={{ __html: t('description') }}
        />

        {/* Founders */}
        <p className="text-base md:text-lg font-normal text-text-secondary leading-relaxed mb-8 max-w-4xl text-justify">
          {t('founders')}
        </p>

        {/* Mission */}
        <p className="text-base md:text-lg font-normal text-text-muted leading-relaxed italic mb-8 max-w-4xl text-justify">
          {t('mission')}
        </p>

        {/* Training */}
        <div className="mb-10 md:mb-14 max-w-4xl">
          <p className="text-base md:text-lg font-normal text-text-secondary leading-relaxed text-justify">
            {t('training')}
          </p>
        </div>

        {/* Award */}
        <div className="mb-10 md:mb-14 bg-bg-secondary/30 border-l-2 border-brand-purple/40 rounded-r-lg p-6">
          <p className="text-base md:text-lg font-normal text-text-primary leading-relaxed text-justify">
            {t('award')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Putin quote */}
          <div className="flex flex-col justify-center">
            <div className="relative bg-bg-secondary dark:bg-[#252350] border border-brand-purple/35 rounded-2xl p-6 md:p-10 overflow-hidden">
              {/* Decorative quotation marks — inside card, subtle */}
              <span className="absolute top-2 left-3 md:top-3 md:left-4 text-[48px] md:text-[72px] leading-none text-brand-purple/10 font-serif select-none pointer-events-none">
                &ldquo;
              </span>
              <span className="absolute bottom-0 right-3 md:bottom-1 md:right-4 text-[48px] md:text-[72px] leading-none text-brand-purple/10 font-serif select-none pointer-events-none">
                &rdquo;
              </span>

              <blockquote className="relative text-sm md:text-lg font-light text-text-primary leading-relaxed italic mb-6 md:mb-8 text-justify pt-6 md:pt-8">
                {t('quote.text')}
              </blockquote>

              <div className="relative flex items-center gap-3 md:gap-4">
                {!imgError ? (
                  <img
                    src="/assets/putin.jpg"
                    alt={t('quote.name')}
                    className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] rounded-full object-cover border-2 border-brand-purple/30"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] rounded-full bg-brand-purple/20 border-2 border-brand-purple/30 flex items-center justify-center">
                    <span className="text-text-muted text-xs font-light">
                      {t('quote.name').split(' ').map((w: string) => w[0]).join('')}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-medium text-text-primary text-xs md:text-sm">
                    {t('quote.name')}
                  </p>
                  <p className="text-xs text-text-muted font-light">
                    {t('quote.title')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Award logo image */}
          <div className="rounded-2xl overflow-hidden flex items-center justify-center bg-white dark:bg-white/95 border border-separator/30">
            <img
              src="/assets/award-logo.png"
              alt="Премия «Страну меняют люди»"
              className="w-full h-full object-contain p-8 md:p-12"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
