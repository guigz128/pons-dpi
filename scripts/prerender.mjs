#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')
const indexHtmlPath = path.join(dist, 'index.html')

if (!fs.existsSync(indexHtmlPath)) {
  console.error('[prerender] dist/index.html not found — run vite build first.')
  process.exit(1)
}

const SITE_URL = 'https://www.pons-dpi.fr'
const template = fs.readFileSync(indexHtmlPath, 'utf-8')

const services = [
  {
    slug: 'dpe',
    name: 'DPE',
    fullName: 'Diagnostic de Performance Énergétique',
    description: 'Consommation énergétique, émissions GES, classement A à G, recommandations de travaux.',
  },
  {
    slug: 'amiante',
    name: 'Amiante',
    fullName: "État d'amiante",
    description: "Repérage des matériaux et produits contenant de l'amiante : flocages, calorifuges, faux plafonds, dalles, canalisations.",
  },
  {
    slug: 'plomb',
    name: 'Plomb (CREP)',
    fullName: "Constat de Risque d'Exposition au Plomb",
    description: "Mesure de la concentration en plomb des revêtements (peintures), évaluation de l'état de conservation.",
  },
  {
    slug: 'electricite',
    name: 'Électricité',
    fullName: "État de l'installation intérieure d'électricité",
    description: "Sécurité de l'installation électrique : disjoncteur, mise à la terre, liaisons équipotentielles, protection des personnes.",
  },
  {
    slug: 'gaz',
    name: 'Gaz',
    fullName: "État de l'installation intérieure de gaz",
    description: "État de l'installation intérieure de gaz : tuyauterie, raccordements, ventilation, appareils de combustion.",
  },
  {
    slug: 'termites',
    name: 'Termites',
    fullName: 'État relatif à la présence de termites',
    description: 'Présence de termites et insectes xylophages dans les éléments en bois, les murs, les sols.',
  },
  {
    slug: 'erp',
    name: 'ERP',
    fullName: 'État des Risques et Pollutions',
    description: 'État des risques naturels, miniers, technologiques, sismiques, radon — selon arrêté préfectoral.',
  },
  {
    slug: 'mesurage-carrez',
    name: 'Mesurage Carrez',
    fullName: 'Mesurage loi Carrez',
    description: 'Surface privative du lot de copropriété selon la loi du 18 décembre 1996.',
  },
  {
    slug: 'audit-energetique',
    name: 'Audit énergétique',
    fullName: 'Audit énergétique réglementaire',
    description: 'Analyse approfondie des performances énergétiques, scénarios de travaux chiffrés, gains estimés.',
  },
  {
    slug: 'amiante-avant-travaux',
    name: 'Amiante avant travaux',
    fullName: 'Repérage amiante avant travaux',
    description: "Repérage exhaustif de tous les matériaux amiantés susceptibles d'être impactés par les travaux — obligation du maître d'ouvrage.",
  },
  {
    slug: 'amiante-avant-demolition',
    name: 'Amiante avant démolition',
    fullName: 'Repérage amiante avant démolition',
    description: "Repérage de l'ensemble des matériaux contenant de l'amiante avant démolition totale ou partielle.",
  },
  {
    slug: 'dpe-tertiaire',
    name: 'DPE tertiaire',
    fullName: 'DPE tertiaire',
    description: 'Bureaux, commerces, bâtiments publics — périmètre élargi grâce à la certification avec mention.',
  },
]

const routes = [
  {
    path: '/',
    title: 'Pons DPI — Diagnostics Immobiliers à Montpellier | DPE, Amiante, Plomb',
    description: 'Diagnostics immobiliers à Montpellier et environs. DPE, amiante, plomb, électricité, gaz, termites. Devis en ligne, intervention sous 48h. Certifié COFRAC.',
  },
  {
    path: '/services',
    title: 'Diagnostics immobiliers — Tous nos services | Pons DPI',
    description: 'DPE, amiante, plomb, électricité, gaz, termites, ERP, mesurage Carrez, audit énergétique. Tous les diagnostics immobiliers obligatoires à Montpellier.',
  },
  ...services.map((s) => ({
    path: `/services/${s.slug}`,
    title: `${s.name} à Montpellier — Diagnostic immobilier | Pons DPI`,
    description: `${s.fullName} à Montpellier. ${s.description} Devis en ligne, intervention sous 48h.`,
  })),
  {
    path: '/devis',
    title: 'Devis en ligne — Diagnostics immobiliers | Pons DPI',
    description: 'Obtenez votre devis en ligne en 2 minutes. Diagnostics immobiliers obligatoires calculés automatiquement selon votre bien. Prix transparents.',
  },
  {
    path: '/a-propos',
    title: 'À propos — Guillaume Pons, diagnostiqueur immobilier | Pons DPI',
    description: 'Guillaume Pons, diagnostiqueur immobilier certifié COFRAC à Montpellier. 8 certifications, DPE et amiante avec mention. Titre RNCP 38469.',
  },
  {
    path: '/contact',
    title: 'Contact — Diagnostics immobiliers Montpellier | Pons DPI',
    description: 'Contactez Pons DPI pour vos diagnostics immobiliers à Montpellier. Téléphone, email, WhatsApp. Réponse rapide garantie.',
  },
  {
    path: '/mentions-legales',
    title: 'Mentions légales | Pons DPI',
    description: 'Mentions légales du site pons-dpi.fr — Pons DPI, diagnostics immobiliers à Montpellier.',
  },
]

function escAttr(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function inject(html, { title, description, canonical }) {
  let out = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escHtml(title)}</title>`)

  const descTag = `<meta name="description" content="${escAttr(description)}" />`
  if (/<meta\s+name="description"[^>]*>/i.test(out)) {
    out = out.replace(/<meta\s+name="description"[^>]*>/i, descTag)
  } else {
    out = out.replace('</title>', `</title>\n    ${descTag}`)
  }

  const seoTags = [
    `<link rel="canonical" href="${escAttr(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${escAttr(canonical)}" />`,
    `<meta property="og:title" content="${escAttr(title)}" />`,
    `<meta property="og:description" content="${escAttr(description)}" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escAttr(title)}" />`,
    `<meta name="twitter:description" content="${escAttr(description)}" />`,
  ].map((t) => `    ${t}`).join('\n')

  out = out.replace('</head>', `${seoTags}\n  </head>`)
  return out
}

let count = 0
for (const route of routes) {
  const canonical = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`
  const html = inject(template, {
    title: route.title,
    description: route.description,
    canonical,
  })

  let outPath
  if (route.path === '/') {
    outPath = indexHtmlPath
  } else {
    const dir = path.join(dist, route.path)
    fs.mkdirSync(dir, { recursive: true })
    outPath = path.join(dir, 'index.html')
  }

  fs.writeFileSync(outPath, html, 'utf-8')
  count++
  console.log(`  ${route.path.padEnd(40)} → ${path.relative(root, outPath)}`)
}

console.log(`\n[prerender] ${count} routes generated.`)
