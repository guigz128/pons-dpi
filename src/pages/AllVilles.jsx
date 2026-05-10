import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { villes, getVillesByDepartement } from '../content/villes'
import Cta from '../components/sections/Cta'
import ScrollReveal from '../components/ui/ScrollReveal'

const DEPARTEMENTS = [
  { code: '34', name: 'Hérault', slug: 'herault' },
  { code: '30', name: 'Gard', slug: 'gard' },
  { code: '11', name: 'Aude', slug: 'aude' },
]

export default function AllVilles() {
  const url = 'https://www.pons-dpi.fr/diagnostic-immobilier'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#page`,
        name: "Toutes les zones d'intervention — Pons DPI",
        description:
          "Annuaire des communes couvertes par Pons DPI : pages dédiées par ville avec marché immobilier local, risques PPRi, diagnostics prioritaires.",
        url,
        isPartOf: { '@id': 'https://www.pons-dpi.fr/' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.pons-dpi.fr/' },
          { '@type': 'ListItem', position: 2, name: "Zones d'intervention", item: url },
        ],
      },
    ],
  }

  return (
    <>
      <Helmet>
        <title>Zones d'intervention — Diagnostic immobilier Hérault & Gard | Pons DPI</title>
        <meta
          name="description"
          content="Pages dédiées par commune en Hérault (34) et Gard (30) : marché immobilier local, risques PPRi, diagnostics prioritaires. Diagnostiqueur indépendant — activité dès mars 2027."
        />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Toutes les zones d'intervention | Pons DPI" />
        <meta
          property="og:description"
          content="Pages dédiées par commune en Hérault et Gard. Diagnostiqueur indépendant — activité dès mars 2027."
        />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="fr_FR" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-light to-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>

            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
              Toutes les zones d'intervention
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text leading-[1.05]">
              Diagnostic immobilier en <span className="text-highlight">Hérault & Gard</span>
            </h1>

            <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
              {villes.length} communes avec une page dédiée — marché immobilier local, risques
              PPRi, diagnostics prioritaires. Intervention sous 48 h, rapport sous 24 h ouvrées.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Liste par département */}
      {DEPARTEMENTS.map((dept) => {
        const villesDept = getVillesByDepartement(dept.code)
        if (villesDept.length === 0) return null

        return (
          <section key={dept.code} className="py-16 sm:py-20 even:bg-stone-50">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm font-medium text-accent tracking-wide uppercase mb-1">
                      Département {dept.code}
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl text-text">
                      {dept.name} <span className="text-text-secondary text-xl font-normal">({villesDept.length} commune{villesDept.length > 1 ? 's' : ''})</span>
                    </h2>
                  </div>
                  <Link
                    to={`/diagnostic-immobilier/${dept.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                  >
                    Voir le département
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {villesDept.map((v, i) => (
                  <ScrollReveal key={v.slug} delay={i * 0.04}>
                    <Link
                      to={`/diagnostic-immobilier/${v.slug}`}
                      className="group flex items-start gap-3 rounded-md border border-border bg-surface p-4 hover:border-accent/30 hover:bg-stone-50 transition-colors h-full"
                    >
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-text group-hover:text-accent transition-colors">
                          {v.name}{' '}
                          <span className="text-xs font-normal text-text-secondary">
                            ({v.codePostal})
                          </span>
                        </p>
                        <p className="text-xs text-text-secondary mt-0.5">
                          {v.population != null
                            ? `${v.population.toLocaleString('fr-FR')} hab.`
                            : ''}
                          {v.distanceFromBaseKm != null
                            ? ` · ${v.distanceFromBaseKm} km`
                            : ''}
                          {v.travelTimeMin != null
                            ? ` · ${v.travelTimeMin} min`
                            : ''}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-text-secondary shrink-0 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Note communes sans page */}
      <section className="py-12 bg-stone-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm text-text-secondary leading-relaxed">
              Au-delà de ces communes avec page dédiée, j'interviens sur l'ensemble de la
              métropole de Montpellier et du Gard sud. Si votre commune n'apparaît pas ici,
              {' '}
              <Link to="/contact" className="text-accent font-semibold hover:text-accent-hover">
                contactez-moi pour vérifier la couverture
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Cta />
    </>
  )
}
