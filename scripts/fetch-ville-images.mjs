#!/usr/bin/env node
/**
 * Récupère une photo représentative pour chaque commune sans image,
 * depuis Wikipédia FR (prop=pageimages), la convertit en WebP et patche villes.js.
 *
 * Usage :
 *   node scripts/fetch-ville-images.mjs                 # toutes les communes sans image
 *   node scripts/fetch-ville-images.mjs --only=meze,gignac
 *   node scripts/fetch-ville-images.mjs --no-patch      # télécharge + convertit, ne touche pas villes.js
 *   node scripts/fetch-ville-images.mjs --dry-run       # affiche ce qui serait fait, ne télécharge rien
 */
import { villes } from '../src/content/villes.js'
import { execFileSync } from 'node:child_process'
import { writeFileSync, readFileSync, mkdtempSync, existsSync, mkdirSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const IMG_DIR = join(ROOT, 'public/images/villes')
const VILLES_FILE = join(ROOT, 'src/content/villes.js')
const UA = 'PonsDPI-ImageFetcher/1.0 (https://pons-dpi.fr; contact@pons-dpi.fr)'

const args = process.argv.slice(2)
const only = (args.find((a) => a.startsWith('--only=')) || '').replace('--only=', '').split(',').filter(Boolean)
const noPatch = args.includes('--no-patch')
const dryRun = args.includes('--dry-run')

const REJECT = /(blason|armoiries|coat[_ ]of[_ ]arms|logo|drapeau|flag|\.svg$|carte|map|localisation|location_map|\.ogg$|\.pdf$)/i

const api = (params) =>
  'https://fr.wikipedia.org/w/api.php?' +
  new URLSearchParams({ format: 'json', formatversion: '2', ...params }).toString()

const getJSON = async (url) => {
  const r = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!r.ok) throw new Error(`HTTP ${r.status} ${url}`)
  return r.json()
}

const stripHtml = (s) => (s || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()

// Résout l'article + image principale (essaie "Nom (Département)" puis "Nom")
async function resolvePageImage(v) {
  const candidates = [`${v.name} (${v.departement})`, v.name]
  for (const title of candidates) {
    const d = await getJSON(api({ action: 'query', redirects: '1', prop: 'pageimages|coordinates', piprop: 'original', titles: title }))
    const p = d?.query?.pages?.[0]
    if (!p || p.missing) continue
    const src = p.original?.source
    if (!src) continue
    const fname = decodeURIComponent(src.split('/').pop())
    if (REJECT.test(fname)) {
      // image principale = blason/carte → on cherche dans la liste des images de l'article
      const alt = await firstGoodImageFromArticle(p.title)
      if (alt) return { title: p.title, ...alt, hasCoords: !!p.coordinates }
      continue
    }
    return { title: p.title, source: src, fname, hasCoords: !!p.coordinates }
  }
  return null
}

async function firstGoodImageFromArticle(title) {
  const d = await getJSON(api({ action: 'query', prop: 'images', imlimit: '50', titles: title }))
  const imgs = (d?.query?.pages?.[0]?.images || []).map((i) => i.title).filter((t) => !REJECT.test(t) && /\.(jpe?g|png)$/i.test(t))
  if (!imgs.length) return null
  const info = await getJSON(api({ action: 'query', titles: imgs[0], prop: 'imageinfo', iiprop: 'url' }))
  const ii = info?.query?.pages?.[0]?.imageinfo?.[0]
  if (!ii?.url) return null
  return { source: ii.url, fname: decodeURIComponent(ii.url.split('/').pop()) }
}

// Attribution (licence + auteur) via Commons
async function getAttribution(fname) {
  try {
    const url =
      'https://commons.wikimedia.org/w/api.php?' +
      new URLSearchParams({
        format: 'json', formatversion: '2', action: 'query',
        titles: `File:${fname}`, prop: 'imageinfo', iiprop: 'extmetadata',
      }).toString()
    const d = await getJSON(url)
    const m = d?.query?.pages?.[0]?.imageinfo?.[0]?.extmetadata || {}
    const license = stripHtml(m.LicenseShortName?.value) || 'CC BY-SA'
    const artist = stripHtml(m.Artist?.value)
    return { license, artist }
  } catch {
    return { license: 'CC BY-SA', artist: '' }
  }
}

const todo = villes.filter((v) => (!v.image || !v.image.url) && (!only.length || only.includes(v.slug)))

console.log(`Communes à traiter : ${todo.length}${only.length ? ' (filtre --only)' : ''}\n`)
if (!dryRun && !existsSync(IMG_DIR)) mkdirSync(IMG_DIR, { recursive: true })

const tmp = mkdtempSync(join(tmpdir(), 'villeimg-'))
const report = []
const blocks = {}

for (const v of todo) {
  process.stdout.write(`• ${v.name} (${v.slug})… `)
  try {
    const pick = await resolvePageImage(v)
    if (!pick) { console.log('AUCUNE IMAGE'); report.push({ slug: v.slug, status: 'no-image' }); continue }
    const attr = await getAttribution(pick.fname)
    const attribution_url = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(pick.fname).replace(/%20/g, '_')}`
    const credit = `Wikimedia Commons — ${attr.license}`
    const alt = `Vue de ${v.name}, ${v.departement}`

    if (dryRun) {
      console.log(`→ ${pick.fname} [${attr.license}]${pick.hasCoords === false ? ' ⚠️ sans coords' : ''}`)
      report.push({ slug: v.slug, title: pick.title, fname: pick.fname, license: attr.license, hasCoords: pick.hasCoords })
      continue
    }

    // download
    const ext = (pick.fname.match(/\.(jpe?g|png)$/i) || ['.jpg'])[0].toLowerCase()
    const raw = join(tmp, v.slug + ext)
    const buf = Buffer.from(await (await fetch(pick.source, { headers: { 'User-Agent': UA } })).arrayBuffer())
    writeFileSync(raw, buf)
    // convert → webp 1600px q80
    const out = join(IMG_DIR, `${v.slug}.webp`)
    execFileSync('cwebp', ['-q', '80', '-resize', '1600', '0', '-quiet', raw, '-o', out])

    blocks[v.slug] = `    image: {\n      url: '/images/villes/${v.slug}.webp',\n      alt: '${alt.replace(/'/g, "\\'")}',\n      credit: '${credit.replace(/'/g, "\\'")}',\n      attribution_url: '${attribution_url}',\n    },`
    report.push({ slug: v.slug, title: pick.title, fname: pick.fname, license: attr.license, artist: attr.artist, hasCoords: pick.hasCoords })
    console.log(`✓ ${pick.fname} [${attr.license}]${pick.hasCoords === false ? ' ⚠️ sans coords (à vérifier)' : ''}`)
  } catch (e) {
    console.log(`ERREUR : ${e.message}`)
    report.push({ slug: v.slug, status: 'error', error: e.message })
  }
}

// patch villes.js : insère le bloc image après la ligne "region: '...'," de chaque commune
if (!dryRun && !noPatch && Object.keys(blocks).length) {
  let src = readFileSync(VILLES_FILE, 'utf8')
  let patched = 0
  for (const [slug, block] of Object.entries(blocks)) {
    // ancre : la ligne slug, puis la 1re ligne region: qui suit
    const slugIdx = src.indexOf(`slug: '${slug}',`)
    if (slugIdx === -1) { console.log(`  ⚠️ patch: slug ${slug} introuvable`); continue }
    const regionRe = /\n(\s*)region: '[^']*',\n/g
    regionRe.lastIndex = slugIdx
    const m = regionRe.exec(src)
    if (!m) { console.log(`  ⚠️ patch: region introuvable pour ${slug}`); continue }
    const insertAt = m.index + m[0].length
    src = src.slice(0, insertAt) + '\n' + block + '\n' + src.slice(insertAt)
    patched++
  }
  writeFileSync(VILLES_FILE, src)
  console.log(`\n🩹 villes.js patché : ${patched} blocs image insérés.`)
}

writeFileSync(join(ROOT, 'scripts/.ville-images-report.json'), JSON.stringify(report, null, 2))
const ok = report.filter((r) => r.fname).length
console.log(`\nRésumé : ${ok}/${todo.length} images récupérées. Rapport : scripts/.ville-images-report.json`)
