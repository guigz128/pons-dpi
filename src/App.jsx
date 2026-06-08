import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { capture } from './lib/posthog'

// Imports eager : le site est prérendu (SSG). renderToString étant synchrone,
// les pages doivent se rendre sans suspendre — pas de React.lazy ici, sinon le
// SSR ne capture que le fallback et le contenu reste injecté côté client.
import Home from './pages/Home'
import HomeTest from './pages/HomeTest'
import ServicesPage from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import VilleDetail from './pages/VilleDetail'
import AllVilles from './pages/AllVilles'
import DepartementDetail from './pages/DepartementDetail'
import AuditEnergetique from './pages/AuditEnergetique'
import RapportExemple from './pages/RapportExemple'
import RapportClient from './pages/RapportClient'
import GenererRapport from './pages/GenererRapport'
import Devis from './pages/Devis'
import DpeExistant from './pages/DpeExistant'
import DpeExistantVille from './pages/DpeExistantVille'
import AboutPage from './pages/About'
import Pros from './pages/Pros'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'
import NotFound from './pages/NotFound'

function PageviewTracker() {
  const location = useLocation()
  useEffect(() => {
    capture('$pageview', {
      $current_url: window.location.href,
      path: location.pathname,
    })
  }, [location.pathname, location.search])
  return null
}

export default function App() {
  return (
    <Layout>
      <PageviewTracker />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-design" element={<HomeTest />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/audit-energetique" element={<AuditEnergetique />} />
          <Route path="/exemple-rapport" element={<RapportExemple />} />
          <Route path="/rapport/:slug" element={<RapportClient />} />
          <Route path="/generer-rapport" element={<GenererRapport />} />
          <Route path="/diagnostic-immobilier" element={<AllVilles />} />
          <Route path="/diagnostic-immobilier/herault" element={<DepartementDetail deptCode="34" />} />
          <Route path="/diagnostic-immobilier/gard" element={<DepartementDetail deptCode="30" />} />
          <Route path="/diagnostic-immobilier/aude" element={<DepartementDetail deptCode="11" />} />
          <Route path="/diagnostic-immobilier/:ville" element={<VilleDetail />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/dpe-existant" element={<DpeExistant />} />
          <Route path="/dpe-existant/:ville" element={<DpeExistantVille />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/professionnels" element={<Pros />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
