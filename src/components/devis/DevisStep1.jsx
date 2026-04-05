import { Home, Building, Store, Building2 } from 'lucide-react'
import { TYPE_BIENS, TRANSACTIONS } from './devisLogic'

const ICONS = {
  maison: Home,
  appartement: Building,
  local_commercial: Store,
  bureau_tertiaire: Building2,
}

export default function DevisStep1({ data, onChange }) {
  return (
    <div className="space-y-6">
      {/* Type de bien */}
      <fieldset>
        <legend className="text-sm font-semibold text-text mb-3">Type de bien</legend>
        <div className="grid grid-cols-2 gap-3">
          {TYPE_BIENS.map(({ value, label }) => {
            const Icon = ICONS[value]
            const selected = data.typeBien === value
            return (
              <button
                key={value}
                type="button"
                onClick={() => onChange({ typeBien: value })}
                className={`flex items-center gap-3 rounded-[--radius-md] border p-4 text-left text-sm font-medium transition-colors ${
                  selected
                    ? 'border-accent bg-accent-light text-accent'
                    : 'border-border bg-surface text-text hover:border-stone-300'
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {label}
              </button>
            )
          })}
        </div>
      </fieldset>

      {/* Transaction */}
      <fieldset>
        <legend className="text-sm font-semibold text-text mb-3">Type de transaction</legend>
        <div className="grid grid-cols-2 gap-3">
          {TRANSACTIONS.map(({ value, label }) => {
            const selected = data.transaction === value
            return (
              <button
                key={value}
                type="button"
                onClick={() => onChange({ transaction: value })}
                className={`rounded-[--radius-md] border p-3 text-sm font-medium transition-colors ${
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
    </div>
  )
}
