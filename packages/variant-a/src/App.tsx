import { ThemeProvider } from '@flowtech/shared/theme'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Schools from './components/Schools/Schools'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <main className='bg-main text-white'>
        <Header />
        <Hero />
        <About />
        <Schools />
        <Contacts />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App
