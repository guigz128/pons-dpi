import { ANNEE_TRANCHES } from './devisLogic'

export default function DevisStep2({ data, onChange }) {
  return (
    <div className="space-y-6">
      {/* Surface */}
      <div>
        <label htmlFor="surface" className="block text-sm font-semibold text-text mb-2">
          Surface du bien (m\u00b2)
        </label>
        <input
          id="surface"
          type="number"
          min="1"
          max="10000"
          placeholder="Ex : 75"
          value={data.surface || ''}
          onChange={(e) => onChange({ surface: parseInt(e.target.value) || '' })}
          className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none"
        />
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
                className={`rounded-2xl border p-3 text-sm font-medium transition-colors ${
                  selected
                    ? 'border-accent bg-accent-light text-accent'
                    : 'border-border bg-surface text-text hover:border-stone-300'
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
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
              className={`flex-1 rounded-2xl border p-3 text-sm font-medium transition-colors ${
                data.copro === value
                  ? 'border-accent bg-accent-light text-accent'
                  : 'border-border bg-surface text-text hover:border-stone-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
