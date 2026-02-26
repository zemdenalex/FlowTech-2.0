import { useTranslation } from 'react-i18next'
import { GradientBox, ContactForm } from '@flowtech/shared/components'

const Contacts = () => {
  const { t } = useTranslation('contacts')

  return (
    <GradientBox
      id="contacts"
      direction="br"
      className="py-16 md:py-32"
    >
      <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-thin tracking-[0.1em] md:tracking-[0.15em] uppercase text-white mb-10 md:mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Left: Contact info */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-5 md:space-y-6">
              <div>
                <p className="text-[10px] md:text-xs font-light text-white/50 uppercase tracking-widest mb-1">
                  {t('labels.contactPerson')}
                </p>
                <p className="text-base md:text-lg font-light text-white">
                  {t('contactPerson')}
                </p>
              </div>

              <div>
                <p className="text-[10px] md:text-xs font-light text-white/50 uppercase tracking-widest mb-1">
                  {t('labels.phone')}
                </p>
                <a
                  href={`tel:${t('phone')}`}
                  className="text-base md:text-lg font-light text-white hover:text-white/80 transition-colors"
                >
                  {t('phone')}
                </a>
              </div>

              <div>
                <p className="text-[10px] md:text-xs font-light text-white/50 uppercase tracking-widest mb-1">
                  {t('labels.email')}
                </p>
                <a
                  href={`mailto:${t('email')}`}
                  className="text-base md:text-lg font-light text-white hover:text-white/80 transition-colors break-all"
                >
                  {t('email')}
                </a>
              </div>
            </div>

            {/* FASIE section */}
            <div className="pt-6 md:pt-8 border-t border-white/20">
              <div className="flex items-start gap-3 md:gap-4">
                <img
                  src="/assets/fasie.png"
                  alt="FASIE"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
                />
                <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed">
                  {t('fasie')}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-10">
            <ContactForm
              className="space-y-3 md:space-y-4"
              inputClassName="w-full px-3 md:px-4 py-2.5 md:py-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg text-white text-sm md:text-base placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
              buttonClassName="w-full py-2.5 md:py-3 bg-gradient-to-r from-gd70 to-gd100 text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm md:text-base"
            />
          </div>
        </div>
      </div>
    </GradientBox>
  )
}

export default Contacts
