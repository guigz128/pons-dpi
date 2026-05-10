import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Clock,
  FileCheck,
  Award,
  Users,
  Home as HomeIcon,
  Euro,
  Flame,
  AlertCircle,
  MapPin,
} from 'lucide-react'
import { getVilleBySlug, villes } from '../content/villes'
import { allServices } from '../content/services'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Accordion from '../components/ui/Accordion'
import ScrollReveal from '../components/ui/ScrollReveal'
import Pricing from '../components/sections/Pricing'
import Process from '../components/sections/Process'
import Cta from '../components/sections/Cta'

// DPE 2021 (3CL) — la classe finale est le pire des deux : énergie (kWhEP/m².an) et émissions (kgCO2eq/m².an)
const DPE_LEVELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

function dpeClassFromKwh(kwh) {
  if (kwh == null) return null
  if (kwh <= 70) return 'A'
  if (kwh <= 110) return 'B'
  if (kwh <= 180) return 'C'
  if (kwh <= 250) return 'D'
  if (kwh <= 330) return 'E'
  if (kwh <= 420) return 'F'
  return 'G'
}

function dpeClassFromCo2(co2) {
  if (co2 == null) return null
  if (co2 <= 6) return 'A'
  if (co2 <= 11) return 'B'
  if (co2 <= 30) return 'C'
  if (co2 <= 50) return 'D'
  if (co2 <= 70) return 'E'
  if (co2 <= 100) return 'F'
  return 'G'
}

function dpeWorstClass(kwh, co2) {
  const a = dpeClassFromKwh(kwh)
  const b = dpeClassFromCo2(co2)
  if (!a) return b
  if (!b) return a
  return DPE_LEVELS.indexOf(a) >= DPE_LEVELS.indexOf(b) ? a : b
}

function findVilleByName(name) {
  const normalized = name.trim().toLowerCase()
  return villes.find((v) => v.name.toLowerCase() === normalized)
}

export default function VilleDetail() {
  const { ville: slug } = useParams()
  const ville = getVilleBySlug(slug)

  if (!ville) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-text">Ville non couverte</h1>
        <p className="mt-2 text-text-secondary">
          Cette commune n'a pas encore de page dédiée. Contactez-moi pour vérifier la couverture.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button to="/" variant="outline">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Button>
          <Button to="/contact">Me contacter</Button>
        </div>
      </div>
    )
  }

  const {
    name,
    codePostal,
    coords,
    population,
    nbLogements,
    pctMaisons,
    pctAppartements,
    prixM2Moyen,
    dpeMoyenKwh,
    risques,
    diagnosticsPrioritaires,
    intro,
    parcImmoNote,
    enjeuxLocaux,
    accessibilityNote,
    communesLimitrophes,
    faqLocale,
    inCoreZone,
    inOuterZone,
  } = ville

  const dpeClass = dpeWorstClass(dpeMoyenKwh, ville.dpeMoyenCo2)
  const url = `https://www.pons-dpi.fr/diagnostic-immobilier/${slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pons DPI',
    description: `Diagnostiqueur immobilier certifié à ${name} : DPE, amiante, plomb, électricité, gaz, termites.`,
    url,
    telephone: '+33651669161',
    areaServed: {
      '@type': 'City',
      name,
      addressCountry: 'FR',
      postalCode: codePostal,
    },
    geo: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: String(coords?.lat ?? ''),
        longitude: String(coords?.lng ?? ''),
      },
      geoRadius: '30000',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Prades-le-Lez',
      postalCode: '34730',
      addressCountry: 'FR',
    },
    priceRange: '€€',
  }

  return (
    <>
      <Helmet>
        <title>{`Diagnostic immobilier à ${name} (${codePostal}) — DPE, amiante | Pons DPI`}</title>
        <meta
          name="description"
          content={`Diagnostiqueur immobilier certifié à ${name}. DPE, amiante, plomb, électricité, gaz, termites. Devis en ligne, intervention sous 48 h, rapport sous 24 h.`}
        />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Diagnostic immobilier à ${name} | Pons DPI`} />
        <meta
          property="og:description"
          content={`Diagnostics immobiliers à ${name} et alentours. DPE, amiante, plomb, gaz, électricité, termites. Devis en ligne.`}
        />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="fr_FR" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* 1 — Hero ville */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-light to-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Toutes les zones d'intervention
            </Link>

            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
              Diagnostic immobilier — {codePostal}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text leading-[1.05]">
              Diagnostic immobilier à <span className="text-highlight">{name}</span>
            </h1>

            <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Diagnostiqueur certifié COFRAC, basé à Prades-le-Lez. Devis en ligne instantané, intervention sous 48 h sur {name}, rapport remis sous 24 h.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="accent">
                <Clock className="h-3 w-3" />
                Intervention sous 48 h
              </Badge>
              <Badge variant="accent">
                <FileCheck className="h-3 w-3" />
                Rapport sous 24 h
              </Badge>
              <Badge variant="accent">
                <Award className="h-3 w-3" />
                Certifié COFRAC
              </Badge>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
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

      {/* 2 — Pourquoi un diagnostic à [ville] */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl text-text">
              Pourquoi faire vos diagnostics à <span className="text-highlight">{name}</span> ?
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed text-lg">{intro}</p>
          </ScrollReveal>

          {enjeuxLocaux && (
            <ScrollReveal>
              <div className="mt-8">
                <h3 className="text-base font-semibold text-text mb-2">Particularités locales</h3>
                <p className="text-text-secondary leading-relaxed">{enjeuxLocaux}</p>
              </div>
            </ScrollReveal>
          )}

          {risques?.pprApproves?.length > 0 && (
            <ScrollReveal>
              <div className="mt-6 rounded-md border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-600">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-text">
                    Plans de Prévention des Risques approuvés à {name}
                  </h3>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {risques.pprApproves.map((ppr, i) => (
                    <li key={i} className="text-sm text-text-secondary leading-relaxed">
                      {ppr}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* 3 — Marché immobilier */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-display text-3xl sm:text-4xl text-text">
                Le marché immobilier à <span className="text-highlight">{name}</span>
              </h2>
              <p className="mt-3 text-text-secondary">
                Quelques chiffres clés pour comprendre le parc et anticiper vos diagnostics.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {population != null && (
              <ScrollReveal delay={0}>
                <Card className="h-full">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-wide text-text-secondary">Population</p>
                  <p className="mt-1 text-2xl font-bold text-text">
                    {population.toLocaleString('fr-FR')}
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">habitants</p>
                </Card>
              </ScrollReveal>
            )}

            {nbLogements != null && (
              <ScrollReveal delay={0.05}>
                <Card className="h-full">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-3">
                    <HomeIcon className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-wide text-text-secondary">Logements</p>
                  <p className="mt-1 text-2xl font-bold text-text">
                    {nbLogements.toLocaleString('fr-FR')}
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    {pctMaisons}% maisons · {pctAppartements}% appart.
                  </p>
                </Card>
              </ScrollReveal>
            )}

            {prixM2Moyen != null && (
              <ScrollReveal delay={0.1}>
                <Card className="h-full">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-3">
                    <Euro className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-wide text-text-secondary">Prix moyen</p>
                  <p className="mt-1 text-2xl font-bold text-text">
                    {prixM2Moyen.toLocaleString('fr-FR')} €
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">par m²</p>
                </Card>
              </ScrollReveal>
            )}

            {dpeMoyenKwh != null && (
              <ScrollReveal delay={0.15}>
                <Card className="h-full">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-3">
                    <Flame className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-wide text-text-secondary">DPE moyen</p>
                  <p className="mt-1 text-lg font-bold text-text leading-tight">
                    {dpeMoyenKwh}
                    <span className="text-xs font-medium text-text-secondary"> kWhEP/m²·an</span>
                  </p>
                  {ville.dpeMoyenCo2 != null && (
                    <p className="text-lg font-bold text-text leading-tight">
                      {ville.dpeMoyenCo2}
                      <span className="text-xs font-medium text-text-secondary"> kgCO₂/m²·an</span>
                    </p>
                  )}
                  {dpeClass && (
                    <p className="mt-1 text-xs text-text-secondary">
                      classe {dpeClass} estimée<sup>*</sup>
                    </p>
                  )}
                </Card>
              </ScrollReveal>
            )}
          </div>

          {dpeClass && (
            <ScrollReveal>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xs text-text-secondary">
                <sup>*</sup> Classe estimée selon la méthode DPE 2021 (3CL) — la classe finale retenue est la plus défavorable entre la consommation d'énergie primaire et les émissions de CO₂.
              </p>
            </ScrollReveal>
          )}

          {parcImmoNote && (
            <ScrollReveal>
              <p className="mt-8 max-w-3xl mx-auto text-center text-text-secondary leading-relaxed">
                {parcImmoNote}
              </p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* 4 — Diagnostics prioritaires */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-display text-3xl sm:text-4xl text-text">
                Diagnostics les plus demandés à <span className="text-highlight">{name}</span>
              </h2>
              <p className="mt-3 text-text-secondary">
                Trois diagnostics que je réalise quasi-systématiquement sur vos biens à {name}.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diagnosticsPrioritaires?.map((d, i) => {
              const service = allServices.find((s) => s.slug === d.slug)
              if (!service) return null
              const Icon = service.icon
              return (
                <ScrollReveal key={d.slug} delay={i * 0.1}>
                  <Card className="h-full flex flex-col">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent-light text-accent mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-text">{service.name}</h3>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">
                      {d.whyHere}
                    </p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                    >
                      En savoir plus
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal>
            <p className="mt-10 text-center text-sm text-text-secondary">
              Tous les autres diagnostics (gaz, électricité, plomb, Carrez, Boutin…) sont également réalisés à {name}.{' '}
              <Link to="/services" className="text-accent font-semibold hover:text-accent-hover">
                Voir tous les diagnostics
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5 — Tarifs et packs */}
      <Pricing />

      {(inCoreZone || inOuterZone) && (
        <section className="bg-stone-50 pb-12 -mt-12 sm:-mt-16 lg:-mt-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
            <ScrollReveal>
              <div className="rounded-md border border-accent/20 bg-accent-light/40 p-4 text-center text-sm text-text">
                <span className="font-semibold">Aucun frais de déplacement supplémentaire à {name}</span>{' '}
                — la commune fait partie de la zone d'intervention couverte.
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 6 — Process */}
      <Process />

      {/* 7 — Zone d'intervention élargie */}
      {communesLimitrophes?.length > 0 && (
        <section className="py-16 sm:py-20 bg-stone-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="font-display text-3xl sm:text-4xl text-text">
                  Communes voisines couvertes
                </h2>
                <p className="mt-3 text-text-secondary">
                  Au-delà de {name}, j'interviens sur l'ensemble de sa couronne.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 list-none">
                {communesLimitrophes.map((commune) => {
                  const linkedVille = findVilleByName(commune)
                  if (linkedVille) {
                    return (
                      <li key={commune}>
                        <Link
                          to={`/diagnostic-immobilier/${linkedVille.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                        >
                          <MapPin className="h-3.5 w-3.5" />
                          {commune}
                        </Link>
                      </li>
                    )
                  }
                  return (
                    <li
                      key={commune}
                      className="text-sm text-text-secondary"
                    >
                      {commune}
                    </li>
                  )
                })}
              </ul>
            </ScrollReveal>

            {accessibilityNote && (
              <ScrollReveal>
                <p className="mt-8 text-center text-sm text-text-secondary leading-relaxed max-w-2xl mx-auto">
                  {accessibilityNote}
                </p>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* 7bis — Pons DPI dans le département (cross-link villes) */}
      {villes.filter((v) => v.slug !== slug).length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="font-display text-3xl sm:text-4xl text-text">
                  Pons DPI dans le département
                </h2>
                <p className="mt-3 text-text-secondary">
                  Pages dédiées par commune — diagnostics immobiliers, marché local, risques.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {villes
                .filter((v) => v.slug !== slug)
                .map((v, i) => (
                  <ScrollReveal key={v.slug} delay={i * 0.05}>
                    <Link
                      to={`/diagnostic-immobilier/${v.slug}`}
                      className="group flex items-start gap-3 rounded-md border border-border bg-surface p-4 hover:border-accent/30 hover:bg-stone-50 transition-colors h-full"
                    >
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-text group-hover:text-accent transition-colors">
                          {v.name} <span className="text-xs font-normal text-text-secondary">({v.codePostal})</span>
                        </p>
                        <p className="text-xs text-text-secondary mt-0.5">
                          {v.population != null ? `${v.population.toLocaleString('fr-FR')} habitants` : v.departement}
                          {v.distanceFromBaseKm != null ? ` · ${v.distanceFromBaseKm} km de Prades-le-Lez` : ''}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-text-secondary shrink-0 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* 8 — FAQ ville */}
      {faqLocale?.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="font-display text-3xl sm:text-4xl text-text">
                  Questions fréquentes à <span className="text-highlight">{name}</span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <Accordion items={faqLocale.map((f) => ({ question: f.q, answer: f.a }))} />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 9 — CTA final */}
      <Cta />
    </>
  )
}
