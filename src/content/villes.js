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
    slug: 'castelnau-le-lez',
    name: 'Castelnau-le-Lez',
    nameSeo: 'Castelnau-le-Lez (34)',
    codePostal: '34170',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6386, lng: 3.9080 },
    distanceFromBaseKm: 5,
    travelTimeMin: 10,
    inCoreZone: true,
    inOuterZone: false,

    population: 28678,
    nbLogements: 11514,
    pctResidencesSecondaires: 2.0,
    pctMaisons: 42,
    pctAppartements: 58,
    surfaceMoyenne: 70,
    surfaceMoyenneAppartement: 56,
    surfaceMoyenneMaison: 110,
    prixM2Moyen: 4520,
    prixM2Maison: 5169,
    prixM2Appartement: 3772,
    dpeMoyenKwh: 165,
    dpeMoyenCo2: 22,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRI Castelnau-le-Lez — approuvé le 04/12/1998 (débordement du Lez et de la Salaison). Révision prescrite le 22/10/2025.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Castelnau combine un centre ancien (place Wilson, abords de l'église Saint-Jean-Baptiste) en classe D-E avec d'importantes extensions récentes (Eurêka, Mas de Rochet) en classe B-C. Le DPE pèse fortement dans la valorisation sur ce marché premium (4 520 €/m² en moyenne).",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre historique et les ensembles collectifs des années 1970-1990 (Sablassou, La Devèze) déclenchent quasi-systématiquement le repérage amiante en vente. Le repérage est indispensable sur la majorité du parc pré-1997.",
      },
      {
        slug: 'erp',
        whyHere:
          "Castelnau est exposée aux crues du Lez (les « Lézades » sont documentées depuis le XIVe siècle) et de la Salaison. Le PPRI couvre une partie significative du territoire et fait l'objet d'une révision prescrite le 22/10/2025 — l'État des Risques et Pollutions est particulièrement scruté lors des transactions.",
      },
    ],

    intro:
      "Castelnau-le-Lez, commune de la première couronne nord-est de Montpellier, connaît une croissance démographique exceptionnelle (+ 2 354 habitants en deux ans selon l'INSEE). Son marché immobilier reflète cette dynamique : prix élevés, parc en transformation rapide entre centre historique et nouveaux quartiers résidentiels.",

    parcImmoNote:
      "Le parc castelnauvien est mixte : 58 % d'appartements et 42 % de maisons, avec une croissance massive de l'offre collective (+91 % d'appartements en 5 ans). Le centre ancien autour de la place Wilson concentre un bâti antérieur à 1949 — plomb fréquent. Les extensions récentes (ZAC Eurêka, Mas de Rochet, Bois de Lansargues) alignent un parc post-2000 en classe énergétique correcte. Les collectifs des années 1970-1990 (Sablassou) déclenchent presque toujours les diagnostics électricité et gaz.",

    enjeuxLocaux:
      "Le PPRI de Castelnau-le-Lez, approuvé le 04/12/1998 et en cours de révision depuis octobre 2025, couvre les abords du Lez (à l'est) et de la Salaison (au nord). Le quartier Salaison-Pompignane, au sud de la voie ferrée, est particulièrement exposé au risque inondation par débordement et ruissellement. Les épisodes cévenols (fin d'été, automne) restent une réalité récurrente. L'État des Risques et Pollutions est systématique. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Castelnau-le-Lez est à 10 minutes de Prades-le-Lez par la D17 — intervention sous 48 h garantie sur l'ensemble de la commune et sa première couronne (Le Crès, Jacou, Clapiers, Vendargues).",

    quartiersTypiques: [
      'Centre ancien (place Wilson, église Saint-Jean-Baptiste)',
      'ZAC Eurêka et Mas de Rochet (résidentiel récent post-2000)',
      'Sablassou et La Devèze (collectif années 1970-1990)',
      'Salaison-Pompignane (sud voie ferrée, exposition inondation)',
    ],

    communesLimitrophes: ['Montpellier', 'Le Crès', 'Jacou', 'Clapiers', 'Vendargues'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Castelnau-le-Lez ?",
        a: "Pour toute vente à Castelnau-le-Lez, le DPE, l'ERP et le diagnostic termites sont systématiques. Selon l'âge et la nature du bien : amiante (avant 1997, fréquent dans le centre ancien et les collectifs Sablassou), plomb (avant 1949, dans le centre historique), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Castelnau-le-Lez ?",
        a: "À Castelnau-le-Lez, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC. Le pack vente maison (avec termites en plus) démarre à 380 € TTC. Aucun frais de déplacement n'est appliqué sur la commune.",
      },
      {
        q: "Sous quel délai intervenez-vous à Castelnau-le-Lez ?",
        a: "Castelnau-le-Lez est à 10 minutes de Prades-le-Lez par la D17. L'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h ouvrées après l'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Castelnau-le-Lez ?",
        a: "Une partie significative de Castelnau-le-Lez est couverte par le PPRI approuvé le 04/12/1998, en révision depuis octobre 2025. Les quartiers proches du Lez (Salaison-Pompignane) et de la Salaison sont particulièrement concernés par les épisodes cévenols. Les « Lézades » — crues historiques du Lez documentées depuis le XIVe siècle — restent une réalité. L'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'saint-gely-du-fesc',
    name: 'Saint-Gély-du-Fesc',
    nameSeo: 'Saint-Gély-du-Fesc (34)',
    codePostal: '34980',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6897, lng: 3.8100 },
    distanceFromBaseKm: 4,
    travelTimeMin: 10,
    inCoreZone: true,
    inOuterZone: false,

    population: 10945,
    nbLogements: 4345,
    pctResidencesSecondaires: 1.6,
    pctMaisons: 84,
    pctAppartements: 16,
    surfaceMoyenne: 110,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 130,
    prixM2Moyen: 4507,
    prixM2Maison: 4586,
    prixM2Appartement: 3992,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 24,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRI Lez (Bassin Versant) — approuvé le 11/05/2007 (débordement de cours d'eau, ruissellement). Concerne le Pézouillet, les affluents de la Lironde et du Lirou.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Saint-Gély-du-Fesc est dominée à 84 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation sur ce marché premium (4 507 €/m² en moyenne, marché tendu avec 13 % d'acheteurs de plus que de biens).",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre-village historique et les pavillons des années 1970-1990 (Mas) déclenchent le repérage amiante en vente. Les ZAC récentes post-1997 sont épargnées, mais elles restent minoritaires dans le parc actuel.",
      },
      {
        slug: 'termites',
        whyHere:
          "L'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Saint-Gély-du-Fesc — particulièrement scruté sur les pavillons individuels où la charpente bois est exposée.",
      },
    ],

    intro:
      "Saint-Gély-du-Fesc, commune résidentielle de la première couronne nord-ouest de Montpellier, est dominée à 84 % par des maisons individuelles. Marché tendu — 13 % d'acheteurs de plus que de biens, prix élevés (4 507 €/m²) — un profil très différent du reste de la Métropole.",

    parcImmoNote:
      "Le parc saint-gellois est exceptionnellement orienté maison individuelle (84 % du parc, contre 14 % à Montpellier). 75,8 % des résidences principales sont occupées par leurs propriétaires. Les maisons familiales de 6 pièces et plus représentent 33,5 % du parc, avec des surfaces majoritairement supérieures à 120 m². Les pavillons des années 1970-1990 (Mas) déclenchent presque toujours les diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2010) sont en classe énergétique correcte.",

    enjeuxLocaux:
      "Le PPRI Lez (Bassin Versant), approuvé le 11/05/2007, couvre les abords du Pézouillet et des affluents de la Lironde et du Lirou. Une partie de la commune est en zone inondable, principalement dans les vallées drainées vers la Mosson (nord-est) et le Lez (nord-ouest). L'État des Risques et Pollutions est systématique. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente, et le risque amiante reste élevé sur le parc pré-1997.",

    accessibilityNote:
      "Saint-Gély-du-Fesc est à 10 minutes de Prades-le-Lez (4 km) — c'est ma commune la plus proche, intervention sous 24 h fréquemment possible.",

    quartiersTypiques: [
      'Centre-village historique (église, place du marché)',
      'Les Mas (lotissements pavillonnaires 1970-2000)',
      'ZAC résidentielles récentes (post-2010)',
      'Domaines et résidences semi-fermées',
    ],

    communesLimitrophes: ['Saint-Clément-de-Rivière', 'Prades-le-Lez', 'Combaillaux', 'Les Matelles', 'Vailhauquès'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Saint-Gély-du-Fesc ?",
        a: "Pour toute vente à Saint-Gély-du-Fesc, le DPE, l'ERP et le diagnostic termites sont systématiques. Selon l'âge du bien : amiante (pavillons pré-1997 — fréquent), électricité et gaz (installations de plus de 15 ans, très courant sur les Mas années 1970-1990), plomb (centre-village pré-1949). Le mesurage Carrez ne s'applique qu'en copropriété — minoritaire à Saint-Gély (16 % du parc).",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Saint-Gély-du-Fesc ?",
        a: "À Saint-Gély-du-Fesc, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC — c'est le pack le plus demandé compte tenu du parc dominé par les maisons individuelles. Aucun frais de déplacement n'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Saint-Gély-du-Fesc ?",
        a: "Saint-Gély-du-Fesc est à 4 km de Prades-le-Lez, soit 10 minutes par la D17. C'est ma commune la plus proche — intervention sous 24 h fréquemment possible, garantie sous 48 h. Rapport remis sous 24 h ouvrées après l'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Saint-Gély-du-Fesc ?",
        a: "Une partie de Saint-Gély-du-Fesc est couverte par le PPRI Lez (approuvé 11/05/2007), notamment les abords du Pézouillet et des affluents de la Lironde et du Lirou. La commune est inscrite à l'Atlas des Zones Inondables depuis janvier 2001. L'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'lattes',
    name: 'Lattes',
    nameSeo: 'Lattes (34)',
    codePostal: '34970',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.5697, lng: 3.9047 },
    distanceFromBaseKm: 12,
    travelTimeMin: 20,
    inCoreZone: true,
    inOuterZone: false,

    population: 15841,
    nbLogements: 7200,
    pctResidencesSecondaires: 4.5,
    pctMaisons: 50,
    pctAppartements: 50,
    surfaceMoyenne: 75,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 105,
    prixM2Moyen: 4177,
    prixM2Maison: 4935,
    prixM2Appartement: 3730,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 25,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: true,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRI Basse vallée du Lez et de la Mosson — Lattes est en aval du bassin, exposition forte au débordement du Lez et au risque de submersion marine au sud (Lattes Plage).",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Lattes combine un centre village ancien (DPE D-E) avec d'importantes ZAC modernes (Port Ariane, Vasque, Fontvin) en classe B-C. Le DPE pèse fortement dans la valorisation, particulièrement sur les biens neufs des berges du Lez où le marché est très actif (4 177 €/m² en moyenne, 4 935 €/m² pour les maisons).",
      },
      {
        slug: 'erp',
        whyHere:
          "Lattes est en aval immédiat du bassin versant Lez-Mosson, en plaine alluviale, avec exposition forte au PPRI et au risque de submersion marine au sud (Lattes Plage, Saint-Sauveur). L'État des Risques et Pollutions est central dans toute transaction lattoise.",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre village historique et le faubourg de Maurin concentrent un bâti pré-1997 où le repérage amiante est quasi-systématique en vente. Les ZAC contemporaines (post-2000) sont épargnées mais représentent une part minoritaire du parc.",
      },
    ],

    intro:
      "Lattes, commune du sud immédiat de Montpellier, présente un marché immobilier dual : centre village historique d'un côté, vastes ZAC modernes (Port Ariane, Fontvin) de l'autre. Marché actif, prix élevés (4 177 €/m²), forte exposition aux risques d'inondation par sa position en aval du Lez.",

    parcImmoNote:
      "Le parc lattois est équilibré entre maisons (50 %) et appartements (50 %). Le centre village et le faubourg de Maurin concentrent le bâti ancien (pré-1949 dans le centre, années 1950-1990 sur Maurin). Les ZAC modernes — Port Ariane, Vasque, Fontvin — alignent un parc post-2000 en bonne classe énergétique. La saisonnalité touristique (proximité littoral) tire la part de résidences secondaires à 4,5 %.",

    enjeuxLocaux:
      "Lattes est en plaine alluviale, en aval immédiat du Lez et de ses affluents (Lironde, Rondelet). Le PPRI Lez-Mosson y a un impact majeur : une part très significative du territoire est en zone inondable réglementée. Le sud de la commune (Lattes Plage, Saint-Sauveur) ajoute le risque de submersion marine. L'État des Risques et Pollutions est systématique et particulièrement déterminant lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Lattes est à 20 minutes de Prades-le-Lez (12 km) — intervention sous 48 h garantie sur l'ensemble de la commune, des ZAC modernes du Lez aux quartiers historiques.",

    quartiersTypiques: [
      'Centre village historique (lattois ancien)',
      'Maurin (faubourg ouest, années 1950-1990)',
      'Port Ariane, Vasque, Fontvin (ZAC modernes post-2000 berges du Lez)',
      'Lattes Plage / Saint-Sauveur (sud, exposition submersion marine)',
    ],

    communesLimitrophes: ['Montpellier', 'Pérols', 'Mauguio', 'Saint-Jean-de-Védas', 'Villeneuve-lès-Maguelone'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Lattes ?",
        a: "Pour toute vente à Lattes, le DPE, l'ERP (particulièrement scruté à cause du PPRI Lez-Mosson) et le diagnostic termites sont systématiques. Selon le bien : amiante (centre village, Maurin pré-1997), plomb (centre historique pré-1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Lattes ?",
        a: "À Lattes, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC, le pack vente maison (avec termites en plus) à 380 € TTC. Aucun frais de déplacement n'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Lattes ?",
        a: "Lattes est à 20 minutes de Prades-le-Lez (12 km). L'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h ouvrées après l'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Lattes ?",
        a: "Une part très significative de Lattes est couverte par le PPRI Basse vallée du Lez et de la Mosson — la commune est en plaine alluviale en aval immédiat du Lez. Le sud de la commune (Lattes Plage, Saint-Sauveur) ajoute le risque de submersion marine. L'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'saint-jean-de-vedas',
    name: 'Saint-Jean-de-Védas',
    nameSeo: 'Saint-Jean-de-Védas (34)',
    codePostal: '34430',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.5826, lng: 3.8261 },
    distanceFromBaseKm: 12,
    travelTimeMin: 18,
    inCoreZone: true,
    inOuterZone: false,

    population: 15229,
    nbLogements: 4919,
    pctResidencesSecondaires: 1.8,
    pctMaisons: 70,
    pctAppartements: 30,
    surfaceMoyenne: 95,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 110,
    prixM2Moyen: 4443,
    prixM2Maison: 4551,
    prixM2Appartement: 3935,
    dpeMoyenKwh: 170,
    dpeMoyenCo2: 22,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRI Mosson — Saint-Jean-de-Védas est concernée par les débordements de la Mosson et de ses affluents (Lironde, Lirou). Une partie du territoire est en zone inondable réglementée.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Saint-Jean-de-Védas est dominée à 70 % par les maisons individuelles, majoritairement construites entre 1980 et 2010. Les ZAC récentes (Pradas, Mas de Grille, Roque Fraïsse) alignent un parc en bonne classe énergétique. Le DPE pèse fortement dans la valorisation sur ce marché actif (4 443 €/m² en moyenne).",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre village historique et les pavillons des années 1980-1990 (Bigos) déclenchent le repérage amiante en vente. Les ZAC post-1997 (Pradas, Mas de Grille moderne) sont épargnées.",
      },
      {
        slug: 'termites',
        whyHere:
          "L'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente — particulièrement scruté sur les pavillons individuels où la charpente bois est exposée.",
      },
    ],

    intro:
      "Saint-Jean-de-Védas, commune du sud-ouest de la Métropole de Montpellier, est dominée à 70 % par les maisons individuelles. Marché actif (4 443 €/m²), parc majoritairement post-1980, fort dynamisme commercial avec les ZAC Pradas et Mas de Grille — un profil résidentiel familial avec un tissu économique structuré.",

    parcImmoNote:
      "Le parc védasien est à dominante maison individuelle (70 %, 30 % d'appartements). Les maisons familiales de 4 pièces (80-100 m²) représentent la typologie principale. Le centre village historique concentre un bâti antérieur à 1949 où le plomb peut être présent. Les pavillons des années 1980-2000 (Bigos) déclenchent presque toujours les diagnostics électricité et gaz au-delà des 15 ans. Les ZAC récentes (Pradas, Roque Fraïsse) sont en classe énergétique correcte.",

    enjeuxLocaux:
      "Saint-Jean-de-Védas est concernée par le PPRI Mosson — les abords de la Mosson et de ses affluents (Lironde, Lirou) sont en zone inondable réglementée. L'État des Risques et Pollutions est systématique sur la commune. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente, et le risque amiante reste élevé sur le parc pré-1997.",

    accessibilityNote:
      "Saint-Jean-de-Védas est à 18 minutes de Prades-le-Lez (12 km) via la D116 et la D132 — intervention sous 48 h garantie sur l'ensemble de la commune.",

    quartiersTypiques: [
      'Centre village historique (église, cœur ancien)',
      'Pradas et Mas de Grille (ZAC commerciales et résidentielles)',
      'Bigos (lotissements pavillonnaires années 1980-2000)',
      'Roque Fraïsse (résidentiel récent post-2010)',
    ],

    communesLimitrophes: ['Montpellier', 'Lattes', 'Lavérune', 'Saussan', 'Cournonsec', 'Villeneuve-lès-Maguelone'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Saint-Jean-de-Védas ?",
        a: "Pour toute vente à Saint-Jean-de-Védas, le DPE, l'ERP et le diagnostic termites sont systématiques. Selon l'âge et la nature du bien : amiante (pavillons pré-1997, fréquent à Bigos), plomb (centre village pré-1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété (minoritaire vu que 70 % du parc est en maison individuelle).",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Saint-Jean-de-Védas ?",
        a: "À Saint-Jean-de-Védas, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC — c'est le pack le plus demandé compte tenu du parc dominé par les maisons individuelles. Pack vente appartement à 290 € TTC. Aucun frais de déplacement n'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Saint-Jean-de-Védas ?",
        a: "Saint-Jean-de-Védas est à 18 minutes de Prades-le-Lez (12 km) via la D116 et la D132. L'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h ouvrées après l'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Saint-Jean-de-Védas ?",
        a: "Une partie de Saint-Jean-de-Védas est couverte par le PPRI Mosson, notamment les abords de la Mosson et de ses affluents (Lironde, Lirou). L'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
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
