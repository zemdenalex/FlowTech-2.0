import { useTranslation } from 'react-i18next'
import { ContactForm } from '@flowtech/shared/components'

const Contacts = () => {
  const { t } = useTranslation('contacts')

  return (
    <section id="contacts" className="py-16 md:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-thin font-roboto text-text-primary mb-10 md:mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact form */}
          <div>
            <ContactForm
              className="space-y-1"
              inputClassName="w-full px-4 py-3 border border-separator rounded-lg bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple transition-colors text-sm md:text-base"
              buttonClassName="w-full py-3 bg-brand-purple text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm md:text-base"
            />
          </div>

          {/* Contact info */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="py-3 md:py-4 border-b border-separator">
                <p className="text-xs md:text-sm text-text-muted mb-1">{t('labels.contactPerson')}</p>
                <p className="text-base md:text-lg font-light text-text-primary">{t('contactPerson')}</p>
              </div>
              <div className="py-3 md:py-4 border-b border-separator">
                <p className="text-xs md:text-sm text-text-muted mb-1">{t('labels.phone')}</p>
                <a
                  href={`tel:${t('phone')}`}
                  className="text-base md:text-lg font-light text-text-primary hover:text-brand-purple transition-colors"
                >
                  {t('phone')}
                </a>
              </div>
              <div className="py-3 md:py-4 border-b border-separator">
                <p className="text-xs md:text-sm text-text-muted mb-1">{t('labels.email')}</p>
                <a
                  href={`mailto:${t('email')}`}
                  className="text-base md:text-lg font-light text-text-primary hover:text-brand-purple transition-colors break-all"
                >
                  {t('email')}
                </a>
              </div>
            </div>

            {/* FASIE */}
            <div className="flex items-start gap-3 md:gap-4 pt-4">
              <img
                src="/assets/fasie.png"
                alt="FASIE"
                className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
              />
              <p className="text-xs font-light text-text-muted leading-relaxed">
                {t('fasie')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
