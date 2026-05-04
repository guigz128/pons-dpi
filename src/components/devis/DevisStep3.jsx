export default function DevisStep3({ data, onChange }) {
  return (
    <div className="space-y-6">
      {/* Code postal */}
      <div>
        <label htmlFor="codePostal" className="block text-sm font-semibold text-text mb-2">
          Code postal du bien
        </label>
        <input
          id="codePostal"
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="Ex : 34000"
          value={data.codePostal || ''}
          onChange={(e) => onChange({ codePostal: e.target.value.replace(/\D/g, '').slice(0, 5) })}
          className="w-full rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none"
        />
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
              className={`rounded-md border p-3 text-sm font-medium transition-colors ${
                data.hasGaz === value
                  ? 'border-accent bg-accent-light text-accent'
                  : 'border-border bg-surface text-text hover:border-stone-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-text-secondary">
          Si vous n'êtes pas sûr, nous vérifierons sur place.
        </p>
      </fieldset>
    </div>
  )
}
