import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Contacts from './components/Contacts/Contacts' 
import Schools from './components/Schools/Schools' 
import Footer from './components/Footer/Footer' 
import About from './components/About/About' 

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Schools />
      <Contacts />
      <Footer />
    </main>
  )
}

export default App