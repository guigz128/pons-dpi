#!/usr/bin/env node
// Snapshot statique des statistiques DPE par commune (source ADEME).
// Résout l'INSEE de chaque commune puis interroge l'open data ADEME une seule
// fois, et écrit src/content/villes-dpe-stats.js (données figées, commitées).
//
// À relancer manuellement (ou via cron mensuel) : npm run build:dpe-stats
//
// Les données ADEME évoluent lentement : une fraîcheur mensuelle suffit.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { villes } from '../src/content/villes.js'
import { VILLE_INSEE } from '../src/content/villes-insee.js'
import { getStatsByInsee } from '../src/lib/ademe.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.resolve(__dirname, '../src/content/villes-dpe-stats.js')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// INSEE depuis la map connue, sinon résolution par nom + département (geo.api.gouv.fr).
async function resolveInsee(v) {
  if (VILLE_INSEE[v.slug]) return VILLE_INSEE[v.slug]
  try {
    const params = new URLSearchParams({
      nom: v.name,
      fields: 'code,nom,codeDepartement',
      limit: '8',
    })
    const res = await fetch(`https://geo.api.gouv.fr/communes?${params}`)
    if (!res.ok) return null
    const data = await res.json()
    if (!Array.isArray(data) || data.length === 0) return null
    const match = v.departementCode
      ? data.find((c) => c.codeDepartement === v.departementCode)
      : null
    return (match || data[0]).code
  } catch {
    return null
  }
}

const out = {}
let ok = 0
let skipped = 0

for (const v of villes) {
  let insee = null
  try {
    insee = await resolveInsee(v)
    if (!insee) {
      console.warn(`  ⚠ ${v.slug} — INSEE introuvable`)
      skipped++
      continue
    }
    const s = await getStatsByInsee(insee)
    if (!s || s.total === 0) {
      console.warn(`  ⚠ ${v.slug} (${insee}) — aucune donnée ADEME`)
      skipped++
      continue
    }
    out[v.slug] = {
      insee,
      total: s.total,
      fgCount: s.fgCount,
      fgPct: s.fgPct,
      efgCount: s.efgCount,
      efgPct: s.efgPct,
      distribution: s.distribution,
    }
    ok++
    console.log(
      `  ✓ ${v.slug.padEnd(34)} ${insee}  ${String(s.total).padStart(6)} DPE · F/G ${s.fgPct}%`,
    )
  } catch (err) {
    console.warn(`  ✗ ${v.slug}${insee ? ` (${insee})` : ''} — ${err.message}`)
    skipped++
  }
  await sleep(120) // courtoisie envers les API publiques
}

const generatedAt = new Date().toISOString().slice(0, 10)

const file = `// Snapshot statique des statistiques DPE par commune (source : ADEME).
// Généré automatiquement par scripts/build-dpe-stats.mjs — NE PAS éditer à la main.
// Pour rafraîchir : npm run build:dpe-stats
//
// Dernière génération : ${generatedAt}

export const DPE_STATS_GENERATED_AT = '${generatedAt}'

export const VILLE_DPE_STATS = ${JSON.stringify(out, null, 2)}

export function getDpeStatsBySlug(slug) {
  return VILLE_DPE_STATS[slug] || null
}
`

fs.writeFileSync(outPath, file, 'utf-8')
console.log(
  `\n[build-dpe-stats] ${ok} communes snapshotées, ${skipped} ignorées → ${path.relative(
    path.resolve(__dirname, '..'),
    outPath,
  )}`,
)
