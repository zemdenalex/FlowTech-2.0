import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@flowtech/shared/theme'
import PageLayout from './layouts/PageLayout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import EducationPage from './pages/EducationPage'
import DevelopersPage from './pages/DevelopersPage'
import LaboratoryPage from './pages/LaboratoryPage'
import ProcurementPage from './pages/ProcurementPage'
import ContactsPage from './pages/ContactsPage'

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/laboratory" element={<LaboratoryPage />} />
          <Route path="/procurement" element={<ProcurementPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
