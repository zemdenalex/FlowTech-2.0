import { ThemeProvider } from '@flowtech/shared/theme'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import StatsBar from './components/StatsBar/StatsBar'
import About from './components/About/About'
import Product from './components/Product/Product'
import Schools from './components/Schools/Schools'
import News from './components/News/News'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <main className="min-h-screen bg-bg-primary text-text-primary">
        <Header />
        <Hero />
        <StatsBar />
        <About />
        <Product />
        <Schools />
        <News />
        <Contacts />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App
