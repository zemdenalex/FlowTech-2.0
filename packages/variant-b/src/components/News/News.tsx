import { useTranslation } from 'react-i18next'
import { NEWS_ITEMS } from '@flowtech/shared/data/news'

const News = () => {
  const { t } = useTranslation('news')

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <section id="news" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <h2 className="text-3xl md:text-5xl font-thin font-roboto text-text-primary mb-16">
          {t('title')}
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-separator" />

          {/* News items */}
          <div className="space-y-10">
            {NEWS_ITEMS.map((item) => (
              <div key={item.id} className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-[0.625rem] md:left-[1.625rem] top-6 w-3 h-3 rounded-full bg-brand-purple border-2 border-bg-primary" />

                {/* Card */}
                <div className="bg-bg-primary border border-separator rounded-xl p-6 hover:shadow-md transition-shadow">
                  {/* Date */}
                  <p className="text-xs text-text-muted mb-3 tracking-wide uppercase">
                    {formatDate(item.date)}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-text-primary mb-2 leading-snug">
                    {t(item.titleKey)}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm font-light text-text-secondary leading-relaxed">
                    {t(item.summaryKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
