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
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] md:tracking-[0.15em] uppercase text-[var(--color-gd-text)] mb-10 md:mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Left: Contact info */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-5 md:space-y-6">
              <div>
                <p className="text-[10px] md:text-xs font-normal text-[var(--color-gd-text-muted)] uppercase tracking-widest mb-1">
                  {t('labels.contactPerson')}
                </p>
                <p className="text-base md:text-lg font-normal text-[var(--color-gd-text)]">
                  {t('contactPerson')}
                </p>
              </div>

              <div>
                <p className="text-[10px] md:text-xs font-normal text-[var(--color-gd-text-muted)] uppercase tracking-widest mb-1">
                  {t('labels.phone')}
                </p>
                <a
                  href={`tel:${t('phone')}`}
                  className="text-base md:text-lg font-normal text-[var(--color-gd-text)] hover:opacity-80 transition-opacity"
                >
                  {t('phone')}
                </a>
              </div>

              <div>
                <p className="text-[10px] md:text-xs font-normal text-[var(--color-gd-text-muted)] uppercase tracking-widest mb-1">
                  {t('labels.email')}
                </p>
                <a
                  href={`mailto:${t('email')}`}
                  className="text-base md:text-lg font-normal text-[var(--color-gd-text)] hover:opacity-80 transition-opacity break-all"
                >
                  {t('email')}
                </a>
              </div>
            </div>

            {/* FASIE section */}
            <div className="pt-6 md:pt-8 border-t border-[var(--color-gd-text-border)]">
              <div className="flex items-start gap-3 md:gap-4">
                <img
                  src="/assets/fasie.png"
                  alt="FASIE"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
                />
                <p className="text-xs md:text-sm font-normal text-[var(--color-gd-text-muted)] leading-relaxed">
                  {t('fasie')}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-[var(--color-gd-text-overlay)] backdrop-blur-sm border border-[var(--color-gd-text-border)] rounded-2xl p-5 md:p-10">
            <ContactForm
              className="space-y-3 md:space-y-4"
              inputClassName="w-full px-3 md:px-4 py-2.5 md:py-3 bg-[var(--color-gd-text-overlay)] backdrop-blur border border-[var(--color-gd-text-border)] rounded-lg text-[var(--color-gd-text)] text-sm md:text-base placeholder:text-[var(--color-gd-text-subtle)] focus:outline-none focus:border-[var(--color-gd-text-muted)] transition-colors"
              buttonClassName="w-full py-2.5 md:py-3 bg-gradient-to-r from-accent-from to-accent-to text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm md:text-base"
            />
          </div>
        </div>
      </div>
    </GradientBox>
  )
}

export default Contacts
