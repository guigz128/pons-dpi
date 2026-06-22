// Vercel Serverless Function — réception des formulaires du site (contact + rappel devis).
// Envoie un email via l'API transactionnelle Brevo. La clé reste côté serveur (BREVO_API_KEY),
// jamais exposée au navigateur. Domaine pons-dpi.fr authentifié dans Brevo → DKIM aligné.

const OWNER_EMAIL = 'guillaume@pons-dpi.fr'
const SENDER = { name: 'Pons DPI — Site', email: 'guillaume@pons-dpi.fr' }

function escapeHtml(str = '') {
  return String(str).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ))
}

function safeParse(s) {
  try { return JSON.parse(s) } catch { return {} }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    console.error('BREVO_API_KEY manquante')
    return res.status(500).json({ error: 'Configuration serveur manquante' })
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {})
  const { type = 'contact', name, email, phone, message, honeypot } = body

  // Honeypot anti-spam : champ caché. Un bot le remplit → on simule un succès sans envoyer.
  if (honeypot) return res.status(200).json({ ok: true })

  if (!name || (!phone && !email)) {
    return res.status(400).json({ error: 'Champs requis manquants' })
  }

  const isDevis = type === 'devis_callback'
  const subject = isDevis
    ? `Demande de rappel — Devis ${body.total ?? ''} € — ${name}`
    : `Contact via pons-dpi.fr — ${name}`

  const lines = [
    `Nom : ${name}`,
    email ? `Email : ${email}` : null,
    phone ? `Téléphone : ${phone}` : null,
    isDevis ? `Créneau préféré : ${body.slot || 'Pas de préférence'}` : null,
    isDevis && body.diagnostics ? `\nDiagnostics demandés :\n${body.diagnostics}` : null,
    isDevis && body.total != null ? `\nTotal estimé : ${body.total} €` : null,
    message ? `\nMessage :\n${message}` : null,
  ].filter(Boolean)

  const textContent = lines.join('\n')
  const htmlContent =
    '<div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;line-height:1.6;color:#1C1917">'
    + lines.map((l) => escapeHtml(l).replace(/\n/g, '<br>')).join('<br>')
    + '</div>'

  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: SENDER,
        to: [{ email: OWNER_EMAIL }],
        ...(email ? { replyTo: { email, name } } : {}),
        subject,
        textContent,
        htmlContent,
        tags: [isDevis ? 'devis-callback' : 'contact'],
      }),
    })

    if (!r.ok) {
      const detail = await r.text().catch(() => '')
      console.error('Brevo error', r.status, detail)
      return res.status(502).json({ error: "L'envoi a échoué, réessayez ou appelez-nous." })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('contact handler error', err)
    return res.status(500).json({ error: "Erreur d'envoi, réessayez plus tard." })
  }
}
