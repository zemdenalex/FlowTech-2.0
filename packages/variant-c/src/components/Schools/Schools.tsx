import { useTranslation } from 'react-i18next'
import { GradientBox } from '@flowtech/shared/components'

interface SchoolSection {
  titleKey: string
  subtitleKey: string
  featuresPrefix: string
  featureCount: number
  direction: 'br' | 'tr' | 'bl'
  extraSections?: {
    labelKey: string
    prefix: string
    count: number
  }[]
}

const SCHOOL_SECTIONS: SchoolSection[] = [
  {
    titleKey: 'educational.title',
    subtitleKey: 'educational.subtitle',
    featuresPrefix: 'educational.features',
    featureCount: 6,
    direction: 'br',
  },
  {
    titleKey: 'research.title',
    subtitleKey: 'research.subtitle',
    featuresPrefix: 'research.features',
    featureCount: 2,
    direction: 'tr',
    extraSections: [
      {
        labelKey: 'research.specifics',
        prefix: 'research.specificsFeatures',
        count: 2,
      },
    ],
  },
  {
    titleKey: 'development.title',
    subtitleKey: 'development.subtitle',
    featuresPrefix: 'development.features',
    featureCount: 6,
    direction: 'bl',
  },
]

const Schools = () => {
  const { t } = useTranslation('schools')

  return (
    <section id="schools" className="py-20 md:py-32 bg-bg-primary">
      <div className="space-y-12 md:space-y-20">
        {SCHOOL_SECTIONS.map((section, idx) => (
          <GradientBox
            key={idx}
            direction={section.direction}
            className="py-16 md:py-24"
          >
            <div className="container">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-[0.1em] uppercase text-white mb-4">
                {t(section.titleKey)}
              </h2>

              <p className="text-base md:text-lg font-light text-white/70 mb-10 tracking-wide">
                {t(section.subtitleKey)}
              </p>

              {/* Features list */}
              <ul className="space-y-4 max-w-3xl">
                {Array.from({ length: section.featureCount }, (_, i) => (
                  <li key={i} className="flex items-start gap-4">
                    {/* Gradient bullet */}
                    <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-white/80 to-white/40" />
                    <span className="text-base font-light text-white/90 leading-relaxed">
                      {t(`${section.featuresPrefix}.${i + 1}`)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Extra subsections (for research type) */}
              {section.extraSections?.map((extra, eIdx) => (
                <div key={eIdx} className="mt-10">
                  <h3 className="text-xl md:text-2xl font-thin uppercase text-white/90 mb-4 tracking-wider">
                    {t(extra.labelKey)}
                  </h3>
                  <ul className="space-y-3 max-w-3xl">
                    {Array.from({ length: extra.count }, (_, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-white/80 to-white/40" />
                        <span className="text-base font-light text-white/90 leading-relaxed">
                          {t(`${extra.prefix}.${i + 1}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GradientBox>
        ))}
      </div>
    </section>
  )
}

export default Schools
