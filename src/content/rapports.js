// Données des rapports de mission interactifs.
// Schéma 100 % sérialisable (aucune dépendance React / icône ici) :
// les icônes sont mappées par `key` dans le composant de rendu RapportMission.
// → permet de générer un rapport sans toucher au code (futur builder / JSON).

// Identité diagnostiqueur — commune à tous les rapports
export const DIAGNOSTICIEN = {
  name: 'Guillaume Pons',
  initials: 'GP',
  role: 'Diagnostiqueur immobilier',
  certifsCount: '8 mentions',
  rncp: '38469 (niv. 5)',
  assurance: 'À jour',
  badges: ['DPE+', 'Amiante+', 'Plomb', 'Gaz', 'Élec', 'Termites', 'SS4', 'BE'],
}

// — Rapport DÉMO : Maison T4 1976 — 105 m² — Castelnau-le-Lez — DPE F (données fictives)
export const demo = {
  slug: 'demo',
  isDemo: true,
  diagnostiqueur: DIAGNOSTICIEN,
  bien: {
    type: 'Maison individuelle',
    surface: 105,
    rooms: 4,
    year: 1976,
    address: 'Avenue de la Source · 34170 Castelnau-le-Lez',
  },
  mission: {
    reference: 'PD-2026-0142',
    intervention: '12 mai 2026',
    duration: '3h45',
    transaction: 'Vente',
  },
  summaryNote:
    "Les 6 constats clés de votre dossier. Un seul point demande votre attention : la performance énergétique.",
  dpe: {
    consoEP: 314,
    etiquette: 'F',
    ges: 'F',
    gesValue: 67,
    headline: 'Votre bien est en classe F',
    intro:
      "C'est une passoire thermique au sens réglementaire. Audit énergétique obligatoire à la vente. Bonne nouvelle : le potentiel de progression est énorme, et les aides sont à la hauteur.",
    comparison: {
      theoretical: 314,
      real: 217,
      gapPct: 31,
      costYear: 2920,
      note: "Vos factures Enedis + GRDF des 3 dernières années montrent une consommation 31 % inférieure à l'étiquette DPE. Votre étiquette projetée après travaux sera probablement meilleure que les estimations standards.",
    },
    costBreakdown: null,
    heatLoss: [
      { label: 'Toiture', percent: 32, color: '#dc2626' },
      { label: 'Murs', percent: 24, color: '#ea580c' },
      { label: 'Fenêtres', percent: 18, color: '#d97706' },
      { label: 'Plancher bas', percent: 11, color: '#f59e0b' },
      { label: 'Renouvellement air', percent: 9, color: '#10b981' },
      { label: 'Ponts thermiques', percent: 6, color: '#3fb8b5' },
    ],
    heatLossNote:
      'Les 3 premiers postes (toiture, murs, fenêtres) représentent 74 % des déperditions — c\'est là qu\'il faut concentrer les travaux.',
  },
  findings: [
    { key: 'dpe', label: 'Performance énergétique', value: 'Classe F', status: 'danger', detail: 'Audit énergétique obligatoire à la vente' },
    { key: 'amiante', label: 'Amiante', value: 'Négatif', status: 'success', detail: 'Aucun matériau amianté repéré' },
    { key: 'electricite', label: 'Électricité', value: '2 anomalies', status: 'warning', detail: 'À corriger sans urgence (sécurité non engagée)' },
    { key: 'gaz', label: 'Gaz', value: 'Conforme', status: 'success', detail: 'Installation aux normes, ventilation correcte' },
    { key: 'termites', label: 'Termites', value: 'Aucune trace', status: 'success', detail: "Pas de signe d'infestation active ou passée" },
    { key: 'plomb', label: 'Plomb (CREP)', value: 'Non applicable', status: 'neutral', detail: 'Bâtiment postérieur à 1949' },
  ],
  scenarios: [
    {
      id: 'essentiel',
      name: 'Essentiel',
      tagline: 'Sortir de la passoire thermique',
      cost: 12500,
      netCost: { modeste: 3200, intermediaire: 6800, superieur: 9500 },
      duration: '2 à 3 semaines',
      dpeBefore: 'F',
      dpeAfter: 'D',
      consoReduction: 45,
      co2Reduction: 48,
      roi: 12,
      items: [
        'Isolation toiture par soufflage (combles perdus)',
        'VMC simple flux hygroréglable',
        'Calorifugeage tuyauteries chaufferie',
      ],
    },
    {
      id: 'confort',
      name: 'Confort',
      tagline: 'Confort thermique 4 saisons',
      cost: 28400,
      netCost: { modeste: 11200, intermediaire: 17600, superieur: 22300 },
      duration: '6 à 8 semaines',
      dpeBefore: 'F',
      dpeAfter: 'B',
      consoReduction: 65,
      co2Reduction: 72,
      roi: 14,
      items: [
        'Tout le scénario Essentiel',
        'Pompe à chaleur air/eau (remplacement chaudière gaz)',
        'Menuiseries double vitrage (façade sud + est)',
        "Isolation thermique par l'extérieur partielle (mur nord)",
      ],
      recommended: true,
    },
    {
      id: 'performance',
      name: 'Performance',
      tagline: 'Bâtiment Basse Consommation',
      cost: 45800,
      netCost: { modeste: 22100, intermediaire: 31400, superieur: 38900 },
      duration: '3 à 4 mois',
      dpeBefore: 'F',
      dpeAfter: 'A',
      consoReduction: 80,
      co2Reduction: 88,
      roi: 16,
      items: [
        'Tout le scénario Confort',
        'ITE complète (4 façades)',
        'Toutes menuiseries triple vitrage',
        'Panneaux solaires photovoltaïques (6 kWc)',
        'Ballon thermodynamique',
      ],
    },
  ],
  diagnostics: [
    {
      key: 'dpe',
      name: 'DPE — Diagnostic de performance énergétique',
      validity: '10 ans',
      status: 'danger',
      statusLabel: 'Classe F',
      summary: 'Logement très énergivore : 314 kWh/m²/an. Audit énergétique obligatoire à la vente (depuis avril 2023).',
      keyPoints: [
        'Émissions GES : 67 kg CO₂/m²/an (classe F)',
        'Chauffage gaz individuel — chaudière 2008 vieillissante',
        'Aucune isolation thermique : murs en parpaing brut, combles non isolés',
        'Menuiseries simple vitrage côté sud',
      ],
    },
    {
      key: 'amiante',
      name: 'Amiante — Repérage avant vente',
      validity: 'Illimité (négatif)',
      status: 'success',
      statusLabel: 'Négatif',
      summary: "Aucun matériau ou produit contenant de l'amiante repéré dans les zones accessibles.",
      keyPoints: [
        '47 prélèvements effectués (dalles, cloisons, calorifuges)',
        'Toiture en tuile : pas de plaque amiantée',
        'Conduits de ventilation : matériaux postérieurs à 1997',
      ],
    },
    {
      key: 'electricite',
      name: "Électricité — État de l'installation",
      validity: '3 ans',
      status: 'warning',
      statusLabel: '2 anomalies',
      summary: 'Installation globalement conforme. Deux anomalies relevées, à corriger sans urgence (sécurité des personnes non engagée).',
      keyPoints: [
        'A1 — Absence de liaison équipotentielle dans la salle de bain',
        'A2 — Prises non protégées par dispositif différentiel 30 mA (cuisine)',
        'Disjoncteur général en bon état',
        'Mise à la terre fonctionnelle',
      ],
    },
    {
      key: 'gaz',
      name: "Gaz — État de l'installation intérieure",
      validity: '3 ans',
      status: 'success',
      statusLabel: 'Conforme',
      summary: 'Installation gaz conforme aux normes. Aucune anomalie relevée.',
      keyPoints: [
        'Tuyauterie cuivre — étanchéité contrôlée',
        'Robinet de coupure accessible et fonctionnel',
        "Ventilation conforme (entrée d'air + sortie haute)",
        'Chaudière : entretien à jour',
      ],
    },
    {
      key: 'termites',
      name: 'Termites — État relatif à la présence',
      validity: '6 mois',
      status: 'success',
      statusLabel: 'Aucune trace',
      summary: "Aucune trace de termites ni d'insectes xylophages dans les éléments en bois accessibles.",
      keyPoints: [
        'Inspection charpente, planchers, encadrements',
        'Sondage par piquage : pas de galerie',
        'Castelnau-le-Lez : commune en zone de surveillance (arrêté 34)',
      ],
    },
    {
      key: 'erp',
      name: 'ERP — État des risques et pollutions',
      validity: '6 mois',
      status: 'warning',
      statusLabel: 'Zone à risques',
      summary: "Le bien est situé en zone soumise à plusieurs risques répertoriés. Pas d'obligation de travaux, information acquéreur uniquement.",
      keyPoints: [
        'Zone inondation Lez — aléa faible',
        'Sismicité : zone 3 (modéré)',
        'Retrait-gonflement des argiles : aléa moyen',
        'Radon : potentiel faible',
      ],
    },
  ],
  actionPlan: [
    {
      horizon: 'Avant signature',
      items: [
        { title: 'Annexer les diagnostics au DDT', detail: 'Tous les rapports sont signés et prêts à être joints au dossier de diagnostic technique de la promesse de vente.' },
        { title: "Informer l'acquéreur des anomalies électriques", detail: "Les 2 anomalies relevées doivent être mentionnées dans l'acte. Pas d'obligation de travaux côté vendeur." },
      ],
    },
    {
      horizon: '30 jours',
      items: [
        { title: 'Choisir un scénario de travaux', detail: 'En cas de rénovation avant vente (négociation à la hausse), trancher entre Essentiel, Confort ou Performance.' },
        { title: 'Demander des devis à 3 artisans RGE', detail: "Liste de partenaires fournie. Vérifier les qualifications RGE (Qualibat, Qualit'EnR) pour bénéficier de MaPrimeRénov'." },
      ],
    },
    {
      horizon: '60 à 90 jours',
      items: [
        { title: "Déposer le dossier MaPrimeRénov'", detail: 'Dossier à constituer avant signature des devis. Pour les projets > 5 000 €, un Accompagnateur Rénov\' agréé est obligatoire.' },
        { title: 'Planifier les travaux', detail: 'Selon scénario retenu : 2 semaines (Essentiel) à 4 mois (Performance). Possibilité d\'étaler dans le temps.' },
      ],
    },
  ],
  documents: [
    { name: 'DPE — Diagnostic de performance énergétique', size: '2.1 Mo', pages: 14 },
    { name: 'Rapport amiante — Repérage avant vente', size: '1.8 Mo', pages: 22 },
    { name: "État de l'installation électrique", size: '1.4 Mo', pages: 9 },
    { name: "État de l'installation gaz", size: '1.2 Mo', pages: 7 },
    { name: 'État relatif à la présence de termites', size: '0.9 Mo', pages: 5 },
    { name: 'État des risques et pollutions (ERP)', size: '0.8 Mo', pages: 4 },
    { name: 'Mesurage Loi Carrez', size: '0.5 Mo', pages: 2 },
  ],
}

// — Rapport RÉEL : Maison 1985 — 153,72 m² — Prades-le-Lez — DPE E
// Données issues du dossier technique réel (n° ADEME 2134V1003160F).
// Identité diagnostiqueur, n° de mission et dates : gabarit Pons DPI (à ajuster).
// Déperditions et scénarios de travaux : analyse Pons DPI d'après le descriptif DPE.
export const masAussel = {
  slug: 'mas-aussel',
  isDemo: false,
  diagnostiqueur: DIAGNOSTICIEN,
  bien: {
    type: 'Maison individuelle',
    surface: 153.72,
    rooms: null,
    year: 1985,
    address: "267 Rue du Mas d'Aussel · 34730 Prades-le-Lez",
    parcelle: 'Section AT — parcelle 107',
  },
  mission: {
    reference: 'PD-2026-0087',
    intervention: '14 avril 2026',
    duration: '3h30',
    transaction: 'Vente',
  },
  summaryNote:
    "Les 6 constats clés de votre dossier. La performance énergétique est correcte (classe E), mais la présence d'amiante et des anomalies gaz/électricité demandent votre attention.",
  dpe: {
    consoEP: 301,
    etiquette: 'E',
    ges: 'C',
    gesValue: 15,
    numeroAdeme: '2134V1003160F',
    headline: 'Votre bien est en classe E',
    intro:
      "Ce n'est pas une passoire thermique, mais le logement reste énergivore : murs et toiture ne sont pas isolés. Le potentiel de gain est réel, et plusieurs postes sont éligibles aux aides à la rénovation.",
    comparison: null,
    costBreakdown: {
      items: [
        { usage: 'Chauffage', cost: 1792, kwh: 34542 },
        { usage: 'Eau chaude sanitaire', cost: 332, kwh: 7807 },
        { usage: 'Refroidissement', cost: 215, kwh: 4013 },
      ],
      total: 2600,
      abonnement: 262,
      enr: '26,9 kWh/m²/an d\'origine renouvelable (poêle / insert bois)',
    },
    heatLoss: [
      { label: 'Murs (non isolés)', percent: 27, color: '#dc2626' },
      { label: 'Toiture (dalle béton)', percent: 24, color: '#ea580c' },
      { label: 'Plancher bas', percent: 16, color: '#d97706' },
      { label: 'Renouvellement air', percent: 13, color: '#f59e0b' },
      { label: 'Fenêtres', percent: 12, color: '#10b981' },
      { label: 'Ponts thermiques', percent: 8, color: '#3fb8b5' },
    ],
    heatLossNote:
      "Estimation Pons DPI d'après le descriptif du DPE. Murs, toiture et plancher non isolés concentrent l'essentiel des pertes — les menuiseries (double vitrage) sont déjà correctes.",
  },
  findings: [
    { key: 'dpe', label: 'Performance énergétique', value: 'Classe E', status: 'warning', detail: 'Énergie primaire 301 kWh/m²/an — bon potentiel de gain' },
    { key: 'amiante', label: 'Amiante', value: 'Présence repérée', status: 'warning', detail: 'Matériaux contenant de l\'amiante identifiés' },
    { key: 'gaz', label: 'Gaz', value: 'Anomalies A2', status: 'warning', detail: 'À réparer ; points non vérifiés (gaz coupé à la visite)' },
    { key: 'electricite', label: 'Électricité', value: 'Anomalies', status: 'warning', detail: 'Anomalies relevées — action recommandée' },
    { key: 'termites', label: 'Termites', value: 'Aucune trace', status: 'success', detail: "Aucun indice d'infestation" },
    { key: 'erp', label: 'Risques (ERP)', value: 'Zone à risques', status: 'warning', detail: 'Inondation (PPRi), sismicité 2, argiles' },
  ],
  scenarios: [
    {
      id: 'essentiel',
      name: 'Essentiel',
      tagline: 'Premiers gros gains',
      cost: 9500,
      netCost: { modeste: 3000, intermediaire: 5200, superieur: 7000 },
      duration: '2 à 3 semaines',
      dpeBefore: 'E',
      dpeAfter: 'D',
      consoReduction: 30,
      co2Reduction: 25,
      roi: 10,
      items: [
        'Isolation de la toiture (comble ventilé)',
        'Remplacement ECS par ballon thermodynamique',
        'Calorifugeage des réseaux',
      ],
    },
    {
      id: 'confort',
      name: 'Confort',
      tagline: 'Confort thermique 4 saisons',
      cost: 32000,
      netCost: { modeste: 13000, intermediaire: 20000, superieur: 25500 },
      duration: '6 à 9 semaines',
      dpeBefore: 'E',
      dpeAfter: 'B',
      consoReduction: 55,
      co2Reduction: 50,
      roi: 13,
      items: [
        'Tout le scénario Essentiel',
        "Isolation des murs par l'extérieur (ITE)",
        'Isolation du plancher bas',
        'Optimisation du chauffage (PAC en relève)',
      ],
      recommended: true,
    },
    {
      id: 'performance',
      name: 'Performance',
      tagline: 'Bâtiment Basse Consommation',
      cost: 52000,
      netCost: { modeste: 26000, intermediaire: 36000, superieur: 44000 },
      duration: '3 à 4 mois',
      dpeBefore: 'E',
      dpeAfter: 'A',
      consoReduction: 72,
      co2Reduction: 68,
      roi: 15,
      items: [
        'Tout le scénario Confort',
        'Remplacement des menuiseries restantes',
        'Panneaux solaires photovoltaïques',
        "Remplacement de la porte d'entrée",
      ],
    },
  ],
  diagnostics: [
    {
      key: 'dpe',
      name: 'DPE — Diagnostic de performance énergétique',
      validity: "Valable jusqu'au 26/02/2031",
      status: 'warning',
      statusLabel: 'Classe E',
      summary: "Énergie primaire 301 kWh/m²/an (classe E), émissions GES 15 kg CO₂/m²/an (classe C). Logement non isolé mais à faibles émissions grâce au chauffage électrique et au bois.",
      keyPoints: [
        'Énergie primaire : 301 kWh/m²/an — classe E',
        'Émissions GES : 15 kg CO₂/m²/an — classe C (faible)',
        'Murs et toiture non isolés (dalle béton sur comble très ventilé)',
        'Chauffage mixte : convecteurs élec, PAC air/air, poêle bois',
        "Part d'énergie renouvelable : 26,9 kWh/m²/an (bois)",
      ],
    },
    {
      key: 'amiante',
      name: 'Amiante — Constat avant vente',
      validity: 'Illimité',
      status: 'warning',
      statusLabel: 'Présence',
      summary: "Des matériaux et produits contenant de l'amiante ont été repérés dans le cadre de la mission. Localisation détaillée au rapport.",
      keyPoints: [
        'Matériaux amiantés identifiés — voir localisation au rapport',
        'Précautions à respecter avant tous travaux ou démolition',
        'Permis de construire antérieur au 1er juillet 1997',
      ],
    },
    {
      key: 'gaz',
      name: "Gaz — État de l'installation intérieure",
      validity: '3 ans',
      status: 'warning',
      statusLabel: 'Anomalies A2',
      summary: "L'installation comporte des anomalies de type A2 à réparer dans les meilleurs délais. Le gaz étant coupé lors de la visite, certains points n'ont pas pu être vérifiés.",
      keyPoints: [
        'Anomalies A2 : à corriger sans danger immédiat engagé',
        'Contrôle partiel — installation non alimentée à la visite',
      ],
    },
    {
      key: 'electricite',
      name: "Électricité — État de l'installation",
      validity: '3 ans',
      status: 'warning',
      statusLabel: 'Anomalies',
      summary: "L'installation intérieure d'électricité comporte une ou plusieurs anomalies. Il est vivement recommandé d'agir afin d'éliminer les dangers qu'elles présentent.",
      keyPoints: [
        'Anomalies relevées — mise en sécurité recommandée',
        'À faire vérifier par un électricien qualifié',
      ],
    },
    {
      key: 'termites',
      name: 'Termites — État relatif à la présence',
      validity: '6 mois',
      status: 'success',
      statusLabel: 'Aucune trace',
      summary: "Il n'a pas été repéré d'indice d'infestation de termites.",
      keyPoints: [
        'Inspection des bois, murs et sols accessibles',
        'Prades-le-Lez : Hérault sous arrêté préfectoral termites',
      ],
    },
    {
      key: 'erp',
      name: 'ERP — État des risques et pollutions',
      validity: '6 mois',
      status: 'warning',
      statusLabel: 'Zone à risques',
      summary: "Le bien est concerné par plusieurs risques répertoriés au Dossier Communal d'Information. Information acquéreur — pas d'obligation de travaux.",
      keyPoints: [
        'PPRn Inondation approuvé le 28/02/2013 — pas de prescription de travaux',
        'Sismicité : niveau 2 (faible), EUROCODE 8',
        'Retrait-gonflement des argiles : aléa moyen',
        'Arrêté préfectoral DDTM34-2013-03-03052',
      ],
    },
  ],
  actionPlan: [
    {
      horizon: 'Avant signature',
      items: [
        { title: 'Annexer les diagnostics au DDT', detail: 'Tous les rapports sont prêts à être joints au dossier de diagnostic technique de la promesse de vente.' },
        { title: "Informer l'acquéreur", detail: "La présence d'amiante et les anomalies gaz / électricité doivent être portées à la connaissance de l'acquéreur." },
      ],
    },
    {
      horizon: '30 jours',
      items: [
        { title: 'Faire vérifier gaz et électricité', detail: "Faire intervenir un professionnel qualifié pour lever les anomalies A2 (gaz) et les anomalies électriques." },
        { title: "Évaluer les travaux d'amélioration", detail: 'Prioriser toiture et eau chaude sanitaire pour le meilleur rapport gain / coût.' },
      ],
    },
    {
      horizon: '60 à 90 jours',
      items: [
        { title: "Constituer un dossier MaPrimeRénov'", detail: 'En cas de rénovation, dossier à monter avant signature des devis. Au-delà de 5 000 €, un Accompagnateur Rénov\' agréé est requis.' },
        { title: 'Planifier les travaux prioritaires', detail: 'Isolation toiture + ballon thermodynamique d\'abord, puis ITE des murs selon budget.' },
      ],
    },
  ],
  documents: [
    { name: 'DPE — Diagnostic de performance énergétique', size: '2.0 Mo', pages: 9 },
    { name: 'Constat amiante avant-vente', size: '1.7 Mo', pages: 18 },
    { name: "État de l'installation électrique", size: '1.3 Mo', pages: 9 },
    { name: "État de l'installation gaz", size: '1.1 Mo', pages: 7 },
    { name: 'État relatif à la présence de termites', size: '0.9 Mo', pages: 5 },
    { name: 'État des risques et pollutions (ERP)', size: '0.8 Mo', pages: 4 },
  ],
}

const RAPPORTS = {
  'mas-aussel': masAussel,
}

export function getRapport(slug) {
  return RAPPORTS[slug] || null
}
