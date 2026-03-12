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
    <section id="news" className="bg-bg-secondary py-20 md:py-36">
      <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-[0.1em] md:tracking-[0.15em] uppercase text-text-primary mb-10 md:mb-16">
          {t('title')}
        </h2>

        {/* Editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {/* Featured item — large */}
          <div className="lg:col-span-2 group relative rounded-sm overflow-hidden cursor-pointer hover:translate-y-[-2px] transition-transform duration-500">
            <div className="aspect-[4/3] md:aspect-[16/9] bg-bg-accent relative">
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

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
              <time className="text-[10px] md:text-xs font-normal text-white/70 uppercase tracking-widest mb-2 block">
                {featured.date}
              </time>
              <h3 className="text-lg md:text-3xl font-medium tracking-wider text-white mb-2 md:mb-3">
                {t(featured.titleKey)}
              </h3>
              <p className="text-sm md:text-base font-normal text-white/85 leading-relaxed line-clamp-2">
                {t(featured.summaryKey)}
              </p>
            </div>
          </div>

          {/* Sidebar — numbered list */}
          <div className="flex flex-col gap-4 md:gap-6">
            {rest.map((item, idx) => (
              <div
                key={item.id}
                className="group flex gap-4 items-start cursor-pointer hover:translate-y-[-2px] transition-transform duration-500 border-b border-[#C8A55C]/20 pb-4 md:pb-6 last:border-b-0"
              >
                <span className="text-3xl md:text-4xl font-extralight text-[#C8A55C]/40 leading-none flex-shrink-0 mt-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <time className="text-[10px] md:text-xs font-normal text-text-muted uppercase tracking-widest mb-1 block">
                    {item.date}
                  </time>
                  <h3 className="text-sm md:text-base font-medium text-text-primary mb-1 group-hover:text-[#C8A55C] transition-colors duration-500">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-xs md:text-sm font-normal text-text-secondary leading-relaxed line-clamp-2">
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
