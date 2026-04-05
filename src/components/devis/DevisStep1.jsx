import { Home, Building, Store, Building2, Check, ShoppingBag, Key, Hammer, Trash2 } from 'lucide-react'
import { TYPE_BIENS, TRANSACTIONS } from './devisLogic'

const TYPE_BIEN_META = {
  maison: { icon: Home, description: 'Individuelle ou mitoyenne' },
  appartement: { icon: Building, description: 'En copropriété' },
  local_commercial: { icon: Store, description: 'Boutique, restaurant...' },
  bureau_tertiaire: { icon: Building2, description: 'Bureaux, ERP, industriel' },
}

const TRANSACTION_META = {
  vente: { icon: ShoppingBag, description: 'Vente d\u2019un bien immobilier' },
  location: { icon: Key, description: 'Mise en location' },
  avant_travaux: { icon: Hammer, description: 'Rénovation ou modification' },
  avant_demolition: { icon: Trash2, description: 'Démolition totale ou partielle' },
}

export default function DevisStep1({ data, onChange }) {
  return (
    <div className="space-y-8">
      {/* Type de bien */}
      <fieldset>
        <legend className="text-sm font-semibold text-text mb-3">Type de bien</legend>
        <div className="grid grid-cols-2 gap-3">
          {TYPE_BIENS.map(({ value, label }) => {
            const meta = TYPE_BIEN_META[value]
            const Icon = meta.icon
            const selected = data.typeBien === value
            return (
              <button
                key={value}
                type="button"
                onClick={() => onChange({ typeBien: value })}
                className={`relative flex flex-col items-center gap-2 rounded-[--radius-md] border px-4 py-5 text-center transition-all ${
                  selected
                    ? 'border-accent bg-accent-light text-accent shadow-sm'
                    : 'border-border bg-surface text-text hover:border-stone-300 hover:shadow-sm'
                }`}
              >
                {/* Checkmark */}
                {selected && (
                  <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white">
                    <Check className="h-3 w-3" />
                  </span>
                )}
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                    selected ? 'bg-accent/10' : 'bg-stone-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold">{label}</span>
                <span
                  className={`text-xs transition-colors ${
                    selected ? 'text-accent/70' : 'text-text-secondary'
                  }`}
                >
                  {meta.description}
                </span>
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
            const meta = TRANSACTION_META[value]
            const Icon = meta.icon
            const selected = data.transaction === value
            return (
              <button
                key={value}
                type="button"
                onClick={() => onChange({ transaction: value })}
                className={`relative flex flex-col items-center gap-2 rounded-[--radius-md] border px-4 py-5 text-center transition-all ${
                  selected
                    ? 'border-accent bg-accent-light text-accent shadow-sm'
                    : 'border-border bg-surface text-text hover:border-stone-300 hover:shadow-sm'
                }`}
              >
                {/* Checkmark */}
                {selected && (
                  <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white">
                    <Check className="h-3 w-3" />
                  </span>
                )}
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                    selected ? 'bg-accent/10' : 'bg-stone-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold">{label}</span>
                <span
                  className={`text-xs transition-colors ${
                    selected ? 'text-accent/70' : 'text-text-secondary'
                  }`}
                >
                  {meta.description}
                </span>
              </button>
            )
          })}
        </div>
      </fieldset>
    </div>
  )
}
