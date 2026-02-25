import { ThemeProvider } from '@flowtech/shared/theme'
import { LanguageSwitcher, ThemeToggle } from '@flowtech/shared/components'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation('common')

  return (
    <ThemeProvider defaultTheme="light">
      <main className='min-h-screen bg-bg-primary text-text-primary'>
        <div className='container py-20 text-center'>
          <div className='flex justify-center gap-4 mb-8'>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <h1 className='text-5xl font-roboto font-thin mb-4'>FlowTech</h1>
          <p className='text-text-secondary text-lg font-light'>
            {t('nav.about')} &middot; {t('nav.product')} &middot; {t('nav.schools')} &middot; {t('nav.news')} &middot; {t('nav.contacts')}
          </p>
          <p className='mt-12 text-text-muted'>Variant B — scaffold ready for development</p>
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App
