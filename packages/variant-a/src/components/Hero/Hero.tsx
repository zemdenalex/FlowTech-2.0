import { useTranslation } from 'react-i18next'
import ADT from '/assets/ADT.png'

const Hero = () => {
  const { t } = useTranslation('hero')

  return (
    <section id="hero" className="w-full text-text-inverse pt-5 pb-10 bg-gradient-to-br from-gd0 via-gd40 via-40% via-gd70 via-70% to-gd100">
      <div className="container max-md:flex max-md:flex-col max-md:justify-center">
        <h1 className="font-medium font-roboto lg:text-[70px]">{t('title')}</h1>
        <div className="lg:grid grid-cols-2">
          <div>
            <ol className="list-disc font-roboto lg:text-[25px] font-light my-5">
              <li>{t('features.1')}</li>
              <li>{t('features.2')}</li>
              <li>{t('features.3')}</li>
              <li>{t('features.4')}</li>
            </ol>
          </div>
          <div className="flex justify-center">
            <div className="md:mt-[-20px]">
              <img src={ADT} alt="FlowTech ADT" />
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="border-[7px] mt-5 md:pb-3 border-brand-border rounded-3xl">
          <div className="flex justify-center max-md:px-4 my-3">
            <h3 className="text-2xl text-center pb-3">{t('categoryPrompt')}</h3>
          </div>
          <div className="flex text-xl max-md:flex-col max-md:items-center h-auto flex-row justify-around px-3 mb-3 text-text-inverse">
            <a href="#schools-1">
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors max-md:h-[50px] max-md:rounded-xl max-md:text-sm max-md:w-[200px] rounded-2xl text-wrap px-3 text-center w-[250px] h-[70px]">
                {t('categories.schools')}
              </button>
            </a>
            <a href="#schools-2">
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors max-md:h-[50px] max-md:rounded-xl max-md:text-sm max-md:mt-3 max-md:w-[200px] rounded-2xl text-wrap px-3 text-center w-[250px] h-[70px]">
                {t('categories.universities')}
              </button>
            </a>
            <a href="#schools-3">
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors max-md:h-[50px] max-md:rounded-xl max-md:text-sm max-md:mt-3 max-md:w-[200px] rounded-2xl text-wrap px-3 text-center w-[250px] h-[70px]">
                {t('categories.developers')}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
