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

    image: {
      url: '/images/villes/montpellier.webp',
      alt: 'Place de la Comédie à Montpellier',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Place_de_la_Com%C3%A9die_(2377437375).jpg',
    },

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
        "PPRI Basse vallée du Lez et de la Mosson — approuvé le 13/01/2004 (débordement de cours d\'eau et ruissellement). Révision prescrite le 22/10/2025.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Le parc montpelliérain est dominé par la copropriété (86 % des résidences principales) avec un mix très large : centre médiéval de l\'Écusson en classe F-G, faubourgs des années 1970-1990 en D-E, ZAC contemporaines (Port Marianne, Antigone) en B-C. Le DPE conditionne la valeur du bien à la vente comme à la location.",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre ancien (Écusson, Beaux-Arts, Aiguelongue) et l\'essentiel des immeubles construits entre 1949 et 1997 — soit la majorité du parc montpelliérain — déclenchent le repérage amiante en vente. Indispensable et quasi-systématique sur ce périmètre.",
      },
      {
        slug: 'termites',
        whyHere:
          "L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Montpellier, sans exception, particulièrement scruté en centre ancien et faubourgs où les charpentes anciennes sont vulnérables.",
      },
    ],

    intro:
      "Montpellier, capitale de l\'Hérault et 9e aire urbaine de France, présente un marché immobilier dense et diversifié. Du centre médiéval de l\'Écusson aux extensions contemporaines de Port Marianne, le parc reflète plus de huit siècles de construction — chaque période ayant ses propres enjeux en termes de diagnostics obligatoires.",

    parcImmoNote:
      "Le parc montpelliérain est dominé par les appartements en copropriété (86 % des résidences principales). Le centre ancien (Écusson, Beaux-Arts) concentre un bâti antérieur à 1949 — plomb fréquent, amiante quasi-systématique. Les extensions des années 1960-1990 (Mosson, Croix d\'Argent, Près d\'Arènes) déclenchent presque toujours les diagnostics électricité et gaz au-delà des 15 ans. Les ZAC récentes (Antigone post-1980, Port Marianne post-2000) restent en classe énergétique correcte mais demandent toujours DPE et ERP.",

    enjeuxLocaux:
      "Le PPRI du Lez et de la Mosson, approuvé le 13/01/2004, couvre une partie significative de la commune et fait l\'objet d\'une révision prescrite en octobre 2025. Les quartiers proches du Lez (Pompignane, Richter), de la Mosson (Mosson, Tonnelles) et de leurs affluents sont concernés par le risque inondation par débordement et ruissellement. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Montpellier est à 15 minutes de Prades-le-Lez par la D17 ou l\'A750 — intervention sous 48 h garantie sur l\'ensemble de la commune et sa première couronne.",

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
        a: "Pour toute vente à Montpellier, le DPE, l\'ERP et le diagnostic termites sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997, fréquent dans le centre ancien et les faubourgs), plomb (avant 1949, quasi-systématique dans l\'Écusson), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Montpellier ?",
        a: "À Montpellier, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC. Le pack vente maison (avec termites en plus) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune et sa première couronne.",
      },
      {
        q: "Sous quel délai intervenez-vous à Montpellier ?",
        a: "Montpellier est à 15 minutes de Prades-le-Lez par la D17 ou l\'A750. L\'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Montpellier ?",
        a: "Une partie significative de Montpellier est couverte par le PPRI Basse vallée du Lez et de la Mosson, approuvé le 13/01/2004 et en révision depuis octobre 2025. Les quartiers proches du Lez, de la Mosson et de leurs affluents (Verdansson, Chambéry, Lironde, Rieucoulon) sont concernés. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
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

    image: {
      url: '/images/villes/castelnau-le-lez.webp',
      alt: 'Avenue du Jeu de Mail à Castelnau-le-Lez',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Castelnau_le_Lez.jpg',
    },

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
          "Castelnau combine un centre ancien (place Wilson, abords de l\'église Saint-Jean-Baptiste) en classe D-E avec d\'importantes extensions récentes (Eurêka, Mas de Rochet) en classe B-C. Le DPE pèse fortement dans la valorisation sur ce marché premium (4 520 €/m² en moyenne).",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre historique et les ensembles collectifs des années 1970-1990 (Sablassou, La Devèze) déclenchent quasi-systématiquement le repérage amiante en vente. Le repérage est indispensable sur la majorité du parc pré-1997.",
      },
      {
        slug: 'erp',
        whyHere:
          "Castelnau est exposée aux crues du Lez (les « Lézades » sont documentées depuis le XIVe siècle) et de la Salaison. Le PPRI couvre une partie significative du territoire et fait l\'objet d\'une révision prescrite le 22/10/2025 — l\'État des Risques et Pollutions est particulièrement scruté lors des transactions.",
      },
    ],

    intro:
      "Castelnau-le-Lez, commune de la première couronne nord-est de Montpellier, connaît une croissance démographique exceptionnelle (+ 2 354 habitants en deux ans selon l\'INSEE). Son marché immobilier reflète cette dynamique : prix élevés, parc en transformation rapide entre centre historique et nouveaux quartiers résidentiels.",

    parcImmoNote:
      "Le parc castelnauvien est mixte : 58 % d\'appartements et 42 % de maisons, avec une croissance massive de l\'offre collective (+91 % d\'appartements en 5 ans). Le centre ancien autour de la place Wilson concentre un bâti antérieur à 1949 — plomb fréquent. Les extensions récentes (ZAC Eurêka, Mas de Rochet, Bois de Lansargues) alignent un parc post-2000 en classe énergétique correcte. Les collectifs des années 1970-1990 (Sablassou) déclenchent presque toujours les diagnostics électricité et gaz.",

    enjeuxLocaux:
      "Le PPRI de Castelnau-le-Lez, approuvé le 04/12/1998 et en cours de révision depuis octobre 2025, couvre les abords du Lez (à l\'est) et de la Salaison (au nord). Le quartier Salaison-Pompignane, au sud de la voie ferrée, est particulièrement exposé au risque inondation par débordement et ruissellement. Les épisodes cévenols (fin d\'été, automne) restent une réalité récurrente. L\'État des Risques et Pollutions est systématique. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Castelnau-le-Lez est à 10 minutes de Prades-le-Lez par la D17 — intervention sous 48 h garantie sur l\'ensemble de la commune et sa première couronne (Le Crès, Jacou, Clapiers, Vendargues).",

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
        a: "Pour toute vente à Castelnau-le-Lez, le DPE, l\'ERP et le diagnostic termites sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997, fréquent dans le centre ancien et les collectifs Sablassou), plomb (avant 1949, dans le centre historique), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Castelnau-le-Lez ?",
        a: "À Castelnau-le-Lez, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC. Le pack vente maison (avec termites en plus) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune.",
      },
      {
        q: "Sous quel délai intervenez-vous à Castelnau-le-Lez ?",
        a: "Castelnau-le-Lez est à 10 minutes de Prades-le-Lez par la D17. L\'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Castelnau-le-Lez ?",
        a: "Une partie significative de Castelnau-le-Lez est couverte par le PPRI approuvé le 04/12/1998, en révision depuis octobre 2025. Les quartiers proches du Lez (Salaison-Pompignane) et de la Salaison sont particulièrement concernés par les épisodes cévenols. Les « Lézades » — crues historiques du Lez documentées depuis le XIVe siècle — restent une réalité. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
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

    image: {
      url: '/images/villes/saint-gely-du-fesc.webp',
      alt: 'Église paroissiale Saint-Gilles à Saint-Gély-du-Fesc',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Saint-Gely-du-Fesc_(39).jpg',
    },

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
        "PPRI Lez (Bassin Versant) — approuvé le 11/05/2007 (débordement de cours d\'eau, ruissellement). Concerne le Pézouillet, les affluents de la Lironde et du Lirou.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Saint-Gély-du-Fesc est dominée à 84 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation sur ce marché premium (4 507 €/m² en moyenne, marché tendu avec 13 % d\'acheteurs de plus que de biens).",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre-village historique et les pavillons des années 1970-1990 (Mas) déclenchent le repérage amiante en vente. Les ZAC récentes post-1997 sont épargnées, mais elles restent minoritaires dans le parc actuel.",
      },
      {
        slug: 'termites',
        whyHere:
          "L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Saint-Gély-du-Fesc — particulièrement scruté sur les pavillons individuels où la charpente bois est exposée.",
      },
    ],

    intro:
      "Saint-Gély-du-Fesc, commune résidentielle de la première couronne nord-ouest de Montpellier, est dominée à 84 % par des maisons individuelles. Marché tendu — 13 % d\'acheteurs de plus que de biens, prix élevés (4 507 €/m²) — un profil très différent du reste de la Métropole.",

    parcImmoNote:
      "Le parc saint-gellois est exceptionnellement orienté maison individuelle (84 % du parc, contre 14 % à Montpellier). 75,8 % des résidences principales sont occupées par leurs propriétaires. Les maisons familiales de 6 pièces et plus représentent 33,5 % du parc, avec des surfaces majoritairement supérieures à 120 m². Les pavillons des années 1970-1990 (Mas) déclenchent presque toujours les diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2010) sont en classe énergétique correcte.",

    enjeuxLocaux:
      "Le PPRI Lez (Bassin Versant), approuvé le 11/05/2007, couvre les abords du Pézouillet et des affluents de la Lironde et du Lirou. Une partie de la commune est en zone inondable, principalement dans les vallées drainées vers la Mosson (nord-est) et le Lez (nord-ouest). L\'État des Risques et Pollutions est systématique. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente, et le risque amiante reste élevé sur le parc pré-1997.",

    accessibilityNote:
      "Saint-Gély-du-Fesc est à 10 minutes de Prades-le-Lez (4 km) — c\'est ma commune la plus proche, intervention sous 24 h fréquemment possible.",

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
        a: "Pour toute vente à Saint-Gély-du-Fesc, le DPE, l\'ERP et le diagnostic termites sont systématiques. Selon l\'âge du bien : amiante (pavillons pré-1997 — fréquent), électricité et gaz (installations de plus de 15 ans, très courant sur les Mas années 1970-1990), plomb (centre-village pré-1949). Le mesurage Carrez ne s\'applique qu\'en copropriété — minoritaire à Saint-Gély (16 % du parc).",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Saint-Gély-du-Fesc ?",
        a: "À Saint-Gély-du-Fesc, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC — c\'est le pack le plus demandé compte tenu du parc dominé par les maisons individuelles. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Saint-Gély-du-Fesc ?",
        a: "Saint-Gély-du-Fesc est à 4 km de Prades-le-Lez, soit 10 minutes par la D17. C\'est ma commune la plus proche — intervention sous 24 h fréquemment possible, garantie sous 48 h. Rapport remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Saint-Gély-du-Fesc ?",
        a: "Une partie de Saint-Gély-du-Fesc est couverte par le PPRI Lez (approuvé 11/05/2007), notamment les abords du Pézouillet et des affluents de la Lironde et du Lirou. La commune est inscrite à l\'Atlas des Zones Inondables depuis janvier 2001. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
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

    image: {
      url: '/images/villes/lattes.webp',
      alt: 'Le quartier de Port-Ariane à Lattes',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Port_Ariane_0027.jpg',
    },

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
          "Lattes combine un centre village ancien (DPE D-E) avec d\'importantes ZAC modernes (Port Ariane, Vasque, Fontvin) en classe B-C. Le DPE pèse fortement dans la valorisation, particulièrement sur les biens neufs des berges du Lez où le marché est très actif (4 177 €/m² en moyenne, 4 935 €/m² pour les maisons).",
      },
      {
        slug: 'erp',
        whyHere:
          "Lattes est en aval immédiat du bassin versant Lez-Mosson, en plaine alluviale, avec exposition forte au PPRI et au risque de submersion marine au sud (Lattes Plage, Saint-Sauveur). L\'État des Risques et Pollutions est central dans toute transaction lattoise.",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre village historique et le faubourg de Maurin concentrent un bâti pré-1997 où le repérage amiante est quasi-systématique en vente. Les ZAC contemporaines (post-2000) sont épargnées mais représentent une part minoritaire du parc.",
      },
    ],

    intro:
      "Lattes, commune du sud immédiat de Montpellier, présente un marché immobilier dual : centre village historique d\'un côté, vastes ZAC modernes (Port Ariane, Fontvin) de l\'autre. Marché actif, prix élevés (4 177 €/m²), forte exposition aux risques d\'inondation par sa position en aval du Lez.",

    parcImmoNote:
      "Le parc lattois est équilibré entre maisons (50 %) et appartements (50 %). Le centre village et le faubourg de Maurin concentrent le bâti ancien (pré-1949 dans le centre, années 1950-1990 sur Maurin). Les ZAC modernes — Port Ariane, Vasque, Fontvin — alignent un parc post-2000 en bonne classe énergétique. La saisonnalité touristique (proximité littoral) tire la part de résidences secondaires à 4,5 %.",

    enjeuxLocaux:
      "Lattes est en plaine alluviale, en aval immédiat du Lez et de ses affluents (Lironde, Rondelet). Le PPRI Lez-Mosson y a un impact majeur : une part très significative du territoire est en zone inondable réglementée. Le sud de la commune (Lattes Plage, Saint-Sauveur) ajoute le risque de submersion marine. L\'État des Risques et Pollutions est systématique et particulièrement déterminant lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Lattes est à 20 minutes de Prades-le-Lez (12 km) — intervention sous 48 h garantie sur l\'ensemble de la commune, des ZAC modernes du Lez aux quartiers historiques.",

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
        a: "Pour toute vente à Lattes, le DPE, l\'ERP (particulièrement scruté à cause du PPRI Lez-Mosson) et le diagnostic termites sont systématiques. Selon le bien : amiante (centre village, Maurin pré-1997), plomb (centre historique pré-1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Lattes ?",
        a: "À Lattes, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC, le pack vente maison (avec termites en plus) à 380 € TTC. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Lattes ?",
        a: "Lattes est à 20 minutes de Prades-le-Lez (12 km). L\'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Lattes ?",
        a: "Une part très significative de Lattes est couverte par le PPRI Basse vallée du Lez et de la Mosson — la commune est en plaine alluviale en aval immédiat du Lez. Le sud de la commune (Lattes Plage, Saint-Sauveur) ajoute le risque de submersion marine. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
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

    image: {
      url: '/images/villes/saint-jean-de-vedas.webp',
      alt: 'Église Saint-Jean-Baptiste de Saint-Jean-de-Védas',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Eglise_Saint-Jean_Baptiste_de_Saint-Jean-de-V%C3%A9das.jpg',
    },

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
          "L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente — particulièrement scruté sur les pavillons individuels où la charpente bois est exposée.",
      },
    ],

    intro:
      "Saint-Jean-de-Védas, commune du sud-ouest de la Métropole de Montpellier, est dominée à 70 % par les maisons individuelles. Marché actif (4 443 €/m²), parc majoritairement post-1980, fort dynamisme commercial avec les ZAC Pradas et Mas de Grille — un profil résidentiel familial avec un tissu économique structuré.",

    parcImmoNote:
      "Le parc védasien est à dominante maison individuelle (70 %, 30 % d\'appartements). Les maisons familiales de 4 pièces (80-100 m²) représentent la typologie principale. Le centre village historique concentre un bâti antérieur à 1949 où le plomb peut être présent. Les pavillons des années 1980-2000 (Bigos) déclenchent presque toujours les diagnostics électricité et gaz au-delà des 15 ans. Les ZAC récentes (Pradas, Roque Fraïsse) sont en classe énergétique correcte.",

    enjeuxLocaux:
      "Saint-Jean-de-Védas est concernée par le PPRI Mosson — les abords de la Mosson et de ses affluents (Lironde, Lirou) sont en zone inondable réglementée. L\'État des Risques et Pollutions est systématique sur la commune. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente, et le risque amiante reste élevé sur le parc pré-1997.",

    accessibilityNote:
      "Saint-Jean-de-Védas est à 18 minutes de Prades-le-Lez (12 km) via la D116 et la D132 — intervention sous 48 h garantie sur l\'ensemble de la commune.",

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
        a: "Pour toute vente à Saint-Jean-de-Védas, le DPE, l\'ERP et le diagnostic termites sont systématiques. Selon l\'âge et la nature du bien : amiante (pavillons pré-1997, fréquent à Bigos), plomb (centre village pré-1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété (minoritaire vu que 70 % du parc est en maison individuelle).",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Saint-Jean-de-Védas ?",
        a: "À Saint-Jean-de-Védas, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC — c\'est le pack le plus demandé compte tenu du parc dominé par les maisons individuelles. Pack vente appartement à 290 € TTC. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Saint-Jean-de-Védas ?",
        a: "Saint-Jean-de-Védas est à 18 minutes de Prades-le-Lez (12 km) via la D116 et la D132. L\'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Saint-Jean-de-Védas ?",
        a: "Une partie de Saint-Jean-de-Védas est couverte par le PPRI Mosson, notamment les abords de la Mosson et de ses affluents (Lironde, Lirou). L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'jacou',
    name: 'Jacou',
    nameSeo: 'Jacou (34)',
    codePostal: '34830',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6553, lng: 3.9089 },
    distanceFromBaseKm: 4,
    travelTimeMin: 10,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/jacou.webp',
      alt: 'Hôtel de ville de Jacou',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Mairie_jacou.jpg',
    },

    population: 7018,
    nbLogements: 3100,
    pctResidencesSecondaires: 1.5,
    pctMaisons: 68,
    pctAppartements: 32,
    surfaceMoyenne: 95,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 4028,
    prixM2Maison: 4227,
    prixM2Appartement: 3844,
    dpeMoyenKwh: 170,
    dpeMoyenCo2: 23,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Salaison',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRi Bassin versant du Salaison — Jacou est concernée par les débordements de la Salaison et de ses affluents. Une partie du territoire est en zone inondable réglementée.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Jacou est une commune résidentielle dominée à 68 % par les maisons individuelles, avec 64 % de propriétaires occupants. Le parc est mixte (centre village ancien + lotissements 1970-2000 + résidentiel récent), le DPE pèse fortement dans la valorisation à la vente (4 028 €/m² en moyenne).",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre village ancien et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Les lotissements post-1997 sont épargnés mais représentent une part minoritaire du parc.",
      },
      {
        slug: 'termites',
        whyHere:
          "L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente — particulièrement scruté sur les pavillons individuels où la charpente bois est exposée.",
      },
    ],

    intro:
      "Jacou, commune résidentielle de la première couronne nord de Montpellier, présente un marché immobilier mixte dominé par les maisons individuelles (68 %). Marché actif (4 028 €/m² en moyenne), parc en transformation entre centre village ancien et nouveaux quartiers résidentiels.",

    parcImmoNote:
      "Le parc jacovien est composé à 68 % de maisons et 32 % d\'appartements, avec 64 % de propriétaires occupants. Le centre village concentre un bâti antérieur à 1949 où le plomb peut être présent. Les lotissements pavillonnaires des années 1970-1990 déclenchent presque toujours les diagnostics électricité et gaz au-delà des 15 ans. Les ZAC récentes (post-2000) sont en classe énergétique correcte.",

    enjeuxLocaux:
      "Jacou est concernée par le PPRi Bassin versant du Salaison — les abords du cours d\'eau et de ses affluents sont en zone inondable réglementée. Les épisodes cévenols (fin d\'été, automne) restent une réalité régulière. L\'État des Risques et Pollutions est systématique sur la commune. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Jacou est à 10 minutes de Prades-le-Lez (4 km) — intervention sous 48 h garantie sur l\'ensemble de la commune.",

    quartiersTypiques: [
      'Centre village historique',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes post-2000',
      'Abords du Salaison (zone PPRi)',
    ],

    communesLimitrophes: ['Castelnau-le-Lez', 'Le Crès', 'Clapiers', 'Vendargues', 'Assas'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Jacou ?",
        a: "Pour toute vente à Jacou, le DPE, l\'ERP et le diagnostic termites sont systématiques. Selon l\'âge et la nature du bien : amiante (centre village et pavillons pré-1997), plomb (centre historique pré-1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Jacou ?",
        a: "À Jacou, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC — c\'est le pack le plus demandé compte tenu du parc dominé par les maisons. Pack vente appartement à 290 € TTC. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Jacou ?",
        a: "Jacou est à 4 km de Prades-le-Lez, soit 10 minutes. L\'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Jacou ?",
        a: "Une partie de Jacou est couverte par le PPRi Bassin versant du Salaison. Les abords du cours d\'eau et de ses affluents sont en zone inondable réglementée. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'perols',
    name: 'Pérols',
    nameSeo: 'Pérols (34)',
    codePostal: '34470',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.5650, lng: 3.9550 },
    distanceFromBaseKm: 14,
    travelTimeMin: 20,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/perols.webp',
      alt: 'La mairie et l\'église Saint-Sixte de Pérols',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Perols_mairie.jpg',
    },

    population: 9785,
    nbLogements: 3516,
    pctResidencesSecondaires: 3.5,
    pctMaisons: 65,
    pctAppartements: 35,
    surfaceMoyenne: 90,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 4783,
    prixM2Maison: 4900,
    prixM2Appartement: 4514,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 24,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: true,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRI Lez-Mosson + aléas littoraux — Pérols est en TRI (Territoire à Risque Important) Montpellier/Lunel/Mauguio/Palavas. Risque fort d\'inondation par crue à débordement lent et submersion marine (commune en bordure d\'étang).",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'erp',
        whyHere:
          "Pérols est en TRI Lez-Mosson, exposée à la fois aux débordements de cours d\'eau et à la submersion marine (étang de l\'Or au sud). Le risque d\'inondation est classé fort sur une partie de la commune. L\'État des Risques et Pollutions est systématique et particulièrement déterminant — un bien en zone inondable subit en moyenne une décote de 10 à 20 %.",
      },
      {
        slug: 'dpe',
        whyHere:
          "Pérols est un marché premium (4 783 €/m² en moyenne), tiré par sa proximité immédiate du littoral et de l\'aéroport. Le DPE pèse fortement dans la valorisation, particulièrement sur le parc des années 1970-1990 où la consommation reste élevée.",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre village et les ensembles pavillonnaires des années 1970-1990 déclenchent quasi-systématiquement le repérage amiante en vente. Le repérage est indispensable sur la majorité du parc pré-1997.",
      },
    ],

    intro:
      "Pérols, commune littorale du sud de la Métropole de Montpellier, en bordure de l\'étang de l\'Or, présente l\'un des marchés immobiliers les plus tendus de la couronne (4 783 €/m² en moyenne). Forte exposition au risque inondation et submersion marine, parc majoritairement post-1970.",

    parcImmoNote:
      "Le parc pérolien est composé à 65 % de maisons et 35 % d\'appartements, avec 3 516 logements dont 3 114 résidences principales. Les pavillons des années 1970-1990 dominent le parc (déclenchement systématique électricité et gaz). Les ZAC plus récentes alignent un parc post-2000 en classe énergétique correcte. Marché premium tiré par la proximité du littoral, de l\'aéroport Montpellier-Méditerranée et du tramway ligne 3.",

    enjeuxLocaux:
      "Pérols est en TRI (Territoire à Risque Important d\'inondation) Montpellier/Lunel/Mauguio/Palavas, doublement exposée au risque d\'inondation par crue à débordement lent et au risque de submersion marine en bordure de l\'étang de l\'Or. Une partie significative de la commune est en zone PPRI réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions — c\'est un déterminant majeur du marché. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Pérols est à 20 minutes de Prades-le-Lez (14 km) via l\'A9 — intervention sous 48 h garantie sur l\'ensemble de la commune.",

    quartiersTypiques: [
      'Centre village et abords du Lez',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes proches du tramway',
      'Bordure étang de l\'Or (exposition submersion marine)',
    ],

    communesLimitrophes: ['Lattes', 'Mauguio', 'Montpellier', 'Saint-Aunès'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Pérols ?",
        a: "Pour toute vente à Pérols, le DPE, l\'ERP (particulièrement scruté à cause du PPRI et du risque submersion marine) et le diagnostic termites sont systématiques. Selon le bien : amiante (centre village et pavillons pré-1997), plomb (centre historique), électricité et gaz (installations de plus de 15 ans), et Carrez en copropriété. Le devis en ligne identifie la liste obligatoire en quelques questions.",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Pérols ?",
        a: "À Pérols, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC, le pack vente appartement à 290 € TTC. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Pérols ?",
        a: "Pérols est à 20 minutes de Prades-le-Lez (14 km) via l\'A9. L\'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Pérols ?",
        a: "Pérols est en TRI Montpellier/Lunel/Mauguio/Palavas, doublement exposée au risque d\'inondation (PPRI Lez-Mosson) et au risque de submersion marine (étang de l\'Or). Une part très significative de la commune est en zone réglementée. Un bien en zone inondable subit en moyenne une décote de 10 à 20 %. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'le-cres',
    name: 'Le Crès',
    nameSeo: 'Le Crès (34)',
    codePostal: '34920',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6453, lng: 3.9367 },
    distanceFromBaseKm: 6,
    travelTimeMin: 12,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/le-cres.webp',
      alt: 'Le lac du Crès',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Lac_le_cres.jpg',
    },

    population: 9378,
    nbLogements: 4200,
    pctResidencesSecondaires: 1.8,
    pctMaisons: 55,
    pctAppartements: 45,
    surfaceMoyenne: 80,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 105,
    prixM2Moyen: 4108,
    prixM2Maison: 4078,
    prixM2Appartement: 4179,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 24,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Salaison',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRi Bassin versant du Salaison — Le Crès est concernée par les débordements de la Salaison. Une partie du territoire est en zone inondable réglementée.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Le Crès est une commune dense (5 km² seulement, 9 378 habitants) avec un parc équilibré 55 % maisons / 45 % appartements. Revenu moyen au-dessus de la moyenne nationale (25 900 €) — marché premium familial. Le DPE pèse fortement dans la valorisation à la vente (4 108 €/m² en moyenne).",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre village et les ensembles pavillonnaires et collectifs des années 1970-1990 déclenchent quasi-systématiquement le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.",
      },
      {
        slug: 'termites',
        whyHere:
          "L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente au Crès, sans exception.",
      },
    ],

    intro:
      "Le Crès, commune dense de la première couronne nord-est de Montpellier, présente un marché immobilier équilibré entre maisons et appartements (55/45). Marché premium familial (revenu moyen 25 900 €, au-dessus de la moyenne nationale), prix élevés à 4 108 €/m².",

    parcImmoNote:
      "Le parc cressois est équilibré entre maisons (55 %) et appartements (45 %), avec une densité urbaine forte (5 km² seulement). Les ensembles pavillonnaires et collectifs des années 1970-1990 dominent le parc (déclenchement systématique amiante, électricité et gaz). Les ZAC plus récentes alignent un parc post-2000 en bonne classe énergétique.",

    enjeuxLocaux:
      "Le Crès est concernée par le PPRi Bassin versant du Salaison — les abords du cours d\'eau et de ses affluents sont en zone inondable réglementée. L\'État des Risques et Pollutions est systématique sur la commune. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente, et le risque amiante reste élevé sur le parc pré-1997.",

    accessibilityNote:
      "Le Crès est à 12 minutes de Prades-le-Lez (6 km) — intervention sous 48 h garantie sur l\'ensemble de la commune.",

    quartiersTypiques: [
      'Centre village historique',
      'Ensembles pavillonnaires (années 1970-1990)',
      'Collectif années 1980-2000',
      'Abords du Salaison (zone PPRi)',
    ],

    communesLimitrophes: ['Castelnau-le-Lez', 'Vendargues', 'Jacou', 'Saint-Aunès'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre au Crès ?",
        a: "Pour toute vente au Crès, le DPE, l\'ERP et le diagnostic termites sont systématiques. Selon l\'âge et la nature du bien : amiante (centre village et collectifs pré-1997), plomb (centre historique pré-1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.",
      },
      {
        q: "Combien coûte un pack diagnostic vente au Crès ?",
        a: "Au Crès, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC, le pack vente maison (avec termites en plus) à 380 € TTC. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous au Crès ?",
        a: "Le Crès est à 6 km de Prades-le-Lez, soit 12 minutes. L\'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable au Crès ?",
        a: "Une partie du Crès est couverte par le PPRi Bassin versant du Salaison. Les abords du cours d\'eau et de ses affluents sont en zone inondable réglementée. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'clapiers',
    name: 'Clapiers',
    nameSeo: 'Clapiers (34)',
    codePostal: '34830',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6694, lng: 3.8867 },
    distanceFromBaseKm: 3,
    travelTimeMin: 8,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/clapiers.webp',
      alt: 'Vue de Clapiers',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Clapiers_(29).jpg',
    },

    population: 6010,
    nbLogements: 2341,
    pctResidencesSecondaires: 1.5,
    pctMaisons: 81,
    pctAppartements: 19,
    surfaceMoyenne: 110,
    surfaceMoyenneAppartement: 50,
    surfaceMoyenneMaison: 130,
    prixM2Moyen: 4291,
    prixM2Maison: 4531,
    prixM2Appartement: 3334,
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
        "PPRI Lez (Bassin Versant) — Clapiers est concernée par les débordements du Lirou et de ses affluents. Une partie du territoire est en zone inondable réglementée.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Clapiers est une commune résidentielle premium dominée à 81 % par les maisons individuelles familiales (5-6 pièces, surfaces 100-120 m²). Le DPE pèse fortement dans la valorisation à la vente (4 291 €/m² en moyenne, 4 531 €/m² pour les maisons).",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Les ZAC récentes post-1997 sont épargnées mais représentent une part minoritaire du parc.",
      },
      {
        slug: 'termites',
        whyHere:
          "L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente — particulièrement scruté sur les pavillons individuels où la charpente bois est exposée.",
      },
    ],

    intro:
      "Clapiers, commune résidentielle premium de la première couronne nord de Montpellier, est dominée à 81 % par les maisons individuelles familiales. Marché tendu (4 291 €/m² en moyenne), parc orienté familles avec des maisons spacieuses (100-120 m² majoritairement).",

    parcImmoNote:
      "Le parc clapiérois est exceptionnellement orienté maison individuelle (81 % du parc, 19 % d\'appartements seulement). Les maisons familiales de 5 pièces (31,5 %) et 6 pièces et plus (29,9 %) dominent, avec des surfaces majoritairement comprises entre 100 et 120 m². Les pavillons des années 1970-1990 déclenchent presque toujours les diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.",

    enjeuxLocaux:
      "Clapiers est concernée par le PPRI Lez (Bassin Versant) — les abords du Lirou et de ses affluents sont en zone inondable réglementée. L\'État des Risques et Pollutions est systématique sur la commune. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente, et le risque amiante reste élevé sur le parc pré-1997.",

    accessibilityNote:
      "Clapiers est à 8 minutes de Prades-le-Lez (3 km) — intervention sous 24 h fréquemment possible, garantie sous 48 h.",

    quartiersTypiques: [
      'Centre village historique',
      'Lotissements pavillonnaires (années 1970-1990)',
      'Domaines et résidences récentes (post-2000)',
      'Abords du Lirou (zone PPRI)',
    ],

    communesLimitrophes: ['Castelnau-le-Lez', 'Montpellier', 'Jacou', 'Prades-le-Lez', 'Saint-Clément-de-Rivière'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Clapiers ?",
        a: "Pour toute vente à Clapiers, le DPE, l\'ERP et le diagnostic termites sont systématiques. Selon l\'âge du bien : amiante (pavillons pré-1997, fréquent), plomb (centre village pré-1949), électricité et gaz (installations de plus de 15 ans, très courant sur les pavillons 1970-1990). Le mesurage Carrez ne s\'applique qu\'en copropriété — minoritaire à Clapiers (19 % du parc).",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Clapiers ?",
        a: "À Clapiers, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC — c\'est le pack le plus demandé compte tenu du parc dominé à 81 % par les maisons individuelles. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Clapiers ?",
        a: "Clapiers est à 3 km de Prades-le-Lez, soit 8 minutes. C\'est l\'une de mes communes les plus proches — intervention sous 24 h fréquemment possible, garantie sous 48 h. Rapport remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Clapiers ?",
        a: "Une partie de Clapiers est couverte par le PPRI Lez (Bassin Versant). Les abords du Lirou et de ses affluents sont en zone inondable réglementée. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'mauguio',
    name: 'Mauguio',
    nameSeo: 'Mauguio (34)',
    codePostal: '34130',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6125, lng: 4.0067 },
    distanceFromBaseKm: 16,
    travelTimeMin: 22,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/mauguio.webp',
      alt: 'Vue générale de Mauguio depuis la Motte',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Mauguio_vue_1.JPG',
    },

    population: 16274,
    nbLogements: 12313,
    pctResidencesSecondaires: 30,
    pctMaisons: 60,
    pctAppartements: 40,
    surfaceMoyenne: 75,
    surfaceMoyenneAppartement: 55,
    surfaceMoyenneMaison: 110,
    prixM2Moyen: 4312,
    prixM2Maison: 4888,
    prixM2Appartement: 4313,
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
        "PPRI Mauguio — approuvé le 16/03/2001, révision approuvée le 05/03/2025 (récent). Aléas littoraux (façade lagune en communication avec la mer) + débordements de cours d\'eau. TRI Montpellier/Lunel/Mauguio/Palavas.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'erp',
        whyHere:
          "Mauguio est en TRI Lez-Mosson et expose à la fois la commune (centre Mauguio + Carnon-Plage) au risque d\'inondation par cours d\'eau et au risque de submersion marine via l\'étang de l\'Or. PPRI révisé en mars 2025 (récent). L\'État des Risques et Pollutions est systématique et particulièrement déterminant.",
      },
      {
        slug: 'dpe',
        whyHere:
          "Mauguio combine un centre ancien (DPE D-E) avec d\'importantes extensions résidentielles et touristiques (Carnon-Plage, ZAC). Le DPE pèse fortement dans la valorisation, particulièrement sur les biens proches du littoral où le marché reste très actif (4 312 €/m² en moyenne).",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre Mauguio et les ensembles pavillonnaires des années 1970-1990 déclenchent le repérage amiante en vente. La forte part de résidences secondaires (30 % du parc total) sur Carnon-Plage signifie aussi que beaucoup de biens pré-1997 changent régulièrement de main.",
      },
    ],

    intro:
      "Mauguio, commune littorale du sud-est de la Métropole de Montpellier, comprend le centre historique de Mauguio et la station balnéaire de Carnon-Plage. Marché actif (4 312 €/m²) avec une forte part de résidences secondaires (30 % du parc) et une exposition élevée aux risques d\'inondation et submersion marine.",

    parcImmoNote:
      "Le parc mauguiois est exceptionnel par sa structure : 12 313 logements dont 30 % de résidences secondaires (essentiellement sur Carnon-Plage), 60 % de maisons et 40 % d\'appartements. Le centre Mauguio concentre un bâti ancien (centre historique pré-1949 + faubourgs 1950-1990). Carnon-Plage est dominé par les copropriétés balnéaires des années 1960-1990 et quelques ensembles plus récents. Marché tiré par la double polarité littoral + proximité aéroport Montpellier-Méditerranée.",

    enjeuxLocaux:
      "Mauguio est en TRI (Territoire à Risque Important d\'inondation) Montpellier/Lunel/Mauguio/Palavas, doublement exposée au risque d\'inondation par crue et au risque de submersion marine (façade lagune en communication avec la mer). Le PPRI a été révisé et approuvé le 05/03/2025 — révision récente importante à connaître pour toute transaction. L\'État des Risques et Pollutions est systématique et déterminant. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Mauguio est à 22 minutes de Prades-le-Lez (16 km) — intervention sous 48 h garantie sur Mauguio centre comme sur Carnon-Plage.",

    quartiersTypiques: [
      'Centre historique Mauguio (pré-1949)',
      'Faubourgs Mauguio (années 1950-1990)',
      'Carnon-Plage (copropriétés balnéaires + résidences secondaires)',
      'ZAC récentes proches de l\'aéroport',
    ],

    communesLimitrophes: ['Pérols', 'Lansargues', 'Saint-Aunès', 'La Grande-Motte', 'Lattes'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Mauguio ou à Carnon ?",
        a: "Pour toute vente à Mauguio (centre ou Carnon-Plage), le DPE, l\'ERP (particulièrement scruté à cause du PPRI révisé en 2025) et le diagnostic termites sont systématiques. Selon le bien : amiante (centre Mauguio et copros Carnon pré-1997), plomb (centre Mauguio pré-1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété (très fréquent sur Carnon-Plage).",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Mauguio ?",
        a: "À Mauguio, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC, le pack vente appartement (avec Carrez en plus) à 290 € TTC. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Mauguio ?",
        a: "Mauguio est à 22 minutes de Prades-le-Lez (16 km). L\'intervention est garantie sous 48 h après validation du devis sur l\'ensemble de la commune (centre ou Carnon-Plage). Rapport remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Mauguio ?",
        a: "Mauguio est en TRI Montpellier/Lunel/Mauguio/Palavas, doublement exposée au risque d\'inondation par crue (PPRI Lez-Mosson) et au risque de submersion marine (façade lagune). Le PPRI a été révisé et approuvé le 05/03/2025 — c\'est un changement récent et important. Les biens en zone inondable subissent en moyenne une décote de 10 à 20 %. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'aigues-mortes',
    name: 'Aigues-Mortes',
    nameSeo: 'Aigues-Mortes (30)',
    codePostal: '30220',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.5670, lng: 4.1908 },
    distanceFromBaseKm: 45,
    travelTimeMin: 40,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/aigues-mortes.webp',
      alt: 'Vue d\'Aigues-Mortes et de ses remparts',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Aigues-Mortes_-_View_from_the_ramparts_-_03.jpg',
    },

    population: 8560,
    nbLogements: 6800,
    pctResidencesSecondaires: 20,
    pctMaisons: 55,
    pctAppartements: 45,
    surfaceMoyenne: 70,
    surfaceMoyenneAppartement: 55,
    surfaceMoyenneMaison: 105,
    prixM2Moyen: 4135,
    prixM2Maison: 4549,
    prixM2Appartement: 4276,
    dpeMoyenKwh: 185,
    dpeMoyenCo2: 27,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: true,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRi Aigues-Mortes — approuvé le 05/09/2022 (puis annulé par jugement du Tribunal Administratif de Nîmes le 16/10/2025, situation juridique évolutive). Triple influence Rhône, Vidourle et Mer. 95 % du territoire en zone d\'aléa.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'erp',
        whyHere:
          "Aigues-Mortes est exposée à la triple influence du Rhône, du Vidourle et de la mer — 95 % du territoire est en zone d\'aléa inondation et submersion marine. La situation juridique du PPRi (approuvé 2022, annulé 2025) ajoute un enjeu d\'information renforcé pour les acquéreurs. L\'État des Risques et Pollutions est déterminant.",
      },
      {
        slug: 'dpe',
        whyHere:
          "Aigues-Mortes combine son centre médiéval intra-muros (bâti pré-1949) avec des extensions touristiques modernes. Le DPE pèse fortement dans la valorisation, particulièrement sur le parc ancien classé F-G. Marché premium (4 135 €/m² en moyenne).",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre médiéval et les ensembles pavillonnaires et balnéaires des années 1950-1990 déclenchent quasi-systématiquement le repérage amiante en vente. La forte part de résidences secondaires (20 %) signifie que beaucoup de biens pré-1997 changent régulièrement de main.",
      },
    ],

    intro:
      "Aigues-Mortes, ville fortifiée du sud du Gard, conjugue patrimoine médiéval exceptionnel et marché immobilier premium tiré par le tourisme et les résidences secondaires. Position unique : 95 % du territoire en zone d\'aléa inondation/submersion, situation PPRi en cours de stabilisation après annulation 2025.",

    parcImmoNote:
      "Le parc aigues-mortais est composé à 73 % de résidences principales, 20 % de résidences secondaires et 8 % de logements vacants. Mix équilibré maisons (55 %) / appartements (45 %), avec une surface moyenne contenue (70 m²) typique des cœurs urbains anciens. Le centre médiéval intra-muros concentre un bâti antérieur à 1949 — plomb fréquent. Les extensions touristiques modernes (Saint-Pierre, Marines, abords des Salins) datent des années 1960-1990 et déclenchent presque toujours les diagnostics électricité et gaz.",

    enjeuxLocaux:
      "Aigues-Mortes est exposée à la triple influence du Rhône, du Vidourle et de la mer — la commune est inscrite en TRI (Territoire à Risque Important d\'inondation) Vidourle. 95 % du territoire est en zone d\'aléa : inondation par crue à débordement lent + submersion marine (crue centennale par tempête, dépression, surcote). Le PPRi, approuvé le 05/09/2022, a été annulé par le Tribunal Administratif de Nîmes le 16/10/2025 — la situation juridique est évolutive, l\'information à l\'acquéreur reste renforcée. Comme partout en zone Hérault-Gard littorale, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Aigues-Mortes est à 40 minutes de Prades-le-Lez (45 km) via l\'A9 — intervention sous 48 h garantie sur l\'ensemble de la commune (centre médiéval intra-muros, extensions touristiques, zone des Salins).",

    quartiersTypiques: [
      'Centre médiéval intra-muros (XIIIe siècle, pré-1949)',
      'Saint-Pierre et faubourgs (extensions XIXe-XXe)',
      'Marines et Mas (résidentiel touristique 1970-1990)',
      'Abords des Salins (zone humide, exposition forte)',
    ],

    communesLimitrophes: ['Le Grau-du-Roi', 'Saint-Laurent-d\'Aigouze', 'La Grande-Motte', 'Marsillargues'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Aigues-Mortes ?",
        a: "Pour toute vente à Aigues-Mortes, le DPE, l\'ERP (central à cause du PPRi triple Rhône/Vidourle/Mer) et le diagnostic termites sont systématiques. Selon l\'âge du bien : amiante (centre médiéval et extensions pré-1997), plomb (centre intra-muros pré-1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété (très fréquent sur les copros touristiques).",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Aigues-Mortes ?",
        a: "À Aigues-Mortes, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC, le pack vente maison (avec termites en plus) à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune.",
      },
      {
        q: "Sous quel délai intervenez-vous à Aigues-Mortes ?",
        a: "Aigues-Mortes est à 40 minutes de Prades-le-Lez (45 km) via l\'A9. L\'intervention est garantie sous 48 h après validation du devis. Rapport remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Aigues-Mortes ?",
        a: "Très probablement oui : 95 % du territoire d\'Aigues-Mortes est en zone d\'aléa, exposé à la triple influence du Rhône, du Vidourle et de la mer (submersion marine par tempête centennale). Le PPRi approuvé en septembre 2022 a été annulé en octobre 2025 par le Tribunal Administratif de Nîmes — la situation est évolutive, mais l\'information à l\'acquéreur reste obligatoire et renforcée. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'le-grau-du-roi',
    name: 'Le Grau-du-Roi',
    nameSeo: 'Le Grau-du-Roi (30)',
    codePostal: '30240',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.5378, lng: 4.1374 },
    distanceFromBaseKm: 50,
    travelTimeMin: 45,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/le-grau-du-roi.webp',
      alt: 'Le port du Grau-du-Roi et son phare',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Le_Grau-du-Roi_-_Port_-_03.jpg',
    },

    population: 8538,
    nbLogements: 18000,
    pctResidencesSecondaires: 65,
    pctMaisons: 11,
    pctAppartements: 89,
    surfaceMoyenne: 50,
    surfaceMoyenneAppartement: 45,
    surfaceMoyenneMaison: 95,
    prixM2Moyen: 4934,
    prixM2Maison: 5680,
    prixM2Appartement: 4866,
    dpeMoyenKwh: 195,
    dpeMoyenCo2: 28,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: true,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRi Le Grau-du-Roi — totalité du territoire en zones d\'aléa. Trois aléas étudiés : crue Rhône, submersion marine, crue Vidourle. Zone urbanisée en aléa modéré (eau 0-1 m), autres zones en aléa fort (eau >1 m).",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'erp',
        whyHere:
          "Le Grau-du-Roi est intégralement en zone d\'aléa inondation/submersion marine — totalité du territoire concernée par le PPRi (zone urbanisée en aléa modéré, autres zones en aléa fort). L\'État des Risques et Pollutions est central et déterminant pour toute transaction sur cette commune littorale.",
      },
      {
        slug: 'dpe',
        whyHere:
          "Le Grau-du-Roi est dominée à 89 % par les appartements (parc balnéaire des années 1960-1990 majoritaire). Le DPE pèse fortement dans la valorisation des copropriétés balnéaires, particulièrement sur le parc ancien souvent classé E-F. Marché premium (4 934 €/m² en moyenne, 5 680 €/m² pour les maisons).",
      },
      {
        slug: 'amiante',
        whyHere:
          "Les copropriétés balnéaires des années 1960-1990 — qui constituent l\'essentiel du parc — déclenchent quasi-systématiquement le repérage amiante en vente. Avec 65 % de résidences secondaires, les transactions sont fréquentes et le repérage indispensable.",
      },
    ],

    intro:
      "Le Grau-du-Roi, station balnéaire majeure du Gard, présente un marché immobilier exceptionnel : 89 % d\'appartements, 65 % de résidences secondaires, prix premium tirés par le tourisme. Totalité du territoire en zone d\'aléa inondation/submersion marine — l\'ERP est central dans toute transaction.",

    parcImmoNote:
      "Le parc graulen est exceptionnel : 89 % d\'appartements (dans le département le ratio est inverse à 37 %), majoritairement dans des copropriétés balnéaires des années 1960-1990 (Port-Camargue, centre-port, abords plages). Surface moyenne contenue (50 m²) typique des appartements touristiques. Forte saisonnalité — 65 % du parc est en résidence secondaire ou locatif touristique. Le centre historique du port concentre quelques bâtis pré-1949.",

    enjeuxLocaux:
      "Le Grau-du-Roi est en TRI (Territoire à Risque Important d\'inondation) Vidourle, avec la totalité du territoire en zones d\'aléa étudiées par le PPRi. Trois aléas se cumulent : crue du Rhône, submersion marine et crue du Vidourle. La zone urbanisée est principalement en aléa modéré (hauteur d\'eau 0-1 m), tandis que les zones non urbanisées sont en aléa fort (>1 m). La commune dispose d\'un Plan Communal de Sauvegarde (PCS) intégrant ces trois risques. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions.",

    accessibilityNote:
      "Le Grau-du-Roi est à 45 minutes de Prades-le-Lez (50 km) via l\'A9 et la D62 — intervention sous 48 h garantie sur l\'ensemble de la commune (centre historique, Port-Camargue, plages).",

    quartiersTypiques: [
      'Centre historique du port (pré-1949 + faubourgs)',
      'Port-Camargue (extensions touristiques 1970-1990)',
      'Plages, Boucanet, Espiguette (résidentiel balnéaire)',
      'Rive droite et rive gauche du Vidourle',
    ],

    communesLimitrophes: ['Aigues-Mortes', 'La Grande-Motte', 'Saint-Laurent-d\'Aigouze'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre au Grau-du-Roi ?",
        a: "Pour toute vente au Grau-du-Roi, le DPE, l\'ERP (central — totalité du territoire en zone d\'aléa) et le diagnostic termites sont systématiques. Selon l\'âge du bien : amiante (copros balnéaires pré-1997, très fréquent), plomb (centre historique pré-1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez (systématique vu que 89 % du parc est en copropriété).",
      },
      {
        q: "Combien coûte un pack diagnostic vente au Grau-du-Roi ?",
        a: "Au Grau-du-Roi, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC — c\'est le pack le plus demandé compte tenu du parc dominé à 89 % par les appartements en copropriété balnéaire. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous au Grau-du-Roi ?",
        a: "Le Grau-du-Roi est à 45 minutes de Prades-le-Lez (50 km) via l\'A9 et la D62. L\'intervention est garantie sous 48 h après validation du devis. Rapport remis sous 24 h ouvrées après l\'intervention. Pour les copropriétés, je peux coordonner directement avec le syndic pour l\'accès aux parties communes.",
      },
      {
        q: "Mon bien est-il en zone inondable au Grau-du-Roi ?",
        a: "Oui — la totalité du territoire du Grau-du-Roi est en zone d\'aléa selon le PPRi. Trois aléas se cumulent : crue du Rhône, submersion marine et crue du Vidourle. Si votre bien est en zone urbanisée, vous êtes principalement en aléa modéré (hauteur d\'eau 0-1 m). L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'saint-laurent-d-aigouze',
    name: 'Saint-Laurent-d\'Aigouze',
    nameSeo: 'Saint-Laurent-d\'Aigouze (30)',
    codePostal: '30220',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.6356, lng: 4.2036 },
    distanceFromBaseKm: 35,
    travelTimeMin: 35,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/saint-laurent-d-aigouze.webp',
      alt: 'Église de Saint-Laurent-d\'Aigouze',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Eglise_Saint-Laurent-d%27Aigouze.JPG',
    },

    population: 3751,
    nbLogements: 1976,
    pctResidencesSecondaires: 5,
    pctMaisons: 78,
    pctAppartements: 22,
    surfaceMoyenne: 100,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 3452,
    prixM2Maison: 3495,
    prixM2Appartement: 3168,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 26,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRi Basse Plaine du Vidourle — approuvé le 03/04/2012, couvre la totalité du territoire communal. Concerne la basse plaine du Vidourle et la partie aval du fleuve Rhône. Commune protégée par le système d\'endiguement de la basse vallée.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'erp',
        whyHere:
          "Saint-Laurent-d\'Aigouze a la totalité de son territoire couverte par le PPRi Basse Plaine du Vidourle. Triple influence Vidourle/Rhône/Mer (proximité). L\'État des Risques et Pollutions est central pour toute transaction — le système d\'endiguement protège mais n\'élimine pas le risque résiduel.",
      },
      {
        slug: 'dpe',
        whyHere:
          "Saint-Laurent-d\'Aigouze est dominée à 78 % par les maisons individuelles. Marché en hausse forte (+39 % sur 5 ans), prix accessibles (3 452 €/m²). Le DPE pèse fortement dans la valorisation à la vente, particulièrement sur le parc des années 1970-1990.",
      },
      {
        slug: 'termites',
        whyHere:
          "Le Gard sud (zones humides du Vidourle, lagunes) est classé en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente — particulièrement scruté sur les pavillons individuels où la charpente bois est exposée à un environnement humide.",
      },
    ],

    intro:
      "Saint-Laurent-d\'Aigouze, commune du sud du Gard entre Aigues-Mortes et Lunel, présente un parc immobilier majoritairement composé de maisons individuelles (78 %). Marché en forte progression (+39 % en 5 ans), prix accessibles, totalité du territoire couverte par le PPRi Basse Plaine du Vidourle.",

    parcImmoNote:
      "Le parc lauréois est dominé à 78 % par les maisons individuelles (1 546/1 976 logements), avec 71 % de propriétaires occupants. Le centre village historique concentre un bâti antérieur à 1949. Les lotissements pavillonnaires des années 1970-2000 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Marché en forte progression : +39 % de hausse des prix sur 5 ans.",

    enjeuxLocaux:
      "Saint-Laurent-d\'Aigouze est intégralement couverte par le PPRi Basse Plaine du Vidourle (approuvé le 03/04/2012). Le territoire est concerné par la basse plaine du Vidourle et la partie aval du fleuve Rhône. La commune est incluse dans la zone protégée par le système d\'endiguement de la basse vallée — protection qui réduit mais n\'élimine pas le risque résiduel. L\'État des Risques et Pollutions est systématique. Comme partout en zone humide Gard-Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Saint-Laurent-d\'Aigouze est à 35 minutes de Prades-le-Lez (35 km) via l\'A9 — intervention sous 48 h garantie sur l\'ensemble de la commune.",

    quartiersTypiques: [
      'Centre village historique (pré-1949)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes en périphérie',
      'Mas et zones agricoles (proximité Vidourle)',
    ],

    communesLimitrophes: ['Aigues-Mortes', 'Le Grau-du-Roi', 'Aimargues', 'Marsillargues', 'Gallargues-le-Montueux'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Saint-Laurent-d\'Aigouze ?",
        a: "Pour toute vente à Saint-Laurent-d\'Aigouze, le DPE, l\'ERP (central — territoire intégralement en PPRi) et le diagnostic termites sont systématiques. Selon l\'âge du bien : amiante (centre village et pavillons pré-1997), plomb (centre historique pré-1949), électricité et gaz (installations de plus de 15 ans), et Carrez en copropriété (minoritaire à Saint-Laurent vu que 78 % du parc est en maison individuelle).",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Saint-Laurent-d\'Aigouze ?",
        a: "À Saint-Laurent-d\'Aigouze, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC — c\'est le pack le plus demandé compte tenu du parc dominé par les maisons individuelles. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Saint-Laurent-d\'Aigouze ?",
        a: "Saint-Laurent-d\'Aigouze est à 35 minutes de Prades-le-Lez (35 km) via l\'A9. L\'intervention est garantie sous 48 h après validation du devis. Rapport remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Saint-Laurent-d\'Aigouze ?",
        a: "Oui — la totalité du territoire de Saint-Laurent-d\'Aigouze est couverte par le PPRi Basse Plaine du Vidourle, approuvé le 03/04/2012. La commune est concernée par la basse plaine du Vidourle et la partie aval du fleuve Rhône. La commune bénéficie du système d\'endiguement de la basse vallée qui réduit mais n\'élimine pas le risque résiduel. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'sommieres',
    name: 'Sommières',
    nameSeo: 'Sommières (30)',
    codePostal: '30250',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.7783, lng: 4.0900 },
    distanceFromBaseKm: 35,
    travelTimeMin: 35,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/sommieres.webp',
      alt: 'Pont romain (Pont Tibère) de Sommières',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Pont_romain_de_Sommi%C3%A8res_(Pont_Tib%C3%A8re)_-_01.JPG',
    },

    population: 5265,
    nbLogements: 2900,
    pctResidencesSecondaires: 8,
    pctMaisons: 65,
    pctAppartements: 35,
    surfaceMoyenne: 90,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 2680,
    prixM2Maison: 3247,
    prixM2Appartement: 2090,
    dpeMoyenKwh: 195,
    dpeMoyenCo2: 30,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "PPRi Moyen Vidourle — approuvé. Crues torrentielles ou rapides du Vidourle. Près de 1 400 bâtiments en zone à risque inondation sur le territoire de la communauté de communes Pays de Sommières.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Sommières est une commune patrimoniale médiévale au bord du Vidourle. Le centre ancien (XIIe siècle, château fort, pont romain) concentre un bâti très ancien souvent classé F-G. Le DPE pèse fortement dans la valorisation, particulièrement sur le bâti pré-1949 où l\'isolation est rare. Marché plus accessible (2 680 €/m²) que la côte mais en progression.",
      },
      {
        slug: 'erp',
        whyHere:
          "Sommières est sur les rives du Vidourle, fleuve aux crues torrentielles documentées (la 'Vidourlade'). Le PPRi Moyen Vidourle couvre une partie significative du territoire. Près de 1 400 bâtiments du Pays de Sommières sont en zone à risque inondation. L\'État des Risques et Pollutions est central et déterminant.",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre médiéval et les extensions des années 1950-1990 (Vidourle rive droite, lotissements) concentrent un bâti pré-1997 où le repérage amiante est quasi-systématique en vente. Indispensable sur la majorité du parc.",
      },
    ],

    intro:
      "Sommières, ville médiévale au bord du Vidourle entre Nîmes et Montpellier, présente un patrimoine architectural exceptionnel (château, pont romain) et un marché immobilier accessible (2 680 €/m²). Forte exposition aux crues torrentielles du Vidourle — la 'Vidourlade' est une réalité historique récurrente.",

    parcImmoNote:
      "Le parc sommiérois mêle un centre médiéval dense (bâti XIIe-XVIIIe siècle, plomb fréquent, classes énergétiques basses) et des extensions résidentielles des années 1950-1990 (rive droite du Vidourle, lotissements pavillonnaires). 65 % de maisons / 35 % d\'appartements. Le centre historique pré-1949 déclenche systématiquement plomb et amiante. Les pavillons des années 1970-1990 déclenchent presque toujours électricité et gaz.",

    enjeuxLocaux:
      "Sommières est exposée aux crues torrentielles du Vidourle — la 'Vidourlade' est documentée depuis des siècles. Le PPRi Moyen Vidourle couvre une partie significative du territoire. Près de 1 400 bâtiments du Pays de Sommières sont en zone à risque inondation, et la communauté de communes accompagne les propriétaires pour réduire la vulnérabilité de leur logement (programme Alabri). L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions.",

    accessibilityNote:
      "Sommières est à 35 minutes de Prades-le-Lez (35 km) via la D17 et la D610 — intervention sous 48 h garantie sur l\'ensemble de la commune (centre médiéval, rive droite, lotissements).",

    quartiersTypiques: [
      'Centre médiéval (XIIe-XVIIIe siècle, château, pont romain)',
      'Rive droite du Vidourle (extensions XIXe-XXe)',
      'Lotissements pavillonnaires (années 1970-1990)',
      'Abords du Vidourle (zone PPRi)',
    ],

    communesLimitrophes: ['Junas', 'Aspères', 'Villevieille', 'Salinelles', 'Boisseron', 'Saussines'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Sommières ?",
        a: "Pour toute vente à Sommières, le DPE, l\'ERP (central à cause du PPRi Moyen Vidourle) et le diagnostic termites sont systématiques. Selon l\'âge du bien : amiante (centre médiéval et extensions pré-1997), plomb (centre historique pré-1949 — quasi-systématique), électricité et gaz (installations de plus de 15 ans), et Carrez en copropriété.",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Sommières ?",
        a: "À Sommières, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC, le pack vente maison (avec termites en plus) à 380 € TTC. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Sommières ?",
        a: "Sommières est à 35 minutes de Prades-le-Lez (35 km) via la D17 et la D610. L\'intervention est garantie sous 48 h après validation du devis. Rapport remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Sommières ?",
        a: "Une partie significative de Sommières est couverte par le PPRi Moyen Vidourle. Les abords du Vidourle, en particulier le centre historique et la rive droite, sont en zone d\'aléa pour les crues torrentielles ('Vidourlade'). Près de 1 400 bâtiments du Pays de Sommières sont concernés. La communauté de communes propose un accompagnement (programme Alabri) pour réduire la vulnérabilité. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'vergeze',
    name: 'Vergèze',
    nameSeo: 'Vergèze (30)',
    codePostal: '30310',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.7400, lng: 4.2200 },
    distanceFromBaseKm: 45,
    travelTimeMin: 40,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/vergeze.webp',
      alt: 'La mairie de Vergèze',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Hotel_de_Vergeze_(2014).jpg',
    },

    population: 5100,
    nbLogements: 2400,
    pctResidencesSecondaires: 4,
    pctMaisons: 70,
    pctAppartements: 30,
    surfaceMoyenne: 95,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 2800,
    prixM2Maison: 2950,
    prixM2Appartement: 2400,
    dpeMoyenKwh: 195,
    dpeMoyenCo2: 28,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Vistre',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        "Vergèze est concernée par les débordements du Vistre et de la Vidourle (proximité). Une partie du territoire est en zone inondable.",
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          "Vergèze est dominée à 70 % par les maisons individuelles. Le centre village historique et les lotissements des années 1970-2000 dominent le parc. Le DPE pèse fortement dans la valorisation, particulièrement sur le bâti ancien (centre village pré-1949). Marché accessible (2 800 €/m²) en progression.",
      },
      {
        slug: 'amiante',
        whyHere:
          "Le centre village et les pavillons des années 1970-1990 déclenchent quasi-systématiquement le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.",
      },
      {
        slug: 'termites',
        whyHere:
          "Le Gard sud (zones humides Vistre, Vidourle) est classé en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente — particulièrement scruté sur les pavillons individuels.",
      },
    ],

    intro:
      "Vergèze, commune du Gard sud entre Nîmes et Lunel, est connue pour la source Perrier et son tissu industriel local. Marché immobilier accessible (2 800 €/m²), parc dominé à 70 % par les maisons individuelles, exposition au risque inondation par le Vistre et le Vidourle.",

    parcImmoNote:
      "Le parc verguois est composé à 70 % de maisons et 30 % d\'appartements. Le centre village historique concentre un bâti antérieur à 1949 (plomb fréquent). Les lotissements pavillonnaires des années 1970-2000 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes restent minoritaires.",

    enjeuxLocaux:
      "Vergèze est concernée par les débordements du Vistre et la proximité de la basse plaine du Vidourle. Une partie du territoire communal est en zone inondable. L\'État des Risques et Pollutions est systématique sur la commune. Comme partout dans le Gard sud, le diagnostic termites est obligatoire pour toute vente, et le risque amiante reste élevé sur le parc pré-1997.",

    accessibilityNote:
      "Vergèze est à 40 minutes de Prades-le-Lez (45 km) via l\'A9 et la D6086 — intervention sous 48 h garantie sur l\'ensemble de la commune.",

    quartiersTypiques: [
      'Centre village historique',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Zone industrielle et résidentielle Perrier',
      'Extensions récentes en périphérie',
    ],

    communesLimitrophes: ['Codognan', 'Mus', 'Aimargues', 'Aubord', 'Uchaud'],

    faqLocale: [
      {
        q: "Quels diagnostics sont obligatoires pour vendre à Vergèze ?",
        a: "Pour toute vente à Vergèze, le DPE, l\'ERP et le diagnostic termites sont systématiques. Selon l\'âge du bien : amiante (centre village et pavillons pré-1997), plomb (centre historique pré-1949), électricité et gaz (installations de plus de 15 ans), et Carrez en copropriété (minoritaire vu que 70 % du parc est en maison individuelle).",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Vergèze ?",
        a: "À Vergèze, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC — c\'est le pack le plus demandé compte tenu du parc dominé par les maisons. Pack vente appartement à 290 € TTC. Aucun frais de déplacement n\'est appliqué.",
      },
      {
        q: "Sous quel délai intervenez-vous à Vergèze ?",
        a: "Vergèze est à 40 minutes de Prades-le-Lez (45 km) via l\'A9 et la D6086. L\'intervention est garantie sous 48 h après validation du devis. Rapport remis sous 24 h ouvrées après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Vergèze ?",
        a: "Une partie de Vergèze est concernée par les débordements du Vistre et la proximité de la basse plaine du Vidourle. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
      },
    ],
  },
  {
    slug: 'sete',
    name: 'Sète',
    nameSeo: 'Sète (34)',
    codePostal: '34200',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.4053, lng: 3.6975 },
    distanceFromBaseKm: 38,
    travelTimeMin: 40,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/sete.webp',
      alt: 'La Grace (navire) à Sète, Hérault',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:La_Grace_(ship%2C_2010)%2C_S%C3%A8te%2C_H%C3%A9rault_01.jpg',
    },

    population: 45337,
    nbLogements: 28500,
    pctResidencesSecondaires: 22,
    pctMaisons: 28,
    pctAppartements: 70,
    surfaceMoyenne: 68,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 95,
    prixM2Moyen: 3850,
    prixM2Maison: 4100,
    prixM2Appartement: 3750,
    dpeMoyenKwh: 195,
    dpeMoyenCo2: 28,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: true,
      tri: 'Sète-Frontignan-Mèze',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi bassin de Thau, PPRL submersion marine — Sète est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'erp',
        whyHere:
          'Sète est inscrite en TRI Sète-Frontignan-Mèze, exposée à la fois aux débordements du bassin de Thau et au risque de submersion marine (Méditerranée + lagune). Le PPRi et le PPRL couvrent une part importante de la commune. L\'État des Risques et Pollutions est déterminant pour toute transaction — la décote en zone d\'aléa fort peut atteindre 10 à 20 %.',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre historique (Quartier-Haut, Pointe Courte, Île de Thau) et les ensembles balnéaires des années 1960-1990 (La Corniche, Plagette) concentrent un bâti pré-1997 où le repérage amiante est quasi-systématique en vente. Avec 22 % de résidences secondaires, le turnover est élevé.',
      },
      {
        slug: 'dpe',
        whyHere:
          'Le parc sétois est dominé à 70 % par les appartements en copropriété, souvent dans des immeubles balnéaires des années 1960-1990 classés E-G. Le DPE pèse fortement dans la valorisation, et l\'audit énergétique devient fréquent sur les passoires thermiques (F/G) à la vente.',
      },
    ],

    intro:
      'Sète, « île singulière » entre Méditerranée et bassin de Thau, est le premier port français de pêche en Méditerranée et l\'un des hauts lieux culturels de l\'Hérault (Théâtre de la Mer, cimetière marin de Paul Valéry, Mont Saint-Clair). Marché immobilier actif (3 850 €/m² en moyenne), parc historique dense, 22 % de résidences secondaires.',

    parcImmoNote:
      'Le parc sétois est dominé à 70 % par les appartements (28 500 logements, 22 % de résidences secondaires). Le centre historique — Quartier-Haut, Pointe Courte, abords du canal — concentre un bâti antérieur à 1949 (plomb fréquent). Les copropriétés balnéaires de la Corniche et de la Plagette (années 1960-1990) déclenchent quasi-systématiquement amiante, électricité et gaz. L\'Île de Thau (collectif années 1970) et les ZAC plus récentes complètent le panorama. La forte saisonnalité touristique (port + plages) tire le marché.',

    enjeuxLocaux:
      'Sète est inscrite en TRI Sète-Frontignan-Mèze, doublement exposée au débordement du bassin de Thau et à la submersion marine (Méditerranée à l\'est, étang à l\'ouest). Le PPRi et le PPRL couvrent une partie significative du territoire. L\'État des Risques et Pollutions est central et particulièrement scruté lors des transactions — un bien en zone d\'aléa fort peut subir une décote de 10 à 20 %. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Sète est à 40 minutes de Prades-le-Lez (38 km) via l\'A9 et la sortie Mèze — intervention sous 48 h garantie dès l\'ouverture de l\'activité, du Quartier-Haut au Mont Saint-Clair en passant par la Corniche et l\'Île de Thau.',

    quartiersTypiques: [
      'Centre historique : Quartier-Haut, Pointe Courte, abords du canal',
      'La Corniche et la Plagette (copropriétés balnéaires 1960-1990)',
      'Mont Saint-Clair (résidentiel premium avec vue)',
      'Île de Thau (collectif années 1970, locatif et résidences secondaires)',
    ],

    communesLimitrophes: ['Frontignan', 'Bouzigues', 'Loupian', 'Marseillan', 'Mèze'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Sète ?',
        a: 'Pour toute vente à Sète, le DPE, l\'ERP (central à cause du PPRi bassin de Thau et du PPRL submersion marine) et le diagnostic termites sont systématiques. Selon le bien : amiante (centre historique et copros balnéaires pré-1997 — très fréquent), plomb (Quartier-Haut, Pointe Courte pré-1949), électricité et gaz (installations de plus de 15 ans, courant sur la Corniche et l\'Île de Thau), et mesurage Carrez (systématique vu que 70 % du parc est en copropriété).',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Sète ?',
        a: 'À Sète, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC — c\'est le pack le plus demandé compte tenu du parc dominé à 70 % par les appartements en copropriété. Aucun frais de déplacement appliqué sur la commune. Pour les copropriétés balnéaires, je peux coordonner directement avec le syndic pour l\'accès aux parties communes.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Sète ?',
        a: 'Sète est à 40 minutes de Prades-le-Lez (38 km) via l\'A9. L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées. Pour les ventes urgentes (compromis signé, délai notaire), je priorise le créneau le plus rapide compatible avec mon agenda.',
      },
      {
        q: 'Mon bien sétois est-il en zone inondable ou de submersion marine ?',
        a: 'Une part significative de Sète est concernée. Le PPRi bassin de Thau couvre les abords de la lagune (Pointe Courte, Île de Thau, base nautique). Le PPRL submersion marine couvre la frange littorale méditerranéenne (Plagette, Corniche jusqu\'à la Mole). Le Quartier-Haut, perché sur le Mont Saint-Clair, est généralement épargné. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'frontignan',
    name: 'Frontignan',
    nameSeo: 'Frontignan (34)',
    codePostal: '34110',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.4483, lng: 3.7561 },
    distanceFromBaseKm: 32,
    travelTimeMin: 35,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/frontignan.webp',
      alt: 'Mairie de Frontignan vue depuis le clocher',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Frontignan_mairie_vue_depuis_clocher.JPG',
    },

    population: 24136,
    nbLogements: 13800,
    pctResidencesSecondaires: 18,
    pctMaisons: 55,
    pctAppartements: 43,
    surfaceMoyenne: 78,
    surfaceMoyenneAppartement: 56,
    surfaceMoyenneMaison: 98,
    prixM2Moyen: 3650,
    prixM2Maison: 3850,
    prixM2Appartement: 3500,
    dpeMoyenKwh: 185,
    dpeMoyenCo2: 27,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: true,
      tri: 'Sète-Frontignan-Mèze',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi bassin de Thau, PPRL submersion marine — Frontignan est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'erp',
        whyHere:
          'Frontignan est inscrite en TRI Sète-Frontignan-Mèze. La commune est exposée au débordement de l\'étang de Thau, à la submersion marine (Frontignan-Plage, La Peyrade) et aux risques industriels (PPRT raffinerie historique). L\'État des Risques et Pollutions est particulièrement scruté lors des transactions.',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre médiéval (Tour Saint-Paul, vieille ville) et les pavillons des années 1960-1990 concentrent un bâti pré-1997 où le repérage amiante est quasi-systématique. La Peyrade, ancien quartier ouvrier de la raffinerie, présente aussi un parc ancien dense.',
      },
      {
        slug: 'dpe',
        whyHere:
          'Frontignan combine 55 % de maisons et 43 % d\'appartements, avec un parc en grande partie post-1970. Le DPE pèse dans la valorisation à la vente comme à la location, particulièrement sur Frontignan-Plage où la saisonnalité touristique tire la demande.',
      },
    ],

    intro:
      'Frontignan, ville-port entre Sète et Montpellier, est connue pour son AOC Muscat, sa raffinerie historique et son front de mer (Frontignan-Plage). Marché immobilier actif (3 650 €/m² en moyenne), parc équilibré entre centre médiéval, faubourgs ouvriers et résidentiel récent. 18 % de résidences secondaires.',

    parcImmoNote:
      'Le parc frontignanais est composé à 55 % de maisons et 43 % d\'appartements (13 800 logements). Le centre médiéval autour de la Tour Saint-Paul concentre un bâti antérieur à 1949 — plomb fréquent. La Peyrade, ancien faubourg lié à la raffinerie, présente un parc des années 1950-1970 (amiante, électricité, gaz quasi-systématiques). Frontignan-Plage et les ZAC plus récentes complètent le panorama. La forte saisonnalité touristique (plage, AOC Muscat) tire la part de résidences secondaires à 18 %.',

    enjeuxLocaux:
      'Frontignan est en TRI Sète-Frontignan-Mèze, exposée au débordement de l\'étang de Thau et à la submersion marine au sud (Frontignan-Plage, La Peyrade). La commune comprend également un site industriel classé (raffinerie) avec un PPRT associé. L\'État des Risques et Pollutions est systématique et particulièrement déterminant. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Frontignan est à 35 minutes de Prades-le-Lez (32 km) via l\'A9 — intervention sous 48 h garantie sur l\'ensemble de la commune (centre médiéval, La Peyrade, Frontignan-Plage) dès l\'ouverture de l\'activité.',

    quartiersTypiques: [
      'Centre médiéval (Tour Saint-Paul, vieille ville pré-1949)',
      'La Peyrade (faubourg ouvrier années 1950-1970)',
      'Frontignan-Plage (résidentiel touristique 1970-1990)',
      'ZAC récentes (post-2000) en périphérie',
    ],

    communesLimitrophes: ['Sète', 'Balaruc-le-Vieux', 'Balaruc-les-Bains', 'Gigean', 'Vic-la-Gardiole', 'Villeneuve-lès-Maguelone'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Frontignan ?',
        a: 'Pour toute vente à Frontignan, le DPE, l\'ERP (central — TRI Sète-Frontignan-Mèze + PPRT raffinerie) et le diagnostic termites sont systématiques. Selon le bien : amiante (centre médiéval et pavillons pré-1997 — très fréquent), plomb (vieille ville pré-1949), électricité et gaz (installations de plus de 15 ans, courant sur La Peyrade et Frontignan-Plage), et le mesurage Carrez en copropriété.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Frontignan ?',
        a: 'À Frontignan, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC, le pack vente appartement à 290 € TTC. Aucun frais de déplacement appliqué sur la commune (centre, La Peyrade, Frontignan-Plage).',
      },
      {
        q: 'Sous quel délai intervenez-vous à Frontignan ?',
        a: 'Frontignan est à 35 minutes de Prades-le-Lez (32 km) via l\'A9 (sortie Sète Est). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture, rapport remis sous 24 h ouvrées.',
      },
      {
        q: 'Le risque industriel (raffinerie) impacte-t-il mon bien à Frontignan ?',
        a: 'Oui pour les biens situés dans le périmètre du PPRT (Plan de Prévention des Risques Technologiques) de la raffinerie. L\'État des Risques et Pollutions (ERP) que je réalise précise si votre adresse est concernée et le niveau d\'aléa applicable.',
      },
    ],
  },
  {
    slug: 'villeneuve-les-maguelone',
    name: 'Villeneuve-lès-Maguelone',
    nameSeo: 'Villeneuve-lès-Maguelone (34)',
    codePostal: '34750',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.5331, lng: 3.8617 },
    distanceFromBaseKm: 18,
    travelTimeMin: 22,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/villeneuve-les-maguelone.webp',
      alt: 'Villeneuve-lès-Maguelone — vue du village',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Villeneuve-les-Maguelone_(1).jpg',
    },

    population: 10872,
    nbLogements: 5200,
    pctResidencesSecondaires: 8,
    pctMaisons: 65,
    pctAppartements: 33,
    surfaceMoyenne: 92,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 110,
    prixM2Moyen: 4150,
    prixM2Maison: 4350,
    prixM2Appartement: 3850,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 25,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: true,
      tri: 'Lez-Mosson-Étangs Palavasiens',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Lez-Mosson, PPRL submersion marine — Villeneuve-lès-Maguelone est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'erp',
        whyHere:
          'Villeneuve-lès-Maguelone est en TRI Lez-Mosson-Étangs Palavasiens, exposée à la fois au débordement du bassin Lez-Mosson et à la submersion marine (étangs côtiers, plage de Maguelone). Le PPRi et le PPRL couvrent une part significative du territoire. L\'État des Risques et Pollutions est central pour toute transaction.',
      },
      {
        slug: 'dpe',
        whyHere:
          'Villeneuve-lès-Maguelone combine 65 % de maisons individuelles et 33 % d\'appartements, avec un parc majoritairement post-1970. Le DPE pèse fortement dans la valorisation à la vente (4 150 €/m² en moyenne) — marché tendu par la proximité Montpellier.',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village historique et les pavillons des années 1970-1990 concentrent un bâti pré-1997 où le repérage amiante est quasi-systématique. Les ZAC plus récentes (post-2000) sont épargnées mais minoritaires dans le parc actuel.',
      },
    ],

    intro:
      'Villeneuve-lès-Maguelone, commune du sud-ouest de la Métropole de Montpellier, est célèbre pour la cathédrale de Maguelone (île monument historique, ancienne île épiscopale) et sa plage sauvage. Marché immobilier actif (4 150 €/m² en moyenne), parc dominé par les maisons individuelles, commune prisée pour son cadre.',

    parcImmoNote:
      'Le parc villeneuvois est composé à 65 % de maisons et 33 % d\'appartements (5 200 logements, 8 % de résidences secondaires). Le centre village concentre un bâti antérieur à 1949 (plomb fréquent). Les lotissements pavillonnaires des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes alignent un parc post-2000 en bonne classe énergétique. La proximité Montpellier (18 km) tire le marché.',

    enjeuxLocaux:
      'Villeneuve-lès-Maguelone est en TRI Lez-Mosson-Étangs Palavasiens, doublement exposée au débordement de cours d\'eau et au risque de submersion marine (étangs côtiers + plage de Maguelone). Le PPRi et le PPRL couvrent une partie significative du territoire — particulièrement les abords des étangs et la zone littorale. L\'État des Risques et Pollutions est central et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Villeneuve-lès-Maguelone est à 22 minutes de Prades-le-Lez (18 km) — intervention sous 48 h garantie sur l\'ensemble de la commune (centre village, ZAC, abords plage) dès l\'ouverture de l\'activité.',

    quartiersTypiques: [
      'Centre village historique (pré-1949, plomb fréquent)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Cathédrale de Maguelone et abords littoraux',
      'ZAC récentes (post-2000) en bonne classe énergétique',
    ],

    communesLimitrophes: ['Lattes', 'Saint-Jean-de-Védas', 'Fabrègues', 'Mireval', 'Vic-la-Gardiole', 'Frontignan', 'Palavas-les-Flots'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Villeneuve-lès-Maguelone ?',
        a: 'Pour toute vente à Villeneuve-lès-Maguelone, le DPE, l\'ERP (central — TRI Lez-Mosson + PPRL submersion marine) et le diagnostic termites sont systématiques. Selon le bien : amiante (centre village et pavillons pré-1997), plomb (centre historique pré-1949), électricité et gaz (installations de plus de 15 ans), et Carrez en copropriété.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Villeneuve-lès-Maguelone ?',
        a: 'À Villeneuve-lès-Maguelone, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC — c\'est le pack le plus demandé compte tenu du parc dominé à 65 % par les maisons. Pack vente appartement à 290 € TTC. Aucun frais de déplacement appliqué.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Villeneuve-lès-Maguelone ?',
        a: 'Villeneuve-lès-Maguelone est à 22 minutes de Prades-le-Lez (18 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, rapport remis sous 24 h ouvrées.',
      },
      {
        q: 'Mon bien est-il exposé à la submersion marine à Villeneuve-lès-Maguelone ?',
        a: 'Possible si votre bien est proche des étangs Palavasiens ou de la plage de Maguelone. Le PPRL submersion marine couvre une partie significative du sud de la commune. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'palavas-les-flots',
    name: 'Palavas-les-Flots',
    nameSeo: 'Palavas-les-Flots (34)',
    codePostal: '34250',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.5303, lng: 3.9314 },
    distanceFromBaseKm: 22,
    travelTimeMin: 28,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/palavas-les-flots.webp',
      alt: 'Église de Palavas et phare de la Méditerranée',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:L%27%C3%A9glise_de_Palavas_et_le_phare_de_la_M%C3%A9diterran%C3%A9e.JPG',
    },

    population: 6133,
    nbLogements: 9800,
    pctResidencesSecondaires: 58,
    pctMaisons: 18,
    pctAppartements: 80,
    surfaceMoyenne: 48,
    surfaceMoyenneAppartement: 42,
    surfaceMoyenneMaison: 85,
    prixM2Moyen: 5650,
    prixM2Maison: 6200,
    prixM2Appartement: 5450,
    dpeMoyenKwh: 210,
    dpeMoyenCo2: 32,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: true,
      tri: 'Lez-Mosson-Étangs Palavasiens',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi étangs palavasiens, PPRL submersion marine — Palavas-les-Flots est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'erp',
        whyHere:
          'Palavas-les-Flots est en TRI Lez-Mosson-Étangs Palavasiens, doublement exposée à la submersion marine (Méditerranée + étangs) et au débordement du Lez. Une partie très significative du territoire est en zone d\'aléa fort. L\'État des Risques et Pollutions est déterminant — la décote en zone d\'aléa peut atteindre 10 à 20 %.',
      },
      {
        slug: 'dpe',
        whyHere:
          'Palavas est dominée à 80 % par les appartements en copropriété balnéaire, majoritairement des années 1960-1980 (souvent classés E-F). 58 % du parc est en résidence secondaire — le DPE pèse fortement dans la valorisation des copropriétés à la vente, particulièrement sur les passoires thermiques.',
      },
      {
        slug: 'amiante',
        whyHere:
          'Les copropriétés balnéaires des années 1960-1990 — qui constituent l\'essentiel du parc palavasien — déclenchent quasi-systématiquement le repérage amiante en vente. Avec 58 % de résidences secondaires, les transactions sont fréquentes et le repérage indispensable.',
      },
    ],

    intro:
      'Palavas-les-Flots, station balnéaire historique de la Côte languedocienne, est l\'une des destinations touristiques majeures de l\'Hérault. Marché immobilier premium (5 650 €/m² en moyenne — le plus cher de la sélection), parc dominé à 80 % par les appartements, 58 % de résidences secondaires.',

    parcImmoNote:
      'Le parc palavasien est exceptionnel : 80 % d\'appartements (vs 33 % à Villeneuve voisine), 58 % de résidences secondaires, 9 800 logements pour 6 133 habitants permanents. Surface moyenne contenue (48 m²) typique des appartements touristiques. Les copropriétés balnéaires des années 1960-1990 — symboles du Languedoc-Roussillon balnéaire planifié — dominent le parc, autour des deux rives du Lez et des étangs. Le centre historique du port concentre quelques bâtis pré-1949.',

    enjeuxLocaux:
      'Palavas-les-Flots est en TRI Lez-Mosson-Étangs Palavasiens, doublement exposée à la submersion marine (Méditerranée à l\'est, étangs Palavasiens à l\'ouest) et au débordement du Lez. Une part très significative du territoire est en zone d\'aléa fort selon le PPRL. La saisonnalité touristique (population multipliée par 5 en été) ajoute une pression sur les infrastructures. L\'État des Risques et Pollutions est central et particulièrement déterminant lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Palavas-les-Flots est à 28 minutes de Prades-le-Lez (22 km) — intervention sous 48 h garantie sur l\'ensemble de la commune (rive gauche/droite du Lez, abords des étangs, casino) dès l\'ouverture. Pour les copropriétés, coordination directe avec le syndic possible pour l\'accès aux parties communes.',

    quartiersTypiques: [
      'Centre historique du port (rive gauche/droite Lez, pré-1949)',
      'Copropriétés balnéaires (années 1960-1990, 80 % du parc)',
      'Résidences secondaires et locatif touristique saisonnier',
      'Abords des étangs Palavasiens (zone d\'aléa fort)',
    ],

    communesLimitrophes: ['Lattes', 'Pérols', 'Mauguio', 'Villeneuve-lès-Maguelone'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Palavas-les-Flots ?',
        a: 'Pour toute vente à Palavas-les-Flots, le DPE, l\'ERP (central — TRI Lez-Mosson + PPRL submersion marine très étendu) et le diagnostic termites sont systématiques. Selon le bien : amiante (copros balnéaires pré-1997 — quasi-systématique), plomb (centre historique du port pré-1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez (systématique vu que 80 % du parc est en copropriété).',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Palavas-les-Flots ?',
        a: 'À Palavas-les-Flots, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC — c\'est le pack le plus demandé compte tenu du parc dominé à 80 % par les copropriétés balnéaires. Aucun frais de déplacement appliqué. Pour les copropriétés, je coordonne directement avec le syndic pour l\'accès aux parties communes.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Palavas-les-Flots ?',
        a: 'Palavas-les-Flots est à 28 minutes de Prades-le-Lez (22 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, rapport remis sous 24 h ouvrées. En haute saison (juillet-août), je priorise les créneaux compatibles avec les locataires touristiques.',
      },
      {
        q: 'Mon bien est-il en zone d\'aléa fort à Palavas-les-Flots ?',
        a: 'Très probablement oui : une part très significative du territoire de Palavas-les-Flots est en zone d\'aléa fort selon le PPRL submersion marine, en raison de la double exposition Méditerranée + étangs Palavasiens. Le débordement du Lez ajoute un risque inondation. La décote en zone d\'aléa fort peut atteindre 10 à 20 %. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'prades-le-lez',
    name: 'Prades-le-Lez',
    nameSeo: 'Prades-le-Lez (34)',
    codePostal: '34730',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6974, lng: 3.8647 },
    distanceFromBaseKm: 0,
    travelTimeMin: 5,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/prades-le-lez.webp',
      alt: 'Vue de Prades-le-Lez côté est',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Vue_Prades_Est.jpg',
    },

    population: 6184,
    nbLogements: 2700,
    pctResidencesSecondaires: 3,
    pctMaisons: 78,
    pctAppartements: 21,
    surfaceMoyenne: 105,
    surfaceMoyenneAppartement: 65,
    surfaceMoyenneMaison: 120,
    prixM2Moyen: 4250,
    prixM2Maison: 4400,
    prixM2Appartement: 3850,
    dpeMoyenKwh: 170,
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
        'PPRi du Lez — Prades-le-Lez est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Prades-le-Lez est dominée à 78 % par les maisons individuelles, avec un parc de qualité et une forte proportion de résidences principales (97 %). Le DPE pèse fortement dans la valorisation à la vente (4 250 €/m² en moyenne), particulièrement sur les maisons des années 1980-2000 où l\'isolation thermique est un enjeu central.',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village historique et les pavillons des années 1970-1990 (Mas Carcasses, abords du Lez) concentrent un bâti pré-1997 où le repérage amiante est quasi-systématique en vente. Les domaines récents (post-2000) sont épargnés.',
      },
      {
        slug: 'erp',
        whyHere:
          'Prades-le-Lez est traversée par le Lez et concernée par son PPRi. Les abords du fleuve (zones est de la commune) sont en zone inondable réglementée. L\'État des Risques et Pollutions est systématique pour toute transaction.',
      },
    ],

    intro:
      'Prades-le-Lez, commune résidentielle premium de la première couronne nord de Montpellier, est connue pour le Domaine de Restinclières (240 ha de parc forestier départemental) et sa qualité de vie. Marché immobilier tendu (4 250 €/m² en moyenne), parc dominé à 78 % par les maisons individuelles, faible part de résidences secondaires (3 %).',

    parcImmoNote:
      'Le parc prades-le-lézois est dominé à 78 % par les maisons individuelles (2 700 logements, 97 % de résidences principales). Les maisons familiales 4-5 pièces dominent, avec des surfaces moyennes autour de 120 m². Le centre village historique concentre un bâti antérieur à 1949 (plomb fréquent). Les lotissements des années 1970-1990 (Mas Carcasses, abords du Lez) déclenchent presque toujours les diagnostics électricité et gaz. Les domaines plus récents (post-2000) alignent un parc en bonne classe énergétique.',

    enjeuxLocaux:
      'Prades-le-Lez est traversée par le Lez et concernée par son PPRi. Les abords du fleuve, particulièrement à l\'est de la commune, sont en zone inondable réglementée. La présence du Domaine de Restinclières (240 ha de forêt départementale) protège une partie significative du nord de la commune. L\'État des Risques et Pollutions est systématique sur la commune. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Prades-le-Lez est ma commune de résidence — intervention le jour même très souvent possible, sous 48 h garantie. Couverture immédiate du centre village, des Mas, des domaines récents et des abords du Lez.',

    quartiersTypiques: [
      'Centre village historique (pré-1949, plomb fréquent)',
      'Mas Carcasses et lotissements (années 1970-1990)',
      'Domaines résidentiels récents (post-2000, classe énergétique correcte)',
      'Abords du Lez et Domaine de Restinclières (zone PPRi)',
    ],

    communesLimitrophes: ['Clapiers', 'Saint-Clément-de-Rivière', 'Montferrier-sur-Lez', 'Les Matelles', 'Assas', 'Le Triadou', 'Saint-Vincent-de-Barbeyrargues'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Prades-le-Lez ?',
        a: 'Pour toute vente à Prades-le-Lez, le DPE, l\'ERP (PPRi du Lez) et le diagnostic termites sont systématiques. Selon le bien : amiante (centre village et pavillons pré-1997 — fréquent), plomb (centre historique pré-1949), électricité et gaz (installations de plus de 15 ans, très courant sur les Mas des années 1970-1990), et le mesurage Carrez en copropriété (minoritaire vu que 78 % du parc est en maison individuelle).',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Prades-le-Lez ?',
        a: 'À Prades-le-Lez, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC — c\'est le pack le plus demandé compte tenu du parc dominé à 78 % par les maisons. Aucun frais de déplacement, c\'est ma commune de résidence.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Prades-le-Lez ?',
        a: 'Prades-le-Lez étant ma commune de résidence, l\'intervention le jour même est très souvent possible (sous réserve de mon agenda). Garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, rapport remis sous 24 h ouvrées.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Prades-le-Lez ?',
        a: 'Une partie de Prades-le-Lez est couverte par le PPRi du Lez, principalement les abords du fleuve à l\'est de la commune. Les quartiers situés en hauteur (centre village, lotissements ouest, domaines récents) sont généralement épargnés. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'saint-clement-de-riviere',
    name: 'Saint-Clément-de-Rivière',
    nameSeo: 'Saint-Clément-de-Rivière (34)',
    codePostal: '34980',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6844, lng: 3.8472 },
    distanceFromBaseKm: 4,
    travelTimeMin: 8,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/saint-clement-de-riviere.webp',
      alt: 'Cœur de village de Saint-Clément-de-Rivière',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Coeur_de_village_08.jpg',
    },

    population: 5218,
    nbLogements: 2200,
    pctResidencesSecondaires: 2,
    pctMaisons: 88,
    pctAppartements: 11,
    surfaceMoyenne: 130,
    surfaceMoyenneAppartement: 70,
    surfaceMoyenneMaison: 145,
    prixM2Moyen: 4850,
    prixM2Maison: 5000,
    prixM2Appartement: 4200,
    dpeMoyenKwh: 165,
    dpeMoyenCo2: 23,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi du Lez — Saint-Clément-de-Rivière est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Saint-Clément-de-Rivière est dominée à 88 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (4850 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Saint-Clément-de-Rivière.',
      },
    ],

    intro:
      'Saint-Clément-de-Rivière, commune résidentielle premium de la métropole de Montpellier, présente un marché immobilier tendu (4 850 €/m² en moyenne). 5 218 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Saint-Clément-de-Rivière est composé à 88 % de maisons et 11 % d\'appartements (2 200 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Saint-Clément-de-Rivière est concernée par le PPRi du Lez. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Saint-Clément-de-Rivière est à 8 minutes de Prades-le-Lez (4 km) — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique (pré-1949)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes en périphérie',
      'Abords de cours d\'eau (zone PPRi Lez-Mosson)',
    ],

    communesLimitrophes: ['Grabels', 'Les Matelles', 'Montferrier-sur-Lez', 'Montpellier', 'Prades-le-Lez', 'Saint-Gély-du-Fesc'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Saint-Clément-de-Rivière ?',
        a: 'Pour toute vente à Saint-Clément-de-Rivière, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Saint-Clément-de-Rivière ?',
        a: 'À Saint-Clément-de-Rivière, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Saint-Clément-de-Rivière ?',
        a: 'Saint-Clément-de-Rivière est à 8 minutes de Prades-le-Lez (4 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Saint-Clément-de-Rivière ?',
        a: 'Une partie de Saint-Clément-de-Rivière est couverte par le PPRi du Lez. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'grabels',
    name: 'Grabels',
    nameSeo: 'Grabels (34)',
    codePostal: '34790',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6481, lng: 3.8017 },
    distanceFromBaseKm: 9,
    travelTimeMin: 18,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/grabels.webp',
      alt: 'Ville de Grabels',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:VilleGrabels.jpg',
    },

    population: 9092,
    nbLogements: 4100,
    pctResidencesSecondaires: 3,
    pctMaisons: 60,
    pctAppartements: 39,
    surfaceMoyenne: 92,
    surfaceMoyenneAppartement: 62,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 4050,
    prixM2Maison: 4250,
    prixM2Appartement: 3750,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 25,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi de la Mosson — Grabels est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Grabels présente un parc immobilier mixte (60 % maisons, 39 % appartements). Le DPE est central dans la valorisation à la vente comme à la location (4050 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les ensembles pré-1997 concentrent un bâti où le repérage amiante est quasi-systématique en vente.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Grabels.',
      },
    ],

    intro:
      'Grabels, commune de la métropole de Montpellier, présente un marché immobilier tendu (4 050 €/m² en moyenne). 9 092 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Grabels est composé à 60 % de maisons et 39 % d\'appartements (4 100 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Grabels est concernée par le PPRi de la Mosson. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Grabels est à 18 minutes de Prades-le-Lez (9 km) — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Combaillaux', 'Juvignac', 'Montarnaud', 'Montpellier', 'Saint-Clément-de-Rivière', 'Saint-Gély-du-Fesc', 'Saint-Georges-d\'Orques', 'Vailhauquès'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Grabels ?',
        a: 'Pour toute vente à Grabels, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Grabels ?',
        a: 'À Grabels, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Grabels ?',
        a: 'Grabels est à 18 minutes de Prades-le-Lez (9 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Grabels ?',
        a: 'Une partie de Grabels est couverte par le PPRi de la Mosson. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'juvignac',
    name: 'Juvignac',
    nameSeo: 'Juvignac (34)',
    codePostal: '34990',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6139, lng: 3.8106 },
    distanceFromBaseKm: 13,
    travelTimeMin: 22,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/juvignac.webp',
      alt: 'Thermes de Juvignac',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Juvignac_Thermes.jpg',
    },

    population: 14055,
    nbLogements: 6300,
    pctResidencesSecondaires: 3,
    pctMaisons: 55,
    pctAppartements: 44,
    surfaceMoyenne: 86,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 110,
    prixM2Moyen: 4100,
    prixM2Maison: 4300,
    prixM2Appartement: 3850,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 25,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi de la Mosson — Juvignac est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Juvignac présente un parc immobilier mixte (55 % maisons, 44 % appartements). Le DPE est central dans la valorisation à la vente comme à la location (4100 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les ensembles pré-1997 concentrent un bâti où le repérage amiante est quasi-systématique en vente.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Juvignac.',
      },
    ],

    intro:
      'Juvignac, commune de la métropole de Montpellier, présente un marché immobilier tendu (4 100 €/m² en moyenne). 14 055 habitants, parc dominé à parts équilibrées maisons/appartements.',

    parcImmoNote:
      'Le parc de Juvignac est composé à 55 % de maisons et 44 % d\'appartements (6 300 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Juvignac est concernée par le PPRi de la Mosson. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Juvignac est à 22 minutes de Prades-le-Lez (13 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Grabels', 'Saint-Georges-d\'Orques', 'Montpellier', 'Lavérune', 'Saint-Jean-de-Védas'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Juvignac ?',
        a: 'Pour toute vente à Juvignac, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Juvignac ?',
        a: 'À Juvignac, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Juvignac ?',
        a: 'Juvignac est à 22 minutes de Prades-le-Lez (13 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Juvignac ?',
        a: 'Une partie de Juvignac est couverte par le PPRi de la Mosson. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'pignan',
    name: 'Pignan',
    nameSeo: 'Pignan (34)',
    codePostal: '34570',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.5853, lng: 3.7625 },
    distanceFromBaseKm: 18,
    travelTimeMin: 25,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/pignan.webp',
      alt: 'Centre de Pignan',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Pignan_(1).jpg',
    },

    population: 8431,
    nbLogements: 3700,
    pctResidencesSecondaires: 3,
    pctMaisons: 70,
    pctAppartements: 29,
    surfaceMoyenne: 95,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 3650,
    prixM2Maison: 3800,
    prixM2Appartement: 3300,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 25,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi de la Mosson — Pignan est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Pignan est dominée à 70 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (3650 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Pignan.',
      },
    ],

    intro:
      'Pignan, commune de la métropole de Montpellier, présente un marché immobilier actif (3 650 €/m² en moyenne). 8 431 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Pignan est composé à 70 % de maisons et 29 % d\'appartements (3 700 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Pignan est concernée par le PPRi de la Mosson. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Pignan est à 25 minutes de Prades-le-Lez (18 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Cournonterral', 'Fabrègues', 'Lavérune', 'Murviel-lès-Montpellier', 'Saint-Georges-d\'Orques', 'Saint-Paul-et-Valmalle', 'Saussan'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Pignan ?',
        a: 'Pour toute vente à Pignan, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Pignan ?',
        a: 'À Pignan, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Pignan ?',
        a: 'Pignan est à 25 minutes de Prades-le-Lez (18 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Pignan ?',
        a: 'Une partie de Pignan est couverte par le PPRi de la Mosson. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'fabregues',
    name: 'Fabrègues',
    nameSeo: 'Fabrègues (34)',
    codePostal: '34690',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.5514, lng: 3.7769 },
    distanceFromBaseKm: 22,
    travelTimeMin: 28,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/fabregues.webp',
      alt: 'Fabrègues, Hérault',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:F34690-Fabregues_20090501-03.jpg',
    },

    population: 7447,
    nbLogements: 3300,
    pctResidencesSecondaires: 3,
    pctMaisons: 72,
    pctAppartements: 27,
    surfaceMoyenne: 96,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 3700,
    prixM2Maison: 3850,
    prixM2Appartement: 3300,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 25,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi de la Mosson — Fabrègues est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Fabrègues est dominée à 72 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (3700 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Fabrègues.',
      },
    ],

    intro:
      'Fabrègues, commune de l\'Hérault, présente un marché immobilier actif (3 700 €/m² en moyenne). 7 447 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Fabrègues est composé à 72 % de maisons et 27 % d\'appartements (3 300 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Fabrègues est concernée par le PPRi de la Mosson. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Fabrègues est à 28 minutes de Prades-le-Lez (22 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Cournonsec', 'Cournonterral', 'Gigean', 'Mireval', 'Pignan', 'Saint-Jean-de-Védas', 'Saussan', 'Vic-la-Gardiole', 'Villeneuve-lès-Maguelone'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Fabrègues ?',
        a: 'Pour toute vente à Fabrègues, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Fabrègues ?',
        a: 'À Fabrègues, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Fabrègues ?',
        a: 'Fabrègues est à 28 minutes de Prades-le-Lez (22 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Fabrègues ?',
        a: 'Une partie de Fabrègues est couverte par le PPRi de la Mosson. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'saint-georges-d-orques',
    name: 'Saint-Georges-d\'Orques',
    nameSeo: 'Saint-Georges-d\'Orques (34)',
    codePostal: '34680',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6114, lng: 3.7814 },
    distanceFromBaseKm: 14,
    travelTimeMin: 22,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/saint-georges-d-orques.webp',
      alt: 'Église de Saint-Georges-d\'Orques',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Saint-Georges-d%27Orques%2C_l%27%C3%A9glise.JPG',
    },

    population: 5676,
    nbLogements: 2500,
    pctResidencesSecondaires: 3,
    pctMaisons: 75,
    pctAppartements: 24,
    surfaceMoyenne: 100,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 118,
    prixM2Moyen: 3950,
    prixM2Maison: 4100,
    prixM2Appartement: 3550,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 25,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi de la Mosson — Saint-Georges-d\'Orques est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Saint-Georges-d\'Orques est dominée à 75 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (3950 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Saint-Georges-d\'Orques.',
      },
    ],

    intro:
      'Saint-Georges-d\'Orques, commune résidentielle de la métropole de Montpellier, présente un marché immobilier actif (3 950 €/m² en moyenne). 5 676 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Saint-Georges-d\'Orques est composé à 75 % de maisons et 24 % d\'appartements (2 500 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Saint-Georges-d\'Orques est concernée par le PPRi de la Mosson. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Saint-Georges-d\'Orques est à 22 minutes de Prades-le-Lez (14 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Montarnaud', 'Grabels', 'Murviel-lès-Montpellier', 'Juvignac', 'Pignan', 'Lavérune'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Saint-Georges-d\'Orques ?',
        a: 'Pour toute vente à Saint-Georges-d\'Orques, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Saint-Georges-d\'Orques ?',
        a: 'À Saint-Georges-d\'Orques, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Saint-Georges-d\'Orques ?',
        a: 'Saint-Georges-d\'Orques est à 22 minutes de Prades-le-Lez (14 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Saint-Georges-d\'Orques ?',
        a: 'Une partie de Saint-Georges-d\'Orques est couverte par le PPRi de la Mosson. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'cournonterral',
    name: 'Cournonterral',
    nameSeo: 'Cournonterral (34)',
    codePostal: '34660',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.5578, lng: 3.719 },
    distanceFromBaseKm: 24,
    travelTimeMin: 30,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/cournonterral.webp',
      alt: 'Église Sainte-Croix de Cournonterral',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Cournonterral_Ste-Croix.JPG',
    },

    population: 7359,
    nbLogements: 3200,
    pctResidencesSecondaires: 3,
    pctMaisons: 78,
    pctAppartements: 21,
    surfaceMoyenne: 100,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 3450,
    prixM2Maison: 3600,
    prixM2Appartement: 3050,
    dpeMoyenKwh: 180,
    dpeMoyenCo2: 26,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Lez-Mosson',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi de la Mosson — Cournonterral est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Cournonterral est dominée à 78 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (3450 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Cournonterral.',
      },
    ],

    intro:
      'Cournonterral, commune résidentielle de l\'Hérault, présente un marché immobilier actif (3 450 €/m² en moyenne). 7 359 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Cournonterral est composé à 78 % de maisons et 21 % d\'appartements (3 200 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Cournonterral est concernée par le PPRi de la Mosson. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Cournonterral est à 30 minutes de Prades-le-Lez (24 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Aumelas', 'Cournonsec', 'Fabrègues', 'Montbazin', 'Pignan', 'Saint-Paul-et-Valmalle'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Cournonterral ?',
        a: 'Pour toute vente à Cournonterral, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Cournonterral ?',
        a: 'À Cournonterral, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Cournonterral ?',
        a: 'Cournonterral est à 30 minutes de Prades-le-Lez (24 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Cournonterral ?',
        a: 'Une partie de Cournonterral est couverte par le PPRi de la Mosson. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'vendargues',
    name: 'Vendargues',
    nameSeo: 'Vendargues (34)',
    codePostal: '34740',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6583, lng: 3.97 },
    distanceFromBaseKm: 13,
    travelTimeMin: 20,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/vendargues.webp',
      alt: 'Mairie de Vendargues, de nuit',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Mairie_de_Vendargues%2C_de_nuit.jpg',
    },

    population: 7262,
    nbLogements: 3200,
    pctResidencesSecondaires: 3,
    pctMaisons: 70,
    pctAppartements: 29,
    surfaceMoyenne: 95,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 3850,
    prixM2Maison: 4000,
    prixM2Appartement: 3500,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 25,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Salaison',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Salaison — Vendargues est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Vendargues est dominée à 70 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (3850 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Vendargues.',
      },
    ],

    intro:
      'Vendargues, commune de la métropole de Montpellier, présente un marché immobilier actif (3 850 €/m² en moyenne). 7 262 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Vendargues est composé à 70 % de maisons et 29 % d\'appartements (3 200 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Vendargues est concernée par le PPRi Salaison. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Vendargues est à 20 minutes de Prades-le-Lez (13 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Baillargues', 'Castries', 'Le Crès', 'Saint-Aunès', 'Teyran'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Vendargues ?',
        a: 'Pour toute vente à Vendargues, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Vendargues ?',
        a: 'À Vendargues, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Vendargues ?',
        a: 'Vendargues est à 20 minutes de Prades-le-Lez (13 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Vendargues ?',
        a: 'Une partie de Vendargues est couverte par le PPRi Salaison. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'saint-aunes',
    name: 'Saint-Aunès',
    nameSeo: 'Saint-Aunès (34)',
    codePostal: '34130',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6408, lng: 3.9658 },
    distanceFromBaseKm: 14,
    travelTimeMin: 20,
    inCoreZone: true,
    inOuterZone: false,

    image: {
      url: '/images/villes/saint-aunes.webp',
      alt: 'Église de Saint-Aunès',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:SaintAunes_eglise_07082009.JPG',
    },

    population: 4530,
    nbLogements: 2000,
    pctResidencesSecondaires: 3,
    pctMaisons: 78,
    pctAppartements: 21,
    surfaceMoyenne: 100,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 3750,
    prixM2Maison: 3900,
    prixM2Appartement: 3400,
    dpeMoyenKwh: 175,
    dpeMoyenCo2: 25,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Salaison',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Salaison — Saint-Aunès est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Saint-Aunès est dominée à 78 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (3750 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Saint-Aunès.',
      },
    ],

    intro:
      'Saint-Aunès, commune résidentielle de la métropole de Montpellier, présente un marché immobilier actif (3 750 €/m² en moyenne). 4 530 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Saint-Aunès est composé à 78 % de maisons et 21 % d\'appartements (2 000 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Saint-Aunès est concernée par le PPRi Salaison. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Saint-Aunès est à 20 minutes de Prades-le-Lez (14 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Le Crès', 'Vendargues', 'Baillargues', 'Mauguio', 'Montpellier', 'Castelnau-le-Lez'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Saint-Aunès ?',
        a: 'Pour toute vente à Saint-Aunès, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Saint-Aunès ?',
        a: 'À Saint-Aunès, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Saint-Aunès ?',
        a: 'Saint-Aunès est à 20 minutes de Prades-le-Lez (14 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Saint-Aunès ?',
        a: 'Une partie de Saint-Aunès est couverte par le PPRi Salaison. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'lansargues',
    name: 'Lansargues',
    nameSeo: 'Lansargues (34)',
    codePostal: '34130',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6525, lng: 4.0736 },
    distanceFromBaseKm: 24,
    travelTimeMin: 30,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/lansargues.webp',
      alt: 'Lansargues',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Lansargues_(4).jpg',
    },

    population: 3233,
    nbLogements: 1450,
    pctResidencesSecondaires: 3,
    pctMaisons: 82,
    pctAppartements: 17,
    surfaceMoyenne: 105,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 118,
    prixM2Moyen: 3050,
    prixM2Maison: 3200,
    prixM2Appartement: 2700,
    dpeMoyenKwh: 180,
    dpeMoyenCo2: 26,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Vidourle aval — Lansargues est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Lansargues est dominée à 82 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (3050 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Lansargues.',
      },
    ],

    intro:
      'Lansargues, commune résidentielle de l\'Hérault, présente un marché immobilier actif (3 050 €/m² en moyenne). 3 233 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Lansargues est composé à 82 % de maisons et 17 % d\'appartements (1 450 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Lansargues est concernée par le PPRi Vidourle aval. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Lansargues est à 30 minutes de Prades-le-Lez (24 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique (pré-1949)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes en périphérie',
      'Abords de cours d\'eau (zone PPRi Vidourle)',
    ],

    communesLimitrophes: ['Candillargues', 'Lunel-Viel', 'Marsillargues', 'Mauguio', 'Mudaison', 'Saint-Brès', 'Saint-Just', 'Saint-Nazaire-de-Pézan', 'Valergues'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Lansargues ?',
        a: 'Pour toute vente à Lansargues, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Lansargues ?',
        a: 'À Lansargues, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Lansargues ?',
        a: 'Lansargues est à 30 minutes de Prades-le-Lez (24 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Lansargues ?',
        a: 'Une partie de Lansargues est couverte par le PPRi Vidourle aval. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'lunel-viel',
    name: 'Lunel-Viel',
    nameSeo: 'Lunel-Viel (34)',
    codePostal: '34400',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6789, lng: 4.0925 },
    distanceFromBaseKm: 26,
    travelTimeMin: 32,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/lunel-viel.webp',
      alt: 'Lunel-Viel',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Lunel-Viel_(48).jpg',
    },

    population: 4507,
    nbLogements: 2000,
    pctResidencesSecondaires: 3,
    pctMaisons: 78,
    pctAppartements: 21,
    surfaceMoyenne: 98,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 2950,
    prixM2Maison: 3100,
    prixM2Appartement: 2650,
    dpeMoyenKwh: 180,
    dpeMoyenCo2: 26,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Vidourle — Lunel-Viel est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Lunel-Viel est dominée à 78 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (2950 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Lunel-Viel.',
      },
    ],

    intro:
      'Lunel-Viel, commune résidentielle de l\'Hérault, présente un marché immobilier actif (2 950 €/m² en moyenne). 4 507 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Lunel-Viel est composé à 78 % de maisons et 21 % d\'appartements (2 000 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Lunel-Viel est concernée par le PPRi Vidourle. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Lunel-Viel est à 32 minutes de Prades-le-Lez (26 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Entre-Vignes', 'Lansargues', 'Lunel', 'Saint-Geniès-des-Mourgues', 'Saint-Just', 'Saturargues', 'Valergues'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Lunel-Viel ?',
        a: 'Pour toute vente à Lunel-Viel, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Lunel-Viel ?',
        a: 'À Lunel-Viel, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Lunel-Viel ?',
        a: 'Lunel-Viel est à 32 minutes de Prades-le-Lez (26 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Lunel-Viel ?',
        a: 'Une partie de Lunel-Viel est couverte par le PPRi Vidourle. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'saturargues',
    name: 'Saturargues',
    nameSeo: 'Saturargues (34)',
    codePostal: '34400',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.7233, lng: 4.1142 },
    distanceFromBaseKm: 30,
    travelTimeMin: 35,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/saturargues.webp',
      alt: 'Mairie de Saturargues',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Saturargues_-_Mairie.jpg',
    },

    population: 1022,
    nbLogements: 460,
    pctResidencesSecondaires: 4,
    pctMaisons: 90,
    pctAppartements: 9,
    surfaceMoyenne: 110,
    surfaceMoyenneAppartement: 55,
    surfaceMoyenneMaison: 120,
    prixM2Moyen: 2750,
    prixM2Maison: 2850,
    prixM2Appartement: 2400,
    dpeMoyenKwh: 185,
    dpeMoyenCo2: 27,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Vidourle — Saturargues est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Saturargues est dominée à 90 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (2750 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Saturargues.',
      },
    ],

    intro:
      'Saturargues, commune résidentielle de l\'Hérault, présente un marché immobilier actif (2 750 €/m² en moyenne). 1 022 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Saturargues est composé à 90 % de maisons et 9 % d\'appartements (460 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Saturargues est concernée par le PPRi Vidourle. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Saturargues est à 35 minutes de Prades-le-Lez (30 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique (pré-1949)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes en périphérie',
      'Abords de cours d\'eau (zone PPRi Vidourle)',
    ],

    communesLimitrophes: ['Saint-Sériès', 'Vérargues', 'Villetelle', 'Lunel', 'Lunel-Viel'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Saturargues ?',
        a: 'Pour toute vente à Saturargues, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Saturargues ?',
        a: 'À Saturargues, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Saturargues ?',
        a: 'Saturargues est à 35 minutes de Prades-le-Lez (30 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Saturargues ?',
        a: 'Une partie de Saturargues est couverte par le PPRi Vidourle. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'saint-just',
    name: 'Saint-Just',
    nameSeo: 'Saint-Just (34)',
    codePostal: '34400',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6581, lng: 4.1147 },
    distanceFromBaseKm: 28,
    travelTimeMin: 33,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/saint-just.webp',
      alt: 'Vue aérienne de Saint-Just',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Vue_a%C3%A9rienne_Saint-Just.jpg',
    },

    population: 3293,
    nbLogements: 1450,
    pctResidencesSecondaires: 3,
    pctMaisons: 80,
    pctAppartements: 19,
    surfaceMoyenne: 100,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 2950,
    prixM2Maison: 3100,
    prixM2Appartement: 2600,
    dpeMoyenKwh: 180,
    dpeMoyenCo2: 26,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Vidourle — Saint-Just est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Saint-Just est dominée à 80 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (2950 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Saint-Just.',
      },
    ],

    intro:
      'Saint-Just, commune résidentielle de l\'Hérault, présente un marché immobilier actif (2 950 €/m² en moyenne). 3 293 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Saint-Just est composé à 80 % de maisons et 19 % d\'appartements (1 450 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Saint-Just est concernée par le PPRi Vidourle. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Saint-Just est à 33 minutes de Prades-le-Lez (28 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique (pré-1949)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes en périphérie',
      'Abords de cours d\'eau (zone PPRi Vidourle)',
    ],

    communesLimitrophes: ['Lansargues', 'Lunel', 'Lunel-Viel', 'Saint-Nazaire-de-Pézan'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Saint-Just ?',
        a: 'Pour toute vente à Saint-Just, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Saint-Just ?',
        a: 'À Saint-Just, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Saint-Just ?',
        a: 'Saint-Just est à 33 minutes de Prades-le-Lez (28 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Saint-Just ?',
        a: 'Une partie de Saint-Just est couverte par le PPRi Vidourle. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'marsillargues',
    name: 'Marsillargues',
    nameSeo: 'Marsillargues (34)',
    codePostal: '34590',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.6649, lng: 4.1789 },
    distanceFromBaseKm: 32,
    travelTimeMin: 38,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/marsillargues.webp',
      alt: 'Marsillargues',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Marsillargues_1.jpg',
    },

    population: 6988,
    nbLogements: 3100,
    pctResidencesSecondaires: 4,
    pctMaisons: 80,
    pctAppartements: 19,
    surfaceMoyenne: 100,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 2900,
    prixM2Maison: 3050,
    prixM2Appartement: 2550,
    dpeMoyenKwh: 180,
    dpeMoyenCo2: 26,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Vidourle aval — Marsillargues est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Marsillargues est dominée à 80 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (2900 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Marsillargues.',
      },
    ],

    intro:
      'Marsillargues, commune résidentielle de l\'Hérault, présente un marché immobilier actif (2 900 €/m² en moyenne). 6 988 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Marsillargues est composé à 80 % de maisons et 19 % d\'appartements (3 100 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Marsillargues est concernée par le PPRi Vidourle aval. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Marsillargues est à 38 minutes de Prades-le-Lez (32 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique (pré-1949)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes en périphérie',
      'Abords de cours d\'eau (zone PPRi Vidourle)',
    ],

    communesLimitrophes: ['Lunel', 'Aimargues', 'Saint-Just', 'Saint-Nazaire-de-Pézan', 'Le Cailar', 'La Grande-Motte'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Marsillargues ?',
        a: 'Pour toute vente à Marsillargues, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Marsillargues ?',
        a: 'À Marsillargues, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Marsillargues ?',
        a: 'Marsillargues est à 38 minutes de Prades-le-Lez (32 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Marsillargues ?',
        a: 'Une partie de Marsillargues est couverte par le PPRi Vidourle aval. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'boisseron',
    name: 'Boisseron',
    nameSeo: 'Boisseron (34)',
    codePostal: '34160',
    departement: 'Hérault',
    departementCode: '34',
    departementSlug: 'herault',
    region: 'Occitanie',

    coords: { lat: 43.7606, lng: 4.0819 },
    distanceFromBaseKm: 22,
    travelTimeMin: 28,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/boisseron.webp',
      alt: 'Boisseron',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Boisseron_(8).jpg',
    },

    population: 2185,
    nbLogements: 980,
    pctResidencesSecondaires: 4,
    pctMaisons: 85,
    pctAppartements: 14,
    surfaceMoyenne: 105,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 118,
    prixM2Moyen: 3150,
    prixM2Maison: 3300,
    prixM2Appartement: 2700,
    dpeMoyenKwh: 180,
    dpeMoyenCo2: 26,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: false,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Vidourle — Boisseron est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Boisseron est dominée à 85 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (3150 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'termites',
        whyHere:
          'L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Boisseron.',
      },
    ],

    intro:
      'Boisseron, commune résidentielle de l\'Hérault, présente un marché immobilier actif (3 150 €/m² en moyenne). 2 185 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Boisseron est composé à 85 % de maisons et 14 % d\'appartements (980 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Boisseron est concernée par le PPRi Vidourle. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.',

    accessibilityNote:
      'Boisseron est à 28 minutes de Prades-le-Lez (22 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique (pré-1949)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes en périphérie',
      'Abords de cours d\'eau (zone PPRi Vidourle)',
    ],

    communesLimitrophes: ['Entre-Vignes', 'Junas', 'Restinclières', 'Saint-Sériès', 'Saussines', 'Sommières'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Boisseron ?',
        a: 'Pour toute vente à Boisseron, le DPE et l\'ERP sont systématiques, ainsi que le diagnostic termites (Hérault classé). Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Boisseron ?',
        a: 'À Boisseron, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Boisseron ?',
        a: 'Boisseron est à 28 minutes de Prades-le-Lez (22 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Boisseron ?',
        a: 'Une partie de Boisseron est couverte par le PPRi Vidourle. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'bagnols-sur-ceze',
    name: 'Bagnols-sur-Cèze',
    nameSeo: 'Bagnols-sur-Cèze (30)',
    codePostal: '30200',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 44.1625, lng: 4.6203 },
    distanceFromBaseKm: 110,
    travelTimeMin: 90,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/bagnols-sur-ceze.webp',
      alt: 'Vue sur Bagnols-sur-Cèze',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Vue_sur_Bagnols-sur-C%C3%A8ze.JPG',
    },

    population: 18112,
    nbLogements: 9500,
    pctResidencesSecondaires: 3,
    pctMaisons: 55,
    pctAppartements: 43,
    surfaceMoyenne: 82,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 105,
    prixM2Moyen: 1850,
    prixM2Maison: 2050,
    prixM2Appartement: 1700,
    dpeMoyenKwh: 195,
    dpeMoyenCo2: 28,

    risques: {
      termites: false,
      inondation: true,
      submersionMarine: false,
      tri: 'Avignon-Plaine du Tricastin (Cèze, Rhône)',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Cèze, PPRT site nucléaire Marcoule — Bagnols-sur-Cèze est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Bagnols-sur-Cèze présente un parc immobilier mixte (55 % maisons, 43 % appartements). Le DPE est central dans la valorisation à la vente comme à la location (1850 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les ensembles pré-1997 concentrent un bâti où le repérage amiante est quasi-systématique en vente.',
      },
      {
        slug: 'erp',
        whyHere:
          'Bagnols-sur-Cèze est concernée par le PPRi Cèze, PPRT site nucléaire Marcoule. L\'État des Risques et Pollutions est systématique pour toute transaction.',
      },
    ],

    intro:
      'Bagnols-sur-Cèze, commune du Gard, présente un marché immobilier actif (1 850 €/m² en moyenne). 18 112 habitants, parc dominé à parts équilibrées maisons/appartements.',

    parcImmoNote:
      'Le parc de Bagnols-sur-Cèze est composé à 55 % de maisons et 43 % d\'appartements (9 500 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Bagnols-sur-Cèze est concernée par le PPRi Cèze, PPRT site nucléaire Marcoule. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Le diagnostic termites est obligatoire dans les zones classées par arrêté préfectoral.',

    accessibilityNote:
      'Bagnols-sur-Cèze est à 90 minutes de Prades-le-Lez (110 km) via l\'A9 (et autoroutes complémentaires) — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Chusclan', 'Laudun-l\'Ardoise', 'Orsan', 'Sabran', 'Saint-Gervais', 'Saint-Nazaire', 'Tresques', 'Vénéjan'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Bagnols-sur-Cèze ?',
        a: 'Pour toute vente à Bagnols-sur-Cèze, le DPE et l\'ERP sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Bagnols-sur-Cèze ?',
        a: 'À Bagnols-sur-Cèze, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Bagnols-sur-Cèze ?',
        a: 'Bagnols-sur-Cèze est à 90 minutes de Prades-le-Lez (110 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Bagnols-sur-Cèze ?',
        a: 'Une partie de Bagnols-sur-Cèze est couverte par le PPRi Cèze, PPRT site nucléaire Marcoule. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'beaucaire',
    name: 'Beaucaire',
    nameSeo: 'Beaucaire (30)',
    codePostal: '30300',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.8081, lng: 4.6442 },
    distanceFromBaseKm: 70,
    travelTimeMin: 60,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/beaucaire.webp',
      alt: 'Beaucaire, vue générale',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Beaucaire_vue.JPG',
    },

    population: 15692,
    nbLogements: 8000,
    pctResidencesSecondaires: 4,
    pctMaisons: 60,
    pctAppartements: 38,
    surfaceMoyenne: 90,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 110,
    prixM2Moyen: 1950,
    prixM2Maison: 2100,
    prixM2Appartement: 1750,
    dpeMoyenKwh: 195,
    dpeMoyenCo2: 28,

    risques: {
      termites: false,
      inondation: true,
      submersionMarine: false,
      tri: 'Avignon-Plaine du Tricastin',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Rhône — Beaucaire est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Beaucaire présente un parc immobilier mixte (60 % maisons, 38 % appartements). Le DPE est central dans la valorisation à la vente comme à la location (1950 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les ensembles pré-1997 concentrent un bâti où le repérage amiante est quasi-systématique en vente.',
      },
      {
        slug: 'erp',
        whyHere:
          'Beaucaire est concernée par le PPRi Rhône. L\'État des Risques et Pollutions est systématique pour toute transaction.',
      },
    ],

    intro:
      'Beaucaire, commune du Gard, présente un marché immobilier actif (1 950 €/m² en moyenne). 15 692 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Beaucaire est composé à 60 % de maisons et 38 % d\'appartements (8 000 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Beaucaire est concernée par le PPRi Rhône. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Le diagnostic termites est obligatoire dans les zones classées par arrêté préfectoral.',

    accessibilityNote:
      'Beaucaire est à 60 minutes de Prades-le-Lez (70 km) via l\'A9 (et autoroutes complémentaires) — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Bellegarde', 'Comps', 'Fourques', 'Jonquières-Saint-Vincent', 'Manduel', 'Redessan', 'Tarascon', 'Vallabrègues'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Beaucaire ?',
        a: 'Pour toute vente à Beaucaire, le DPE et l\'ERP sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Beaucaire ?',
        a: 'À Beaucaire, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Beaucaire ?',
        a: 'Beaucaire est à 60 minutes de Prades-le-Lez (70 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Beaucaire ?',
        a: 'Une partie de Beaucaire est couverte par le PPRi Rhône. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'saint-gilles',
    name: 'Saint-Gilles',
    nameSeo: 'Saint-Gilles (30)',
    codePostal: '30800',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.6786, lng: 4.4317 },
    distanceFromBaseKm: 55,
    travelTimeMin: 50,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/saint-gilles.webp',
      alt: 'Portail occidental de l\'abbatiale de Saint-Gilles-du-Gard',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:West_church_portal_in_St-Gilles-du-Gard.jpg',
    },

    population: 14734,
    nbLogements: 7200,
    pctResidencesSecondaires: 4,
    pctMaisons: 70,
    pctAppartements: 28,
    surfaceMoyenne: 95,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 110,
    prixM2Moyen: 2150,
    prixM2Maison: 2300,
    prixM2Appartement: 1900,
    dpeMoyenKwh: 190,
    dpeMoyenCo2: 27,

    risques: {
      termites: false,
      inondation: true,
      submersionMarine: false,
      tri: 'Camargue Gardoise (Petit Rhône)',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Petit Rhône — Saint-Gilles est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Saint-Gilles est dominée à 70 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (2150 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'erp',
        whyHere:
          'Saint-Gilles est concernée par le PPRi Petit Rhône. L\'État des Risques et Pollutions est systématique pour toute transaction.',
      },
    ],

    intro:
      'Saint-Gilles, commune du Gard, présente un marché immobilier actif (2 150 €/m² en moyenne). 14 734 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Saint-Gilles est composé à 70 % de maisons et 28 % d\'appartements (7 200 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Saint-Gilles est concernée par le PPRi Petit Rhône. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Le diagnostic termites est obligatoire dans les zones classées par arrêté préfectoral.',

    accessibilityNote:
      'Saint-Gilles est à 50 minutes de Prades-le-Lez (55 km) via l\'A9 (et autoroutes complémentaires) — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Arles', 'Beauvoisin', 'Bellegarde', 'Caissargues', 'Fourques', 'Garons', 'Générac', 'Nîmes', 'Vauvert'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Saint-Gilles ?',
        a: 'Pour toute vente à Saint-Gilles, le DPE et l\'ERP sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Saint-Gilles ?',
        a: 'À Saint-Gilles, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Saint-Gilles ?',
        a: 'Saint-Gilles est à 50 minutes de Prades-le-Lez (55 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Saint-Gilles ?',
        a: 'Une partie de Saint-Gilles est couverte par le PPRi Petit Rhône. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'aramon',
    name: 'Aramon',
    nameSeo: 'Aramon (30)',
    codePostal: '30390',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.8919, lng: 4.6817 },
    distanceFromBaseKm: 80,
    travelTimeMin: 70,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/aramon.webp',
      alt: 'Ancien hôtel de ville d\'Aramon (XIIIe-XVIIe siècle)',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Ancien_h%C3%B4tel_de_ville_13_%C3%A0_17_%C3%A8me_si%C3%A8cle_en_Aramon.JPG',
    },

    population: 4081,
    nbLogements: 1900,
    pctResidencesSecondaires: 5,
    pctMaisons: 70,
    pctAppartements: 28,
    surfaceMoyenne: 95,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 2350,
    prixM2Maison: 2500,
    prixM2Appartement: 2050,
    dpeMoyenKwh: 190,
    dpeMoyenCo2: 27,

    risques: {
      termites: false,
      inondation: true,
      submersionMarine: false,
      tri: 'Avignon-Plaine du Tricastin',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Rhône, PPRT site Sanofi-Aramon — Aramon est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Aramon est dominée à 70 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (2350 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'erp',
        whyHere:
          'Aramon est concernée par le PPRi Rhône, PPRT site Sanofi-Aramon. L\'État des Risques et Pollutions est systématique pour toute transaction.',
      },
    ],

    intro:
      'Aramon, commune du Gard, présente un marché immobilier actif (2 350 €/m² en moyenne). 4 081 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Aramon est composé à 70 % de maisons et 28 % d\'appartements (1 900 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Aramon est concernée par le PPRi Rhône, PPRT site Sanofi-Aramon. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Le diagnostic termites est obligatoire dans les zones classées par arrêté préfectoral.',

    accessibilityNote:
      'Aramon est à 70 minutes de Prades-le-Lez (80 km) via l\'A9 (et autoroutes complémentaires) — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Les Angles', 'Barbentane', 'Boulbon', 'Domazan', 'Saint-Pierre-de-Mézoargues', 'Saze', 'Théziers', 'Vallabrègues'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Aramon ?',
        a: 'Pour toute vente à Aramon, le DPE et l\'ERP sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Aramon ?',
        a: 'À Aramon, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Aramon ?',
        a: 'Aramon est à 70 minutes de Prades-le-Lez (80 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Aramon ?',
        a: 'Une partie de Aramon est couverte par le PPRi Rhône, PPRT site Sanofi-Aramon. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'aimargues',
    name: 'Aimargues',
    nameSeo: 'Aimargues (30)',
    codePostal: '30470',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.6858, lng: 4.2092 },
    distanceFromBaseKm: 36,
    travelTimeMin: 40,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/aimargues.webp',
      alt: 'Mairie d\'Aimargues',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Mairie_d%27Aimargues.jpg',
    },

    population: 5705,
    nbLogements: 2600,
    pctResidencesSecondaires: 3,
    pctMaisons: 78,
    pctAppartements: 21,
    surfaceMoyenne: 100,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 2750,
    prixM2Maison: 2900,
    prixM2Appartement: 2400,
    dpeMoyenKwh: 185,
    dpeMoyenCo2: 27,

    risques: {
      termites: false,
      inondation: true,
      submersionMarine: false,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Vidourle — Aimargues est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Aimargues est dominée à 78 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (2750 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'erp',
        whyHere:
          'Aimargues est concernée par le PPRi Vidourle. L\'État des Risques et Pollutions est systématique pour toute transaction.',
      },
    ],

    intro:
      'Aimargues, commune résidentielle du Gard, présente un marché immobilier actif (2 750 €/m² en moyenne). 5 705 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Aimargues est composé à 78 % de maisons et 21 % d\'appartements (2 600 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Aimargues est concernée par le PPRi Vidourle. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Le diagnostic termites est obligatoire dans les zones classées par arrêté préfectoral.',

    accessibilityNote:
      'Aimargues est à 40 minutes de Prades-le-Lez (36 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Aigues-Vives', 'Le Cailar', 'Gallargues-le-Montueux', 'Lunel', 'Marsillargues', 'Saint-Laurent-d\'Aigouze'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Aimargues ?',
        a: 'Pour toute vente à Aimargues, le DPE et l\'ERP sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Aimargues ?',
        a: 'À Aimargues, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Aimargues ?',
        a: 'Aimargues est à 40 minutes de Prades-le-Lez (36 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Aimargues ?',
        a: 'Une partie de Aimargues est couverte par le PPRi Vidourle. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'codognan',
    name: 'Codognan',
    nameSeo: 'Codognan (30)',
    codePostal: '30920',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.7325, lng: 4.2206 },
    distanceFromBaseKm: 38,
    travelTimeMin: 42,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/codognan.webp',
      alt: 'Mairie de Codognan',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Codognan_Mairie_9269.JPG',
    },

    population: 2529,
    nbLogements: 1100,
    pctResidencesSecondaires: 3,
    pctMaisons: 82,
    pctAppartements: 17,
    surfaceMoyenne: 105,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 118,
    prixM2Moyen: 2700,
    prixM2Maison: 2850,
    prixM2Appartement: 2350,
    dpeMoyenKwh: 185,
    dpeMoyenCo2: 27,

    risques: {
      termites: false,
      inondation: true,
      submersionMarine: false,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Vidourle — Codognan est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Codognan est dominée à 82 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (2700 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'erp',
        whyHere:
          'Codognan est concernée par le PPRi Vidourle. L\'État des Risques et Pollutions est systématique pour toute transaction.',
      },
    ],

    intro:
      'Codognan, commune résidentielle du Gard, présente un marché immobilier actif (2 700 €/m² en moyenne). 2 529 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Codognan est composé à 82 % de maisons et 17 % d\'appartements (1 100 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Codognan est concernée par le PPRi Vidourle. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Le diagnostic termites est obligatoire dans les zones classées par arrêté préfectoral.',

    accessibilityNote:
      'Codognan est à 42 minutes de Prades-le-Lez (38 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique (pré-1949)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes en périphérie',
      'Abords de cours d\'eau (zone PPRi Vidourle)',
    ],

    communesLimitrophes: ['Mus', 'Uchaud', 'Vauvert', 'Vergèze', 'Le Cailar', 'Aigues-Vives'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Codognan ?',
        a: 'Pour toute vente à Codognan, le DPE et l\'ERP sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Codognan ?',
        a: 'À Codognan, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Codognan ?',
        a: 'Codognan est à 42 minutes de Prades-le-Lez (38 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Codognan ?',
        a: 'Une partie de Codognan est couverte par le PPRi Vidourle. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'calvisson',
    name: 'Calvisson',
    nameSeo: 'Calvisson (30)',
    codePostal: '30420',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.7858, lng: 4.1928 },
    distanceFromBaseKm: 38,
    travelTimeMin: 42,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/calvisson.webp',
      alt: 'Mairie de Calvisson',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Calvisson-La_Mairie.jpg',
    },

    population: 6486,
    nbLogements: 2900,
    pctResidencesSecondaires: 4,
    pctMaisons: 82,
    pctAppartements: 17,
    surfaceMoyenne: 105,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 118,
    prixM2Moyen: 2750,
    prixM2Maison: 2900,
    prixM2Appartement: 2400,
    dpeMoyenKwh: 185,
    dpeMoyenCo2: 27,

    risques: {
      termites: false,
      inondation: true,
      submersionMarine: false,
      tri: 'Vidourle',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Vidourle — Calvisson est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Calvisson est dominée à 82 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (2750 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'erp',
        whyHere:
          'Calvisson est concernée par le PPRi Vidourle. L\'État des Risques et Pollutions est systématique pour toute transaction.',
      },
    ],

    intro:
      'Calvisson, commune résidentielle du Gard, présente un marché immobilier actif (2 750 €/m² en moyenne). 6 486 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Calvisson est composé à 82 % de maisons et 17 % d\'appartements (2 900 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Calvisson est concernée par le PPRi Vidourle. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Le diagnostic termites est obligatoire dans les zones classées par arrêté préfectoral.',

    accessibilityNote:
      'Calvisson est à 42 minutes de Prades-le-Lez (38 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique (pré-1949)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes en périphérie',
      'Abords de cours d\'eau (zone PPRi Vidourle)',
    ],

    communesLimitrophes: ['Aigues-Vives', 'Aujargues', 'Boissières', 'Congénies', 'Mus', 'Nages-et-Solorgues', 'Saint-Côme-et-Maruéjols', 'Saint-Dionisy', 'Souvignargues', 'Vergèze'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Calvisson ?',
        a: 'Pour toute vente à Calvisson, le DPE et l\'ERP sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Calvisson ?',
        a: 'À Calvisson, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Calvisson ?',
        a: 'Calvisson est à 42 minutes de Prades-le-Lez (38 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Calvisson ?',
        a: 'Une partie de Calvisson est couverte par le PPRi Vidourle. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'aubord',
    name: 'Aubord',
    nameSeo: 'Aubord (30)',
    codePostal: '30620',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.7578, lng: 4.3131 },
    distanceFromBaseKm: 48,
    travelTimeMin: 48,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/aubord.webp',
      alt: 'Clocher du temple d\'Aubord',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Aubord_9284.JPG',
    },

    population: 2253,
    nbLogements: 1000,
    pctResidencesSecondaires: 3,
    pctMaisons: 88,
    pctAppartements: 11,
    surfaceMoyenne: 110,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 120,
    prixM2Moyen: 2700,
    prixM2Maison: 2850,
    prixM2Appartement: 2350,
    dpeMoyenKwh: 185,
    dpeMoyenCo2: 27,

    risques: {
      termites: false,
      inondation: true,
      submersionMarine: false,
      tri: 'Nîmes',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Vistre — Aubord est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Aubord est dominée à 88 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (2700 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'erp',
        whyHere:
          'Aubord est concernée par le PPRi Vistre. L\'État des Risques et Pollutions est systématique pour toute transaction.',
      },
    ],

    intro:
      'Aubord, commune résidentielle du Gard, présente un marché immobilier actif (2 700 €/m² en moyenne). 2 253 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Aubord est composé à 88 % de maisons et 11 % d\'appartements (1 000 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Aubord est concernée par le PPRi Vistre. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Le diagnostic termites est obligatoire dans les zones classées par arrêté préfectoral.',

    accessibilityNote:
      'Aubord est à 48 minutes de Prades-le-Lez (48 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique (pré-1949)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes en périphérie',
      'Abords de cours d\'eau (zone PPRi Nîmes)',
    ],

    communesLimitrophes: ['Bernis', 'Milhaud', 'Générac', 'Beauvoisin'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Aubord ?',
        a: 'Pour toute vente à Aubord, le DPE et l\'ERP sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Aubord ?',
        a: 'À Aubord, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Aubord ?',
        a: 'Aubord est à 48 minutes de Prades-le-Lez (48 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Aubord ?',
        a: 'Une partie de Aubord est couverte par le PPRi Vistre. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'uchaud',
    name: 'Uchaud',
    nameSeo: 'Uchaud (30)',
    codePostal: '30620',
    departement: 'Gard',
    departementCode: '30',
    departementSlug: 'gard',
    region: 'Occitanie',

    coords: { lat: 43.7578, lng: 4.27 },
    distanceFromBaseKm: 44,
    travelTimeMin: 45,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/uchaud.webp',
      alt: 'Place de l\'Église, Uchaud',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Place_de_l%27%C3%89glise%2C_Uchaud%2C_Gard.jpg',
    },

    population: 4879,
    nbLogements: 2200,
    pctResidencesSecondaires: 3,
    pctMaisons: 80,
    pctAppartements: 19,
    surfaceMoyenne: 100,
    surfaceMoyenneAppartement: 58,
    surfaceMoyenneMaison: 115,
    prixM2Moyen: 2700,
    prixM2Maison: 2850,
    prixM2Appartement: 2350,
    dpeMoyenKwh: 185,
    dpeMoyenCo2: 27,

    risques: {
      termites: false,
      inondation: true,
      submersionMarine: false,
      tri: 'Nîmes',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Vistre — Uchaud est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'dpe',
        whyHere:
          'Uchaud est dominée à 80 % par les maisons individuelles, majoritairement construites entre 1970 et 2010. Le DPE pèse fortement dans la valorisation à la vente (2700 €/m² en moyenne).',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les pavillons des années 1970-1990 déclenchent le repérage amiante en vente. Indispensable sur la majorité du parc pré-1997.',
      },
      {
        slug: 'erp',
        whyHere:
          'Uchaud est concernée par le PPRi Vistre. L\'État des Risques et Pollutions est systématique pour toute transaction.',
      },
    ],

    intro:
      'Uchaud, commune résidentielle du Gard, présente un marché immobilier actif (2 700 €/m² en moyenne). 4 879 habitants, parc dominé par les maisons individuelles.',

    parcImmoNote:
      'Le parc de Uchaud est composé à 80 % de maisons et 19 % d\'appartements (2 200 logements au total). Le parc est majoritairement occupé en résidence principale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Uchaud est concernée par le PPRi Vistre. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions. Le diagnostic termites est obligatoire dans les zones classées par arrêté préfectoral.',

    accessibilityNote:
      'Uchaud est à 45 minutes de Prades-le-Lez (44 km) via l\'A9 ou les axes principaux — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique (pré-1949)',
      'Lotissements pavillonnaires (années 1970-2000)',
      'Résidences récentes en périphérie',
      'Abords de cours d\'eau (zone PPRi Nîmes)',
    ],

    communesLimitrophes: ['Beauvoisin', 'Bernis', 'Boissières', 'Nages-et-Solorgues', 'Vestric-et-Candiac'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Uchaud ?',
        a: 'Pour toute vente à Uchaud, le DPE et l\'ERP sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Uchaud ?',
        a: 'À Uchaud, le pack vente maison (DPE + amiante + électricité + gaz + termites + ERP) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Uchaud ?',
        a: 'Uchaud est à 45 minutes de Prades-le-Lez (44 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Uchaud ?',
        a: 'Une partie de Uchaud est couverte par le PPRi Vistre. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
      },
    ],
  },
  {
    slug: 'narbonne',
    name: 'Narbonne',
    nameSeo: 'Narbonne (11)',
    codePostal: '11100',
    departement: 'Aude',
    departementCode: '11',
    departementSlug: 'aude',
    region: 'Occitanie',

    coords: { lat: 43.1836, lng: 3.0042 },
    distanceFromBaseKm: 100,
    travelTimeMin: 75,
    inCoreZone: false,
    inOuterZone: true,

    image: {
      url: '/images/villes/narbonne.webp',
      alt: 'Cathédrale Saint-Just-et-Saint-Pasteur de Narbonne',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Narbonne_Cathedrale_Saint_Just_et_Saint_Pasteur.jpg',
    },

    population: 57587,
    nbLogements: 33000,
    pctResidencesSecondaires: 12,
    pctMaisons: 50,
    pctAppartements: 48,
    surfaceMoyenne: 80,
    surfaceMoyenneAppartement: 60,
    surfaceMoyenneMaison: 105,
    prixM2Moyen: 2450,
    prixM2Maison: 2650,
    prixM2Appartement: 2250,
    dpeMoyenKwh: 190,
    dpeMoyenCo2: 27,

    risques: {
      termites: true,
      inondation: true,
      submersionMarine: true,
      tri: 'Narbonne',
      radon: 1,
      sismique: 2,
      mouvementTerrain: false,
      pprApproves: [
        'PPRi Aude, PPRL submersion marine — Narbonne est concernée par ce dispositif réglementaire.',
      ],
    },

    diagnosticsPrioritaires: [
      {
        slug: 'erp',
        whyHere:
          'Narbonne est exposée au PPRi Narbonne et au risque de submersion marine. L\'État des Risques et Pollutions est central pour toute transaction sur ce périmètre.',
      },
      {
        slug: 'dpe',
        whyHere:
          'Le parc mixte (48% appartements) demande un DPE rigoureux à la vente, particulièrement sur les copropriétés des années 1960-1990 souvent classées E-F.',
      },
      {
        slug: 'amiante',
        whyHere:
          'Le centre village et les ensembles pré-1997 déclenchent quasi-systématiquement le repérage amiante en vente. Indispensable sur la majorité du parc.',
      },
    ],

    intro:
      'Narbonne, commune littorale de l\'Aude, présente un marché immobilier actif (2 450 €/m² en moyenne). 57 587 habitants, parc dominé à parts équilibrées maisons/appartements.',

    parcImmoNote:
      'Le parc de Narbonne est composé à 50 % de maisons et 48 % d\'appartements (33 000 logements au total). Forte part de résidences secondaires (12 %), typique d\'une commune littorale. Les pavillons et collectifs des années 1970-1990 dominent le parc résidentiel — déclenchement systématique des diagnostics électricité et gaz au-delà des 15 ans. Les ZAC plus récentes (post-2000) sont en classe énergétique correcte.',

    enjeuxLocaux:
      'Narbonne est concernée par le PPRi Aude, PPRL submersion marine. L\'exposition est double : débordement de cours d\'eau et submersion marine. Une partie du territoire est en zone réglementée. L\'État des Risques et Pollutions est systématique et particulièrement scruté lors des transactions — un bien en zone d\'aléa peut subir une décote de 10 à 20 %. Diagnostics réglementaires standards applicables en Aude.',

    accessibilityNote:
      'Narbonne est à 75 minutes de Prades-le-Lez (100 km) via l\'A9 (et autoroutes complémentaires) — intervention sous 48 h garantie sur l\'ensemble de la commune dès l\'ouverture de l\'activité (mars 2027).',

    quartiersTypiques: [
      'Centre village historique',
      'Faubourgs et extensions XIXe-XXe',
      'Lotissements pavillonnaires (années 1970-1990)',
      'ZAC récentes et résidences post-2000',
    ],

    communesLimitrophes: ['Coursan', 'Vinassan', 'Armissan', 'Fleury', 'Gruissan', 'Bages', 'Bizanet', 'Montredon-des-Corbières', 'Névian', 'Marcorignan', 'Moussan', 'Cuxac-d\'Aude'],

    faqLocale: [
      {
        q: 'Quels diagnostics sont obligatoires pour vendre à Narbonne ?',
        a: 'Pour toute vente à Narbonne, le DPE et l\'ERP sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.',
      },
      {
        q: 'Combien coûte un pack diagnostic vente à Narbonne ?',
        a: 'À Narbonne, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune. Activité officielle dès mars 2027.',
      },
      {
        q: 'Sous quel délai intervenez-vous à Narbonne ?',
        a: 'Narbonne est à 75 minutes de Prades-le-Lez (100 km). L\'intervention sera garantie sous 48 h après validation du devis dès l\'ouverture de l\'activité, et le rapport remis sous 24 h ouvrées après l\'intervention.',
      },
      {
        q: 'Mon bien est-il en zone inondable à Narbonne ?',
        a: 'Une partie de Narbonne est couverte par le PPRi Aude, PPRL submersion marine. La commune est également exposée au risque de submersion marine. L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.',
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

    image: {
      url: '/images/villes/lunel.webp',
      alt: 'Cours Gabriel Péri à Lunel — axe animé du centre-ville',
      credit: 'Wikimedia Commons — CC BY-SA',
      attribution_url: 'https://commons.wikimedia.org/wiki/File:Lunel_-_Cours_Gabriel_P%C3%A9ri.jpg',
    },


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
          "L\'Hérault est classé intégralement en zone termites par arrêté préfectoral. Le diagnostic est obligatoire pour toute vente à Lunel, sans exception.",
      },
      {
        slug: 'erp',
        whyHere:
          "Une partie de la commune est couverte par le PPRI Vidourle (inondation et submersion marine au sud). L\'État des Risques et Pollutions est systématique et particulièrement scruté par les acquéreurs.",
      },
    ],

    intro:
      "Lunel occupe une position stratégique entre Nîmes et Montpellier, offrant un paysage immobilier contrasté qui reflète son évolution, d\'un cœur historique marqué par l\'art de vivre camarguais vers une zone résidentielle moderne et dynamique.",

    parcImmoNote:
      "Le parc lunellois est dominé par la maison individuelle (64 % du marché) avec une surface moyenne de 134 m², caractéristique d\'une ville à dominante pavillonnaire. Le centre ancien et les faubourgs concentrent un bâti antérieur à 1949 — plomb fréquent — tandis que les extensions des années 1970-1990 déclenchent quasi-systématiquement les diagnostics électricité et gaz au-delà des 15 ans d\'installation.",

    enjeuxLocaux:
      "La proximité du Vidourle place une partie des biens lunellois en zone inondable réglementée par PPRI, ce qui rend l\'État des Risques et Pollutions (ERP) systématique et particulièrement scruté par les acquéreurs. La submersion marine concerne le sud de la commune. Comme partout en Hérault, le diagnostic termites est obligatoire pour toute vente.",

    accessibilityNote:
      "Lunel est à 30 minutes de Prades-le-Lez via l\'A9 — intervention sous 48 h garantie sur la commune et sa couronne (Lunel-Viel, Marsillargues, Saint-Just, Saturargues).",

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
        a: "Pour toute vente à Lunel, le DPE, l\'ERP et le diagnostic termites sont systématiques. Selon l\'âge et la nature du bien : amiante (avant 1997), plomb (avant 1949), électricité et gaz (installations de plus de 15 ans), et le mesurage Carrez en copropriété. Le devis en ligne identifie automatiquement la liste obligatoire en quelques questions.",
      },
      {
        q: "Combien coûte un pack diagnostic vente à Lunel ?",
        a: "À Lunel, le pack vente appartement (DPE + amiante + électricité + gaz + ERP + Carrez) démarre à 290 € TTC. Le pack vente maison (avec termites en plus) démarre à 380 € TTC. Aucun frais de déplacement n\'est appliqué sur la commune.",
      },
      {
        q: "Sous quel délai intervenez-vous à Lunel ?",
        a: "Lunel est à 30 minutes de Prades-le-Lez via l\'A9. L\'intervention est garantie sous 48 h après validation du devis, et le rapport est remis sous 24 h après l\'intervention.",
      },
      {
        q: "Mon bien est-il en zone inondable à Lunel ?",
        a: "Une partie de Lunel est couverte par le PPRI Vidourle Basse plaine, approuvé le 15/09/2009 (risque de crue à débordement lent et submersion marine au sud). L\'État des Risques et Pollutions (ERP) que je réalise précise exactement les risques applicables à votre adresse.",
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

// Retourne les N villes les plus proches d\'un slug donné (excluant la ville elle-même).
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

// Retourne les N villes du cœur de zone (inCoreZone d\'abord, puis ordre par distance Prades-le-Lez).
// Utilisé pour les cross-links statiques (footer, pages-services).
export function getCoreVilles(limit = 6) {
  return [...villes]
    .sort((a, b) => {
      // Cœur d\'abord
      if (a.inCoreZone !== b.inCoreZone) return a.inCoreZone ? -1 : 1
      // Puis par distance Prades-le-Lez
      const distA = a.distanceFromBaseKm ?? Number.POSITIVE_INFINITY
      const distB = b.distanceFromBaseKm ?? Number.POSITIVE_INFINITY
      return distA - distB
    })
    .slice(0, limit)
}
