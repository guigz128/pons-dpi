import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'
import DpeAddressSearch from '../components/sections/DpeAddressSearch'

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

export default function DpeExistant() {
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
              <DpeAddressSearch autoFocus />
            </div>
          </ScrollReveal>
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
