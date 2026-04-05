import { Check, Phone, MessageCircle, ArrowLeft, Tag, Package, ShieldCheck, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { pricing, calculateTotal } from './devisPricing'
import Button from '../ui/Button'

export default function DevisResult({ diagnostics, onRestart }) {
  const result = calculateTotal(diagnostics)
  const { subtotal, total, saving, packName, packPrice, packItems, extraDiags } = result

  return (
    <div className="space-y-6">
      {/* Celebration header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 15 }}
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/10"
        >
          <Check className="h-7 w-7 text-success" />
        </motion.div>
        <h3 className="text-lg font-bold text-text">Votre devis estimatif</h3>
        <p className="mt-1 text-sm text-text-secondary">
          {diagnostics.length} diagnostic{diagnostics.length > 1 ? 's' : ''} obligatoire{diagnostics.length > 1 ? 's' : ''} identifié{diagnostics.length > 1 ? 's' : ''} pour votre bien.
        </p>
      </motion.div>

      {/* Trust badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-center gap-2 rounded-full bg-success/5 border border-success/15 px-4 py-2"
      >
        <ShieldCheck className="h-4 w-4 text-success" />
        <span className="text-xs font-medium text-success">Devis gratuit et sans engagement</span>
      </motion.div>

      {/* Pack détecté */}
      {packName && (
        <div className="flex items-center gap-3 rounded-[--radius-md] bg-accent-light border border-accent/20 px-4 py-3">
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
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-[--radius-md] border border-border bg-surface divide-y divide-border"
      >
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
      </motion.div>

      {/* Total */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-[--radius-md] border border-accent/20 overflow-hidden"
      >
        {saving > 0 && (
          <div className="bg-stone-50 px-4 py-3 space-y-2 border-b border-accent/10">
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
          </div>
        )}
        <div className="bg-accent-light px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-text">Total estimé</span>
            <span className="text-3xl font-bold text-accent">{total} €</span>
          </div>
          <p className="mt-1 text-xs text-text-secondary">
            Prix TTC indicatif. Le tarif définitif sera confirmé après échange téléphonique ou WhatsApp.
          </p>
        </div>
      </motion.div>

      {/* Garantie rapport */}
      <div className="flex items-center justify-center gap-2 text-xs text-text-secondary">
        <Clock className="h-3.5 w-3.5" />
        <span>Garantie rapport sous 24h après intervention</span>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-3"
      >
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
      </motion.div>

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
