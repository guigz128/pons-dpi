import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Search,
  Loader2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  Plus,
  Trash2,
  Download,
} from 'lucide-react'
import RapportMission from '../components/rapport/RapportMission'
import { getDpeByNumero } from '../lib/ademe'
import { DIAGNOSTICIEN } from '../content/rapports'

// Outil interne (noindex) : génère un rapport de mission complet.
// La section énergie est auto-remplie depuis un n° ADEME ; les autres
// diagnostics sont saisis à la main. Sortie : JSON à coller dans rapports.js.

const DIAG_CATALOG = [
  { key: 'amiante', name: 'Amiante — Constat avant vente', validity: 'Illimité' },
  { key: 'electricite', name: "Électricité — État de l'installation", validity: '3 ans' },
  { key: 'gaz', name: "Gaz — État de l'installation intérieure", validity: '3 ans' },
  { key: 'termites', name: 'Termites — État relatif à la présence', validity: '6 mois' },
  { key: 'erp', name: 'ERP — État des risques et pollutions', validity: '6 mois' },
  { key: 'plomb', name: 'Plomb — CREP', validity: 'Illimité si négatif' },
  { key: 'carrez', name: 'Mesurage Loi Carrez', validity: 'Illimité sauf travaux' },
]

const STATUT_OPTIONS = [
  { id: 'success', label: 'Conforme / négatif' },
  { id: 'warning', label: 'Anomalies / attention' },
  { id: 'danger', label: 'Critique' },
  { id: 'neutral', label: 'Non applicable' },
]

const LABEL_SHORT = {
  dpe: 'Performance énergétique',
  amiante: 'Amiante',
  electricite: 'Électricité',
  gaz: 'Gaz',
  termites: 'Termites',
  erp: 'Risques (ERP)',
  plomb: 'Plomb (CREP)',
  carrez: 'Mesurage Carrez',
}

const dpeStatus = (l) => (['A', 'B', 'C'].includes(l) ? 'success' : ['D', 'E'].includes(l) ? 'warning' : 'danger')

function formatDate(iso) {
  if (!iso) return null
  const [y, m, d] = iso.split('-')
  return d && m && y ? `${d}/${m}/${y}` : iso
}

const emptyDiag = (cat) => ({
  uid: `${cat.key}-${Math.round(performance.now() * 1000)}`,
  key: cat.key,
  name: cat.name,
  statut: 'success',
  statusLabel: '',
  summary: '',
  keyPointsText: '',
  validity: cat.validity,
})

const inputCls =
  'w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20'
const labelCls = 'mb-1 block text-xs font-semibold uppercase tracking-wide text-text-secondary'

export default function GenererRapport() {
  const [numero, setNumero] = useState('')
  const [state, setState] = useState('idle') // idle | loading | notfound | error | ok
  const [ademe, setAdeme] = useState(null)
  const [copied, setCopied] = useState(false)

  const [bien, setBien] = useState(null)
  const [mission, setMission] = useState({
    reference: '',
    intervention: '',
    duration: '',
    transaction: 'Vente',
  })
  const [diagnostics, setDiagnostics] = useState([])
  const [addKey, setAddKey] = useState('amiante')

  async function handleFetch(e) {
    e.preventDefault()
    if (!numero.trim()) return
    setState('loading')
    try {
      const data = await getDpeByNumero(numero)
      if (!data) {
        setState('notfound')
        return
      }
      setAdeme(data)
      setBien({ ...data.bien, rooms: data.bien.rooms || '', parcelle: '' })
      setState('ok')
    } catch (err) {
      console.error(err)
      setState('error')
    }
  }

  function addDiagnostic() {
    const cat = DIAG_CATALOG.find((c) => c.key === addKey)
    if (cat) setDiagnostics((d) => [...d, emptyDiag(cat)])
  }
  function updateDiag(uid, patch) {
    setDiagnostics((d) => d.map((x) => (x.uid === uid ? { ...x, ...patch } : x)))
  }
  function removeDiag(uid) {
    setDiagnostics((d) => d.filter((x) => x.uid !== uid))
  }

  // Assemble l'objet rapport complet à partir du formulaire
  const data = useMemo(() => {
    if (!ademe) return null
    const dpe = ademe.dpe

    const dpeDiag = {
      key: 'dpe',
      name: 'DPE — Diagnostic de performance énergétique',
      validity: ademe.validity ? `Valable jusqu'au ${formatDate(ademe.validity)}` : '10 ans',
      status: dpeStatus(dpe.etiquette),
      statusLabel: `Classe ${dpe.etiquette}`,
      summary: `Énergie primaire ${dpe.consoEP} kWh/m²/an (classe ${dpe.etiquette})${
        dpe.ges ? `, émissions GES ${dpe.gesValue} kg CO₂/m²/an (classe ${dpe.ges})` : ''
      }.`,
      keyPoints: [
        `Énergie primaire : ${dpe.consoEP} kWh/m²/an — classe ${dpe.etiquette}`,
        dpe.ges && `Émissions GES : ${dpe.gesValue} kg CO₂/m²/an — classe ${dpe.ges}`,
      ].filter(Boolean),
    }

    const userDiags = diagnostics.map((d) => ({
      key: d.key,
      name: d.name,
      validity: d.validity,
      status: d.statut,
      statusLabel: d.statusLabel || LABEL_SHORT[d.key] || d.key,
      summary: d.summary,
      keyPoints: d.keyPointsText.split('\n').map((s) => s.trim()).filter(Boolean),
    }))

    const allDiags = [dpeDiag, ...userDiags]

    const findings = allDiags.map((d) => ({
      key: d.key,
      label: LABEL_SHORT[d.key] || d.name,
      value: d.statusLabel,
      status: d.status,
      detail: d.keyPoints[0] || d.summary || '',
    }))

    return {
      diagnostiqueur: DIAGNOSTICIEN,
      bien: {
        type: bien.type,
        surface: bien.surface ? Number(bien.surface) : null,
        rooms: bien.rooms ? Number(bien.rooms) : null,
        year: bien.year ? Number(bien.year) : null,
        address: bien.address,
        ...(bien.parcelle ? { parcelle: bien.parcelle } : {}),
      },
      mission: {
        reference: mission.reference || 'PD-2026-XXXX',
        intervention: mission.intervention || '—',
        ...(mission.duration ? { duration: mission.duration } : {}),
        transaction: mission.transaction,
      },
      dpe,
      findings,
      diagnostics: allDiags,
      scenarios: [],
      actionPlan: [],
      documents: [],
    }
  }, [ademe, bien, mission, diagnostics])

  const jsonOutput = data && JSON.stringify(data, null, 2)

  async function copyJson() {
    try {
      await navigator.clipboard.writeText(jsonOutput)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard indisponible */
    }
  }

  function downloadJson() {
    const blob = new Blob([jsonOutput], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `rapport-${mission.reference || 'sans-ref'}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <Helmet>
        <title>Builder de rapport | Pons DPI</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          <div className="mb-2 flex items-center gap-2 text-accent">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Outil interne</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl">Builder de rapport</h1>
          <p className="mt-3 text-text-secondary">
            1. Saisis le n° ADEME du DPE (la performance énergétique se remplit automatiquement).
            2. Complète bien, mission et diagnostics. 3. Exporte le JSON à coller dans{' '}
            <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">rapports.js</code>.
          </p>

          {/* 1. ADEME */}
          <form onSubmit={handleFetch} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="N° ADEME — ex. 2634E0078521O"
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
              Charger le DPE
            </button>
          </form>

          {state === 'notfound' && (
            <div className="mt-4 flex items-start gap-3 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
              <p>
                Aucun DPE trouvé pour ce numéro. Les DPE antérieurs à juillet 2021 ne figurent pas
                dans l'open data ADEME (saisie manuelle nécessaire).
              </p>
            </div>
          )}
          {state === 'error' && (
            <div className="mt-4 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-danger" />
              <p>Erreur lors de l'appel à l'API ADEME. Réessaie dans un instant.</p>
            </div>
          )}

          {/* 2. Formulaire */}
          {ademe && bien && (
            <div className="mt-10 space-y-8">
              {/* Bien */}
              <fieldset>
                <legend className="mb-4 font-display text-lg">Le bien</legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>Type</label>
                    <input
                      className={inputCls}
                      value={bien.type || ''}
                      onChange={(e) => setBien({ ...bien, type: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Adresse</label>
                    <input
                      className={inputCls}
                      value={bien.address || ''}
                      onChange={(e) => setBien({ ...bien, address: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3 sm:col-span-2">
                    <div>
                      <label className={labelCls}>Surface m²</label>
                      <input
                        className={inputCls}
                        value={bien.surface || ''}
                        onChange={(e) => setBien({ ...bien, surface: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={labelCls}>Pièces</label>
                      <input
                        className={inputCls}
                        value={bien.rooms || ''}
                        onChange={(e) => setBien({ ...bien, rooms: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={labelCls}>Année</label>
                      <input
                        className={inputCls}
                        value={bien.year || ''}
                        onChange={(e) => setBien({ ...bien, year: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Parcelle cadastrale (optionnel)</label>
                    <input
                      className={inputCls}
                      placeholder="Section AT — parcelle 107"
                      value={bien.parcelle || ''}
                      onChange={(e) => setBien({ ...bien, parcelle: e.target.value })}
                    />
                  </div>
                </div>
              </fieldset>

              {/* Mission */}
              <fieldset>
                <legend className="mb-4 font-display text-lg">La mission</legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>Référence</label>
                    <input
                      className={inputCls}
                      placeholder="PD-2026-0087"
                      value={mission.reference}
                      onChange={(e) => setMission({ ...mission, reference: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Date d'intervention</label>
                    <input
                      className={inputCls}
                      placeholder="14 avril 2026"
                      value={mission.intervention}
                      onChange={(e) => setMission({ ...mission, intervention: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Durée (optionnel)</label>
                    <input
                      className={inputCls}
                      placeholder="3h30"
                      value={mission.duration}
                      onChange={(e) => setMission({ ...mission, duration: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Transaction</label>
                    <select
                      className={inputCls}
                      value={mission.transaction}
                      onChange={(e) => setMission({ ...mission, transaction: e.target.value })}
                    >
                      <option>Vente</option>
                      <option>Location</option>
                      <option>Avant travaux</option>
                      <option>Avant démolition</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              {/* Diagnostics */}
              <fieldset>
                <legend className="mb-1 font-display text-lg">Diagnostics</legend>
                <p className="mb-4 text-sm text-text-secondary">
                  Le DPE est déjà inclus automatiquement. Ajoute les autres diagnostics réalisés.
                </p>

                <div className="space-y-4">
                  {diagnostics.map((d) => (
                    <div key={d.uid} className="rounded-lg border border-border bg-stone-50 p-4">
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <input
                          className={`${inputCls} font-semibold`}
                          value={d.name}
                          onChange={(e) => updateDiag(d.uid, { name: e.target.value })}
                        />
                        <button
                          type="button"
                          onClick={() => removeDiag(d.uid)}
                          className="shrink-0 rounded-md p-2 text-text-secondary hover:bg-red-50 hover:text-danger"
                          aria-label="Supprimer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div>
                          <label className={labelCls}>Statut</label>
                          <select
                            className={inputCls}
                            value={d.statut}
                            onChange={(e) => updateDiag(d.uid, { statut: e.target.value })}
                          >
                            {STATUT_OPTIONS.map((o) => (
                              <option key={o.id} value={o.id}>
                                {o.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className={labelCls}>Libellé statut</label>
                          <input
                            className={inputCls}
                            placeholder="Conforme / Présence / 2 anomalies…"
                            value={d.statusLabel}
                            onChange={(e) => updateDiag(d.uid, { statusLabel: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className={labelCls}>Validité</label>
                          <input
                            className={inputCls}
                            value={d.validity}
                            onChange={(e) => updateDiag(d.uid, { validity: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="mt-3">
                        <label className={labelCls}>Synthèse (1-2 phrases)</label>
                        <textarea
                          className={inputCls}
                          rows={2}
                          value={d.summary}
                          onChange={(e) => updateDiag(d.uid, { summary: e.target.value })}
                        />
                      </div>
                      <div className="mt-3">
                        <label className={labelCls}>Points clés (un par ligne)</label>
                        <textarea
                          className={inputCls}
                          rows={3}
                          placeholder={'Anomalie A2 relevée\nVentilation conforme'}
                          value={d.keyPointsText}
                          onChange={(e) => updateDiag(d.uid, { keyPointsText: e.target.value })}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <select
                    className={inputCls}
                    value={addKey}
                    onChange={(e) => setAddKey(e.target.value)}
                  >
                    {DIAG_CATALOG.map((c) => (
                      <option key={c.key} value={c.key}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={addDiagnostic}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-text hover:border-accent hover:text-accent"
                  >
                    <Plus className="h-4 w-4" />
                    Ajouter
                  </button>
                </div>
              </fieldset>

              {/* Export */}
              <div className="rounded-lg border border-border bg-stone-50 p-4">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold">JSON du rapport</p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={copyJson}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-text-secondary hover:text-text"
                    >
                      {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
                      {copied ? 'Copié' : 'Copier'}
                    </button>
                    <button
                      type="button"
                      onClick={downloadJson}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-text-secondary hover:text-text"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Télécharger
                    </button>
                  </div>
                </div>
                <pre className="max-h-72 overflow-auto rounded-md border border-border bg-stone-900 p-4 text-xs leading-relaxed text-stone-100">
                  {jsonOutput}
                </pre>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Aperçu live */}
      {data && (
        <div className="border-t-4 border-accent">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
              Aperçu live du rapport
            </p>
          </div>
          <RapportMission data={data} />
        </div>
      )}
    </>
  )
}
