import { useTranslation } from 'react-i18next'
import { GradientBox, ContactForm } from '@flowtech/shared/components'

const Contacts = () => {
  const { t } = useTranslation('contacts')

  return (
    <GradientBox
      id="contacts"
      direction="br"
      className="py-20 md:py-32"
    >
      <div className="container">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-[0.15em] uppercase text-white mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact info */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-light text-white/50 uppercase tracking-widest mb-1">
                  {t('labels.contactPerson')}
                </p>
                <p className="text-lg font-light text-white">
                  {t('contactPerson')}
                </p>
              </div>

              <div>
                <p className="text-xs font-light text-white/50 uppercase tracking-widest mb-1">
                  {t('labels.phone')}
                </p>
                <a
                  href={`tel:${t('phone')}`}
                  className="text-lg font-light text-white hover:text-white/80 transition-colors"
                >
                  {t('phone')}
                </a>
              </div>

              <div>
                <p className="text-xs font-light text-white/50 uppercase tracking-widest mb-1">
                  {t('labels.email')}
                </p>
                <a
                  href={`mailto:${t('email')}`}
                  className="text-lg font-light text-white hover:text-white/80 transition-colors"
                >
                  {t('email')}
                </a>
              </div>
            </div>

            {/* FASIE section */}
            <div className="pt-8 border-t border-white/20">
              <div className="flex items-start gap-4">
                <img
                  src="/assets/fasie.png"
                  alt="FASIE"
                  className="w-16 h-16 object-contain flex-shrink-0"
                />
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  {t('fasie')}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
            <ContactForm
              className="space-y-4"
              inputClassName="w-full px-4 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
              buttonClassName="w-full py-3 bg-gradient-to-r from-gd70 to-gd100 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            />
          </div>
        </div>
      </div>
    </GradientBox>
  )
}

export default Contacts
