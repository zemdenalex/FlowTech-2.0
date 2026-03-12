import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ContactForm } from '@flowtech/shared/components'

const ContactsPage = () => {
  const { t } = useTranslation('contacts')
  const { t: tc } = useTranslation('common')

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Back link */}
        <Link
          to="/"
          className="text-sm font-normal text-text-muted hover:text-text-primary transition-colors mb-8 inline-block"
        >
          &larr; {tc('backToHome')}
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] md:tracking-[0.15em] uppercase text-text-primary mb-10 md:mb-16">
          {t('title')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Left: Contact info */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-5 md:space-y-6">
              <div>
                <p className="text-[10px] md:text-xs font-normal text-text-muted uppercase tracking-widest mb-1">
                  {t('labels.contactPerson')}
                </p>
                <p className="text-base md:text-lg font-normal text-text-primary">
                  {t('contactPerson')}
                </p>
              </div>

              <div>
                <p className="text-[10px] md:text-xs font-normal text-text-muted uppercase tracking-widest mb-1">
                  {t('labels.phone')}
                </p>
                <a
                  href={`tel:${t('phone')}`}
                  className="text-base md:text-lg font-normal text-text-primary hover:text-brand-purple transition-colors"
                >
                  {t('phone')}
                </a>
              </div>

              <div>
                <p className="text-[10px] md:text-xs font-normal text-text-muted uppercase tracking-widest mb-1">
                  {t('labels.email')}
                </p>
                <a
                  href={`mailto:${t('email')}`}
                  className="text-base md:text-lg font-normal text-text-primary hover:text-brand-purple transition-colors break-all"
                >
                  {t('email')}
                </a>
              </div>
            </div>

            {/* FASIE section */}
            <div className="pt-6 md:pt-8 border-t border-separator">
              <div className="flex items-start gap-3 md:gap-4">
                <img
                  src="/assets/fasie.png"
                  alt="FASIE"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
                />
                <p className="text-xs md:text-sm font-normal text-text-muted leading-relaxed">
                  {t('fasie')}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-bg-secondary border border-separator rounded-2xl p-5 md:p-10">
            <ContactForm
              className="space-y-3 md:space-y-4"
              inputClassName="w-full px-3 md:px-4 py-2.5 md:py-3 bg-bg-primary border border-separator rounded-lg text-text-primary text-sm md:text-base placeholder:text-text-muted focus:outline-none focus:border-brand-purple/40 transition-colors"
              buttonClassName="w-full py-2.5 md:py-3 bg-gradient-to-r from-accent-from to-accent-to text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm md:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage
