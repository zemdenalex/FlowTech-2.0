import { useTranslation } from 'react-i18next'
import { GradientBox } from '@flowtech/shared/components'

const Hero = () => {
  const { t } = useTranslation('hero')

  const features = [
    t('features.1'),
    t('features.2'),
    t('features.3'),
    t('features.4'),
  ]

  return (
    <GradientBox
      id="hero"
      direction="br"
      className="min-h-screen flex flex-col items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Main title */}
        <h1 className="tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-thin uppercase text-white mb-4 md:mb-6">
          FlowTech
        </h1>

        {/* Subtitle line */}
        <div className="w-16 md:w-24 h-px bg-white/30 mx-auto mb-6 md:mb-8" />

        <p className="text-sm sm:text-base md:text-xl font-light text-white/80 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
          {t('title')}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-light text-white/90"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce-down">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
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
