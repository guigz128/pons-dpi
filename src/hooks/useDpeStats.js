import { useEffect, useState } from 'react'
import { getInseeBySlug } from '../content/villes-insee'
import { getDpeStatsBySlug } from '../content/villes-dpe-stats'
import { getStatsByInsee, resolveInseeFromCity } from '../lib/ademe'

// Récupère les statistiques DPE pour une commune.
// Privilégie le snapshot statique (build) → rendu instantané, indexable, sans
// dépendance réseau. Bascule en fetch live ADEME uniquement si la commune
// n'est pas dans le snapshot. Échoue silencieusement (failed).
// Mutualisé entre le hero et la section détaillée pour ne résoudre qu'une fois.
export function useDpeStats(slug, villeName) {
  const preset = getDpeStatsBySlug(slug)
  const [stats, setStats] = useState(preset)
  const [loading, setLoading] = useState(!preset)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (preset) return // snapshot disponible : pas de fetch live
    if (!slug && !villeName) return
    let cancelled = false
    const ctrl = new AbortController()

    async function load() {
      setLoading(true)
      setFailed(false)
      try {
        let code = getInseeBySlug(slug)
        if (!code) {
          code = await resolveInseeFromCity(villeName, { signal: ctrl.signal })
        }
        if (!code) throw new Error('INSEE introuvable')
        const s = await getStatsByInsee(code, { signal: ctrl.signal })
        if (cancelled) return
        setStats(s)
      } catch (err) {
        if (err.name !== 'AbortError' && !cancelled) setFailed(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
      ctrl.abort()
    }
  }, [slug, villeName, preset])

  return { stats, loading, failed }
}
