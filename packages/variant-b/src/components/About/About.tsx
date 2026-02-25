import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <section id="about" className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <h2 className="text-3xl md:text-5xl font-thin font-roboto text-text-primary mb-16">
          {t('title')}
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <p
              className="text-lg font-light text-text-secondary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('description') }}
            />

            {/* Mishustin quote */}
            <blockquote className="border-l-4 border-brand-purple pl-6 py-2">
              <p className="text-base font-light text-text-secondary leading-relaxed italic">
                {t('mishustin.quote')}
              </p>
              <footer className="mt-4">
                <p className="text-sm font-medium text-text-primary">
                  {t('mishustin.name')}
                </p>
                <p className="text-sm text-text-muted">
                  {t('mishustin.title')}
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/About 1.png"
              alt={t('title')}
              className="rounded-2xl max-w-full h-auto shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
