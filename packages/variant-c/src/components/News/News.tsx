import { useTranslation } from 'react-i18next'
import { NEWS_ITEMS } from '@flowtech/shared/data/news'

const News = () => {
  const { t } = useTranslation('news')

  if (NEWS_ITEMS.length === 0) {
    return (
      <section id="news" className="bg-bg-secondary py-16 md:py-32">
        <div className="px-4 text-center">
          <p className="text-text-muted">{t('noNews')}</p>
        </div>
      </section>
    )
  }

  const [featured, ...rest] = NEWS_ITEMS

  return (
    <section id="news" className="bg-bg-secondary py-16 md:py-32">
      <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-thin tracking-[0.1em] md:tracking-[0.15em] uppercase text-text-primary mb-10 md:mb-16">
          {t('title')}
        </h2>

        {/* Magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Featured item */}
          <div className="md:col-span-2 group relative rounded-2xl overflow-hidden hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
            <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] bg-bg-accent relative">
              <img
                src={featured.image}
                alt={t(featured.titleKey)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20">
                <time className="text-[10px] md:text-xs font-light text-white/60 uppercase tracking-widest mb-1 md:mb-2 block">
                  {featured.date}
                </time>
                <h3 className="text-base sm:text-lg md:text-3xl font-thin tracking-wider text-white mb-2 md:mb-3">
                  {t(featured.titleKey)}
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-light text-white/80 leading-relaxed line-clamp-2">
                  {t(featured.summaryKey)}
                </p>
                <span className="inline-block mt-3 md:mt-4 text-xs md:text-sm font-light text-white/70 border-b border-white/30 hover:text-white hover:border-white transition-colors">
                  {t('readMore')}
                </span>
              </div>
            </div>
          </div>

          {/* Remaining items */}
          {rest.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] sm:aspect-[16/10] bg-bg-accent relative">
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

              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20">
                  <time className="text-[10px] md:text-xs font-light text-white/60 uppercase tracking-widest mb-1 block">
                    {item.date}
                  </time>
                  <h3 className="text-sm sm:text-base md:text-xl font-thin tracking-wider text-white mb-1 md:mb-2">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed line-clamp-2">
                    {t(item.summaryKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
