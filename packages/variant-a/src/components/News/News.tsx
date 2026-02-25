import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@flowtech/shared/components'
import { NEWS_ITEMS } from '@flowtech/shared/data/news'

const formatDate = (dateStr: string, locale: string) => {
  const date = new Date(dateStr)
  const localeMap: Record<string, string> = { ru: 'ru-RU', en: 'en-US', zh: 'zh-CN' }
  return date.toLocaleDateString(localeMap[locale] || 'ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const News = () => {
  const { t, i18n } = useTranslation('news')

  return (
    <section id="news" className="bg-bg-primary py-16 md:py-24">
      <SectionHeading>{t('title')}</SectionHeading>

      <div className="container mt-10 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-gd0 via-gd40 via-40% via-gd70 via-70% to-gd100 p-6 md:p-8 flex flex-col"
            >
              <time className="text-white/60 text-sm mb-2">
                {formatDate(item.date, i18n.language)}
              </time>
              <h3 className="text-white text-lg md:text-xl font-medium mb-3">
                {t(item.titleKey)}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed flex-1">
                {t(item.summaryKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
