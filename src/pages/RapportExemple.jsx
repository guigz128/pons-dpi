import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Home,
  Ruler,
  Thermometer,
  Zap,
  Flame,
  Droplet,
  Shield,
  Bug,
  FileText,
  TrendingDown,
  TrendingUp,
  Banknote,
  Clock,
  Phone,
  MessageCircle,
  Download,
  Info,
  Sparkles,
  ArrowDown,
  Wind,
  Sun,
} from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import ScrollReveal from '../components/ui/ScrollReveal'

// — Données démo : Maison T4 1976 — 105 m² — Castelnau-le-Lez — DPE F
const PROPERTY = {
  type: 'Maison individuelle',
  surface: 105,
  rooms: 4,
  year: 1976,
  address: 'Avenue de la Source · 34170 Castelnau-le-Lez',
  intervention: '12 mai 2026',
  duration: '3h45',
  transaction: 'Vente',
  reference: 'PD-2026-0142',
}

const DPE_SCALE = [
  { letter: 'A', range: '≤ 70', color: '#319831', emission: '≤ 6' },
  { letter: 'B', range: '71 – 110', color: '#34c83a', emission: '7 – 11' },
  { letter: 'C', range: '111 – 180', color: '#c8e600', emission: '12 – 30' },
  { letter: 'D', range: '181 – 250', color: '#fff200', emission: '31 – 50' },
  { letter: 'E', range: '251 – 330', color: '#f5b521', emission: '51 – 70' },
  { letter: 'F', range: '331 – 420', color: '#ee5b1e', emission: '71 – 100' },
  { letter: 'G', range: '> 420', color: '#d6181c', emission: '> 100' },
]

const KEY_FINDINGS = [
  {
    icon: Thermometer,
    label: 'Performance énergétique',
    value: 'Classe F',
    status: 'danger',
    detail: 'Audit énergétique obligatoire à la vente',
  },
  {
    icon: Shield,
    label: 'Amiante',
    value: 'Négatif',
    status: 'success',
    detail: 'Aucun matériau amianté repéré',
  },
  {
    icon: Zap,
    label: 'Électricité',
    value: '2 anomalies',
    status: 'warning',
    detail: 'À corriger sans urgence (sécurité non engagée)',
  },
  {
    icon: Flame,
    label: 'Gaz',
    value: 'Conforme',
    status: 'success',
    detail: 'Installation aux normes, ventilation correcte',
  },
  {
    icon: Bug,
    label: 'Termites',
    value: 'Aucune trace',
    status: 'success',
    detail: 'Pas de signe d\'infestation active ou passée',
  },
  {
    icon: Droplet,
    label: 'Plomb (CREP)',
    value: 'Non applicable',
    status: 'neutral',
    detail: 'Bâtiment postérieur à 1949',
  },
]

const CONSUMPTION = {
  theoretical: 314, // kWh/m²/an étiquette DPE
  real: 217, // kWh/m²/an mesuré sur factures
  gap: -31, // % d'écart
  totalReal: 22785, // kWh/an total
  costYear: 2920, // €/an estimé
}

const HEAT_LOSS = [
  { label: 'Toiture', percent: 32, color: '#dc2626' },
  { label: 'Murs', percent: 24, color: '#ea580c' },
  { label: 'Fenêtres', percent: 18, color: '#d97706' },
  { label: 'Plancher bas', percent: 11, color: '#f59e0b' },
  { label: 'Renouvellement air', percent: 9, color: '#10b981' },
  { label: 'Ponts thermiques', percent: 6, color: '#3fb8b5' },
]

const SCENARIOS = [
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
    color: '#fff200',
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
      'Isolation thermique par l\'extérieur partielle (mur nord)',
    ],
    color: '#34c83a',
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
    color: '#319831',
  },
]

const DIAGNOSTICS = [
  {
    icon: Thermometer,
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
    icon: Shield,
    name: 'Amiante — Repérage avant vente',
    validity: 'Illimité (négatif)',
    status: 'success',
    statusLabel: 'Négatif',
    summary: 'Aucun matériau ou produit contenant de l\'amiante repéré dans les zones accessibles.',
    keyPoints: [
      '47 prélèvements effectués (dalles, cloisons, calorifuges)',
      'Toiture en tuile : pas de plaque amiantée',
      'Conduits de ventilation : matériaux postérieurs à 1997',
    ],
  },
  {
    icon: Zap,
    name: 'Électricité — État de l\'installation',
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
    icon: Flame,
    name: 'Gaz — État de l\'installation intérieure',
    validity: '3 ans',
    status: 'success',
    statusLabel: 'Conforme',
    summary: 'Installation gaz conforme aux normes. Aucune anomalie relevée.',
    keyPoints: [
      'Tuyauterie cuivre — étanchéité contrôlée',
      'Robinet de coupure accessible et fonctionnel',
      'Ventilation conforme (entrée d\'air + sortie haute)',
      'Chaudière : entretien à jour',
    ],
  },
  {
    icon: Bug,
    name: 'Termites — État relatif à la présence',
    validity: '6 mois',
    status: 'success',
    statusLabel: 'Aucune trace',
    summary: 'Aucune trace de termites ni d\'insectes xylophages dans les éléments en bois accessibles.',
    keyPoints: [
      'Inspection charpente, planchers, encadrements',
      'Sondage par piquage : pas de galerie',
      'Castelnau-le-Lez : commune en zone de surveillance (arrêté 34)',
    ],
  },
  {
    icon: FileText,
    name: 'ERP — État des risques et pollutions',
    validity: '6 mois',
    status: 'warning',
    statusLabel: 'Zone à risques',
    summary: 'Le bien est situé en zone soumise à plusieurs risques répertoriés. Pas d\'obligation de travaux, information acquéreur uniquement.',
    keyPoints: [
      'Zone inondation Lez — aléa faible',
      'Sismicité : zone 3 (modéré)',
      'Retrait-gonflement des argiles : aléa moyen',
      'Radon : potentiel faible',
    ],
  },
]

const ACTION_PLAN = [
  {
    horizon: 'Avant signature',
    color: 'border-danger bg-red-50',
    iconBg: 'bg-red-100 text-danger',
    items: [
      {
        title: 'Annexer les diagnostics au DDT',
        detail: 'Tous les rapports sont signés et prêts à être joints au dossier de diagnostic technique de la promesse de vente.',
      },
      {
        title: 'Informer l\'acquéreur des anomalies électriques',
        detail: 'Les 2 anomalies relevées doivent être mentionnées dans l\'acte. Pas d\'obligation de travaux côté vendeur.',
      },
    ],
  },
  {
    horizon: '30 jours',
    color: 'border-warning bg-amber-50',
    iconBg: 'bg-amber-100 text-warning',
    items: [
      {
        title: 'Choisir un scénario de travaux',
        detail: 'En cas de rénovation avant vente (négociation à la hausse), trancher entre Essentiel, Confort ou Performance.',
      },
      {
        title: 'Demander des devis à 3 artisans RGE',
        detail: 'Liste de partenaires fournie. Vérifier les qualifications RGE (Qualibat, Qualit\'EnR) pour bénéficier de MaPrimeRénov\'.',
      },
    ],
  },
  {
    horizon: '60 à 90 jours',
    color: 'border-accent bg-accent-light',
    iconBg: 'bg-accent-light text-accent',
    items: [
      {
        title: 'Déposer le dossier MaPrimeRénov\'',
        detail: 'Dossier à constituer avant signature des devis. Pour les projets > 5 000 €, un Accompagnateur Rénov\' agréé est obligatoire.',
      },
      {
        title: 'Planifier les travaux',
        detail: 'Selon scénario retenu : 2 semaines (Essentiel) à 4 mois (Performance). Possibilité d\'étaler dans le temps.',
      },
    ],
  },
]

const OFFICIAL_DOCS = [
  { name: 'DPE — Diagnostic de performance énergétique', size: '2.1 Mo', pages: 14 },
  { name: 'Rapport amiante — Repérage avant vente', size: '1.8 Mo', pages: 22 },
  { name: 'État de l\'installation électrique', size: '1.4 Mo', pages: 9 },
  { name: 'État de l\'installation gaz', size: '1.2 Mo', pages: 7 },
  { name: 'État relatif à la présence de termites', size: '0.9 Mo', pages: 5 },
  { name: 'État des risques et pollutions (ERP)', size: '0.8 Mo', pages: 4 },
  { name: 'Mesurage Loi Carrez', size: '0.5 Mo', pages: 2 },
]

const STATUS_STYLES = {
  success: { icon: CheckCircle2, badge: 'success', text: 'text-success', bg: 'bg-green-50' },
  warning: { icon: AlertCircle, badge: 'warning', text: 'text-warning', bg: 'bg-amber-50' },
  danger: { icon: XCircle, badge: 'danger', text: 'text-danger', bg: 'bg-red-50' },
  neutral: { icon: Info, badge: 'default', text: 'text-text-secondary', bg: 'bg-stone-100' },
}

function DpeBadge({ letter, size = 'lg' }) {
  const data = DPE_SCALE.find((d) => d.letter === letter)
  const sizes = {
    sm: 'h-10 w-10 text-base',
    md: 'h-14 w-14 text-xl',
    lg: 'h-24 w-24 text-4xl',
  }
  return (
    <div
      className={`${sizes[size]} flex items-center justify-center rounded-lg font-display font-black text-stone-900 shadow-sm`}
      style={{ backgroundColor: data.color }}
    >
      {letter}
    </div>
  )
}

function DpeScale({ current }) {
  return (
    <div className="space-y-1.5">
      {DPE_SCALE.map((row) => {
        const isCurrent = row.letter === current
        return (
          <div
            key={row.letter}
            className={`flex items-center gap-3 rounded-md p-2 transition-all ${
              isCurrent ? 'ring-2 ring-text shadow-sm' : ''
            }`}
            style={{ backgroundColor: isCurrent ? row.color : 'transparent' }}
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded font-display text-base font-black text-stone-900"
              style={{ backgroundColor: row.color }}
            >
              {row.letter}
            </div>
            <div className="flex-1 text-sm">
              <span className="font-semibold">{row.range}</span>
              <span className="ml-1 text-text-secondary">kWh/m²/an</span>
            </div>
            {isCurrent && (
              <span className="text-xs font-bold uppercase tracking-wide">
                Votre bien
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}

function FindingCard({ finding }) {
  const style = STATUS_STYLES[finding.status]
  const Icon = finding.icon
  return (
    <div className="flex gap-4 rounded-md border border-border bg-surface p-4">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${style.bg}`}>
        <Icon className={`h-5 w-5 ${style.text}`} strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
            {finding.label}
          </p>
        </div>
        <p className="mt-0.5 text-base font-bold">{finding.value}</p>
        <p className="mt-1 text-sm text-text-secondary leading-snug">{finding.detail}</p>
      </div>
    </div>
  )
}

function ScenarioCard({ scenario, tranche }) {
  const net = scenario.netCost[tranche]
  const aides = scenario.cost - net
  return (
    <div
      className={`relative flex flex-col rounded-lg border bg-surface p-6 ${
        scenario.recommended ? 'border-accent shadow-md ring-1 ring-accent' : 'border-border'
      }`}
    >
      {scenario.recommended && (
        <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow">
          <Sparkles className="h-3 w-3" />
          RECOMMANDÉ
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-display text-xl">{scenario.name}</h3>
        <p className="text-sm text-text-secondary">{scenario.tagline}</p>
      </div>

      {/* DPE transition */}
      <div className="mb-5 flex items-center justify-center gap-3 rounded-md bg-stone-50 p-3">
        <DpeBadge letter={scenario.dpeBefore} size="sm" />
        <ArrowRight className="h-4 w-4 text-text-secondary" />
        <DpeBadge letter={scenario.dpeAfter} size="md" />
      </div>

      {/* Stats clés */}
      <div className="mb-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-md bg-stone-50 p-3">
          <div className="flex items-center gap-1.5 text-text-secondary">
            <TrendingDown className="h-3.5 w-3.5" />
            <span className="text-xs font-medium uppercase tracking-wide">Conso</span>
          </div>
          <p className="mt-0.5 font-display text-lg font-bold text-success">
            −{scenario.consoReduction}%
          </p>
        </div>
        <div className="rounded-md bg-stone-50 p-3">
          <div className="flex items-center gap-1.5 text-text-secondary">
            <Wind className="h-3.5 w-3.5" />
            <span className="text-xs font-medium uppercase tracking-wide">CO₂</span>
          </div>
          <p className="mt-0.5 font-display text-lg font-bold text-success">
            −{scenario.co2Reduction}%
          </p>
        </div>
      </div>

      {/* Travaux inclus */}
      <ul className="mb-5 space-y-2 text-sm">
        {scenario.items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      {/* Coût + reste à charge */}
      <div className="mt-auto rounded-md border border-border bg-stone-50 p-4">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-text-secondary">
            Coût travaux
          </span>
          <span className="font-display text-lg font-bold">
            {scenario.cost.toLocaleString('fr-FR')} €
          </span>
        </div>
        <div className="mb-3 flex items-baseline justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-success">
            Aides estimées
          </span>
          <span className="font-semibold text-success">
            −{aides.toLocaleString('fr-FR')} €
          </span>
        </div>
        <div className="border-t border-border pt-3">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-semibold">Reste à charge</span>
            <span className="font-display text-2xl font-black text-accent">
              {net.toLocaleString('fr-FR')} €
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-text-secondary">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {scenario.duration}
            </span>
            <span>ROI ~{scenario.roi} ans</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function DiagnosticCard({ diag }) {
  const style = STATUS_STYLES[diag.status]
  const StatusIcon = style.icon
  const DiagIcon = diag.icon
  return (
    <div className="rounded-lg border border-border bg-surface overflow-hidden">
      <div className="flex items-start gap-4 border-b border-border p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-stone-100">
          <DiagIcon className="h-5 w-5 text-text" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold leading-tight">{diag.name}</h3>
          <p className="mt-0.5 text-xs text-text-secondary">Validité : {diag.validity}</p>
        </div>
        <Badge variant={style.badge}>
          <StatusIcon className="h-3 w-3" />
          {diag.statusLabel}
        </Badge>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed">{diag.summary}</p>
        <ul className="mt-4 space-y-2">
          {diag.keyPoints.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-text-secondary">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-secondary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function RapportExemple() {
  const [tranche, setTranche] = useState('intermediaire')

  return (
    <>
      <Helmet>
        <title>Exemple de rapport client | Pons DPI</title>
        <meta
          name="description"
          content="Aperçu du rapport client Pons DPI : synthèse claire, scénarios de travaux chiffrés, aides estimées, plan d'action. Bien plus qu'un PDF officiel."
        />
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      {/* Bannière démo */}
      <div className="border-b border-border bg-accent-light">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold">Exemple de rapport client</p>
              <p className="text-xs text-text-secondary">
                Aperçu réaliste de ce que vous recevez après votre intervention.
                Données fictives à but démonstratif.
              </p>
            </div>
          </div>
          <Button to="/devis" size="sm">
            Demander mon devis <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* COVER — Identité bien */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <Badge variant="accent">Rapport n° {PROPERTY.reference}</Badge>
            <Badge variant="default">
              <Calendar className="h-3 w-3" />
              Intervention {PROPERTY.intervention}
            </Badge>
            <Badge variant="default">{PROPERTY.transaction}</Badge>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-text-secondary">
                Synthèse de diagnostic immobilier
              </p>
              <h1 className="font-display text-4xl leading-tight sm:text-5xl">
                {PROPERTY.type}<br />
                <span className="text-text-secondary">{PROPERTY.address}</span>
              </h1>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-secondary">Surface</p>
                  <p className="mt-1 font-display text-2xl font-bold">{PROPERTY.surface} m²</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-secondary">Pièces</p>
                  <p className="mt-1 font-display text-2xl font-bold">T{PROPERTY.rooms}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-secondary">Année</p>
                  <p className="mt-1 font-display text-2xl font-bold">{PROPERTY.year}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-secondary">Durée</p>
                  <p className="mt-1 font-display text-2xl font-bold">{PROPERTY.duration}</p>
                </div>
              </div>
            </div>

            {/* Identité diagnostiqueur */}
            <div className="rounded-lg border border-border bg-stone-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-text font-display text-lg font-bold text-white">
                  GP
                </div>
                <div>
                  <p className="font-semibold">Guillaume Pons</p>
                  <p className="text-sm text-text-secondary">Diagnostiqueur immobilier</p>
                </div>
              </div>
              <div className="space-y-1.5 text-sm">
                <p className="flex items-center justify-between">
                  <span className="text-text-secondary">Certifications COFRAC</span>
                  <span className="font-semibold">8 mentions</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-text-secondary">Titre RNCP</span>
                  <span className="font-semibold">38469 (niv. 5)</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-text-secondary">Assurance RC Pro</span>
                  <span className="font-semibold">À jour</span>
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {['DPE+', 'Amiante+', 'Plomb', 'Gaz', 'Élec', 'Termites', 'SS4', 'BE'].map((c) => (
                  <span
                    key={c}
                    className="rounded bg-surface px-2 py-1 text-xs font-semibold text-text-secondary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYNTHÈSE EXÉCUTIVE */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <ScrollReveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  01 — Synthèse en un coup d'œil
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                  L'essentiel à retenir
                </h2>
              </div>
              <p className="hidden max-w-md text-sm text-text-secondary sm:block">
                Les 6 constats clés de votre dossier. Un seul point demande votre attention :
                la performance énergétique.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {KEY_FINDINGS.map((f) => (
                <FindingCard key={f.label} finding={f} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PERFORMANCE ÉNERGÉTIQUE */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                02 — Performance énergétique
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Votre bien est en classe F
              </h2>
              <p className="mt-3 max-w-2xl text-text-secondary">
                C'est une passoire thermique au sens réglementaire. Audit énergétique
                obligatoire à la vente. Bonne nouvelle : le potentiel de progression
                est énorme, et les aides sont à la hauteur.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            {/* Échelle DPE */}
            <ScrollReveal>
              <div className="rounded-lg border border-border bg-stone-50 p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  Étiquette énergie
                </p>
                <p className="font-display text-2xl">
                  <span className="font-black">314</span>
                  <span className="ml-1 text-base font-normal text-text-secondary">
                    kWh/m²/an d'énergie primaire
                  </span>
                </p>
                <div className="mt-6">
                  <DpeScale current="F" />
                </div>
              </div>
            </ScrollReveal>

            {/* Théorique vs réel + déperditions */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="rounded-lg border border-border bg-stone-50 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">Consommation théorique vs réelle</h3>
                  </div>
                  <p className="mb-5 text-sm text-text-secondary">
                    Vos factures Enedis + GRDF des 3 dernières années montrent une
                    consommation <strong className="text-text">31 % inférieure</strong> à
                    l'étiquette DPE. Bonne nouvelle : votre étiquette projetée après travaux
                    sera probablement meilleure que les estimations standards.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-md bg-surface p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                        DPE théorique
                      </p>
                      <p className="mt-1 font-display text-2xl font-bold">
                        {CONSUMPTION.theoretical}
                      </p>
                      <p className="text-xs text-text-secondary">kWh/m²/an</p>
                    </div>
                    <div className="rounded-md bg-accent-light p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                        Mesuré sur factures
                      </p>
                      <p className="mt-1 font-display text-2xl font-bold">
                        {CONSUMPTION.real}
                      </p>
                      <p className="text-xs text-text-secondary">kWh/m²/an</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                    <span className="text-sm text-text-secondary">Coût annuel énergie</span>
                    <span className="font-display text-xl font-bold">
                      {CONSUMPTION.costYear.toLocaleString('fr-FR')} €/an
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="rounded-lg border border-border bg-stone-50 p-6">
                  <h3 className="mb-4 font-semibold">Où s'échappe votre énergie ?</h3>
                  <div className="space-y-3">
                    {HEAT_LOSS.map((h) => (
                      <div key={h.label}>
                        <div className="mb-1 flex items-baseline justify-between text-sm">
                          <span className="font-medium">{h.label}</span>
                          <span className="font-semibold">{h.percent}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-stone-200">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${h.percent * 2.5}%`, backgroundColor: h.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-text-secondary">
                    Les 3 premiers postes (toiture, murs, fenêtres) représentent
                    <strong className="text-text"> 74 %</strong> des déperditions —
                    c'est là qu'il faut concentrer les travaux.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SCÉNARIOS DE TRAVAUX */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                03 — Scénarios de travaux chiffrés
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Trois trajectoires possibles
              </h2>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Chaque scénario est chiffré aux prix locaux Montpellier, avec les aides
                financières estimées selon votre tranche de revenus. Le scénario Confort
                offre le meilleur rapport gain énergétique / investissement.
              </p>
            </div>
          </ScrollReveal>

          {/* Sélecteur tranche revenus */}
          <ScrollReveal>
            <div className="mb-8 rounded-lg border border-border bg-surface p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">Votre tranche de revenus MaPrimeRénov'</p>
                  <p className="text-xs text-text-secondary">
                    Pour ajuster les aides estimées (estimation indicative)
                  </p>
                </div>
                <div className="flex gap-1 rounded-md border border-border bg-stone-50 p-1">
                  {[
                    { id: 'modeste', label: 'Très modestes' },
                    { id: 'intermediaire', label: 'Intermédiaires' },
                    { id: 'superieur', label: 'Supérieurs' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTranche(t.id)}
                      className={`rounded px-3 py-1.5 text-sm font-semibold transition-colors ${
                        tranche === t.id
                          ? 'bg-text text-white shadow-sm'
                          : 'text-text-secondary hover:text-text'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Cards scénarios */}
          <div className="grid gap-6 lg:grid-cols-3">
            {SCENARIOS.map((s) => (
              <ScrollReveal key={s.id}>
                <ScenarioCard scenario={s} tranche={tranche} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-8 rounded-md border border-border bg-surface p-5">
              <div className="flex gap-3">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="text-sm text-text-secondary">
                  Les aides incluent MaPrimeRénov', CEE, éco-PTZ et TVA 5,5 %.
                  Montants indicatifs basés sur les barèmes 2026.
                  <strong className="text-text"> Pour un chiffrage définitif</strong>, un audit
                  énergétique réglementaire (OPQIBI 1905) est nécessaire — je vous mets en
                  relation avec mon partenaire qualifié.
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DIAGNOSTICS DÉTAILLÉS */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                04 — Diagnostics réalisés
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Le détail, en langage clair
              </h2>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Pour chaque diagnostic, l'essentiel à retenir et ce qu'il faut savoir.
                Les rapports officiels complets (PDF réglementaires) sont disponibles plus bas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {DIAGNOSTICS.map((d) => (
              <ScrollReveal key={d.name}>
                <DiagnosticCard diag={d} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN D'ACTION */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                05 — Plan d'action priorisé
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Que faire maintenant&nbsp;?
              </h2>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Une feuille de route claire en trois horizons. Vous gardez la main sur
                le rythme : tout n'a pas besoin d'être fait en même temps.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {ACTION_PLAN.map((step, idx) => (
              <ScrollReveal key={step.horizon}>
                <div className={`rounded-lg border-l-4 ${step.color} p-6`}>
                  <div className="flex flex-wrap items-center gap-3 border-b border-border/60 pb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${step.iconBg} font-display text-base font-black`}>
                      {idx + 1}
                    </div>
                    <h3 className="font-display text-xl">{step.horizon}</h3>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {step.items.map((item) => (
                      <div key={item.title}>
                        <p className="font-semibold leading-tight">{item.title}</p>
                        <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS OFFICIELS */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                06 — Documents officiels
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Vos rapports réglementaires
              </h2>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Les PDF officiels conformes à l'arrêté, à joindre au DDT (Dossier de
                Diagnostic Technique) de la promesse de vente.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-hidden rounded-lg border border-border bg-stone-50">
              {OFFICIAL_DOCS.map((doc, idx) => (
                <div
                  key={doc.name}
                  className={`flex items-center justify-between gap-4 px-5 py-4 ${
                    idx !== 0 ? 'border-t border-border' : ''
                  } hover:bg-stone-100 transition-colors`}
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-50">
                      <FileText className="h-5 w-5 text-danger" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-medium">{doc.name}</p>
                      <p className="text-xs text-text-secondary">
                        PDF · {doc.pages} pages · {doc.size}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-semibold text-text-secondary hover:text-text hover:border-text/30 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Télécharger</span>
                  </button>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-text text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Un rapport comme celui-ci pour votre bien
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                  Chaque mission Pons DPI donne lieu à ce niveau de restitution.
                </h2>
                <p className="mt-4 max-w-xl text-white/70">
                  Synthèse claire, scénarios chiffrés, plan d'action priorisé, aides estimées.
                  Inclus dans la prestation standard — pas une option.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button to="/devis" size="lg" className="bg-accent hover:bg-accent-hover text-white w-full">
                  Demander mon devis
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="tel:0651669161"
                  variant="outline"
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  06 51 66 91 61
                </Button>
                <Button
                  href="https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers."
                  variant="outline"
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
