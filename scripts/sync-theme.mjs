#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────
// sync-theme.mjs — propage le thème actif (theme/themes.mjs) sur les 3 surfaces.
// ─────────────────────────────────────────────────────────────────────────
// Écrit le bloc `@theme { … }` entre les marqueurs THEME:START / THEME:END dans
// chaque fichier cible. Le reste de chaque fichier (fonts, base, prose, print…)
// n'est jamais touché. Idempotent : relançable sans effet de bord.
//
// Usage : node scripts/sync-theme.mjs   (ou `npm run theme:sync`)
// ─────────────────────────────────────────────────────────────────────────

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, relative } from 'node:path'
import { themes, ACTIVE } from '../theme/themes.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..') // racine du repo pons-dpi

const theme = themes[ACTIVE]
if (!theme) {
  console.error(`✖ Thème actif inconnu : « ${ACTIVE} ». Thèmes dispo : ${Object.keys(themes).join(', ')}`)
  process.exit(1)
}

const START = '/* THEME:START — généré par scripts/sync-theme.mjs (source : theme/themes.mjs). Ne pas éditer à la main. */'
const END = '/* THEME:END */'

function buildBlock() {
  const l = []
  l.push('@theme {')
  l.push(`  --font-sans: ${theme.fonts.sans};`)
  l.push(`  --font-display: ${theme.fonts.display};`)
  l.push('')
  for (const [k, v] of Object.entries(theme.colors)) l.push(`  --color-${k}: ${v};`)
  l.push('')
  for (const [k, v] of Object.entries(theme.radius)) l.push(`  --radius-${k}: ${v};`)
  l.push('}')
  return l.join('\n')
}

const block = `${START}\n${buildBlock()}\n${END}`

// Cibles (chemins relatifs à la racine du repo pons-dpi).
const targets = [
  'src/index.css',                                    // vitrine
  '../pons-dpi-app/src/index.css',                    // app carnet
  '../../../blogs/pons-dpi-blog/src/styles/global.css', // blog Astro
]

const markerRe = /\/\* THEME:START[\s\S]*?THEME:END \*\//

let ok = 0
for (const rel of targets) {
  const file = resolve(root, rel)
  let css
  try {
    css = readFileSync(file, 'utf8')
  } catch {
    console.warn(`⏭  absent, ignoré : ${rel}`)
    continue
  }
  if (!markerRe.test(css)) {
    console.warn(`⚠  marqueurs THEME absents dans ${rel} — insère d'abord :\n     ${START}\n     ${END}`)
    continue
  }
  const next = css.replace(markerRe, block)
  if (next !== css) {
    writeFileSync(file, next)
    console.log(`✓ ${rel}`)
  } else {
    console.log(`= ${rel} (déjà à jour)`)
  }
  ok++
}

console.log(`\nThème « ${ACTIVE} » synchronisé sur ${ok}/${targets.length} surface(s).`)
