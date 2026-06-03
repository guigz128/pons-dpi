import { useEffect, useRef, useState } from 'react'
import { MapPin, Loader2, Check } from 'lucide-react'
import { searchAddress } from '../../lib/ban'

export default function DevisStep3({ data, onChange }) {
  const [query, setQuery] = useState(data.adresse || '')
  const [suggestions, setSuggestions] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const debounceRef = useRef(null)
  const abortRef = useRef(null)

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (abortRef.current) abortRef.current.abort()

    const trimmed = query.trim()
    if (trimmed.length < 3 || trimmed === data.adresse) {
      setSuggestions([])
      return
    }

    debounceRef.current = setTimeout(async () => {
      const ctrl = new AbortController()
      abortRef.current = ctrl
      setLoading(true)
      try {
        const results = await searchAddress(trimmed, { limit: 5, signal: ctrl.signal })
        setSuggestions(results)
        setOpen(true)
      } catch (err) {
        if (err.name !== 'AbortError') setSuggestions([])
      } finally {
        setLoading(false)
      }
    }, 250)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query, data.adresse])

  function handleSelect(item) {
    setQuery(item.label)
    setOpen(false)
    setSuggestions([])
    onChange({
      adresse: item.label,
      codePostal: item.postcode || '',
      inseeCode: item.citycode || '',
      lat: item.lat,
      lon: item.lon,
    })
  }

  function handleChange(e) {
    const v = e.target.value
    setQuery(v)
    if (data.adresse) {
      onChange({ adresse: '', codePostal: '', inseeCode: '', lat: null, lon: null })
    }
  }

  return (
    <div className="space-y-6">
      {/* Adresse avec autocomplete BAN */}
      <div className="relative">
        <label htmlFor="adresse" className="block text-sm font-semibold text-text mb-2">
          Adresse du bien
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary pointer-events-none" />
          <input
            id="adresse"
            type="text"
            autoComplete="off"
            placeholder="Ex : 12 rue de la Loge, Montpellier"
            value={query}
            onChange={handleChange}
            onFocus={() => suggestions.length > 0 && setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            className="w-full rounded-sm border border-border bg-surface pl-9 pr-9 py-2.5 text-sm text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none"
          />
          {loading && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary animate-spin" />
          )}
          {!loading && data.adresse && (
            <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-success" />
          )}
        </div>

        {open && suggestions.length > 0 && (
          <ul
            role="listbox"
            className="absolute z-10 mt-1 w-full max-h-72 overflow-auto rounded-md border border-border bg-white shadow-lg"
          >
            {suggestions.map((s) => (
              <li key={s.id} role="option">
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSelect(s)}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-stone-100 focus:bg-stone-100 focus:outline-none"
                >
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-text-secondary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-text">{s.label}</div>
                      <div className="text-xs text-text-secondary">{s.context}</div>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-1.5 text-xs text-text-secondary">
          Recherche officielle Base Adresse Nationale. Permet d'identifier
          automatiquement votre zone et les risques associés.
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
