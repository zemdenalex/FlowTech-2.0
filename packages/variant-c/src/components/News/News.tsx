import { useTranslation } from 'react-i18next'
import { NEWS_ITEMS } from '@flowtech/shared/data/news'

const News = () => {
  const { t } = useTranslation('news')

  if (NEWS_ITEMS.length === 0) {
    return (
      <section id="news" className="bg-bg-secondary py-20 md:py-32">
        <div className="container text-center">
          <p className="text-text-muted">{t('noNews')}</p>
        </div>
      </section>
    )
  }

  const [featured, ...rest] = NEWS_ITEMS

  return (
    <section id="news" className="bg-bg-secondary py-20 md:py-32">
      <div className="container">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-[0.15em] uppercase text-text-primary mb-16">
          {t('title')}
        </h2>

        {/* Magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured item — spans full width on mobile, 2 cols on desktop */}
          <div className="md:col-span-2 group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
            {/* Image bg */}
            <div className="aspect-[16/7] md:aspect-[21/9] bg-bg-accent relative">
              <img
                src={featured.image}
                alt={t(featured.titleKey)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Glass-morphism content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <time className="text-xs font-light text-white/60 uppercase tracking-widest mb-2 block">
                  {featured.date}
                </time>
                <h3 className="text-xl md:text-3xl font-thin tracking-wider text-white mb-3">
                  {t(featured.titleKey)}
                </h3>
                <p className="text-sm md:text-base font-light text-white/80 leading-relaxed line-clamp-2">
                  {t(featured.summaryKey)}
                </p>
                <span className="inline-block mt-4 text-sm font-light text-white/70 border-b border-white/30 hover:text-white hover:border-white transition-colors">
                  {t('readMore')}
                </span>
              </div>
            </div>
          </div>

          {/* Remaining items */}
          {rest.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
            >
              {/* Image bg */}
              <div className="aspect-[16/10] bg-bg-accent relative">
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Glass-morphism content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <time className="text-xs font-light text-white/60 uppercase tracking-widest mb-1 block">
                    {item.date}
                  </time>
                  <h3 className="text-lg md:text-xl font-thin tracking-wider text-white mb-2">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-sm font-light text-white/70 leading-relaxed line-clamp-2">
                    {t(item.summaryKey)}
                  </p>
                  <span className="inline-block mt-3 text-xs font-light text-white/60 border-b border-white/20 hover:text-white hover:border-white transition-colors">
                    {t('readMore')}
                  </span>
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
