import { MapPin, Info } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function DevisStep3({ data, onChange }) {
  return (
    <div className="space-y-6">
      {/* Code postal */}
      <div>
        <label htmlFor="codePostal" className="block text-sm font-semibold text-text mb-2">
          Code postal du bien
        </label>
        <div className="relative">
          <input
            id="codePostal"
            type="text"
            inputMode="numeric"
            maxLength={5}
            placeholder="Ex : 34000"
            value={data.codePostal || ''}
            onChange={(e) => onChange({ codePostal: e.target.value.replace(/\D/g, '').slice(0, 5) })}
            className="w-full rounded-[--radius-sm] border border-border bg-surface pl-10 pr-4 py-2.5 text-sm text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none"
          />
          <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
        </div>
        <p className="mt-2 flex items-start gap-1.5 text-xs text-text-secondary">
          <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" />
          Nous intervenons sur tout le département de l'Hérault (34)
        </p>
      </div>

      {/* Installation gaz */}
      <fieldset>
        <legend className="text-sm font-semibold text-text mb-3">
          Le bien possède-t-il une installation au gaz ?
        </legend>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: true, label: 'Oui' },
            { value: false, label: 'Non' },
            { value: null, label: 'Je ne sais pas' },
          ].map(({ value, label }) => (
            <button
              key={String(value)}
              type="button"
              onClick={() => onChange({ hasGaz: value })}
              className={`rounded-[--radius-md] border p-3 text-sm font-medium transition-all ${
                data.hasGaz === value
                  ? 'border-accent bg-accent-light text-accent shadow-sm'
                  : 'border-border bg-surface text-text hover:border-stone-300 hover:shadow-sm'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Reassuring message when "Je ne sais pas" is selected */}
        <AnimatePresence>
          {data.hasGaz === null && data.codePostal.length > 0 && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 flex items-start gap-1.5 text-xs text-accent"
            >
              <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" />
              Pas d'inquiétude, nous vérifierons sur place.
            </motion.p>
          )}
        </AnimatePresence>
      </fieldset>
    </div>
  )
}
