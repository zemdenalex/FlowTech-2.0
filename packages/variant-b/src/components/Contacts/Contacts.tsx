import { useTranslation } from 'react-i18next'
import { ContactForm } from '@flowtech/shared/components'

const Contacts = () => {
  const { t } = useTranslation('contacts')

  return (
    <section id="contacts" className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <h2 className="text-3xl md:text-5xl font-thin font-roboto text-text-primary mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact form */}
          <div>
            <ContactForm
              className="space-y-1"
              inputClassName="w-full px-4 py-3 border border-separator rounded-lg bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple transition-colors"
              buttonClassName="w-full py-3 bg-brand-purple text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            />
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="py-4 border-b border-separator">
                <p className="text-sm text-text-muted mb-1">{t('labels.contactPerson')}</p>
                <p className="text-lg font-light text-text-primary">{t('contactPerson')}</p>
              </div>
              <div className="py-4 border-b border-separator">
                <p className="text-sm text-text-muted mb-1">{t('labels.phone')}</p>
                <a
                  href={`tel:${t('phone')}`}
                  className="text-lg font-light text-text-primary hover:text-brand-purple transition-colors"
                >
                  {t('phone')}
                </a>
              </div>
              <div className="py-4 border-b border-separator">
                <p className="text-sm text-text-muted mb-1">{t('labels.email')}</p>
                <a
                  href={`mailto:${t('email')}`}
                  className="text-lg font-light text-text-primary hover:text-brand-purple transition-colors"
                >
                  {t('email')}
                </a>
              </div>
            </div>

            {/* FASIE */}
            <div className="flex items-start gap-4 pt-4">
              <img
                src="/assets/fasie.png"
                alt="FASIE"
                className="w-16 h-16 object-contain flex-shrink-0"
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
