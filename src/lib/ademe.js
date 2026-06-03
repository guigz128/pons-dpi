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
