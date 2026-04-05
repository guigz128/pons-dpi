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
  },
]

export const allServices = [...servicesVente, ...servicesAvantTravaux, ...servicesTertiaire]
