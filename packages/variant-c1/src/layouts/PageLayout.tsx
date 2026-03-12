import { useEffect, lazy, Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

const isV3 = import.meta.env.BASE_URL.includes('v3')
const FlowAnimation = isV3 ? lazy(() => import('../components/FlowAnimation/FlowAnimation')) : null

const PageLayout = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary relative">
      <Header />
      <div className="relative">
        <Outlet />
      </div>
      <Footer />
      {FlowAnimation && <Suspense fallback={null}><FlowAnimation /></Suspense>}
      <ScrollToTop />
    </main>
  )
}

export default PageLayout
