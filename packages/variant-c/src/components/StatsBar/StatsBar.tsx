import { useTranslation } from 'react-i18next'
import { GradientBox } from '@flowtech/shared/components'

const StatsBar = () => {
  const { t } = useTranslation('common')

  const stats = [
    { number: '68+', label: t('stats.hours') },
    { number: '1 000 000', label: t('stats.specialists') },
    { number: '3', label: t('stats.modifications') },
  ]

  return (
    <GradientBox direction="tl" className="py-10 md:py-16">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center px-2 md:px-4"
            >
              <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-thin text-white mb-1 md:mb-3 tracking-wider">
                {stat.number}
              </div>
              <div className="text-[9px] sm:text-xs md:text-base font-light text-white/70 uppercase tracking-wider leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </GradientBox>
  )
}

export default StatsBar
