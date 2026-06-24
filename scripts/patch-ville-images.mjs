#!/usr/bin/env node
/**
 * Patche villes.js en insérant le bloc `image:` pour les communes sans image,
 * à partir des WebP déjà générés + scripts/.ville-images-report.json.
 * Gère le format guillemets DOUBLES des 42 communes récentes.
 */
import { villes } from '../src/content/villes.js'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const VILLES_FILE = join(ROOT, 'src/content/villes.js')
const IMG_DIR = join(ROOT, 'public/images/villes')
const report = JSON.parse(readFileSync(join(ROOT, 'scripts/.ville-images-report.json'), 'utf8'))
const bySlug = Object.fromEntries(report.map((r) => [r.slug, r]))

let src = readFileSync(VILLES_FILE, 'utf8')
let patched = 0
const skipped = []

for (const v of villes) {
  if (v.image && v.image.url) continue
  const r = bySlug[v.slug]
  if (!r || !r.fname) { skipped.push(v.slug + ' (pas de fname)'); continue }
  if (!existsSync(join(IMG_DIR, v.slug + '.webp'))) { skipped.push(v.slug + ' (webp manquant)'); continue }

  const fnameUrl = encodeURIComponent(r.fname).replace(/%20/g, '_')
  const attribution_url = `https://commons.wikimedia.org/wiki/File:${fnameUrl}`
  const credit = `Wikimedia Commons — ${r.license || 'CC BY-SA'}`
  const alt = `Vue de ${v.name}, ${v.departement}`
  // bloc en guillemets doubles (cohérent avec les entrées récentes)
  const block =
    `    image: {\n` +
    `      url: "/images/villes/${v.slug}.webp",\n` +
    `      alt: ${JSON.stringify(alt)},\n` +
    `      credit: ${JSON.stringify(credit)},\n` +
    `      attribution_url: ${JSON.stringify(attribution_url)},\n` +
    `    },`

  // ancre : ligne slug (simple OU double quote), puis 1re ligne region: qui suit
  const slugIdx = src.search(new RegExp(`slug:\\s*["']${v.slug.replace(/[-]/g, '\\-')}["']`))
  if (slugIdx === -1) { skipped.push(v.slug + ' (slug introuvable)'); continue }
  const regionRe = /\n(\s*)region:\s*["'][^"']*["'],\n/g
  regionRe.lastIndex = slugIdx
  const m = regionRe.exec(src)
  if (!m) { skipped.push(v.slug + ' (region introuvable)'); continue }
  const insertAt = m.index + m[0].length
  src = src.slice(0, insertAt) + '\n' + block + '\n' + src.slice(insertAt)
  // décale les recherches suivantes (on relit à chaque fois depuis le nouveau src)
  patched++
}

writeFileSync(VILLES_FILE, src)
console.log(`🩹 villes.js patché : ${patched} blocs image insérés.`)
if (skipped.length) console.log(`Ignorés (${skipped.length}) : ${skipped.join(', ')}`)
