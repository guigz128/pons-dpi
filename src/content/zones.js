// Mini-hubs par zone géographique (silo : index → zone → commune).
// Source unique de l'affectation commune → zone (ZONE_OF) + contenu éditorial
// par zone. Les hubs départementaux (herault/gard/aude) sont remplacés par ces
// zones (301 dans vercel.json). Narbonne (Aude, isolée) n'a pas de zone.

import { villes } from './villes.js'

// Affectation commune → slug de zone (110 communes ; narbonne = null).
export const ZONE_OF = {
  // Montpellier et sa première couronne
  montpellier: 'montpellier-couronne', 'castelnau-le-lez': 'montpellier-couronne', lattes: 'montpellier-couronne', perols: 'montpellier-couronne', 'le-cres': 'montpellier-couronne', clapiers: 'montpellier-couronne', jacou: 'montpellier-couronne', juvignac: 'montpellier-couronne', grabels: 'montpellier-couronne', 'saint-jean-de-vedas': 'montpellier-couronne', laverune: 'montpellier-couronne', 'saint-georges-d-orques': 'montpellier-couronne', pignan: 'montpellier-couronne', fabregues: 'montpellier-couronne', saussan: 'montpellier-couronne', cournonterral: 'montpellier-couronne', cournonsec: 'montpellier-couronne', 'murviel-les-montpellier': 'montpellier-couronne', 'villeneuve-les-maguelone': 'montpellier-couronne', 'palavas-les-flots': 'montpellier-couronne', 'montferrier-sur-lez': 'montpellier-couronne',
  // Grand Pic Saint-Loup
  'saint-gely-du-fesc': 'grand-pic-saint-loup', 'saint-clement-de-riviere': 'grand-pic-saint-loup', 'prades-le-lez': 'grand-pic-saint-loup', 'saint-mathieu-de-treviers': 'grand-pic-saint-loup', 'les-matelles': 'grand-pic-saint-loup', 'le-triadou': 'grand-pic-saint-loup', assas: 'grand-pic-saint-loup', 'saint-vincent-de-barbeyrargues': 'grand-pic-saint-loup', teyran: 'grand-pic-saint-loup', vailhauques: 'grand-pic-saint-loup', combaillaux: 'grand-pic-saint-loup', montarnaud: 'grand-pic-saint-loup', 'saint-paul-et-valmalle': 'grand-pic-saint-loup', 'saint-martin-de-londres': 'grand-pic-saint-loup', claret: 'grand-pic-saint-loup',
  // Pays de l'Or et est montpelliérain
  mauguio: 'pays-de-l-or', 'saint-aunes': 'pays-de-l-or', baillargues: 'pays-de-l-or', vendargues: 'pays-de-l-or', castries: 'pays-de-l-or', beaulieu: 'pays-de-l-or', restinclieres: 'pays-de-l-or', 'saint-genies-des-mourgues': 'pays-de-l-or', sussargues: 'pays-de-l-or', lansargues: 'pays-de-l-or', candillargues: 'pays-de-l-or', mudaison: 'pays-de-l-or', valergues: 'pays-de-l-or', 'saint-bres': 'pays-de-l-or', 'la-grande-motte': 'pays-de-l-or', 'saint-drezery': 'pays-de-l-or',
  // Pays de Lunel et vallée du Vidourle
  lunel: 'pays-de-lunel', 'lunel-viel': 'pays-de-lunel', marsillargues: 'pays-de-lunel', 'saint-just': 'pays-de-lunel', saturargues: 'pays-de-lunel', boisseron: 'pays-de-lunel', saussines: 'pays-de-lunel', villetelle: 'pays-de-lunel', 'saint-series': 'pays-de-lunel', 'saint-nazaire-de-pezan': 'pays-de-lunel', 'entre-vignes': 'pays-de-lunel',
  // Bassin de Thau et Gardiole
  sete: 'bassin-de-thau', frontignan: 'bassin-de-thau', meze: 'bassin-de-thau', marseillan: 'bassin-de-thau', 'balaruc-les-bains': 'bassin-de-thau', 'balaruc-le-vieux': 'bassin-de-thau', bouzigues: 'bassin-de-thau', loupian: 'bassin-de-thau', gigean: 'bassin-de-thau', poussan: 'bassin-de-thau', villeveyrac: 'bassin-de-thau', 'vic-la-gardiole': 'bassin-de-thau', mireval: 'bassin-de-thau', montbazin: 'bassin-de-thau',
  // Cœur d'Hérault et vallée de l'Hérault
  'clermont-l-herault': 'coeur-d-herault', gignac: 'coeur-d-herault', aniane: 'coeur-d-herault', 'saint-andre-de-sangonis': 'coeur-d-herault', canet: 'coeur-d-herault', paulhan: 'coeur-d-herault', aspiran: 'coeur-d-herault', ceyras: 'coeur-d-herault', nebian: 'coeur-d-herault', 'saint-felix-de-lodez': 'coeur-d-herault', 'le-pouget': 'coeur-d-herault', montpeyroux: 'coeur-d-herault', 'saint-jean-de-fos': 'coeur-d-herault', 'saint-guilhem-le-desert': 'coeur-d-herault', pezenas: 'coeur-d-herault', montagnac: 'coeur-d-herault',
  // Gard rhodanien et nîmois
  'bagnols-sur-ceze': 'gard-rhodanien', aramon: 'gard-rhodanien', marguerittes: 'gard-rhodanien', manduel: 'gard-rhodanien', beaucaire: 'gard-rhodanien', garons: 'gard-rhodanien', bellegarde: 'gard-rhodanien', 'saint-gilles': 'gard-rhodanien', milhaud: 'gard-rhodanien', generac: 'gard-rhodanien', aubord: 'gard-rhodanien',
  // Petite Camargue et Vaunage
  sommieres: 'petite-camargue', calvisson: 'petite-camargue', vergeze: 'petite-camargue', codognan: 'petite-camargue', uchaud: 'petite-camargue', aimargues: 'petite-camargue', beauvoisin: 'petite-camargue', vauvert: 'petite-camargue', 'saint-laurent-d-aigouze': 'petite-camargue', 'aigues-mortes': 'petite-camargue', 'le-grau-du-roi': 'petite-camargue', 'gallargues-le-montueux': 'petite-camargue', aubais: 'petite-camargue',
  // Outlier (Aude) — pas de mini-hub
  narbonne: null,
}

const G = {
  prix: { href: '/blog/prix-diagnostic-immobilier-montpellier-2026/', label: 'Prix des diagnostics en 2026' },
  liste: { href: '/blog/liste-diagnostics-obligatoires-vente-immobilier/', label: 'Diagnostics obligatoires pour vendre' },
  venteMtp: { href: '/blog/diagnostics-vente-montpellier/', label: 'Vendre à Montpellier : le guide local' },
  maisonAncienne: { href: '/blog/diagnostics-vente-maison-ancienne/', label: 'Diagnostics d’une maison ancienne' },
  termites: { href: '/blog/diagnostic-termites-montpellier-obligations/', label: 'Diagnostic termites : obligations' },
  dpeFG: { href: '/blog/dpe-f-g-location-calendrier-interdiction/', label: 'DPE F ou G : interdictions de location' },
}

// Ordre = ordre d'affichage sur le hub index (cœur de zone d'abord).
export const zones = [
  {
    slug: 'montpellier-couronne',
    name: 'Montpellier et sa première couronne',
    shortName: 'Montpellier & couronne',
    departementCode: '34',
    tagline: 'Le cœur de ma zone d’intervention',
    intro:
      "Montpellier et sa première couronne concentrent le marché immobilier le plus dense et le plus tendu de l’Hérault : centre médiéval de l’Écusson, ZAC contemporaines (Port Marianne, Antigone) et une couronne pavillonnaire très recherchée (Castelnau-le-Lez, Lattes, Saint-Jean-de-Védas, Grabels…). Le parc y est majoritairement en copropriété au centre, pavillonnaire en périphérie.",
    contexte:
      "Toute la métropole est classée en zone termites (diagnostic obligatoire à la vente). Le risque inondation est marqué le long du Lez et de la Mosson, et la submersion marine concerne le littoral (Villeneuve-lès-Maguelone, Palavas-les-Flots). Le centre ancien (bâti pré-1949) déclenche fréquemment plomb et amiante.",
    blogLinks: [G.venteMtp, G.prix, G.liste],
  },
  {
    slug: 'grand-pic-saint-loup',
    name: 'Grand Pic Saint-Loup',
    shortName: 'Grand Pic Saint-Loup',
    departementCode: '34',
    tagline: 'Villages de garrigue au nord de Montpellier',
    intro:
      "Au nord de Montpellier, le Grand Pic Saint-Loup aligne des villages résidentiels de garrigue très prisés — de Saint-Gély-du-Fesc et Saint-Clément-de-Rivière à Prades-le-Lez, ma commune de rattachement. Le marché y est dominé par la maison individuelle, entre noyaux anciens en pierre et lotissements récents.",
    contexte:
      "Secteur exposé au risque feu de forêt (garrigues du Pic Saint-Loup, obligation de débroussaillement), à l’inondation par crues torrentielles et classé en sismicité faible (zone 2). Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",
    blogLinks: [G.venteMtp, G.termites, G.prix],
  },
  {
    slug: 'pays-de-l-or',
    name: 'Pays de l’Or et est montpelliérain',
    shortName: 'Pays de l’Or',
    departementCode: '34',
    tagline: 'De la plaine de l’étang de l’Or au littoral',
    intro:
      "À l’est de Montpellier, le Pays de l’Or descend de la plaine agricole (Mauguio, Baillargues, Lansargues) jusqu’au littoral de La Grande-Motte, en passant par les villages en forte croissance de l’étang de l’Or (Candillargues, Mudaison, Valergues). Le parc y est très majoritairement pavillonnaire et récent.",
    contexte:
      "La plaine est exposée à l’inondation par débordement lent des cours d’eau (Salaison, Bérange, Viredonne) et à la submersion marine sur la frange littorale, dans le périmètre du TRI Montpellier-Lunel-Mauguio-Palavas. Termites obligatoire à la vente sur tout le secteur.",
    blogLinks: [G.venteMtp, G.prix, G.liste],
  },
  {
    slug: 'pays-de-lunel',
    name: 'Pays de Lunel et vallée du Vidourle',
    shortName: 'Pays de Lunel',
    departementCode: '34',
    tagline: 'Le Lunellois et le Vidourle',
    intro:
      "Entre Montpellier et le Gard, le Pays de Lunel mêle la ville-centre de Lunel, la plaine viticole (Marsillargues, Saint-Just) et les villages de garrigue de la vallée du Vidourle (Boisseron, Saussines, Villetelle, Saint-Sériès). Le marché y est plus accessible, à dominante de maisons individuelles.",
    contexte:
      "La vallée du Vidourle est exposée aux crues cévenoles (les « Vidourlades »), documentées par des atlas des zones inondables et des PPRi. Termites obligatoire à la vente, sismicité faible (zone 2).",
    blogLinks: [G.liste, G.dpeFG, G.prix],
  },
  {
    slug: 'bassin-de-thau',
    name: 'Bassin de Thau et Gardiole',
    shortName: 'Bassin de Thau',
    departementCode: '34',
    tagline: 'La lagune de Thau, de Sète à Mèze',
    intro:
      "Autour de la lagune de Thau, le marché immobilier est contrasté : ports et villages ostréicoles (Mèze, Bouzigues, Marseillan), station thermale de Balaruc-les-Bains, ville dense de Sète, et communes en plein essor au pied de la Gardiole (Gigean, Poussan). Beaucoup d’appartements et de résidences secondaires sur le pourtour de l’étang.",
    contexte:
      "Le pourtour de l’étang est exposé à la submersion marine et à l’inondation, dans le périmètre du TRI Sète-Frontignan-Marseillan. Le massif de la Gardiole ajoute le risque feu de forêt. Termites obligatoire à la vente.",
    blogLinks: [G.maisonAncienne, G.termites, G.prix],
  },
  {
    slug: 'coeur-d-herault',
    name: 'Cœur d’Hérault et vallée de l’Hérault',
    shortName: 'Cœur d’Hérault',
    departementCode: '34',
    tagline: 'De Clermont-l’Hérault à Pézenas',
    intro:
      "Le long de l’A750, le Cœur d’Hérault déroule la vallée du fleuve Hérault et ses villages viticoles — Gignac, Aniane, Saint-Guilhem-le-Désert — autour du pôle de Clermont-l’Hérault et du lac du Salagou, jusqu’à la cité de caractère de Pézenas. Un marché plus accessible, à forte dominante de maisons, avec un patrimoine ancien conséquent.",
    contexte:
      "Risque inondation par le fleuve Hérault, la Lergue et le Salagou, retrait-gonflement des argiles très répandu, et potentiel radon élevé (catégorie 3) sur le secteur de Clermont-l’Hérault et Ceyras. Le bâti ancien de Pézenas (secteur sauvegardé) rend plomb et amiante quasi systématiques.",
    blogLinks: [G.maisonAncienne, G.liste, G.prix],
  },
  {
    slug: 'gard-rhodanien',
    name: 'Gard rhodanien et nîmois',
    shortName: 'Gard rhodanien',
    departementCode: '30',
    tagline: 'De la vallée du Rhône à Nîmes Métropole',
    intro:
      "À l’est de l’Hérault, ce secteur couvre la vallée du Rhône (Bagnols-sur-Cèze, Aramon, Beaucaire) et la couronne est de Nîmes Métropole (Marguerittes, Manduel, Milhaud, Saint-Gilles). Un marché accessible, avec un parc historique important et une faible densité de diagnostiqueurs hors Nîmes.",
    contexte:
      "Risque inondation par débordement du Rhône et de ses affluents, PPRi nombreux et régulièrement révisés. Le diagnostic termites est obligatoire dans les communes classées par arrêté préfectoral (une grande partie du sud du département).",
    blogLinks: [G.liste, G.maisonAncienne, G.prix],
  },
  {
    slug: 'petite-camargue',
    name: 'Petite Camargue et Vaunage',
    shortName: 'Petite Camargue',
    departementCode: '30',
    tagline: 'Du Vidourle au littoral camarguais',
    intro:
      "Au sud du Gard, la Petite Camargue et la Vaunage s’étendent des villages viticoles du Vidourle (Sommières, Vergèze, Calvisson) jusqu’au littoral d’Aigues-Mortes et du Grau-du-Roi, en passant par Vauvert et Beauvoisin. Un secteur touristique et viticole, au parc mêlant centres anciens et résidences de villégiature.",
    contexte:
      "Cumul de risques : crues cévenoles du Vidourle et du Vistre, submersion marine sur la frange littorale (Aigues-Mortes, Le Grau-du-Roi), PPRi étendus. Termites obligatoire dans les communes classées par arrêté préfectoral.",
    blogLinks: [G.liste, G.maisonAncienne, G.prix],
  },
]

export function getZoneBySlug(slug) {
  return zones.find((z) => z.slug === slug) || null
}

export function getZoneSlugOfVille(villeSlug) {
  return ZONE_OF[villeSlug] ?? null
}

export function getZoneOfVille(villeSlug) {
  const s = ZONE_OF[villeSlug]
  return s ? getZoneBySlug(s) : null
}

// Communes d'une zone, triées par population décroissante.
export function getVillesByZone(zoneSlug) {
  return villes
    .filter((v) => ZONE_OF[v.slug] === zoneSlug)
    .sort((a, b) => (b.population || 0) - (a.population || 0))
}

// Zones adjacentes (cross-link entre mini-hubs) — voisinage géographique éditorial.
export const ADJACENT_ZONES = {
  'montpellier-couronne': ['grand-pic-saint-loup', 'pays-de-l-or', 'bassin-de-thau'],
  'grand-pic-saint-loup': ['montpellier-couronne', 'coeur-d-herault', 'pays-de-l-or'],
  'pays-de-l-or': ['montpellier-couronne', 'pays-de-lunel', 'grand-pic-saint-loup'],
  'pays-de-lunel': ['pays-de-l-or', 'petite-camargue', 'gard-rhodanien'],
  'bassin-de-thau': ['montpellier-couronne', 'coeur-d-herault'],
  'coeur-d-herault': ['bassin-de-thau', 'grand-pic-saint-loup', 'montpellier-couronne'],
  'gard-rhodanien': ['petite-camargue', 'pays-de-lunel'],
  'petite-camargue': ['pays-de-lunel', 'gard-rhodanien'],
}

export function getAdjacentZones(zoneSlug) {
  return (ADJACENT_ZONES[zoneSlug] || []).map(getZoneBySlug).filter(Boolean)
}
