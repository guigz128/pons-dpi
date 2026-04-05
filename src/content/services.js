import {
  Flame,
  Shield,
  Droplets,
  Zap,
  FlameKindling,
  Bug,
  AlertTriangle,
  Ruler,
  BarChart3,
  Volume2,
  Pipette,
  Building2,
  HardHat,
  Trash2,
  FileText,
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
    id: 'audit',
    slug: 'audit-energetique',
    icon: BarChart3,
    name: 'Audit énergétique',
    fullName: 'Audit énergétique réglementaire',
    condition: 'DPE F ou G (maison individuelle)',
    validite: '5 ans',
    description:
      'Analyse approfondie des performances énergétiques, scénarios de travaux chiffrés, gains estimés.',
    longDescription:
      "L'audit énergétique réglementaire est obligatoire depuis avril 2023 pour la vente de maisons individuelles classées F ou G au DPE. Il propose au moins deux scénarios de travaux de rénovation énergétique, avec un chiffrage estimatif et les gains de performance attendus.",
    whatWeCheck:
      "J'analyse en profondeur les performances énergétiques de votre maison : enveloppe du bâtiment, systèmes de chauffage et de refroidissement, production d'eau chaude. Je modélise ensuite plusieurs scénarios de rénovation avec leurs coûts et leurs gains.",
    whyItMatters:
      "L'audit est obligatoire pour vendre une maison classée F ou G. Au-delà de l'obligation, c'est un vrai outil d'aide à la décision : il chiffre les travaux et montre le retour sur investissement.",
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

export const servicesAvantTravaux = [
  {
    id: 'amiante_avant_travaux',
    slug: 'amiante-avant-travaux',
    icon: HardHat,
    name: 'Amiante avant travaux',
    description:
      "Repérage exhaustif de tous les matériaux amiantés susceptibles d'être impactés par les travaux — obligation du maître d'ouvrage.",
    longDescription:
      "Le repérage amiante avant travaux est une obligation du maître d'ouvrage. Il vise à identifier tous les matériaux et produits contenant de l'amiante susceptibles d'être affectés par les travaux prévus. Ce diagnostic est plus complet que le diagnostic amiante vente car il nécessite des investigations destructives.",
    whatWeCheck:
      "Je réalise un repérage exhaustif de tous les matériaux amiantés susceptibles d'être impactés par vos travaux. Contrairement au diagnostic vente, j'effectue des sondages destructifs pour accéder aux matériaux cachés (sous-couches, doublages, conduits).",
    whyItMatters:
      "C'est une obligation du maître d'ouvrage avant tout chantier. Sans ce diagnostic, les ouvriers risquent d'être exposés à des fibres d'amiante. Les sanctions sont lourdes en cas de manquement.",
    ifPositive:
      "Si de l'amiante est trouvée dans la zone de travaux, le chantier devra être adapté : retrait par une entreprise certifiée, plan de retrait, protection des travailleurs. Je vous accompagne dans la planification.",
  },
  {
    id: 'amiante_avant_demolition',
    slug: 'amiante-avant-demolition',
    icon: Trash2,
    name: 'Amiante avant démolition',
    description:
      "Repérage de l'ensemble des matériaux contenant de l'amiante avant démolition totale ou partielle.",
    longDescription:
      "Le repérage amiante avant démolition est obligatoire avant toute démolition totale ou partielle d'un bâtiment. Il porte sur l'intégralité des matériaux et produits du bâtiment, y compris ceux difficilement accessibles. Ce repérage est indispensable pour planifier le retrait de l'amiante en toute sécurité.",
    whatWeCheck:
      "Je repère l'intégralité des matériaux amiantés dans le bâtiment, y compris ceux difficilement accessibles. Le repérage est exhaustif car tout le bâtiment sera impacté par la démolition.",
    whyItMatters:
      "Obligatoire avant toute démolition totale ou partielle. Le repérage permet de planifier le retrait de l'amiante avant la démolition, pour protéger les travailleurs et l'environnement.",
    ifPositive:
      "Un plan de retrait sera élaboré par l'entreprise de désamiantage sur la base de mon rapport. Tous les matériaux amiantés doivent être retirés avant le début de la démolition.",
  },
  {
    id: 'dta',
    slug: 'dossier-technique-amiante',
    icon: FileText,
    name: 'DTA',
    description:
      "Constitution et mise à jour du Dossier Technique Amiante pour les parties communes d'immeubles collectifs et les ERP.",
    longDescription:
      "Le Dossier Technique Amiante (DTA) est obligatoire pour les parties communes des immeubles collectifs d'habitation et pour tous les immeubles bâtis autres que les maisons individuelles. Il compile les résultats des repérages amiante et doit être tenu à disposition des occupants et des entreprises intervenant dans le bâtiment.",
    whatWeCheck:
      "Je compile l'ensemble des repérages amiante réalisés dans les parties communes de l'immeuble. Le DTA inclut la localisation des matériaux amiantés, leur état de conservation, et les recommandations de gestion.",
    whyItMatters:
      "Le DTA est obligatoire pour tous les immeubles collectifs et les ERP. Il doit être tenu à disposition des occupants, des entreprises intervenant dans le bâtiment, et des autorités.",
    ifPositive: null,
  },
]

export const servicesTertiaire = [
  {
    id: 'dpe_tertiaire',
    slug: 'dpe-tertiaire',
    icon: Building2,
    name: 'DPE tertiaire',
    description:
      'Bureaux, commerces, bâtiments publics — périmètre élargi grâce à la certification avec mention.',
    longDescription:
      "Le DPE tertiaire concerne les bâtiments à usage autre que d'habitation : bureaux, commerces, hôtels, bâtiments d'enseignement, établissements de santé. Il nécessite la certification DPE avec mention, que peu de diagnostiqueurs détiennent.",
    whatWeCheck:
      "J'évalue la performance énergétique de votre bâtiment professionnel : bureaux, commerces, locaux d'activité. La méthodologie est adaptée aux spécificités du tertiaire (horaires d'occupation, systèmes de climatisation, éclairage).",
    whyItMatters:
      "Obligatoire pour la vente ou la location de tout bâtiment tertiaire. Peu de diagnostiqueurs disposent de la certification avec mention nécessaire — c'est l'une de nos spécialités.",
    ifPositive: null,
  },
  {
    id: 'dpe_immeuble',
    slug: 'dpe-immeuble',
    icon: Building2,
    name: 'DPE immeuble',
    description:
      "DPE à l'échelle d'un bâtiment collectif d'habitation.",
    longDescription:
      "Le DPE à l'immeuble évalue la performance énergétique globale d'un bâtiment collectif d'habitation. Il est souvent demandé par les syndics de copropriété dans le cadre du plan pluriannuel de travaux (PPT) ou d'un audit énergétique de copropriété.",
    whatWeCheck:
      "J'évalue la performance énergétique globale d'un immeuble collectif d'habitation : enveloppe du bâtiment, chauffage collectif, production d'eau chaude, ventilation des parties communes.",
    whyItMatters:
      "Souvent demandé par les syndics dans le cadre du Plan Pluriannuel de Travaux (PPT). Il donne une vision d'ensemble de la performance du bâtiment et aide à prioriser les travaux de rénovation.",
    ifPositive: null,
  },
  {
    id: 'amiante_erp',
    slug: 'amiante-erp',
    icon: Shield,
    name: 'Amiante ERP / IGH',
    description:
      "Repérage dans les ERP (catégorie 1-4), immeubles de grande hauteur, bâtiments industriels.",
    longDescription:
      "Le repérage amiante dans les Établissements Recevant du Public (ERP) et les Immeubles de Grande Hauteur (IGH) nécessite la certification amiante avec mention. Ce diagnostic couvre les bâtiments tertiaires, industriels et publics de grande envergure.",
    whatWeCheck:
      "Je réalise le repérage amiante dans les établissements recevant du public et les immeubles de grande hauteur. Ce diagnostic nécessite la certification avec mention et couvre des bâtiments de grande envergure.",
    whyItMatters:
      "Obligatoire pour les ERP et IGH, ce diagnostic protège le public et le personnel. Il alimente le DTA et permet de planifier la gestion des matériaux amiantés.",
    ifPositive:
      "Si de l'amiante est détectée, les recommandations varient selon l'état de conservation : surveillance, confinement ou retrait. Le rapport alimente le Dossier Technique Amiante du bâtiment.",
  },
]

export const allServices = [...servicesVente, ...servicesAvantTravaux, ...servicesTertiaire]
