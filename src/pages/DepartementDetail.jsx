import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, MapPin, Users, Home as HomeIcon, Euro } from 'lucide-react'
import { villes } from '../content/villes'
import Cta from '../components/sections/Cta'
import Card from '../components/ui/Card'
import ScrollReveal from '../components/ui/ScrollReveal'

const DEPT_INFO = {
  '34': {
    code: '34',
    name: 'Hérault',
    slug: 'herault',
    region: 'Occitanie',
    prefecture: 'Montpellier',
    intro:
      "L'Hérault, département le plus dynamique d'Occitanie, présente un marché immobilier tendu autour de Montpellier (1,2 M habitants) et une couronne attractive (Castelnau, Lattes, Saint-Gély, Pérols, Mauguio…). Tissu dense de diagnostiqueurs, prix au m² moyen 4 500 € sur la métropole, parc majoritairement post-1970 avec un centre médiéval bien identifié.",
    contexte:
      "Le département est intégralement classé en zone termites par arrêté préfectoral — diagnostic obligatoire pour toute vente. Risques inondation forts via le Lez, la Mosson, le Salaison, le Vidourle et leurs affluents. Submersion marine sur le littoral (Sète, Frontignan, Villeneuve-lès-Maguelone, Palavas).",
  },
  '30': {
    code: '30',
    name: 'Gard',
    slug: 'gard',
    region: 'Occitanie',
    prefecture: 'Nîmes',
    intro:
      "Le Gard combine littoral (Aigues-Mortes, Le Grau-du-Roi), plaine du Vidourle (Sommières, Vergèze, Marsillargues, Codognan), valée du Rhône (Aramon, Beaucaire, Bagnols-sur-Cèze) et hinterland varié. Marché immobilier accessible (2 000-4 000 €/m² en moyenne selon zone), parc historique conséquent, faible densité de diagnostiqueurs sur les communes hors Nîmes.",
    contexte:
      "Crues torrentielles du Vidourle (les « Vidourlades » documentées depuis le XIVe siècle), crue à débordement lent du Rhône, submersion marine sur la frange littorale (Aigues-Mortes, Le Grau-du-Roi). PPRi nombreux et révisés régulièrement. Le diagnostic termites est obligatoire dans les zones classées par arrêté préfectoral (couvre la plupart du sud du département).",
  },
  '11': {
    code: '11',
    name: 'Aude',
    slug: 'aude',
    region: 'Occitanie',
    prefecture: 'Carcassonne',
    intro:
      "L'Aude étend la zone d'intervention vers l'ouest, avec Narbonne (57 587 habitants) comme principal pôle. Marché dynamique tiré par le tourisme littoral (Gruissan, La Nouvelle), prix au m² accessible (2 450 € en moyenne sur Narbonne), parc varié entre centre médiéval et extensions modernes.",
    contexte:
      "TRI Aude (PPRi crue à débordement) et PPRL submersion marine sur la frange littorale. Diagnostic termites obligatoire dans les zones classées (couvre Narbonne et le Narbonnais).",
  },
}

export default function DepartementDetail({ deptCode }) {
  const dept = DEPT_INFO[deptCode]
  if (!dept) return null

  const villesDept = villes.filter((v) => v.departementCode === deptCode)
  const url = `https://www.pons-dpi.fr/diagnostic-immobilier/${dept.slug}`

  // Stats agrégées
  const totalPop = villesDept.reduce((s, v) => s + (v.population || 0), 0)
  const prixMin = Math.min(...villesDept.map((v) => v.prixM2Moyen).filter(Boolean))
  const prixMax = Math.max(...villesDept.map((v) => v.prixM2Moyen).filter(Boolean))
  const prixMoy = Math.round(
    villesDept.reduce((s, v) => s + (v.prixM2Moyen || 0), 0) / villesDept.length,
  )

  const pageTitle = `Diagnostic immobilier ${dept.name} (${dept.code}) — DPE, amiante, termites | Pons DPI`
  const pageDescription = `Diagnostic immobilier dans le ${dept.code === '11' ? "" : ''}${dept.name} : ${villesDept.length} commune${villesDept.length > 1 ? 's' : ''} avec page dédiée. DPE, amiante, plomb, électricité, gaz, termites. Activité dès mars 2027.`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#page`,
        name: `Diagnostic immobilier ${dept.name}`,
        description: pageDescription,
        url,
        isPartOf: { '@id': 'https://www.pons-dpi.fr/diagnostic-immobilier' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.pons-dpi.fr/' },
          { '@type': 'ListItem', position: 2, name: "Zones d'intervention", item: 'https://www.pons-dpi.fr/diagnostic-immobilier' },
          { '@type': 'ListItem', position: 3, name: dept.name, item: url },
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
        <meta property="og:title" content={`Diagnostic immobilier ${dept.name} | Pons DPI`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="fr_FR" />
        <meta name="geo.region" content={`FR-${dept.code}`} />
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
              Département {dept.code} · {dept.region}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text leading-[1.05]">
              Diagnostic immobilier en <span className="text-highlight">{dept.name}</span>
            </h1>

            <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
              {dept.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 bg-stone-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ScrollReveal>
              <Card>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-3">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-text-secondary">Communes couvertes</p>
                <p className="mt-1 text-2xl font-bold text-text">
                  {villesDept.length}
                </p>
                <p className="mt-1 text-xs text-text-secondary">page{villesDept.length > 1 ? 's' : ''} dédiée{villesDept.length > 1 ? 's' : ''}</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <Card>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-3">
                  <Users className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-text-secondary">Population cumulée</p>
                <p className="mt-1 text-2xl font-bold text-text">
                  {(totalPop / 1000).toFixed(0)}k
                </p>
                <p className="mt-1 text-xs text-text-secondary">habitants</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-3">
                  <Euro className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-text-secondary">Prix m² moyen</p>
                <p className="mt-1 text-2xl font-bold text-text">
                  {prixMoy.toLocaleString('fr-FR')} €
                </p>
                <p className="mt-1 text-xs text-text-secondary">
                  {prixMin.toLocaleString('fr-FR')} - {prixMax.toLocaleString('fr-FR')} €
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <Card>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-3">
                  <HomeIcon className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-text-secondary">Préfecture</p>
                <p className="mt-1 text-2xl font-bold text-text">
                  {dept.prefecture}
                </p>
                <p className="mt-1 text-xs text-text-secondary">{dept.region}</p>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="mt-10 max-w-3xl mx-auto text-center text-text-secondary leading-relaxed">
              {dept.contexte}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Liste des villes */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-display text-3xl sm:text-4xl text-text">
                Communes couvertes en {dept.name}
              </h2>
              <p className="mt-3 text-text-secondary">
                {villesDept.length} page{villesDept.length > 1 ? 's' : ''} dédiée{villesDept.length > 1 ? 's' : ''} — marché immobilier local, risques PPRi, diagnostics prioritaires.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {villesDept
              .sort((a, b) => (b.population || 0) - (a.population || 0))
              .map((v, i) => (
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
                        <span className="text-xs font-normal text-text-secondary">
                          ({v.codePostal})
                        </span>
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {v.population != null
                          ? `${v.population.toLocaleString('fr-FR')} hab.`
                          : ''}
                        {v.prixM2Moyen != null
                          ? ` · ${v.prixM2Moyen.toLocaleString('fr-FR')} €/m²`
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

      <Cta />
    </>
  )
}
