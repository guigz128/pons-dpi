import { useState } from 'react'
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import DevisStep1 from './DevisStep1'
import DevisStep2 from './DevisStep2'
import DevisStep3 from './DevisStep3'
import DevisResult from './DevisResult'
import { getDiagnosticsObligatoires } from './devisLogic'
import { fetchRisques } from '../../lib/georisques'
import { capture } from '../../lib/posthog'
import { calculateTotal } from './devisPricing'
import Button from '../ui/Button'

const STEP_LABELS = [
  'Type de bien',
  'Caractéristiques',
  'Localisation',
  'Résultat',
]

const INITIAL = {
  typeBien: '',
  transaction: '',
  surface: '',
  annee: null,
  copro: null,
  codePostal: '',
  adresse: '',
  inseeCode: '',
  lat: null,
  lon: null,
  hasGaz: null,
}

export default function DevisForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(INITIAL)
  const [diagnostics, setDiagnostics] = useState([])
  const [risques, setRisques] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  function onChange(partial) {
    setData((prev) => ({ ...prev, ...partial }))
  }

  function canProceed() {
    if (step === 0) return data.typeBien && data.transaction
    if (step === 1) return data.surface && data.annee !== null && data.copro !== null
    if (step === 2) return Boolean(data.codePostal && data.codePostal.length === 5)
    return false
  }

  async function handleNext() {
    if (step < 2) {
      capture('devis_step_completed', {
        step_index: step,
        step_label: STEP_LABELS[step],
        type_bien: data.typeBien,
        transaction: data.transaction,
      })
      setStep(step + 1)
      return
    }

    setSubmitting(true)

    const diags = getDiagnosticsObligatoires({
      typeBien: data.typeBien,
      transaction: data.transaction,
      annee: data.annee,
      surface: data.surface,
      copro: data.copro,
      codePostal: data.codePostal,
      hasGaz: data.hasGaz,
    })
    setDiagnostics(diags)

    let risquesResult = null
    if (data.inseeCode) {
      try {
        risquesResult = await fetchRisques(data.inseeCode)
        setRisques(risquesResult)
      } catch {
        setRisques(null)
      }
    } else {
      setRisques(null)
    }

    const { total, subtotal, saving, packName } = calculateTotal(diags)
    capture('devis_submitted', {
      type_bien: data.typeBien,
      transaction: data.transaction,
      surface: Number(data.surface) || null,
      annee: data.annee,
      copro: data.copro,
      code_postal: data.codePostal,
      has_gaz: data.hasGaz,
      diagnostics: diags,
      diagnostics_count: diags.length,
      subtotal,
      total,
      saving,
      pack_name: packName,
      risques_count: risquesResult?.risques?.length || 0,
    })

    setSubmitting(false)
    setStep(3)
  }

  function handleRestart() {
    setData(INITIAL)
    setDiagnostics([])
    setRisques(null)
    setStep(0)
  }

  return (
    <div className="mx-auto max-w-lg">
      {/* Progress bar */}
      {step < 3 && (
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {STEP_LABELS.slice(0, 3).map((label, i) => (
              <span
                key={i}
                className={`text-xs font-medium ${
                  i <= step ? 'text-accent' : 'text-text-secondary'
                }`}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {step === 0 && <DevisStep1 data={data} onChange={onChange} />}
          {step === 1 && <DevisStep2 data={data} onChange={onChange} />}
          {step === 2 && <DevisStep3 data={data} onChange={onChange} />}
          {step === 3 && (
            <DevisResult
              diagnostics={diagnostics}
              risques={risques}
              data={data}
              onRestart={handleRestart}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {step < 3 && (
        <div className="mt-8 flex justify-between">
          {step > 0 ? (
            <Button variant="ghost" onClick={() => setStep(step - 1)} disabled={submitting}>
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>
          ) : (
            <div />
          )}
          <Button onClick={handleNext} disabled={!canProceed() || submitting}>
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Analyse de votre adresse…
              </>
            ) : (
              <>
                {step === 2 ? 'Voir mon devis' : 'Suivant'}
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
