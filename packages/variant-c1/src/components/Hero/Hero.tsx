import { useTranslation } from 'react-i18next'
import { GradientBox } from '@flowtech/shared/components'

const isV3 = import.meta.env.BASE_URL.includes('v3')

const Hero = () => {
  const { t } = useTranslation('hero')
  const { t: tc } = useTranslation('common')

  const partners = tc('partners.items', { returnObjects: true }) as string[]

  return (
    <GradientBox
      id="hero"
      direction="br"
      className="min-h-screen flex flex-col items-center justify-center relative pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[var(--color-gd-text-overlay)] blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-[var(--color-gd-text-overlay)] blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
        {/* Main title / Logo */}
        <img
          src="/assets/logo-white.png"
          alt="FlowTech"
          className="h-14 sm:h-24 md:h-36 lg:h-44 w-auto mx-auto mb-4 sm:mb-6 md:mb-8 object-contain dark:brightness-100 brightness-0"
        />

        {/* Divider line */}
        <div className="w-12 sm:w-16 md:w-24 h-px bg-[var(--color-gd-text-border)] mx-auto mb-4 sm:mb-6 md:mb-8" />

        {/* Wind tunnel photo */}
        <div
          className={isV3 ? "w-full max-w-4xl mx-auto mb-5 sm:mb-8 md:mb-10" : "mx-auto mb-5 sm:mb-8 md:mb-10"}
          style={isV3 ? undefined : { width: '40vw', minWidth: '280px', maxWidth: '700px' }}
        >
          <img
            src="/assets/product-1.jpg"
            alt="Аэродинамическая труба FlowTech"
            className="w-full rounded-xl object-cover shadow-lg shadow-black/20"
          />
        </div>

        {/* Partner logos section */}
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[var(--color-gd-text-subtle)] font-normal mb-3 md:mb-4">
          {tc('partners.title')}
        </p>
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 max-w-5xl mx-auto mb-5 sm:mb-8 md:mb-10">
          {Array.isArray(partners) &&
            partners.map((name, i) => (
              <span
                key={i}
                className="px-2.5 py-1 sm:px-4 sm:py-2 bg-[var(--color-gd-text-overlay)] backdrop-blur-sm border border-[var(--color-gd-text-border)] rounded-full text-[10px] sm:text-xs md:text-sm font-normal text-[var(--color-gd-text-muted)]"
              >
                {name}
              </span>
            ))}
        </div>

        {/* CTA button */}
        <a
          href="/contacts"
          className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 border border-[var(--color-gd-text-border)] rounded-full text-xs sm:text-sm font-normal text-[var(--color-gd-text-muted)] hover:bg-[var(--color-gd-text-overlay)] transition-all"
        >
          {t('cta')}
        </a>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce-down hidden sm:block">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-gd-text)"
          strokeWidth={1.5}
          className="opacity-60"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </GradientBox>
  )
}

export default Hero
