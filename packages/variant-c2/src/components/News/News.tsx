import { useTranslation } from 'react-i18next'
import { NEWS_ITEMS } from '@flowtech/shared/data/news'

const News = () => {
  const { t } = useTranslation('news')

  if (NEWS_ITEMS.length === 0) {
    return (
      <section id="news" className="bg-bg-secondary py-16 md:py-24">
        <div className="px-4 text-center">
          <p className="text-text-muted">{t('noNews')}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="news" className="bg-bg-secondary py-16 md:py-24">
      <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] md:tracking-[0.15em] uppercase text-text-primary mb-10 md:mb-16">
          {t('title')}
        </h2>

        {/* Uniform grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-lg overflow-hidden border-t-2 border-[#2EC4B6] cursor-pointer"
            >
              <div className="aspect-[16/10] bg-bg-accent relative">
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <time className="text-[10px] md:text-xs font-normal text-white/70 uppercase tracking-widest mb-1 block">
                  {item.date}
                </time>
                <h3 className="text-sm md:text-lg font-light tracking-wider text-white mb-1 md:mb-2">
                  {t(item.titleKey)}
                </h3>
                <p className="text-xs md:text-sm font-normal text-white/80 leading-relaxed line-clamp-2">
                  {t(item.summaryKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
