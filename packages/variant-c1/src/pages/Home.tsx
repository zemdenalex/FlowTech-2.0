import Hero from '../components/Hero/Hero'
import PartnersBar from '../components/PartnersBar/PartnersBar'
import AboutPreview from '../components/previews/AboutPreview'
import ProductPreview from '../components/previews/ProductPreview'
import EducationPreview from '../components/previews/EducationPreview'
import DevelopersPreview from '../components/previews/DevelopersPreview'
import LaboratoryPreview from '../components/previews/LaboratoryPreview'
import ProcurementPreview from '../components/previews/ProcurementPreview'
// import News from '../components/News/News'
import Contacts from '../components/Contacts/Contacts'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProductPreview />
      <EducationPreview />
      <DevelopersPreview />
      <LaboratoryPreview />
      <ProcurementPreview />
      {/* <News /> — hidden for now */}
      <Contacts />
    </>
  )
}

export default Home
