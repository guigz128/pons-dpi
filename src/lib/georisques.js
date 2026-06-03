const GEORISQUES_BASE = 'https://www.georisques.gouv.fr/api/v1'

const RISK_GROUPS = {
  inondation: { codes: ['11', '110', '111', '112', '113', '114'], label: 'Inondation', category: 'naturel' },
  mouvement: { codes: ['12', '120', '121', '122', '123', '124', '125', '126', '127', '128'], label: 'Mouvement de terrain', category: 'naturel' },
  seisme: { codes: ['13'], label: 'Séisme', category: 'naturel' },
  feu_foret: { codes: ['16'], label: 'Feu de forêt', category: 'naturel' },
  radon: { codes: ['18'], label: 'Radon', category: 'naturel' },
  cyclone: { codes: ['14'], label: 'Cyclone', category: 'naturel' },
  volcan: { codes: ['15'], label: 'Éruption volcanique', category: 'naturel' },
  avalanche: { codes: ['17'], label: 'Avalanche', category: 'naturel' },
  rupture_barrage: { codes: ['23'], label: 'Rupture de barrage', category: 'technologique' },
  industriel: { codes: ['21', '22'], label: 'Risque industriel', category: 'technologique' },
  tmd: { codes: ['24'], label: 'Transport de marchandises dangereuses', category: 'technologique' },
  nucleaire: { codes: ['25'], label: 'Risque nucléaire', category: 'technologique' },
}

function categorize(numRisque) {
  for (const [key, group] of Object.entries(RISK_GROUPS)) {
    if (group.codes.includes(numRisque)) return { key, ...group }
  }
  return null
}

export async function fetchRisques(codeInsee, { signal } = {}) {
  if (!codeInsee) throw new Error('codeInsee required')

  const url = `${GEORISQUES_BASE}/gaspar/risques?code_insee=${encodeURIComponent(codeInsee)}&rayon=1000`
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error(`Géorisques ${res.status}`)
  const data = await res.json()

  const detail = data.data?.[0]?.risques_detail || []
  const groups = new Map()

  for (const r of detail) {
    const found = categorize(r.num_risque)
    if (!found) continue
    if (!groups.has(found.key)) {
      groups.set(found.key, {
        key: found.key,
        label: found.label,
        category: found.category,
        details: [],
      })
    }
    groups.get(found.key).details.push(r.libelle_risque_long)
  }

  return {
    codeInsee,
    commune: data.data?.[0]?.libelle_commune || null,
    risques: Array.from(groups.values()),
  }
}
