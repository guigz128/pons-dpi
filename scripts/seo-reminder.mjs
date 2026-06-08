#!/usr/bin/env node
/**
 * seo-reminder.mjs — Rappel email : état d'indexation pons-dpi.
 *
 * Lance `cf.sh crawl --from-sitemap` (URL Inspection API) et envoie un email
 * Resend récapitulant les URLs encore non indexées. Pensé pour un contrôle
 * post-ping (communes + articles boostés).
 *
 * Secrets : lit RESEND_API_KEY dans content-factory/.env (override CF_ROOT).
 * Destinataire : EMAIL_TO (défaut mizirlou@gmail.com).
 *
 * Usage :  node scripts/seo-reminder.mjs           (check + email)
 *          node scripts/seo-reminder.mjs --dry      (check + affiche, pas d'email)
 */
import { readFileSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { homedir } from 'node:os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO = join(__dirname, '..')
const CF_ROOT = process.env.CF_ROOT || join(homedir(), 'Desktop/Guillaume/Claude/Sites/content-factory')
const DRY = process.argv.includes('--dry')

// ── Secrets depuis content-factory/.env ───────────────────────────
function loadEnv(file) {
  const env = {}
  if (existsSync(file)) {
    for (const line of readFileSync(file, 'utf-8').split('\n')) {
      const m = line.match(/^([^#=]+)=(.*)$/)
      if (m) env[m[1].trim()] = m[2].trim()
    }
  }
  return env
}
const cfEnv = loadEnv(join(CF_ROOT, '.env'))
const RESEND_API_KEY = process.env.RESEND_API_KEY || cfEnv.RESEND_API_KEY
const EMAIL_TO = process.env.EMAIL_TO || cfEnv.EMAIL_TO || 'mizirlou@gmail.com'
const EMAIL_FROM = process.env.EMAIL_FROM || cfEnv.EMAIL_FROM || 'onboarding@resend.dev'

// ── Check indexation via le pont cf.sh ────────────────────────────
console.log('▶ Check indexation pons-dpi (URL Inspection)…')
let out = ''
try {
  out = execSync('bash scripts/cf.sh crawl --from-sitemap', {
    cwd: REPO, encoding: 'utf-8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 10 * 1024 * 1024,
  })
} catch (e) {
  out = (e.stdout || '') + (e.stderr || '')
}
process.stdout.write(out)

// Récap : lignes signalant des URLs non indexées (le script crawl les marque).
const lines = out.split('\n')
const summary = lines
  .filter((l) => /non index|ne reconnaît|❌|⚠️|indexées|Indexées|verdict/i.test(l))
  .slice(0, 40)
  .join('\n')

const html = `
  <div style="font-family:system-ui,sans-serif;max-width:640px">
    <h2 style="color:#0369A1">Pons DPI — contrôle d'indexation (J+48h)</h2>
    <p>Rappel automatique après les pings Indexing API (communes non indexées + articles boostés).</p>
    <p><strong>À vérifier :</strong></p>
    <ul>
      <li>Les 9 communes pingées (#2) sont-elles passées « indexées » ?</li>
      <li>Les 3 articles maillés (#5) ont-ils été recrawlés ?</li>
    </ul>
    <pre style="background:#F1F5F9;padding:14px;border-radius:8px;font-size:12px;white-space:pre-wrap">${summary || 'Voir la sortie console / le rapport crawl-status.json'}</pre>
    <p style="font-size:13px;color:#64748B">Relancer à la main :<br>
      <code>bash scripts/cf.sh crawl --from-sitemap</code><br>
      <code>bash scripts/cf.sh queries --days 30</code>
    </p>
    <p style="font-size:12px;color:#94A3B8">Email auto — scripts/seo-reminder.mjs</p>
  </div>`

if (DRY) {
  console.log('\n[dry] Email non envoyé. Destinataire prévu :', EMAIL_TO)
  process.exit(0)
}
if (!RESEND_API_KEY) {
  console.error('❌ RESEND_API_KEY introuvable (content-factory/.env). Email non envoyé.')
  process.exit(1)
}

const r = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    from: EMAIL_FROM,
    to: [EMAIL_TO],
    subject: 'Pons DPI — contrôle indexation (J+48h)',
    html,
  }),
})
if (!r.ok) {
  console.error('❌ Email Resend échoué :', r.status, await r.text())
  process.exit(1)
}
console.log(`✅ Email envoyé à ${EMAIL_TO}`)
