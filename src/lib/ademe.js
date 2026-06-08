const ADEME_BASE = 'https://data.ademe.fr/data-fair/api/v1/datasets'
const DATASET_EXISTING = 'meg-83tjwtg8dyz4vv7h1dqe'

const FIELDS = [
  'numero_dpe',
  'date_etablissement_dpe',
  'date_fin_validite_dpe',
  'etiquette_dpe',
  'etiquette_ges',
  'surface_habitable_logement',
  'adresse_ban',
  'code_postal_ban',
  'code_insee_ban',
  'nom_commune_ban',
  'type_batiment',
  'annee_construction',
]

export async function searchDpeByAddress(query, { limit = 10, signal } = {}) {
  const q = (query || '').trim()
  if (q.length < 4) return { total: 0, results: [] }

  const params = new URLSearchParams({
    size: String(limit),
    q,
    q_fields: 'adresse_ban,nom_commune_ban',
    select: FIELDS.join(','),
    sort: '-date_etablissement_dpe',
  })

  const res = await fetch(`${ADEME_BASE}/${DATASET_EXISTING}/lines?${params}`, { signal })
  if (!res.ok) throw new Error(`ADEME ${res.status}`)
  const data = await res.json()
  return {
    total: data.total ?? 0,
    results: data.results || [],
  }
}

export async function listDpeByInsee(codeInsee, { limit = 20, signal } = {}) {
  if (!codeInsee) throw new Error('codeInsee required')

  const params = new URLSearchParams({
    size: String(limit),
    qs: `code_insee_ban:"${codeInsee}"`,
    select: FIELDS.join(','),
    sort: '-date_etablissement_dpe',
  })

  const res = await fetch(`${ADEME_BASE}/${DATASET_EXISTING}/lines?${params}`, { signal })
  if (!res.ok) throw new Error(`ADEME ${res.status}`)
  const data = await res.json()
  return {
    total: data.total ?? 0,
    results: data.results || [],
  }
}

export async function getStatsByInsee(codeInsee, { signal } = {}) {
  if (!codeInsee) throw new Error('codeInsee required')

  const params = new URLSearchParams({
    field: 'etiquette_dpe',
    qs: `code_insee_ban:"${codeInsee}"`,
    agg_size: '10',
    size: '0',
  })

  const res = await fetch(`${ADEME_BASE}/${DATASET_EXISTING}/values_agg?${params}`, { signal })
  if (!res.ok) throw new Error(`ADEME ${res.status}`)
  const data = await res.json()

  const byLabel = {}
  for (const a of data.aggs || []) {
    byLabel[a.value] = a.total
  }
  const total = data.total ?? 0
  const order = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  const distribution = order.map((l) => ({
    label: l,
    count: byLabel[l] || 0,
    pct: total > 0 ? Math.round(((byLabel[l] || 0) / total) * 1000) / 10 : 0,
  }))

  const fg = (byLabel['F'] || 0) + (byLabel['G'] || 0)
  const ef = (byLabel['E'] || 0) + (byLabel['F'] || 0) + (byLabel['G'] || 0)

  return {
    total,
    distribution,
    fgCount: fg,
    fgPct: total > 0 ? Math.round((fg / total) * 1000) / 10 : 0,
    efgCount: ef,
    efgPct: total > 0 ? Math.round((ef / total) * 1000) / 10 : 0,
  }
}

// — Récupération d'un DPE complet par numéro d'enregistrement ADEME —
// (uniquement les DPE postérieurs à juillet 2021, présents dans l'open data)

const DPE_FULL_FIELDS = [
  'numero_dpe',
  'etiquette_dpe',
  'etiquette_ges',
  'conso_5_usages_par_m2_ep',
  'emission_ges_5_usages_par_m2',
  'surface_habitable_logement',
  'annee_construction',
  'type_batiment',
  'adresse_ban',
  'code_postal_ban',
  'nom_commune_ban',
  'date_fin_validite_dpe',
  'cout_chauffage',
  'cout_ecs',
  'cout_refroidissement',
  'cout_total_5_usages',
  'conso_chauffage_ep',
  'conso_ecs_ep',
  'conso_refroidissement_ep',
  'deperditions_murs',
  'deperditions_planchers_bas',
  'deperditions_planchers_hauts',
  'deperditions_baies_vitrees',
  'deperditions_ponts_thermiques',
  'deperditions_renouvellement_air',
  'deperditions_portes',
]

const HEAT_LOSS_LABELS = [
  { field: 'deperditions_murs', label: 'Murs' },
  { field: 'deperditions_planchers_hauts', label: 'Toiture / plafond' },
  { field: 'deperditions_planchers_bas', label: 'Plancher bas' },
  { field: 'deperditions_baies_vitrees', label: 'Fenêtres' },
  { field: 'deperditions_renouvellement_air', label: 'Renouvellement air' },
  { field: 'deperditions_ponts_thermiques', label: 'Ponts thermiques' },
  { field: 'deperditions_portes', label: 'Portes' },
]

// Palette chaud → froid, assignée par ordre décroissant de déperdition
const HEAT_LOSS_COLORS = ['#dc2626', '#ea580c', '#d97706', '#f59e0b', '#10b981', '#3fb8b5', '#6366f1']

const BATIMENT_LABELS = {
  appartement: 'Appartement',
  maison: 'Maison individuelle',
  immeuble: 'Immeuble',
}

const round = (n) => (n == null ? null : Math.round(n))

// Transforme un enregistrement ADEME brut en bloc `dpe` + `bien` du rapport.
export function mapDpeRecordToRapport(r) {
  // Coûts par poste (on ignore les postes à 0 €)
  const costItems = [
    { usage: 'Chauffage', cost: round(r.cout_chauffage), kwh: round(r.conso_chauffage_ep) },
    { usage: 'Eau chaude sanitaire', cost: round(r.cout_ecs), kwh: round(r.conso_ecs_ep) },
    { usage: 'Refroidissement', cost: round(r.cout_refroidissement), kwh: round(r.conso_refroidissement_ep) },
  ].filter((it) => it.cost > 0)

  // Répartition des déperditions (vraies valeurs ADEME → pourcentages)
  const losses = HEAT_LOSS_LABELS
    .map((h) => ({ label: h.label, value: r[h.field] || 0 }))
    .filter((h) => h.value > 0)
    .sort((a, b) => b.value - a.value)
  const totalLoss = losses.reduce((s, h) => s + h.value, 0)
  const heatLoss = losses.map((h, i) => ({
    label: h.label,
    percent: totalLoss > 0 ? Math.round((h.value / totalLoss) * 100) : 0,
    color: HEAT_LOSS_COLORS[i] || HEAT_LOSS_COLORS[HEAT_LOSS_COLORS.length - 1],
  }))

  const etiquette = r.etiquette_dpe
  const isPassoire = etiquette === 'F' || etiquette === 'G'
  const consoEP = round(r.conso_5_usages_par_m2_ep)

  const dpe = {
    consoEP,
    etiquette,
    ges: r.etiquette_ges,
    gesValue: round(r.emission_ges_5_usages_par_m2),
    numeroAdeme: r.numero_dpe,
    headline: `Votre bien est en classe ${etiquette}`,
    intro: isPassoire
      ? "C'est une passoire thermique au sens réglementaire : audit énergétique obligatoire à la vente. Le potentiel de progression — et les aides — sont à la hauteur."
      : "Données issues du DPE officiel enregistré à l'ADEME. Voici la répartition de vos consommations et de vos déperditions, et les leviers d'amélioration.",
    comparison: null,
    costBreakdown: costItems.length
      ? { items: costItems, total: round(r.cout_total_5_usages) }
      : null,
    heatLoss: heatLoss.length ? heatLoss : null,
    heatLossNote: heatLoss.length
      ? 'Répartition issue des déperditions calculées dans le DPE officiel (ADEME).'
      : null,
  }

  const bien = {
    type: BATIMENT_LABELS[r.type_batiment] || r.type_batiment || 'Logement',
    surface: r.surface_habitable_logement ? Math.round(r.surface_habitable_logement * 100) / 100 : null,
    rooms: null,
    year: r.annee_construction || null,
    address: [r.adresse_ban, [r.code_postal_ban, r.nom_commune_ban].filter(Boolean).join(' ')]
      .filter(Boolean)
      .join(' · '),
  }

  return { dpe, bien, validity: r.date_fin_validite_dpe }
}

export async function getDpeByNumero(numero, { signal } = {}) {
  const n = (numero || '').trim().toUpperCase()
  if (!n) return null

  const params = new URLSearchParams({
    size: '1',
    qs: `numero_dpe:"${n}"`,
    select: DPE_FULL_FIELDS.join(','),
  })

  const res = await fetch(`${ADEME_BASE}/${DATASET_EXISTING}/lines?${params}`, { signal })
  if (!res.ok) throw new Error(`ADEME ${res.status}`)
  const data = await res.json()
  const record = data.results?.[0]
  if (!record) return null
  return { record, ...mapDpeRecordToRapport(record) }
}

export async function resolveInseeFromCity(cityName, { signal } = {}) {
  if (!cityName) return null
  const params = new URLSearchParams({
    nom: cityName,
    fields: 'code,nom,codeDepartement',
    limit: '5',
  })
  const res = await fetch(`https://geo.api.gouv.fr/communes?${params}`, { signal })
  if (!res.ok) return null
  const data = await res.json()
  if (!Array.isArray(data) || data.length === 0) return null
  const dept = data.find((c) => c.codeDepartement === '34')
  return (dept || data[0]).code
}
