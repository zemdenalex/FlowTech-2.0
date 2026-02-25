import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type Tab = 'educational' | 'research' | 'development'

const Schools = () => {
  const { t } = useTranslation('schools')
  const [activeTab, setActiveTab] = useState<Tab>('educational')

  const tabs: { key: Tab; title: string }[] = [
    { key: 'educational', title: t('educational.title') },
    { key: 'research', title: t('research.title') },
    { key: 'development', title: t('development.title') },
  ]

  const renderTabContent = (tab: Tab) => {
    switch (tab) {
      case 'educational':
        return (
          <div className="space-y-6">
            <p className="text-lg font-light text-text-secondary">
              {t('educational.subtitle')}
            </p>
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-2.5 flex-shrink-0" />
                  <span className="text-base font-light text-text-secondary leading-relaxed">
                    {t(`educational.features.${i}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )

      case 'research':
        return (
          <div className="space-y-6">
            <p className="text-lg font-light text-text-secondary">
              {t('research.subtitle')}
            </p>
            <div>
              <p className="text-sm font-medium text-text-primary mb-3">
                {t('research.capabilities')}
              </p>
              <ul className="space-y-3 mb-6">
                {[1, 2].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-2.5 flex-shrink-0" />
                    <span className="text-base font-light text-text-secondary leading-relaxed">
                      {t(`research.features.${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary mb-3">
                {t('research.specifics')}
              </p>
              <ul className="space-y-3">
                {[1, 2].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-2.5 flex-shrink-0" />
                    <span className="text-base font-light text-text-secondary leading-relaxed">
                      {t(`research.specificsFeatures.${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )

      case 'development':
        return (
          <div className="space-y-6">
            <p className="text-lg font-light text-text-secondary">
              {t('development.subtitle')}
            </p>
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-2.5 flex-shrink-0" />
                  <span className="text-base font-light text-text-secondary leading-relaxed">
                    {t(`development.features.${i}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )
    }
  }

  return (
    <section id="schools" className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tab navigation */}
        <div className="border-b border-separator mb-12">
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-4 text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.key
                    ? 'border-b-2 border-brand-purple text-text-primary font-medium'
                    : 'text-text-muted hover:text-text-secondary'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>{renderTabContent(activeTab)}</div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={activeTab === 'educational' ? '/assets/Schools1.png' : '/assets/Schools2.png'}
              alt={tabs.find((tab) => tab.key === activeTab)?.title}
              className="rounded-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schools
