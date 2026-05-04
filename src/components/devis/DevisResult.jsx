import { Check, Phone, MessageCircle, ArrowLeft, Tag, Package } from 'lucide-react'
import { pricing, calculateTotal } from './devisPricing'
import Button from '../ui/Button'

export default function DevisResult({ diagnostics, onRestart }) {
  const result = calculateTotal(diagnostics)
  const { subtotal, total, saving, packName, packPrice, packItems, extraDiags } = result

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-text">Votre devis estimatif</h3>
        <p className="mt-1 text-sm text-text-secondary">
          {diagnostics.length} diagnostic{diagnostics.length > 1 ? 's' : ''} obligatoire{diagnostics.length > 1 ? 's' : ''} identifié{diagnostics.length > 1 ? 's' : ''} pour votre bien.
        </p>
      </div>

      {/* Pack détecté */}
      {packName && (
        <div className="flex items-center gap-3 rounded-md bg-accent-light border border-accent/20 px-4 py-3">
          <Package className="h-5 w-5 text-accent shrink-0" />
          <div>
            <p className="text-sm font-semibold text-accent">{packName} — {packPrice} €</p>
            <p className="text-xs text-text-secondary">
              Tarif pack avantageux appliqué automatiquement
            </p>
          </div>
        </div>
      )}

      {/* Liste des diagnostics */}
      <div className="rounded-md border border-border bg-surface divide-y divide-border">
        {packName ? (
          <>
            {/* Pack items */}
            {packItems.map((diagKey) => {
              const diag = pricing[diagKey]
              if (!diag) return null
              return (
                <div key={diagKey} className="flex items-center justify-between px-4 py-3">
                  <span className="flex items-center gap-2 text-sm text-text">
                    <Check className="h-4 w-4 text-success" />
                    {diag.label}
                  </span>
                  <span className="text-xs text-text-secondary">inclus dans le pack</span>
                </div>
              )
            })}
            {/* Extra items */}
            {extraDiags.map((diagKey) => {
              const diag = pricing[diagKey]
              if (!diag) return null
              return (
                <div key={diagKey} className="flex items-center justify-between px-4 py-3">
                  <span className="flex items-center gap-2 text-sm text-text">
                    <Check className="h-4 w-4 text-success" />
                    {diag.label}
                  </span>
                  <span className="text-sm font-medium text-text">
                    +{diag.base} €
                  </span>
                </div>
              )
            })}
          </>
        ) : (
          /* Pas de pack — liste simple */
          diagnostics.map((diagKey) => {
            const diag = pricing[diagKey]
            if (!diag) return null
            return (
              <div key={diagKey} className="flex items-center justify-between px-4 py-3">
                <span className="flex items-center gap-2 text-sm text-text">
                  <Check className="h-4 w-4 text-success" />
                  {diag.label}
                </span>
                <span className="text-sm font-medium text-text">
                  {diag.base > 0 ? `${diag.base} €` : 'Inclus'}
                </span>
              </div>
            )
          })
        )}
      </div>

      {/* Total */}
      <div className="rounded-md bg-stone-50 border border-border p-4 space-y-2">
        {saving > 0 && (
          <>
            <div className="flex items-center justify-between text-sm text-text-secondary">
              <span>Prix unitaires cumulés</span>
              <span className="line-through">{subtotal} €</span>
            </div>
            <div className="flex items-center justify-between text-sm text-success font-medium">
              <span className="flex items-center gap-1.5">
                <Tag className="h-3.5 w-3.5" />
                {packName ? 'Économie pack' : `Remise ${result.discount} %`}
              </span>
              <span>-{saving} €</span>
            </div>
          </>
        )}
        <div className="flex items-center justify-between pt-1">
          <span className="text-base font-bold text-text">Total estimé</span>
          <span className="text-2xl font-bold text-accent">{total} €</span>
        </div>
        <p className="text-xs text-text-secondary pt-1">
          Prix TTC indicatif. Le tarif définitif sera confirmé après échange téléphonique ou WhatsApp.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          href="tel:0651669161"
          size="lg"
          className="flex-1"
        >
          <Phone className="h-5 w-5" />
          Appeler pour confirmer
        </Button>
        <Button
          href={`https://wa.me/33651669161?text=${encodeURIComponent(
            `Bonjour, je souhaite confirmer mon devis en ligne :\n${diagnostics
              .map((d) => `- ${pricing[d]?.label}`)
              .join('\n')}\nTotal estimé : ${total} €`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="lg"
          className="flex-1"
        >
          <MessageCircle className="h-5 w-5 text-whatsapp" />
          Confirmer par WhatsApp
        </Button>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Recommencer le devis
      </button>
    </div>
  )
}
