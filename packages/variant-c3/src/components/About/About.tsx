import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <section id="about" className="bg-bg-primary py-20 md:py-36 relative overflow-hidden">
      {/* Decorative gradient accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gd70 via-gd100 to-transparent" />

      <div className="px-4 md:px-8 lg:px-12 max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-[0.1em] md:tracking-[0.15em] uppercase text-text-primary mb-10 md:mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          {/* Left: description + image */}
          <div className="space-y-6 md:space-y-8">
            <p
              className="text-sm md:text-lg font-light text-text-secondary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('description') }}
            />
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-gd70/20 to-gd100/20 rounded-2xl blur-xl" />
              <img
                src="/assets/About 1.png"
                alt="ADT"
                className="relative w-full rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Right: Editorial pull-quote */}
          <div className="relative mt-8 lg:mt-0">
            <span className="absolute -top-6 md:-top-8 -left-2 md:-left-4 text-[80px] md:text-[160px] leading-none text-[#C8A55C]/20 font-serif select-none pointer-events-none">
              &ldquo;
            </span>

            <div className="relative border-t-2 border-b-2 border-[#C8A55C]/40 py-8 md:py-12">
              <blockquote className="text-base md:text-xl font-normal text-text-primary leading-relaxed italic mb-6 md:mb-8">
                {t('mishustin.quote')}
              </blockquote>

              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src="/assets/Mishustin.png"
                  alt={t('mishustin.name')}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#C8A55C]/40"
                />
                <div>
                  <p className="font-medium text-text-primary text-xs md:text-sm">
                    {t('mishustin.name')}
                  </p>
                  <p className="text-xs text-text-muted font-normal">
                    {t('mishustin.title')}
                  </p>
                </div>
              </div>
            </div>

            <span className="absolute -bottom-8 md:-bottom-12 -right-1 md:-right-2 text-[80px] md:text-[160px] leading-none text-[#C8A55C]/20 font-serif select-none pointer-events-none">
              &rdquo;
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
