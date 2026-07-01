import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, MapPin, Users, Euro, ExternalLink } from 'lucide-react'
import { getZoneBySlug, getVillesByZone, getAdjacentZones } from '../content/zones'
import Cta from '../components/sections/Cta'
import Card from '../components/ui/Card'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function ZoneDetail() {
  const { zone: zoneSlug } = useParams()
  const zone = getZoneBySlug(zoneSlug)

  if (!zone) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl text-text">Zone introuvable</h1>
        <p className="mt-4 text-text-secondary">
          Cette zone d'intervention n'existe pas ou plus.{' '}
          <Link to="/diagnostic-immobilier" className="text-accent font-semibold hover:text-accent-hover">
            Voir toutes les zones →
          </Link>
        </p>
      </div>
    )
  }

  const villesZone = getVillesByZone(zone.slug)
  const adjacents = getAdjacentZones(zone.slug)
  const url = `https://www.pons-dpi.fr/diagnostic-immobilier/zone/${zone.slug}`

  const totalPop = villesZone.reduce((s, v) => s + (v.population || 0), 0)
  const prixList = villesZone.map((v) => v.prixM2Moyen).filter(Boolean)
  const prixMin = prixList.length ? Math.min(...prixList) : null
  const prixMax = prixList.length ? Math.max(...prixList) : null

  const pageTitle = `Diagnostic immobilier — ${zone.name} | Pons DPI`
  const pageDescription = `Diagnostic immobilier dans le secteur ${zone.name} : ${villesZone.length} communes avec page dédiée. DPE, amiante, plomb, électricité, gaz, termites. Devis en ligne, activité dès mars 2027.`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#page`,
        name: `Diagnostic immobilier — ${zone.name}`,
        description: pageDescription,
        url,
        isPartOf: { '@id': 'https://www.pons-dpi.fr/diagnostic-immobilier' },
      },
      {
        '@type': 'ItemList',
        '@id': `${url}#communes`,
        numberOfItems: villesZone.length,
        itemListElement: villesZone.map((v, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: v.name,
          url: `https://www.pons-dpi.fr/diagnostic-immobilier/${v.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.pons-dpi.fr/' },
          { '@type': 'ListItem', position: 2, name: "Zones d'intervention", item: 'https://www.pons-dpi.fr/diagnostic-immobilier' },
          { '@type': 'ListItem', position: 3, name: zone.name, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="fr_FR" />
        <meta name="geo.region" content={`FR-${zone.departementCode}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-light to-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <ScrollReveal>
            <Link
              to="/diagnostic-immobilier"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Toutes les zones d'intervention
            </Link>

            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
              {zone.tagline}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text leading-[1.05]">
              Diagnostic immobilier — <span className="text-highlight">{zone.name}</span>
            </h1>

            <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
              {zone.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats + contexte risques */}
      <section className="py-12 sm:py-16 bg-stone-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ScrollReveal>
              <Card>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-3">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-text-secondary">Communes couvertes</p>
                <p className="mt-1 text-2xl font-bold text-text">{villesZone.length}</p>
                <p className="mt-1 text-xs text-text-secondary">pages dédiées</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <Card>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-3">
                  <Users className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-text-secondary">Population cumulée</p>
                <p className="mt-1 text-2xl font-bold text-text">{(totalPop / 1000).toFixed(0)}k</p>
                <p className="mt-1 text-xs text-text-secondary">habitants</p>
              </Card>
            </ScrollReveal>

            {prixMin != null && (
              <ScrollReveal delay={0.1}>
                <Card>
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-3">
                    <Euro className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-wide text-text-secondary">Prix m² moyen</p>
                  <p className="mt-1 text-2xl font-bold text-text">
                    {prixMin.toLocaleString('fr-FR')} - {prixMax.toLocaleString('fr-FR')} €
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">selon la commune</p>
                </Card>
              </ScrollReveal>
            )}
          </div>

          <ScrollReveal>
            <p className="mt-10 max-w-3xl mx-auto text-center text-text-secondary leading-relaxed">
              {zone.contexte}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grille des communes */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-display text-3xl sm:text-4xl text-text">
                Communes du secteur {zone.shortName}
              </h2>
              <p className="mt-3 text-text-secondary">
                {villesZone.length} pages dédiées — marché immobilier local, risques PPRi, diagnostics prioritaires.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {villesZone.map((v, i) => (
              <ScrollReveal key={v.slug} delay={Math.min(i * 0.03, 0.3)}>
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
                      <span className="text-xs font-normal text-text-secondary">({v.codePostal})</span>
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {v.population != null ? `${v.population.toLocaleString('fr-FR')} hab.` : ''}
                      {v.prixM2Moyen != null ? ` · ${v.prixM2Moyen.toLocaleString('fr-FR')} €/m²` : ''}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-text-secondary shrink-0 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guides blog */}
      {zone.blogLinks?.length > 0 && (
        <section className="py-16 sm:py-20 bg-stone-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="font-display text-3xl sm:text-4xl text-text">Pour aller plus loin</h2>
                <p className="mt-3 text-text-secondary">
                  Mes guides pour préparer sereinement vos diagnostics dans le secteur {zone.shortName}.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid gap-4 sm:grid-cols-3">
                {zone.blogLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="group flex items-start gap-3 rounded-md border border-border bg-surface p-4 hover:border-accent/30 transition-colors"
                  >
                    <ExternalLink className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                    <span className="font-semibold text-text group-hover:text-accent transition-colors">
                      {l.label}
                    </span>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Zones adjacentes */}
      {adjacents.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="font-display text-3xl sm:text-4xl text-text">Secteurs voisins</h2>
                <p className="mt-3 text-text-secondary">
                  J'interviens aussi dans les zones limitrophes.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {adjacents.map((z, i) => (
                <ScrollReveal key={z.slug} delay={i * 0.05}>
                  <Link
                    to={`/diagnostic-immobilier/zone/${z.slug}`}
                    className="group flex items-center gap-3 rounded-md border border-border bg-surface p-4 hover:border-accent/30 hover:bg-stone-50 transition-colors h-full"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-text group-hover:text-accent transition-colors flex-1">
                      {z.name}
                    </span>
                    <ArrowRight className="h-4 w-4 text-text-secondary shrink-0 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <p className="mt-8 text-center text-sm text-text-secondary">
                <Link to="/diagnostic-immobilier" className="text-accent font-semibold hover:text-accent-hover">
                  Voir toutes les zones d'intervention →
                </Link>
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      <Cta />
    </>
  )
}
