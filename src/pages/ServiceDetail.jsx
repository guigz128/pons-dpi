import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, Clock, FileCheck, Phone } from 'lucide-react'
import { allServices } from '../content/services'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Cta from '../components/sections/Cta'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = allServices.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-text">Service non trouvé</h1>
        <Button to="/services" variant="outline" className="mt-4">
          <ArrowLeft className="h-4 w-4" />
          Retour aux services
        </Button>
      </div>
    )
  }

  const Icon = service.icon

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.fullName || service.name,
    description: service.longDescription || service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Pons DPI',
      url: 'https://pons-dpi.fr',
    },
    areaServed: {
      '@type': 'City',
      name: 'Montpellier',
    },
  }

  return (
    <>
      <Helmet>
        <title>{service.name} à Montpellier — Diagnostic immobilier | Pons DPI</title>
        <meta
          name="description"
          content={`${service.fullName || service.name} à Montpellier. ${service.description} Devis en ligne, intervention sous 48h.`}
        />
        <link rel="canonical" href={`https://pons-dpi.fr/services/${service.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Tous les diagnostics
            </Link>

            <div className="flex items-center justify-center h-14 w-14 rounded-[--radius-md] bg-accent-light text-accent mb-6">
              <Icon className="h-7 w-7" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-text">
              {service.fullName || service.name}
            </h1>

            {service.condition && (
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>{service.condition}</Badge>
                {service.validite && <Badge variant="accent">{service.validite}</Badge>}
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 prose prose-stone max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed">
                {service.longDescription || service.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.condition && (
                <div className="flex items-start gap-3 rounded-[--radius-md] border border-border bg-surface p-4">
                  <FileCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-text">Obligation</p>
                    <p className="text-sm text-text-secondary">{service.condition}</p>
                  </div>
                </div>
              )}
              {service.validite && (
                <div className="flex items-start gap-3 rounded-[--radius-md] border border-border bg-surface p-4">
                  <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-text">Validité</p>
                    <p className="text-sm text-text-secondary">{service.validite}</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/devis" size="lg">
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="tel:0651669161" variant="outline" size="lg">
                <Phone className="h-5 w-5" />
                06 51 66 91 61
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Cta />
    </>
  )
}
