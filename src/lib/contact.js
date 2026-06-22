// Envoi des formulaires du site vers la fonction serverless /api/contact (relai Brevo).
// Même origine → couvert par la CSP connect-src 'self'. Aucune clé exposée côté client.
export async function sendContactForm(payload) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  let data = {}
  try {
    data = await res.json()
  } catch {
    // réponse non-JSON (ex. erreur infra) → message générique ci-dessous
  }

  if (!res.ok) {
    throw new Error(data.error || "L'envoi a échoué. Réessayez.")
  }
  return data
}
