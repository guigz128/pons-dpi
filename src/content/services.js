import {
  Flame,
  Shield,
  Droplets,
  Zap,
  FlameKindling,
  Bug,
  AlertTriangle,
  Ruler,
  Volume2,
  Pipette,
} from 'lucide-react'

export const servicesVente = [
  {
    id: 'dpe',
    slug: 'dpe',
    icon: Flame,
    name: 'DPE',
    fullName: 'Diagnostic de Performance Énergétique',
    condition: 'Tous biens > 50 m\u00b2',
    validite: '10 ans',
    description:
      'Consommation énergétique, émissions GES, classement A à G, recommandations de travaux.',
    longDescription:
      "Le DPE évalue la consommation d'énergie et les émissions de gaz à effet de serre de votre bien. Obligatoire pour toute vente ou location, il classe le logement de A (très performant) à G (passoire thermique). Depuis 2021, le DPE est opposé et engage la responsabilité du diagnostiqueur.",
    whatWeCheck:
      "Je mesure la consommation d'énergie de votre logement : isolation des murs, du toit et des fenêtres, type de chauffage, production d'eau chaude. Chaque élément est entré dans un logiciel certifié qui calcule la classe énergétique (A à G) et les émissions de CO\u2082.",
    whyItMatters:
      "Le DPE influence directement la valeur de votre bien. Un logement classé A ou B se vend plus vite et plus cher. À l'inverse, un DPE F ou G (passoire thermique) impose des obligations : audit énergétique avant vente, et bientôt interdiction de louer.",
    ifPositive:
      "Si votre logement est classé F ou G, pas de panique. Je vous recommande les travaux prioritaires (isolation, chauffage) avec une estimation des gains. Un audit énergétique complémentaire peut être nécessaire pour la vente.",
  },
  {
    id: 'amiante',
    slug: 'amiante',
    icon: Shield,
    name: 'Amiante',
    fullName: 'État d\'amiante',
    condition: 'Permis avant le 01/07/1997',
    validite: 'Illimité si négatif',
    description:
      'Repérage des matériaux et produits contenant de l\'amiante : flocages, calorifuges, faux plafonds, dalles, canalisations.',
    longDescription:
      "Le diagnostic amiante repère tous les matériaux susceptibles de contenir de l'amiante dans les bâtiments construits avant juillet 1997. Ce repérage porte sur les flocages, calorifuges, faux plafonds, dalles de sol, canalisations et autres matériaux de construction.",
    whatWeCheck:
      "Je repère visuellement tous les matériaux susceptibles de contenir de l'amiante : flocages, faux plafonds, dalles de sol, canalisations, joints, colles. Si un doute persiste, un prélèvement est envoyé en laboratoire.",
    whyItMatters:
      "L'amiante est un matériau dangereux pour la santé quand il se dégrade. Le diagnostic protège les occupants et les futurs acquéreurs. Il est aussi indispensable avant tout travaux de rénovation dans un bâtiment ancien.",
    ifPositive:
      "Si de l'amiante est détectée en bon état, aucune obligation de retrait immédiat — une surveillance régulière suffit. Si l'état est dégradé, des travaux de confinement ou de retrait par une entreprise spécialisée seront nécessaires.",
  },
  {
    id: 'plomb',
    slug: 'plomb',
    icon: Droplets,
    name: 'Plomb (CREP)',
    fullName: 'Constat de Risque d\'Exposition au Plomb',
    condition: 'Construit avant le 01/01/1949',
    validite: 'Illimité si négatif, 1 an si positif',
    description:
      'Mesure de la concentration en plomb des revêtements (peintures), évaluation de l\'état de conservation.',
    longDescription:
      "Le CREP mesure la concentration en plomb des peintures et revêtements du logement. Si des concentrations supérieures au seuil réglementaire sont détectées, le propriétaire doit effectuer des travaux pour supprimer le risque d'exposition, notamment pour les jeunes enfants.",
    whatWeCheck:
      "Avec un appareil à fluorescence X, je mesure la concentration en plomb de chaque revêtement (peintures, enduits) dans toutes les pièces. Pas besoin de gratter les murs — la mesure est non destructive.",
    whyItMatters:
      "Le plomb dans les peintures anciennes est toxique, surtout pour les jeunes enfants (saturnisme). Le CREP informe l'acheteur et peut déclencher une obligation de travaux si les seuils sont dépassés.",
    ifPositive:
      "Si du plomb est détecté au-dessus du seuil, vous devrez réaliser des travaux pour supprimer l'accessibilité au plomb (recouvrement, décapage). Je vous indique précisément les zones concernées dans le rapport.",
  },
  {
    id: 'electricite',
    slug: 'electricite',
    icon: Zap,
    name: 'Électricité',
    fullName: 'État de l\'installation intérieure d\'électricité',
    condition: 'Installation > 15 ans',
    validite: '3 ans',
    description:
      'Sécurité de l\'installation électrique : disjoncteur, mise à la terre, liaisons équipotentielles, protection des personnes.',
    longDescription:
      "Le diagnostic électricité vérifie la sécurité de l'installation électrique de plus de 15 ans. Il contrôle l'appareil général de commande, les dispositifs de protection, la mise à la terre et les liaisons équipotentielles. Un rapport détaille les anomalies constatées.",
    whatWeCheck:
      "Je contrôle l'ensemble de l'installation électrique : tableau, disjoncteur général, prises de terre, dispositifs de protection (différentiels), liaisons équipotentielles dans les salles d'eau, et l'état général du câblage.",
    whyItMatters:
      "Une installation électrique défaillante est une cause fréquente d'incendie domestique. Le diagnostic identifie les anomalies et rassure l'acheteur sur la sécurité du logement.",
    ifPositive:
      "Les anomalies constatées n'empêchent pas la vente, mais l'acheteur est informé. Les plus courantes (absence de différentiel, prise de terre manquante) se corrigent facilement par un électricien.",
  },
  {
    id: 'gaz',
    slug: 'gaz',
    icon: FlameKindling,
    name: 'Gaz',
    fullName: 'État de l\'installation intérieure de gaz',
    condition: 'Installation > 15 ans',
    validite: '3 ans',
    description:
      'État de l\'installation intérieure de gaz : tuyauterie, raccordements, ventilation, appareils de combustion.',
    longDescription:
      "Le diagnostic gaz évalue la sécurité de l'installation de gaz de plus de 15 ans. Il porte sur l'état des tuyauteries fixes, des raccordements, de la ventilation des locaux et du fonctionnement des appareils de combustion. Un danger immédiat peut entraîner une coupure de gaz.",
    whatWeCheck:
      "Je vérifie l'état des tuyauteries fixes, les raccordements des appareils (chaudière, cuisinière), la ventilation des pièces où se trouvent les appareils à gaz, et le bon fonctionnement de la combustion.",
    whyItMatters:
      "Une fuite de gaz ou une mauvaise combustion peut provoquer une intoxication au monoxyde de carbone, un risque mortel. Le diagnostic protège les occupants actuels et futurs.",
    ifPositive:
      "En cas de danger immédiat (fuite, ventilation insuffisante), je peux être amené à signaler la situation au fournisseur de gaz qui coupera l'alimentation. Pour les anomalies mineures, un chauffagiste pourra intervenir rapidement.",
  },
  {
    id: 'termites',
    slug: 'termites',
    icon: Bug,
    name: 'Termites',
    fullName: 'État relatif à la présence de termites',
    condition: 'Zone arrêté préfectoral',
    validite: '6 mois',
    description:
      'Présence de termites et insectes xylophages dans les éléments en bois, les murs, les sols.',
    longDescription:
      "Le diagnostic termites recherche la présence de termites et d'insectes xylophages pouvant affecter la structure du bâtiment. Il est obligatoire dans les zones délimitées par arrêté préfectoral. L'Hérault fait partie des départements concernés.",
    whatWeCheck:
      "J'inspecte tous les éléments en bois accessibles (charpente, planchers, plinthes, huisseries), les murs et les sols. Je recherche des traces d'activité de termites et d'insectes xylophages : galeries, sciure, bois fragilisé.",
    whyItMatters:
      "Les termites peuvent fragiliser la structure d'un bâtiment en quelques années. L'Hérault est un département classé à risque — le diagnostic est obligatoire pour toute vente.",
    ifPositive:
      "Si des termites sont détectées, vous devez déclarer leur présence en mairie dans les 30 jours. Un traitement par une entreprise spécialisée sera nécessaire. Le diagnostic indique précisément les zones touchées.",
  },
  {
    id: 'erp',
    slug: 'erp',
    icon: AlertTriangle,
    name: 'ERP',
    fullName: 'État des Risques et Pollutions',
    condition: 'Zone à risques',
    validite: '6 mois',
    description:
      'État des risques naturels, miniers, technologiques, sismiques, radon — selon arrêté préfectoral.',
    longDescription:
      "L'ERP informe l'acquéreur ou le locataire sur les risques naturels (inondation, séisme, mouvement de terrain), miniers, technologiques et de pollution auxquels le bien est exposé. Il est établi à partir des informations mises à disposition par la préfecture.",
    whatWeCheck:
      "Je consulte les bases de données officielles (préfecture, Géorisques) pour identifier tous les risques auxquels votre bien est exposé : inondation, séisme, mouvement de terrain, risque industriel, radon, pollution des sols.",
    whyItMatters:
      "L'ERP informe l'acheteur ou le locataire sur les risques naturels et technologiques. C'est un document informatif mais obligatoire — son absence peut entraîner l'annulation de la vente.",
    ifPositive:
      "L'ERP ne comporte pas de « résultat positif » à proprement parler. Il liste les risques existants. Si votre bien est en zone inondable ou sismique, cela ne bloque pas la vente, mais l'acheteur doit en être informé.",
  },
  {
    id: 'carrez',
    slug: 'mesurage-carrez',
    icon: Ruler,
    name: 'Mesurage Carrez',
    fullName: 'Mesurage loi Carrez',
    condition: 'Copropriété',
    validite: 'Illimité sauf travaux',
    description:
      'Surface privative du lot de copropriété selon la loi du 18 décembre 1996.',
    longDescription:
      "Le mesurage loi Carrez détermine la surface privative exacte d'un lot de copropriété. Il exclut les surfaces dont la hauteur sous plafond est inférieure à 1,80 m, les murs, cloisons, cages d'escalier et embrasures. Une erreur de plus de 5 % ouvre droit à une diminution du prix.",
    whatWeCheck:
      "Je mesure au laser la surface privative de chaque pièce de votre lot de copropriété. Sont exclues : les surfaces sous 1,80 m de hauteur, les murs, cloisons, cages d'escalier, et les embrasures de portes et fenêtres.",
    whyItMatters:
      "La surface Carrez est mentionnée dans l'acte de vente. Si elle est surestimée de plus de 5 %, l'acheteur peut demander une réduction de prix proportionnelle dans l'année suivant la signature.",
    ifPositive: null,
  },
  {
    id: 'bruit',
    slug: 'diagnostic-bruit',
    icon: Volume2,
    name: 'Diagnostic bruit',
    fullName: 'Diagnostic bruit',
    condition: 'Zone exposition bruit aéroport',
    validite: 'Informatif',
    description:
      "Évaluation de l'exposition sonore du bien situé en zone de bruit d'un aéroport.",
    longDescription:
      "Le diagnostic bruit est obligatoire pour les biens situés dans une zone d'exposition au bruit des aérodromes (plan d'exposition au bruit). Il informe l'acquéreur sur le niveau d'exposition sonore et reste un document informatif.",
    whatWeCheck:
      "Je vérifie si votre bien se situe dans une zone d'exposition au bruit d'un aérodrome, en consultant le Plan d'Exposition au Bruit (PEB) de la commune.",
    whyItMatters:
      "C'est un document purement informatif. Il n'empêche pas la vente, mais l'acheteur doit savoir s'il va vivre sous un couloir aérien.",
    ifPositive: null,
  },
  {
    id: 'assainissement',
    slug: 'assainissement',
    icon: Pipette,
    name: 'Assainissement',
    fullName: 'Diagnostic assainissement non collectif',
    condition: 'Installation autonome',
    validite: '3 ans',
    description:
      "Conformité de l'installation d'assainissement non collectif (fosse septique, micro-station).",
    longDescription:
      "Le diagnostic assainissement non collectif vérifie la conformité et le bon fonctionnement de l'installation d'assainissement individuelle. Il est réalisé par le SPANC (Service Public d'Assainissement Non Collectif) ou un diagnostiqueur agréé.",
    whatWeCheck:
      "Je contrôle le bon fonctionnement et la conformité de votre installation d'assainissement individuel : fosse septique, micro-station, filtre compact, bac à graisse, et réseau d'épandage.",
    whyItMatters:
      "Un assainissement non conforme peut polluer les sols et les nappes phréatiques. En cas de vente, l'acheteur doit réaliser les travaux de mise en conformité dans l'année suivant la signature.",
    ifPositive:
      "Si l'installation est non conforme, je détaille les points à corriger. Les travaux de mise aux normes sont à la charge de l'acheteur (dans le délai d'un an) ou peuvent être négociés lors de la vente.",
  },
]

export const allServices = [...servicesVente]
