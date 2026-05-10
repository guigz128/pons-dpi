import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, Clock, FileCheck, Phone, Search, Lightbulb, AlertCircle, MapPin } from 'lucide-react'
import { allServices } from '../content/services'
import { villes, getCoreVilles } from '../content/villes'
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
      url: 'https://www.pons-dpi.fr/',
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
        <link rel="canonical" href={`https://www.pons-dpi.fr/services/${service.slug}`} />
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

            <div className="flex items-center justify-center h-14 w-14 rounded-md bg-accent-light text-accent mb-6">
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

          {service.whatWeCheck && (
            <ScrollReveal>
              <div className="mt-8 space-y-4">
                <div className="rounded-md border border-border bg-surface p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent-light text-accent">
                      <Search className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-text">Ce qu'on vérifie</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{service.whatWeCheck}</p>
                </div>

                {service.whyItMatters && (
                  <div className="rounded-md border border-border bg-surface p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent-light text-accent">
                        <Lightbulb className="h-4 w-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-text">Ce que ça change pour vous</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{service.whyItMatters}</p>
                  </div>
                )}

                {service.ifPositive && (
                  <div className="rounded-md border border-amber-200 bg-amber-50 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-600">
                        <AlertCircle className="h-4 w-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-text">Que faire en cas de résultat positif</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{service.ifPositive}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.condition && (
                <div className="flex items-start gap-3 rounded-md border border-border bg-surface p-4">
                  <FileCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-text">Obligation</p>
                    <p className="text-sm text-text-secondary">{service.condition}</p>
                  </div>
                </div>
              )}
              {service.validite && (
                <div className="flex items-start gap-3 rounded-md border border-border bg-surface p-4">
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

      {(() => {
        const coreVilles = getCoreVilles(6)
        if (coreVilles.length === 0) return null
        return (
          <section className="py-16 sm:py-20 bg-stone-50 border-t border-border">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <h2 className="font-display text-3xl sm:text-4xl text-text">
                    {service.name} dans <span className="text-highlight">votre commune</span>
                  </h2>
                  <p className="mt-3 text-text-secondary">
                    Pages dédiées avec marché local, risques et particularités.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {coreVilles.map((v, i) => (
                  <ScrollReveal key={v.slug} delay={i * 0.05}>
                    <Link
                      to={`/diagnostic-immobilier/${v.slug}`}
                      className="group flex items-start gap-3 rounded-md border border-border bg-surface p-4 hover:border-accent/30 transition-colors h-full"
                    >
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-text group-hover:text-accent transition-colors">
                          {service.name} à {v.name}
                        </p>
                        <p className="text-xs text-text-secondary mt-0.5">
                          {v.codePostal}
                          {v.population != null ? ` · ${v.population.toLocaleString('fr-FR')} hab.` : ''}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-text-secondary shrink-0 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              {villes.length > coreVilles.length && (
                <ScrollReveal>
                  <p className="mt-8 text-center text-sm text-text-secondary">
                    <Link to="/#zone" className="text-accent font-semibold hover:text-accent-hover">
                      Voir toutes les zones d'intervention →
                    </Link>
                  </p>
                </ScrollReveal>
              )}
            </div>
          </section>
        )
      })()}

      <Cta />
    </>
  )
}
