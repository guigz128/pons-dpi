const BAN_BASE = 'https://api-adresse.data.gouv.fr/search/'

export async function searchAddress(query, { limit = 5, signal } = {}) {
  const q = (query || '').trim()
  if (q.length < 3) return []

  const url = `${BAN_BASE}?q=${encodeURIComponent(q)}&limit=${limit}&autocomplete=1`
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error(`BAN ${res.status}`)
  const data = await res.json()

  return (data.features || []).map((f) => {
    const p = f.properties || {}
    const [lon, lat] = f.geometry?.coordinates || [null, null]
    return {
      id: p.id,
      label: p.label,
      type: p.type,
      postcode: p.postcode,
      city: p.city,
      citycode: p.citycode,
      context: p.context,
      lat,
      lon,
    }
  })
}
