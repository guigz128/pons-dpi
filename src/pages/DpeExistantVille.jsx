import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  Calendar,
  Maximize,
  Building,
  Loader2,
  Info,
  Sparkles,
} from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import ScrollReveal from '../components/ui/ScrollReveal'
import DpeBadge from '../components/ui/DpeBadge'
import { villes } from '../content/villes'
import { getInseeBySlug } from '../content/villes-insee'
import { getStatsByInsee, listDpeByInsee, resolveInseeFromCity } from '../lib/ademe'
import NotFound from './NotFound'

const DPE_COLOR = {
  A: 'bg-emerald-600',
  B: 'bg-emerald-500',
  C: 'bg-lime-500',
  D: 'bg-yellow-400',
  E: 'bg-orange-500',
  F: 'bg-red-500',
  G: 'bg-red-700',
}

function formatNum(n) {
  return new Intl.NumberFormat('fr-FR').format(n)
}

function formatDate(s) {
  if (!s) return '—'
  try {
    return new Date(s).toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'short', year: 'numeric',
    })
  } catch { return s }
}

export default function DpeExistantVille() {
  const { ville: slug } = useParams()
  const ville = villes.find((v) => v.slug === slug)

  const [insee, setInsee] = useState(getInseeBySlug(slug))
  const [stats, setStats] = useState(null)
  const [recent, setRecent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!ville) return
    let cancelled = false
    const ctrl = new AbortController()

    async function load() {
      setLoading(true)
      setError(null)
      try {
        let code = insee
        if (!code) {
          code = await resolveInseeFromCity(ville.name, { signal: ctrl.signal })
          if (!cancelled) setInsee(code)
        }
        if (!code) throw new Error('INSEE introuvable')

        const [s, r] = await Promise.all([
          getStatsByInsee(code, { signal: ctrl.signal }),
          listDpeByInsee(code, { limit: 12, signal: ctrl.signal }),
        ])
        if (cancelled) return
        setStats(s)
        setRecent(r.results)
      } catch (err) {
        if (err.name !== 'AbortError' && !cancelled) {
          setError("Impossible de récupérer les statistiques pour le moment.")
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
      ctrl.abort()
    }
  }, [ville, slug, insee])

  if (!ville) return <NotFound />

  const url = `https://www.pons-dpi.fr/dpe-existant/${slug}`
  const title = `DPE existant à ${ville.name} (${ville.codePostal}) — Statistiques officielles ADEME | Pons DPI`
  const description = `Distribution des étiquettes DPE à ${ville.name}, nombre de logements F ou G, marché de l'audit énergétique. Données officielles ADEME mises à jour quotidiennement.`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#page`,
        name: title,
        description,
        url,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.pons-dpi.fr/' },
          { '@type': 'ListItem', position: 2, name: 'DPE existant', item: 'https://www.pons-dpi.fr/dpe-existant' },
          { '@type': 'ListItem', position: 3, name: ville.name, item: url },
        ],
      },
    ],
  }

  const maxCount = stats ? Math.max(...stats.distribution.map((d) => d.count), 1) : 1

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="fr_FR" />
        <meta name="geo.region" content="FR-34" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-light to-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <ScrollReveal>
            <Link
              to="/dpe-existant"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Recherche par adresse
            </Link>

            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
              Statistiques DPE — données officielles ADEME
            </p>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight text-text leading-[1.05]">
              DPE existant à <span className="text-highlight">{ville.name}</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Analyse complète des DPE réalisés à {ville.name} ({ville.codePostal})
              depuis juillet 2021. Distribution des étiquettes, parc passoires thermiques,
              marché de l'audit énergétique.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats principales */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="flex items-center gap-2 justify-center text-sm text-text-secondary py-10">
              <Loader2 className="h-4 w-4 animate-spin" />
              Calcul des statistiques pour {ville.name}…
            </div>
          )}

          {error && (
            <Card>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                <p className="text-sm text-text">{error}</p>
              </div>
            </Card>
          )}

          {stats && !loading && (
            <>
              <ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  <StatBlock value={formatNum(stats.total)} label={`DPE recensés depuis 2021`} />
                  <StatBlock
                    value={`${stats.fgPct}%`}
                    sub={`${formatNum(stats.fgCount)} logements`}
                    label="Classés F ou G"
                    tone="danger"
                  />
                  <StatBlock
                    value={`${stats.efgPct}%`}
                    sub={`${formatNum(stats.efgCount)} logements`}
                    label="Classés E, F ou G"
                    tone="warning"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <Card>
                  <h2 className="text-base font-semibold text-text mb-1">
                    Distribution des étiquettes DPE
                  </h2>
                  <p className="text-xs text-text-secondary mb-5">
                    Sur {formatNum(stats.total)} DPE enregistrés à {ville.name}
                  </p>
                  <div className="space-y-2">
                    {stats.distribution.map((d) => (
                      <div key={d.label} className="flex items-center gap-3">
                        <DpeBadge letter={d.label} size="sm" />
                        <div className="flex-1">
                          <div className="h-6 bg-stone-100 rounded overflow-hidden">
                            <div
                              className={`h-full ${DPE_COLOR[d.label]} transition-all`}
                              style={{ width: `${(d.count / maxCount) * 100}%` }}
                            />
                          </div>
                        </div>
                        <div className="w-24 text-right text-sm">
                          <span className="font-semibold text-text">{formatNum(d.count)}</span>
                          <span className="ml-1.5 text-xs text-text-secondary">{d.pct}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>

              {/* Cross-sell audit énergétique */}
              {stats.fgCount > 0 && (
                <ScrollReveal>
                  <div className="mt-8 rounded-md border-l-4 border-warning bg-yellow-50/60 p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-warning text-white shrink-0">
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-text">
                          {formatNum(stats.fgCount)} logements F ou G à {ville.name}
                        </h3>
                        <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                          Ces propriétaires doivent obligatoirement faire réaliser un{' '}
                          <strong className="text-text">audit énergétique</strong> avant
                          de vendre leur bien (obligation depuis 2023). Et à partir de
                          2028, les logements F seront interdits à la location.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button to="/audit-energetique" size="md">
                            Audit énergétique
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                          <Button to="/devis" variant="outline" size="md">
                            <Sparkles className="h-4 w-4" />
                            Devis DPE en ligne
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </>
          )}
        </div>
      </section>

      {/* Liste des DPE récents */}
      {recent.length > 0 && (
        <section className="py-12 sm:py-16 bg-stone-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl text-text mb-2">
                Derniers DPE enregistrés à {ville.name}
              </h2>
              <p className="text-text-secondary mb-6 text-sm">
                Sélection des {recent.length} DPE les plus récents extraits de la base ADEME.
              </p>
            </ScrollReveal>

            <div className="space-y-2">
              {recent.map((d) => (
                <div
                  key={d.numero_dpe}
                  className="rounded-md border border-border bg-surface p-3 flex items-start gap-3"
                >
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <DpeBadge letter={d.etiquette_dpe} size="md" />
                    <span className="text-[9px] text-text-secondary uppercase tracking-wide">DPE</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <DpeBadge letter={d.etiquette_ges} size="md" />
                    <span className="text-[9px] text-text-secondary uppercase tracking-wide">GES</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text truncate">
                      {d.adresse_ban || '—'}
                    </p>
                    <div className="mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-text-secondary">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(d.date_etablissement_dpe)}
                      </span>
                      {d.surface_habitable_logement && (
                        <span className="inline-flex items-center gap-1">
                          <Maximize className="h-3 w-3" />
                          {Math.round(d.surface_habitable_logement)} m²
                        </span>
                      )}
                      {d.type_batiment && (
                        <span className="inline-flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          {d.type_batiment}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA bas de page + lien commune */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-text">
              Vous vendez ou louez à {ville.name} ?
            </h2>
            <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
              Un DPE est obligatoire à la vente comme à la location. Devis en ligne en 2 minutes,
              intervention sous 48 h sur {ville.name}.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button to="/devis" size="lg">
                <Sparkles className="h-4 w-4" />
                Devis en ligne
              </Button>
              <Button to={`/diagnostic-immobilier/${slug}`} variant="outline" size="lg">
                Page {ville.name}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-8 text-xs text-text-secondary">
              Données issues de la base{' '}
              <a
                href="https://data.ademe.fr/datasets/dpe03existant"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-text"
              >
                DPE Logements existants (ADEME)
              </a>
              . Mise à jour quotidienne.{' '}
              {insee && <span>Code INSEE : {insee}.</span>}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

function StatBlock({ value, sub, label, tone = 'default' }) {
  const toneClass =
    tone === 'danger'
      ? 'text-red-600'
      : tone === 'warning'
        ? 'text-orange-600'
        : 'text-accent'
  return (
    <Card className="text-center">
      <p className={`font-display text-3xl sm:text-4xl ${toneClass}`}>{value}</p>
      {sub && <p className="text-xs text-text-secondary mt-1">{sub}</p>}
      <p className="text-sm text-text mt-2 leading-tight">{label}</p>
    </Card>
  )
}
