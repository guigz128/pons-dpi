import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import DevisStep1 from './DevisStep1'
import DevisStep2 from './DevisStep2'
import DevisStep3 from './DevisStep3'
import DevisResult from './DevisResult'
import { getDiagnosticsObligatoires } from './devisLogic'
import Button from '../ui/Button'

const STEPS = [
  { label: 'Votre bien', subtitle: 'Décrivez votre bien' },
  { label: 'Caractéristiques', subtitle: 'Précisez les caractéristiques' },
  { label: 'Localisation', subtitle: 'Dernières informations' },
]

const INITIAL = {
  typeBien: '',
  transaction: '',
  surface: '',
  annee: null,
  copro: null,
  codePostal: '',
  hasGaz: null,
}

export default function DevisForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(INITIAL)
  const [diagnostics, setDiagnostics] = useState([])

  function onChange(partial) {
    setData((prev) => ({ ...prev, ...partial }))
  }

  function canProceed() {
    if (step === 0) return data.typeBien && data.transaction
    if (step === 1) return data.surface && data.annee !== null && data.copro !== null
    if (step === 2) return data.codePostal.length === 5
    return false
  }

  function handleNext() {
    if (step < 2) {
      setStep(step + 1)
    } else {
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
      setStep(3)
    }
  }

  function handleRestart() {
    setData(INITIAL)
    setDiagnostics([])
    setStep(0)
  }

  return (
    <div className="mx-auto max-w-lg">
      {/* Stepper */}
      {step < 3 && (
        <div className="mb-10">
          {/* Step indicators */}
          <div className="flex items-center justify-between">
            {STEPS.map((s, i) => {
              const isCompleted = i < step
              const isActive = i === step
              const isUpcoming = i > step

              return (
                <div key={i} className="flex flex-1 items-center">
                  {/* Step circle + label */}
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                        isCompleted
                          ? 'bg-accent text-white'
                          : isActive
                            ? 'bg-accent text-white ring-4 ring-accent/20'
                            : 'bg-stone-100 text-text-secondary'
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span
                      className={`mt-2 text-xs font-medium text-center transition-colors ${
                        isActive
                          ? 'text-accent'
                          : isCompleted
                            ? 'text-text'
                            : 'text-text-secondary'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>

                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <div className="h-px flex-1 mx-2 -mt-5">
                      <div
                        className={`h-full rounded-full transition-colors duration-300 ${
                          i < step ? 'bg-accent' : 'bg-stone-200'
                        }`}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Step subtitle */}
          <motion.p
            key={step}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center text-sm text-text-secondary"
          >
            {STEPS[step].subtitle}
          </motion.p>
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
            <DevisResult diagnostics={diagnostics} onRestart={handleRestart} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {step < 3 && (
        <div className="mt-8 flex justify-between">
          {step > 0 ? (
            <Button variant="ghost" onClick={() => setStep(step - 1)}>
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>
          ) : (
            <div />
          )}
          <Button onClick={handleNext} disabled={!canProceed()}>
            {step === 2 ? 'Voir mon devis' : 'Suivant'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
