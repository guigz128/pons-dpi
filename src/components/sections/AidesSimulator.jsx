import { useState } from 'react'
import { Sparkles, Loader2, AlertCircle, ArrowUpRight, MessageCircle, Info } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import ScrollReveal from '../ui/ScrollReveal'

const API_BASE = 'https://mesaides.france-renov.gouv.fr/api/v1'
const INSEE_MONTPELLIER = '34172'

const DPE_ACTUEL_OPTIONS = [
  { value: '7', label: 'G — passoire thermique' },
  { value: '6', label: 'F — passoire thermique' },
  { value: '5', label: 'E' },
]

const DPE_VISE_OPTIONS = [
  { value: '2', label: 'B (rénovation lourde)' },
  { value: '3', label: 'C (rénovation ambitieuse)' },
  { value: '4', label: 'D (saut de 2 classes minimum)' },
]

const TRAVAUX_OPTIONS = [
  { value: 25000, label: '20 000 € à 30 000 €' },
  { value: 45000, label: '30 000 € à 60 000 €' },
  { value: 80000, label: '60 000 € à 100 000 €' },
]

function formatEuros(amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return '—'
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount)
}

async function fetchAides({ dpeActuel, dpeVise, personnes, revenu, travaux }) {
  const situation = {
    'ménage . personnes': Number(personnes),
    'ménage . revenu': Number(revenu),
    'ménage . commune': `"${INSEE_MONTPELLIER}"`,
    'logement . commune': `"${INSEE_MONTPELLIER}"`,
    'logement . type': '"maison"',
    'logement . propriétaire occupant': 'oui',
    'logement . résidence principale propriétaire': 'oui',
    'logement . période de construction': '"au moins 15 ans"',
    'DPE . actuel': Number(dpeActuel),
    'projet . DPE visé': Number(dpeVise),
    'projet . travaux': Number(travaux),
    'vous . propriétaire . statut': '"propriétaire"',
    "parcours d'aide": '"accompagné"',
  }

  const url = `${API_BASE}?fields=${encodeURIComponent('MPR.accompagnée.montant')}`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(situation),
  })
  if (!res.ok) throw new Error(`API ${res.status}`)
  return res.json()
}

export default function AidesSimulator() {
  const [dpeActuel, setDpeActuel] = useState('6')
  const [dpeVise, setDpeVise] = useState('3')
  const [personnes, setPersonnes] = useState('2')
  const [revenu, setRevenu] = useState('')
  const [travaux, setTravaux] = useState(45000)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setResult(null)

    const revenuNum = Number(revenu)
    if (!revenu || Number.isNaN(revenuNum) || revenuNum <= 0) {
      setError('Merci de saisir un revenu fiscal valide.')
      return
    }

    setLoading(true)
    try {
      const data = await fetchAides({
        dpeActuel,
        dpeVise,
        personnes,
        revenu: revenuNum,
        travaux,
      })
      const entry = data['MPR.accompagnée.montant']
      const rawValue = entry && typeof entry === 'object' ? entry.rawValue : null
      const missing = entry && Array.isArray(entry.missingVariables) ? entry.missingVariables : []
      setResult({
        montant: typeof rawValue === 'number' ? rawValue : null,
        missing,
        raw: data,
      })
    } catch (err) {
      setError(
        "Impossible de récupérer l'estimation pour le moment. Réessayez dans quelques instants.",
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
              Simulateur officiel — données France Rénov' (ANAH)
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-text">
              Estimez vos aides MaPrimeRénov' Accompagnée
            </h2>
            <p className="mt-3 text-text-secondary">
              Avant ou après l'audit énergétique, simulez en 30 secondes le montant que
              vous pouvez toucher pour vos travaux de rénovation. Calcul en direct via
              l'API publique de France Rénov'.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="DPE actuel">
                <Select value={dpeActuel} onChange={(e) => setDpeActuel(e.target.value)}>
                  {DPE_ACTUEL_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </Select>
              </Field>

              <Field label="DPE visé après travaux">
                <Select value={dpeVise} onChange={(e) => setDpeVise(e.target.value)}>
                  {DPE_VISE_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </Select>
              </Field>

              <Field label="Personnes au foyer">
                <Select value={personnes} onChange={(e) => setPersonnes(e.target.value)}>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n === 6 ? '6 et plus' : n}</option>
                  ))}
                </Select>
              </Field>

              <Field label="Revenu fiscal de référence (annuel)">
                <input
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="500"
                  value={revenu}
                  onChange={(e) => setRevenu(e.target.value)}
                  placeholder="ex : 35000"
                  className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-text placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  required
                />
              </Field>

              <Field label="Budget travaux estimé" className="sm:col-span-2">
                <Select value={travaux} onChange={(e) => setTravaux(Number(e.target.value))}>
                  {TRAVAUX_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </Select>
                <p className="mt-1.5 text-xs text-text-secondary">
                  Ordre de grandeur. L'audit énergétique précisera le budget exact selon vos travaux.
                </p>
              </Field>

              <div className="sm:col-span-2 mt-2">
                <Button type="submit" disabled={loading} size="lg" className="w-full">
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Calcul en cours…
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      Estimer mes aides
                    </>
                  )}
                </Button>
              </div>
            </form>

            {error && (
              <div className="mt-5 flex items-start gap-2 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {result && (
              <div className="mt-6 rounded-md border-l-4 border-accent bg-accent-light/40 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text-secondary">
                      Estimation MaPrimeRénov' Accompagnée
                    </p>
                    <p className="font-display text-3xl sm:text-4xl text-text mt-1">
                      {result.montant !== null
                        ? `jusqu'à ${formatEuros(result.montant)}`
                        : 'Estimation indisponible'}
                    </p>
                    {result.montant !== null && (
                      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                        Montant indicatif pour un parcours accompagné avec un saut de
                        2 classes DPE minimum. L'audit énergétique est obligatoire pour
                        débloquer cette aide.
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button
                        href={`https://wa.me/33651669161?text=${encodeURIComponent(
                          `Bonjour, j'ai simulé mes aides MaPrimeRénov' sur votre site (estimation : ${
                            result.montant !== null ? formatEuros(result.montant) : 'à préciser'
                          }). Je souhaite démarrer par un audit énergétique.`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="md"
                      >
                        <MessageCircle className="h-4 w-4 text-whatsapp" />
                        Démarrer mon audit
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                      <Button href="tel:0651669161" variant="outline" size="md">
                        06 51 66 91 61
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 flex items-start gap-2 text-xs text-text-secondary">
              <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" />
              <p className="leading-relaxed">
                Estimation à titre indicatif basée sur le simulateur officiel{' '}
                <a
                  href="https://mesaidesreno.beta.gouv.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-text"
                >
                  Mes Aides Réno (ANAH)
                </a>
                . Calcul réalisé pour une maison individuelle, résidence principale,
                propriétaire occupant, sur la commune de Montpellier. Le montant définitif
                dépend de votre dossier complet.
              </p>
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Badge>Aide cumulable avec l'Éco-PTZ</Badge>
            <Badge>CEE cumulables</Badge>
            <Badge>TVA à 5,5 %</Badge>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-medium text-text mb-1.5">{label}</span>
      {children}
    </label>
  )
}

function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
    >
      {children}
    </select>
  )
}
