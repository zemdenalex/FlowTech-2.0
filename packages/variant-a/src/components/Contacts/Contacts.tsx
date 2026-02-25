import { useTranslation } from 'react-i18next'
import { SectionHeading, ContactForm } from '@flowtech/shared/components'
import fasie from '/assets/fasie.png'

const Contacts = () => {
  const { t } = useTranslation('contacts')

  return (
    <section id="contacts" className="bg-bg-primary">
      <SectionHeading className="max-md:mt-10 md:mt-20">
        {t('title')}
      </SectionHeading>

      <div className="container max-md:my-10 md:my-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact Form */}
          <div>
            <ContactForm
              className="space-y-4"
              inputClassName="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple transition-colors"
              buttonClassName="w-full bg-gradient-to-r from-gd70 to-gd100 text-white font-medium py-3 rounded-xl hover:opacity-90 transition-opacity"
            />
          </div>

          {/* Right: Contact info + FASIE */}
          <div className="flex flex-col gap-6">
            {/* Contact Info */}
            <div className="rounded-[30px] p-6 md:p-8 bg-gradient-to-br from-gd0 via-gd40 to-gd70">
              <p className="text-white max-md:text-xs md:text-[20px] font-regular font-roboto">
                {t('labels.phone')}: {t('phone')}<br />
                {t('labels.email')}: {t('email')}<br />
                {t('labels.contactPerson')}: {t('contactPerson')}
              </p>
            </div>

            {/* FASIE Block */}
            <div className="rounded-[30px] overflow-hidden flex flex-col bg-gradient-to-br from-gd0 via-gd40 to-gd70 flex-1">
              <div className="flex-1 p-5 flex items-center justify-center">
                <p className="text-white max-md:text-[14px] md:text-[18px] font-regular font-roboto text-justify">
                  {t('fasie')}
                </p>
              </div>
              <div className="flex-1 p-5 flex items-center justify-center">
                <img className="object-contain h-full w-full" src={fasie} alt="FASIE" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
