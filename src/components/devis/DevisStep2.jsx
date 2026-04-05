import { Info } from 'lucide-react'
import { ANNEE_TRANCHES } from './devisLogic'

export default function DevisStep2({ data, onChange }) {
  return (
    <div className="space-y-6">
      {/* Surface */}
      <div>
        <label htmlFor="surface" className="block text-sm font-semibold text-text mb-2">
          Surface du bien
        </label>
        <div className="relative">
          <input
            id="surface"
            type="number"
            min="1"
            max="10000"
            placeholder="Ex : 75"
            value={data.surface || ''}
            onChange={(e) => onChange({ surface: parseInt(e.target.value) || '' })}
            className="w-full rounded-[--radius-sm] border border-border bg-surface px-4 py-2.5 pr-12 text-sm text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-text-secondary">
            m²
          </span>
        </div>
      </div>

      {/* Année de construction */}
      <fieldset>
        <legend className="text-sm font-semibold text-text mb-3">
          Année de construction
        </legend>
        <div className="grid grid-cols-3 gap-3">
          {ANNEE_TRANCHES.map(({ value, label }) => {
            const selected = data.annee === value
            return (
              <button
                key={value}
                type="button"
                onClick={() => onChange({ annee: value })}
                className={`rounded-[--radius-md] border p-3 text-sm font-medium transition-all ${
                  selected
                    ? 'border-accent bg-accent-light text-accent shadow-sm'
                    : 'border-border bg-surface text-text hover:border-stone-300 hover:shadow-sm'
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
        <p className="mt-2 flex items-start gap-1.5 text-xs text-text-secondary">
          <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" />
          Détermine les diagnostics amiante et plomb
        </p>
      </fieldset>

      {/* Copropriété */}
      <fieldset>
        <legend className="text-sm font-semibold text-text mb-3">Copropriété ?</legend>
        <div className="flex gap-3">
          {[
            { value: true, label: 'Oui' },
            { value: false, label: 'Non' },
          ].map(({ value, label }) => (
            <button
              key={String(value)}
              type="button"
              onClick={() => onChange({ copro: value })}
              className={`flex-1 rounded-[--radius-md] border p-3 text-sm font-medium transition-all ${
                data.copro === value
                  ? 'border-accent bg-accent-light text-accent shadow-sm'
                  : 'border-border bg-surface text-text hover:border-stone-300 hover:shadow-sm'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-2 flex items-start gap-1.5 text-xs text-text-secondary">
          <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" />
          Détermine si le mesurage Carrez est nécessaire
        </p>
      </fieldset>
    </div>
  )
}
