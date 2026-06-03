import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Search,
  Calendar,
  Maximize,
  Building,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import ScrollReveal from '../components/ui/ScrollReveal'
import AddressAutocomplete from '../components/ui/AddressAutocomplete'
import DpeBadge from '../components/ui/DpeBadge'
import { searchDpeByAddress } from '../lib/ademe'

const FEATURED_VILLES = [
  { slug: 'montpellier', name: 'Montpellier' },
  { slug: 'castelnau-le-lez', name: 'Castelnau-le-Lez' },
  { slug: 'lattes', name: 'Lattes' },
  { slug: 'juvignac', name: 'Juvignac' },
  { slug: 'saint-jean-de-vedas', name: 'Saint-Jean-de-Védas' },
  { slug: 'prades-le-lez', name: 'Prades-le-Lez' },
  { slug: 'lunel', name: 'Lunel' },
  { slug: 'sete', name: 'Sète' },
]

function formatDate(s) {
  if (!s) return '—'
  try {
    return new Date(s).toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'short', year: 'numeric',
    })
  } catch { return s }
}

export default function DpeExistant() {
  const [address, setAddress] = useState(null)
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSelect(item) {
    setAddress(item)
    setResults(null)
    setError(null)
    setLoading(true)
    try {
      const r = await searchDpeByAddress(item.label, { limit: 15 })
      setResults(r)
    } catch {
      setError("Impossible d'interroger la base ADEME pour le moment.")
    } finally {
      setLoading(false)
    }
  }

  function handleClear() {
    setAddress(null)
    setResults(null)
    setError(null)
  }

  const url = 'https://www.pons-dpi.fr/dpe-existant'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'DPE Existant — Recherche officielle ADEME',
    description:
      "Consultez gratuitement les DPE déjà réalisés à votre adresse à Montpellier et en Hérault. Données officielles ADEME.",
    url,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  }

  return (
    <>
      <Helmet>
        <title>DPE existant à Montpellier — Recherche officielle ADEME | Pons DPI</title>
        <meta
          name="description"
          content="Trouvez en 10 secondes le DPE déjà réalisé à votre adresse. Données officielles ADEME, mise à jour quotidienne. Montpellier et Hérault."
        />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DPE existant à Montpellier | Pons DPI" />
        <meta property="og:description" content="Consultez gratuitement les DPE déjà réalisés à votre adresse. Données officielles ADEME." />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="fr_FR" />
        <meta name="geo.region" content="FR-34" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-light to-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <ScrollReveal>
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
              Outil gratuit — données officielles ADEME
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text leading-[1.05]">
              Trouvez le <span className="text-highlight">DPE existant</span> à votre adresse
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Plus de 14 millions de DPE recensés en France. Saisissez votre adresse,
              je consulte la base officielle de l'ADEME et je vous montre instantanément
              l'historique des diagnostics réalisés.
            </p>

            <div className="mt-8">
              <AddressAutocomplete
                value={address}
                onSelect={handleSelect}
                onClear={handleClear}
                label=""
                placeholder="Tapez votre adresse — ex : 12 rue de la Loge, Montpellier"
                autoFocus
                size="lg"
                hint="Recherche sur la base ADEME des DPE Logements existants (depuis juillet 2021)."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="flex items-center gap-2 justify-center text-sm text-text-secondary py-6">
              <Loader2 className="h-4 w-4 animate-spin" />
              Recherche dans la base ADEME…
            </div>
          )}

          {error && (
            <div className="flex items-start gap-2 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
              <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {results && !loading && (
            <>
              {results.total === 0 ? (
                <Card className="text-center py-10">
                  <Search className="h-8 w-8 text-text-secondary mx-auto mb-3" />
                  <h2 className="font-display text-2xl text-text">Aucun DPE trouvé</h2>
                  <p className="mt-2 text-text-secondary max-w-md mx-auto">
                    Aucun DPE n'a été enregistré dans la base ADEME pour cette adresse depuis
                    juillet 2021. Si vous vendez ou louez, vous devez faire réaliser un DPE.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-3">
                    <Button to="/devis">
                      <Sparkles className="h-4 w-4" />
                      Devis en ligne
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button to="/contact" variant="outline">Me contacter</Button>
                  </div>
                </Card>
              ) : (
                <>
                  <div className="mb-5 flex items-baseline justify-between flex-wrap gap-2">
                    <h2 className="font-display text-2xl text-text">
                      {results.total} DPE trouvé{results.total > 1 ? 's' : ''}
                    </h2>
                    <p className="text-sm text-text-secondary">
                      Les {Math.min(results.results.length, results.total)} plus récents
                    </p>
                  </div>
                  <div className="space-y-3">
                    {results.results.map((d) => (
                      <DpeRow key={d.numero_dpe} dpe={d} />
                    ))}
                  </div>

                  <div className="mt-8 rounded-md border-l-4 border-accent bg-accent-light/40 p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-9 w-9 rounded-full bg-accent text-white shrink-0">
                        <Info className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text">
                          Votre DPE est-il encore valide ?
                        </h3>
                        <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                          Un DPE est valable 10 ans. Si le vôtre date d'avant juillet 2021,
                          il faut absolument le refaire (nouvelle méthode de calcul). En cas
                          de classe F ou G, un audit énergétique est obligatoire à la vente.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Button to="/devis" size="sm">Refaire mon DPE</Button>
                          <Button to="/audit-energetique" variant="outline" size="sm">
                            Audit énergétique
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* Explorer par commune */}
      <section className="py-16 sm:py-20 bg-stone-50 border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
                Statistiques par commune
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-text">
                Le DPE des communes d'intervention
              </h2>
              <p className="mt-3 text-text-secondary">
                Distribution des étiquettes DPE, nombre de logements F/G,
                marché de l'audit énergétique — par commune.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {FEATURED_VILLES.map((v) => (
              <Link
                key={v.slug}
                to={`/dpe-existant/${v.slug}`}
                className="group flex items-center justify-between rounded-md border border-border bg-surface px-4 py-3 hover:border-accent hover:bg-accent-light/30 transition-colors"
              >
                <span className="text-sm font-medium text-text">{v.name}</span>
                <ArrowRight className="h-4 w-4 text-text-secondary group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>

          <ScrollReveal>
            <p className="mt-6 text-center text-xs text-text-secondary">
              Données officielles ADEME — base{' '}
              <a
                href="https://data.ademe.fr/datasets/dpe03existant"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-text"
              >
                DPE Logements existants (depuis juillet 2021)
              </a>
              . Mise à jour quotidienne.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

function DpeRow({ dpe }) {
  return (
    <div className="rounded-md border border-border bg-surface p-4 hover:border-accent/30 transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center gap-1 shrink-0">
          <DpeBadge letter={dpe.etiquette_dpe} size="lg" label="DPE" />
          <span className="text-[10px] text-text-secondary uppercase tracking-wide">DPE</span>
        </div>
        <div className="flex flex-col items-center gap-1 shrink-0">
          <DpeBadge letter={dpe.etiquette_ges} size="lg" label="GES" />
          <span className="text-[10px] text-text-secondary uppercase tracking-wide">GES</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-text truncate">
            {dpe.adresse_ban || '—'}
          </p>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-secondary">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formatDate(dpe.date_etablissement_dpe)}
            </span>
            {dpe.surface_habitable_logement && (
              <span className="inline-flex items-center gap-1">
                <Maximize className="h-3 w-3" />
                {Math.round(dpe.surface_habitable_logement)} m²
              </span>
            )}
            {dpe.type_batiment && (
              <span className="inline-flex items-center gap-1">
                <Building className="h-3 w-3" />
                {dpe.type_batiment}
              </span>
            )}
            {dpe.annee_construction && (
              <span>Construction {dpe.annee_construction}</span>
            )}
          </div>
          {dpe.numero_dpe && (
            <p className="mt-1 text-[11px] text-text-secondary font-mono">
              N° {dpe.numero_dpe}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
