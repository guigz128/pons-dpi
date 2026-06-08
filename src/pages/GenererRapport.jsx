import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Search, Loader2, AlertCircle, Copy, Check, Sparkles } from 'lucide-react'
import RapportMission from '../components/rapport/RapportMission'
import { getDpeByNumero } from '../lib/ademe'
import { DIAGNOSTICIEN } from '../content/rapports'

// Outil interne (non indexé) : génère l'ossature d'un rapport à partir d'un
// numéro d'enregistrement DPE ADEME. La section énergie est auto-remplie avec
// les données officielles (coûts par poste + déperditions réelles).

export default function GenererRapport() {
  const [numero, setNumero] = useState('')
  const [state, setState] = useState('idle') // idle | loading | notfound | error | ok
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!numero.trim()) return
    setState('loading')
    setResult(null)
    try {
      const data = await getDpeByNumero(numero)
      if (!data) {
        setState('notfound')
        return
      }
      setResult(data)
      setState('ok')
    } catch (err) {
      console.error(err)
      setState('error')
    }
  }

  const previewData = result && {
    diagnostiqueur: DIAGNOSTICIEN,
    bien: result.bien,
    mission: { reference: 'APERÇU', intervention: '—', transaction: 'Vente' },
    dpe: result.dpe,
    findings: [],
    diagnostics: [],
    actionPlan: [],
    scenarios: [],
    documents: [],
  }

  const jsonOutput = result && JSON.stringify({ bien: result.bien, dpe: result.dpe }, null, 2)

  async function copyJson() {
    try {
      await navigator.clipboard.writeText(jsonOutput)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard indisponible */
    }
  }

  return (
    <>
      <Helmet>
        <title>Générateur de rapport | Pons DPI</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          <div className="mb-2 flex items-center gap-2 text-accent">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Outil interne</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl">Générateur de rapport</h1>
          <p className="mt-3 text-text-secondary">
            Saisis le numéro d'enregistrement ADEME d'un DPE. La section performance énergétique se
            remplit automatiquement avec les données officielles (coûts par poste, GES, déperditions
            réelles). Disponible pour les DPE postérieurs à juillet 2021.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Ex. 2634E0078521O"
                className="w-full rounded-md border border-border bg-bg py-3 pl-11 pr-4 font-mono text-sm uppercase tracking-wide outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <button
              type="submit"
              disabled={state === 'loading' || !numero.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
            >
              {state === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              Générer
            </button>
          </form>

          {state === 'notfound' && (
            <div className="mt-4 flex items-start gap-3 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
              <p>
                Aucun DPE trouvé pour ce numéro dans l'open data ADEME. Vérifie le numéro, ou note
                que les DPE antérieurs à juillet 2021 n'y figurent pas (saisie manuelle nécessaire).
              </p>
            </div>
          )}
          {state === 'error' && (
            <div className="mt-4 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-danger" />
              <p>Erreur lors de l'appel à l'API ADEME. Réessaie dans un instant.</p>
            </div>
          )}

          {state === 'ok' && (
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-semibold">Données générées (à coller dans rapports.js)</p>
                <button
                  type="button"
                  onClick={copyJson}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-text-secondary hover:text-text"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copié' : 'Copier le JSON'}
                </button>
              </div>
              <pre className="max-h-72 overflow-auto rounded-md border border-border bg-stone-900 p-4 text-xs leading-relaxed text-stone-100">
                {jsonOutput}
              </pre>
            </div>
          )}
        </div>
      </section>

      {/* Aperçu live du rapport (cover + section énergie auto-remplie) */}
      {previewData && (
        <div className="border-t-4 border-accent">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
              Aperçu — cover + performance énergétique auto-remplie
            </p>
          </div>
          <RapportMission data={previewData} />
        </div>
      )}
    </>
  )
}
