export const villes = [
  {
    slug: 'montpellier',
    name: 'Montpellier',
    nameSeo: 'Montpellier (34)',
    codePostal: '34000',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6107, lng: 3.8767 },
    distanceFromBaseKm: 8,
    travelTimeMin: 15,
    inCoreZone: true,
    inOuterZone: false,

    population: 310240,
    nbLogements: 175000,
    pctResidencesSecondaires: 5.2,
    pctMaisons: 14,
    pctAppartements: 86,
    surfaceMoyenne: 62,
    surfaceMoyenneAppartement: 51,
    surfaceMoyenneMaison: 110,
    prixM2Moyen: 3439,
    prixM2Maison: 4180,
    prixM2Appartement: 3325,
    dpeMoyenKwh: 195,
    dpeMoyenCo2: 28,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRI Basse vallée du Lez et de la Mosson — approuvé le 13/01/2004 (débordement de cours d'eau et ruissellement). Révision prescrite le 22/10/2025.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Le parc montpelliérain est dominé par la copropriété (86 % des résidences principales) avec un mix très large : centre médiéval de l'Écusson en classe F-G, faubourgs des années 1970-1990 en D-E, ZAC contemporaines (Port Marianne, Antigone) en B-C. Le DPE conditionne la valeur du bien à la vente comme à la location.",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre ancien (Écusson, Beaux-Arts, Aiguelongue) et l'essentiel des immeubles construits entre 1949 et 1997 — soit la majorité du parc montpelliérain — déclenchent le repérage amiante en vente. Indispensable et quasi-systématique sur ce périmètre.",
      },
      {
        slug: 'termites',
        whyHere:
          "L'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Montpellier, sans exception, particulièrement scruté en centre ancien et faubourgs où les charpentes anciennes sont vulnérables.",
      },
    ],

    intro:
      "Montpellier, capitale de l'Hérault et 9e aire urbaine de France, présente un marché immobilier dense et diversifié. Du centre médiéval de l'Écusson aux extensions contemporaines de Port Marianne, le parc reflète plus de huit siècles de construction — chaque période ayant ses propres enjeux en termes de diagnostics obligatoires.",

    parcImmoNote:
      "Le parc montpelliérain est dominé par les appartements en copropriété (86 % des résidences principales). Le centre ancien (Écusson, Beaux-Arts) concentre un bâti antérieur à 1949 — plomb fréquent, amiante quasi-systématique. Les extensions des années 1960-1990 (Mosson, Croix d'Argent, Près d'Arènes) déclenchent presque toujours les diagnostics électricité et gaz au-delà des 15 ans. Les ZAC récentes (Antigone post-1980, Port Marianne post-2000) restent en classe énergétique correcte mais demandent toujours DPE et ERP.",

    enjeuxLocaux:
      "Le PPRI du Lez et de la Mosson, approuvé le 13/01/2004, couvre une partie significative de la commune et fait l'objet d'une révision prescrite en octobre 2025. Les quartiers proches du Lez (Pompignane, Richter), de la Mosson (Mosson, Tonnelles) et de leurs affluents sont concernés par le risque inondation par débordement et ruissellement. L'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Montpellier est à 15 minutes de Prades-le-Lez par la D17 ou l'A750 — intervention sous 48 h garantie sur l'ensemble de la commune et sa première couronne.",

    quartiersTypiques: [
      'Écusson (centre médiéval pré-1949)',
      'Antigone et Port Marianne (extensions modernes)',
      'Beaux-Arts, Boutonnet, Aiguelongue (faubourgs traditionnels)',
      'Mosson, Croix d\'Argent, Près d\'Arènes (collectif années 1960-1990)',
    ],

    communesLimitrophes: ['Castelnau-le-Lez', 'Lattes', 'Saint-Jean-de-Védas', 'Juvignac', 'Grabels', 'Clapiers'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Montpellier ?",
        a: "Pour toute vente à Montpellier, le DPE, l'ERP et le diagnostic termites sont systématiques. Selon l'âge et la nature du bien : amiante (avant 1997, fréquent dans le centre ancien et les faubourgs), plomb (avant 1949, quasi-systématique dans l'Écusson), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Montpellier ?",
        a: "À Montpellier, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC. Le pack vente maison (avec termites en plus) démarre à 380 € TTC. Aucun frais de déplacement n'est appliqué sur la commune et sa première couronne.",
      },
      {
        q: "Sous quel délai intervenez-vous à Montpellier ?",
        a: "Montpellier est à 15 minutes de Prades-le-Lez par la D17 ou l'A750. L'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h ouvrées après l'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Montpellier ?",
        a: "Une partie significative de Montpellier est couverte par le PPRI Basse vallée du Lez et de la Mosson, approuvé le 13/01/2004 et en révision depuis octobre 2025. Les quartiers proches du Lez, de la Mosson et de leurs affluents (Verdansson, Chambéry, Lironde, Rieucoulon) sont concernés. L'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'lunel',
    name: 'Lunel',
    nameSeo: 'Lunel (34)',
    codePostal: '34400',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6772, lng: 4.1366 },
    distanceFromBaseKm: 35,
    travelTimeMin: 30,
    inCoreZone: false,
    inOuterZone: true,

    population: 18404,
    nbLogements: 11182,
    pctResidencesSecondaires: 1.9,
    pctMaisons: 64,
    pctAppartements: 36,
    surfaceMoyenne: 107,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 134,
    prixM2Moyen: 2330,
    prixM2Maison: 2311,
    prixM2Appartement: 2403,
    dpeMoyenKwh: 161,
    dpeMoyenCo2: 18,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: true,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRI Vidourle Basse plaine — approuvé le 15/09/2009 (crue à débordement lent + submersion marine)",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Le DPE moyen lunellois est de 161 kWhEP/m².an pour 18 kgCO₂/m².an, soit une classe C. Le parc ancien des faubourgs et les pavillons des années 1970-1990 concentrent toutefois les passoires thermiques — un DPE rigoureux fait souvent la différence à la vente.",
      },
      {
        slug: 'termites',
        whyHere:
          "L'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Lunel, sans exception.",
      },
      {
        slug: 'erp',
        whyHere:
          "Une partie de la commune est couverte par le PPRI Vidourle (inondation et submersion marine au sud). L'État des Risques et Pollutions est systématique et particulièrement scruté par les acquéreurs.",
      },
    ],

    intro:
      "Lunel occupe une position stratégique entre Nîmes et Montpellier, offrant un paysage immobilier contrasté qui reflète son évolution, d'un cœur historique marqué par l'art de vivre camarguais vers une zone résidentielle moderne et dynamique.",

    parcImmoNote:
      "Le parc lunellois est dominé par la maison individuelle (64 % du marché) avec une surface moyenne de 134 m², caractéristique d'une ville à dominante pavillonnaire. Le centre ancien et les faubourgs concentrent un bâti antérieur à 1949 — plomb fréquent — tandis que les extensions des années 1970-1990 déclenchent quasi-systématiquement les diagnostics électricité et gaz au-delà des 15 ans d'installation.",

    enjeuxLocaux:
      "La proximité du Vidourle place une partie des biens lunellois en zone inondable réglementée par PPRI, ce qui rend l'État des Risques et Pollutions (ERP) systématique et particulièrement scruté par les acquéreurs. La submersion marine concerne le sud de la commune. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Lunel est à 30 minutes de Prades-le-Lez via l'A9 — intervention sous 48 h garantie sur la commune et sa couronne (Lunel-Viel, Marsillargues, Saint-Just, Saturargues).",

    quartiersTypiques: [
      'Centre ancien',
      'Faubourgs et abords du Vidourle',
      'Lotissements pavillonnaires (années 1970-1990)',
      'Extensions résidentielles récentes',
    ],

    communesLimitrophes: ['Lunel-Viel', 'Marsillargues', 'Saint-Just', 'Saturargues', 'Boisseron'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Lunel ?",
        a: "Pour toute vente à Lunel, le DPE, l'ERP et le diagnostic termites sont systématiques. Selon l'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Lunel ?",
        a: "À Lunel, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC. Le pack vente maison (avec termites en plus) démarre à 380 € TTC. Aucun frais de déplacement n'est appliqué sur la commune.",
      },
      {
        q: "Sous quel délai intervenez-vous à Lunel ?",
        a: "Lunel est à 30 minutes de Prades-le-Lez via l'A9. L'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h après l'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Lunel ?",
        a: "Une partie de Lunel est couverte par le PPRI Vidourle Basse plaine, approuvé le 15/09/2009 (risque de crue à débordement lent et submersion marine au sud). L'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
]

export function getVilleBySlug(slug) {
  return villes.find((v) => v.slug === slug)
}

export function getVillesByDepartement(deptCode) {
  return villes.filter((v) => v.departementCode === deptCode)
}

// Distance Haversine en km entre deux coordonnées GPS
function haversineKm(a, b) {
  if (!a || !b) return Number.POSITIVE_INFINITY
  const R = 6371
  const toRad = (deg) => (deg * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(x))
}

// Retourne les N villes les plus proches d'un slug donné (excluant la ville elle-même).
// Utilisé pour les cross-links géographiques sur les pages-villes.
export function getNearestVilles(slug, limit = 6) {
  const current = getVilleBySlug(slug)
  if (!current) return []
  return villes
    .filter((v) => v.slug !== slug)
    .map((v) => ({ ...v, _distanceKm: haversineKm(current.coords, v.coords) }))
    .sort((a, b) => a._distanceKm - b._distanceKm)
    .slice(0, limit)
}

// Retourne les N villes du cœur de zone (inCoreZone d'abord, puis ordre par distance Prades-le-Lez).
// Utilisé pour les cross-links statiques (footer, pages-services).
export function getCoreVilles(limit = 6) {
  return [...villes]
    .sort((a, b) => {
      // Cœur d'abord
      if (a.inCoreZone !== b.inCoreZone) return a.inCoreZone ? -1 : 1
      // Puis par distance Prades-le-Lez
      const distA = a.distanceFromBaseKm ?? Number.POSITIVE_INFINITY
      const distB = b.distanceFromBaseKm ?? Number.POSITIVE_INFINITY
      return distA - distB
    })
    .slice(0, limit)
}
