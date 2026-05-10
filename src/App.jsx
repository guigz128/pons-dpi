import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const HomeTest = lazy(() => import('./pages/HomeTest'))
const ServicesPage = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const VilleDetail = lazy(() => import('./pages/VilleDetail'))
const AllVilles = lazy(() => import('./pages/AllVilles'))
const DepartementDetail = lazy(() => import('./pages/DepartementDetail'))
const AuditEnergetique = lazy(() => import('./pages/AuditEnergetique'))
const Devis = lazy(() => import('./pages/Devis'))
const AboutPage = lazy(() => import('./pages/About'))
const Pros = lazy(() => import('./pages/Pros'))
const Contact = lazy(() => import('./pages/Contact'))
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-design" element={<HomeTest />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/audit-energetique" element={<AuditEnergetique />} />
          <Route path="/diagnostic-immobilier" element={<AllVilles />} />
          <Route path="/diagnostic-immobilier/herault" element={<DepartementDetail deptCode="34" />} />
          <Route path="/diagnostic-immobilier/gard" element={<DepartementDetail deptCode="30" />} />
          <Route path="/diagnostic-immobilier/aude" element={<DepartementDetail deptCode="11" />} />
          <Route path="/diagnostic-immobilier/:ville" element={<VilleDetail />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/professionnels" element={<Pros />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
