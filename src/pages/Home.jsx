import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Pricing from '../components/sections/Pricing'
import Process from '../components/sections/Process'
import Certifications from '../components/sections/Certifications'
import About from '../components/sections/About'
import Zone from '../components/sections/Zone'
import Testimonials from '../components/sections/Testimonials'
import Faq from '../components/sections/Faq'
import Cta from '../components/sections/Cta'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pons DPI — Diagnostics Immobiliers',
    description:
      'Diagnostics immobiliers à Montpellier et environs. DPE, amiante, plomb, électricité, gaz, termites. Certifié COFRAC.',
    url: 'https://pons-dpi.fr',
    telephone: '+33651669161',
    email: 'contact@pons-dpi.fr',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Montpellier',
      addressRegion: 'Occitanie',
      postalCode: '34000',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 43.6107,
        longitude: 3.8767,
      },
      geoRadius: '40000',
    },
    priceRange: '$$',
  }

  return (
    <>
      <Helmet>
        <title>Pons DPI — Diagnostics Immobiliers à Montpellier | DPE, Amiante, Plomb</title>
        <meta
          name="description"
          content="Diagnostics immobiliers à Montpellier et environs. DPE, amiante, plomb, électricité, gaz, termites. Devis en ligne, intervention sous 48h. Certifié COFRAC."
        />
        <link rel="canonical" href="https://pons-dpi.fr" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <Certifications />
      <About />
      <Zone />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  )
}
