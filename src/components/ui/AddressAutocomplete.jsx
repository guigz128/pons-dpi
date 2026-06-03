import { useEffect, useRef, useState } from 'react'
import { MapPin, Loader2, Check, X } from 'lucide-react'
import { searchAddress } from '../../lib/ban'

export default function AddressAutocomplete({
  value,
  onSelect,
  onClear,
  placeholder = 'Ex : 12 rue de la Loge, Montpellier',
  label = 'Adresse',
  hint,
  autoFocus = false,
  size = 'md',
}) {
  const [query, setQuery] = useState(value?.label || '')
  const [suggestions, setSuggestions] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const debounceRef = useRef(null)
  const abortRef = useRef(null)

  useEffect(() => {
    setQuery(value?.label || '')
  }, [value?.label])

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (abortRef.current) abortRef.current.abort()

    const trimmed = query.trim()
    if (trimmed.length < 3 || trimmed === value?.label) {
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
  }, [query, value?.label])

  function handleSelect(item) {
    setQuery(item.label)
    setOpen(false)
    setSuggestions([])
    onSelect?.(item)
  }

  function handleClear() {
    setQuery('')
    setSuggestions([])
    onClear?.()
  }

  const padY = size === 'lg' ? 'py-3' : 'py-2.5'
  const textSize = size === 'lg' ? 'text-base' : 'text-sm'

  return (
    <div className="relative">
      {label && (
        <label htmlFor="address-input" className="block text-sm font-semibold text-text mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary pointer-events-none" />
        <input
          id="address-input"
          type="text"
          autoComplete="off"
          autoFocus={autoFocus}
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => suggestions.length > 0 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          className={`w-full rounded-sm border border-border bg-surface pl-9 pr-9 ${padY} ${textSize} text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none`}
        />
        {loading && (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary animate-spin" />
        )}
        {!loading && value?.label && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Effacer"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        {!loading && !value?.label && query && (
          <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-300" />
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

      {hint && <p className="mt-1.5 text-xs text-text-secondary">{hint}</p>}
    </div>
  )
}
