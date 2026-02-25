import { useTranslation } from 'react-i18next'
import { SectionHeading, GradientBox } from '@flowtech/shared/components'
import About1 from '/assets/About 1.png'
import Mishustin from '/assets/Mishustin.png'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <section id="about" className="bg-bg-primary pt-10 flex flex-col">
      {/* About ADT */}
      <div>
        <SectionHeading>{t('title')}</SectionHeading>
        <div className="lg:grid container text-text-primary lg:grid-cols-2 my-10">
          <p
            className="my-5 mt-10 max-md:text-sm text-[20px]"
            dangerouslySetInnerHTML={{ __html: t('description') }}
          />
          <div className="flex justify-center">
            <div className="md:mx-[10%]">
              <img className="rounded-3xl object-scale-down self-center" src={About1} alt={t('title')} />
            </div>
          </div>
        </div>
      </div>

      {/* Mishustin Quote */}
      <div className="md:flex md:justify-end md:items-end">
        <div className="relative md:h-auto md:w-auto">
          <div className="bg-white text-brand-main max-md:float-right absolute max-md:top-[-30px] w-[90%] md:w-4/5 right-0 z-40 max-md:px-2 md:px-5 pb-2 rounded-bl-3xl">
            <h2 className="max-md:text-lg font-roboto font-medium text-[50px] text-brand-main max-md:pl-5 md:px-4 pt-2">
              {t('mishustin.name')}
            </h2>
            <p className="text-right max-md:text-sm md:pt-1 md:text-[20px]">{t('mishustin.title')}</p>
          </div>
          <div>
            <GradientBox
              direction="tr"
              className="md:grid pt-10 max-md:mt-10 max-md:w-full md:rounded-l-[40px] z-30 text-text-inverse md:grid-cols-[600px_auto] md:my-10"
            >
              <div className="pt-1 md:pt-16">
                <p className="my-auto text-roboto max-md:mt-10 max-md:mx-[10%] md:ml-[30%] md:w-[400px] max-md:text-sm md:text-[20px]">
                  &ldquo;{t('mishustin.quote')}&rdquo;
                </p>
              </div>
              <div className="md:mt-10 md:mr-32">
                <img className="md:h-[500px] max-md:pt-5 max-md:pl-16 object-scale-down self-center" src={Mishustin} alt={t('mishustin.name')} />
              </div>
            </GradientBox>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
