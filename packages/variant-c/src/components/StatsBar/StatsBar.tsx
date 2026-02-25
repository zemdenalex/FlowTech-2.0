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
    <GradientBox direction="tl" className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-3 tracking-wider">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-light text-white/70 uppercase tracking-widest">
                {stat.label}
              </div>
              {i < stats.length - 1 && (
                <div className="md:hidden w-16 h-px bg-white/20 mx-auto mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </GradientBox>
  )
}

export default StatsBar
