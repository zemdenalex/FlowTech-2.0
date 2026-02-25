import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@flowtech/shared/components'
import Schools1 from '/assets/Schools1.png'
import Schools2 from '/assets/Schools2.png'

const Schools = () => {
  const { t } = useTranslation('schools')

  return (
    <section id="schools" className="bg-bg-primary max-md:mt-10 md:mt-20">
      {/* Educational - Schools, Quantoriums, CMITs */}
      <div id="schools-1" className="md:mb-40">
        <SectionHeading align="left" className="w-[90%] md:w-3/5">
          {t('educational.title')}
        </SectionHeading>
        <div className="container">
          <div className="mt-10 md:mt-20 md:grid md:grid-cols-2">
            <div className="md:ml-20">
              <h4 className="max-md:text-[20px] md:text-3xl text-center">
                {t('educational.subtitle')}
              </h4>
              <div className="border-[7px] border-separator pl-10 pr-5 rounded-2xl mt-5 py-3">
                <ol className="list-disc max-md:text-[12px] md:text-lg">
                  <li>{t('educational.features.1')}</li>
                  <li>{t('educational.features.2')}</li>
                  <li>{t('educational.features.3')}</li>
                  <li>{t('educational.features.4')}</li>
                  <li>{t('educational.features.5')}</li>
                  <li>{t('educational.features.6')}</li>
                </ol>
              </div>
            </div>
            <div className="flex justify-center pl-20 items-center">
              <img className="hidden md:block object-scale-down" src={Schools1} alt={t('educational.title')} />
            </div>
          </div>
        </div>
      </div>

      {/* Research - Universities, SPO */}
      <div id="schools-2" className="max-md:mt-10 md:mt-20 flex flex-col md:mb-40">
        <div className="w-full">
          <SectionHeading align="right" className="w-[90%] md:w-3/5">
            {t('research.title')}
          </SectionHeading>
        </div>
        <div className="container">
          <div className="mt-10 md:mt-20 md:grid md:grid-cols-2">
            <div className="flex max-lg:mt-5 justify-center pr-20 items-center">
              <img className="hidden md:block object-scale-down" src={Schools2} alt={t('research.title')} />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="max-md:text-[20px] md:text-3xl text-center">
                {t('research.subtitle')}
              </h4>
              <div className="border-[7px] border-separator pl-10 pr-5 rounded-2xl mt-5 py-3">
                <ol className="list-disc max-md:text-[12px] md:text-lg">
                  <span className="font-medium">{t('research.capabilities')}</span>
                  <li>{t('research.features.1')}</li>
                  <li>{t('research.features.2')}</li>
                  <span className="font-medium">{t('research.specifics')}</span>
                  <li>{t('research.specificsFeatures.1')}</li>
                  <li>{t('research.specificsFeatures.2')}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development - Small KBs, UAS developers */}
      <div id="schools-3" className="md:mb-40">
        <SectionHeading align="left" className="mt-10 md:mt-20 w-[90%] md:w-3/5">
          {t('development.title')}
        </SectionHeading>
        <div className="container">
          <div className="mt-10 md:mt-20 md:grid md:grid-cols-2">
            <div className="md:ml-20">
              <h4 className="max-md:text-[20px] md:text-3xl text-center">
                {t('development.subtitle')}
              </h4>
              <div className="border-[7px] border-separator pl-10 pr-5 rounded-2xl mt-5 py-3">
                <ol className="list-disc max-md:text-[12px] md:text-lg">
                  <li>{t('development.features.1')}</li>
                  <li>{t('development.features.2')}</li>
                  <li>{t('development.features.3')}</li>
                  <li>{t('development.features.4')}</li>
                  <li>{t('development.features.5')}</li>
                  <li>{t('development.features.6')}</li>
                </ol>
              </div>
            </div>
            <div className="flex max-lg:mt-5 justify-center pl-20 items-center">
              <img className="hidden md:block object-scale-down" src={Schools1} alt={t('development.title')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schools
