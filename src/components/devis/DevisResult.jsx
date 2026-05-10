import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Check,
  Phone,
  MessageCircle,
  ArrowLeft,
  Tag,
  Briefcase,
  ArrowRight,
  PhoneCall,
  Send,
} from 'lucide-react'
import { pricing, calculateTotal } from './devisPricing'

const SLOTS = [
  { value: '', label: 'Pas de préférence' },
  { value: 'matin', label: 'Matin (9h-12h)' },
  { value: 'apres-midi', label: 'Après-midi (14h-17h)' },
  { value: 'soir', label: 'Fin de journée (17h-19h)' },
]

export default function DevisResult({ diagnostics, onRestart }) {
  const result = calculateTotal(diagnostics)
  const { subtotal, total, saving, packName, discount } = result

  const [callbackForm, setCallbackForm] = useState({ name: '', phone: '', slot: '' })

  const diagsList = diagnostics
    .map((d) => `- ${pricing[d]?.label}`)
    .join('\n')

  function handleCallbackSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Demande de rappel — Devis ${total} € — ${callbackForm.name}`
    )
    const body = encodeURIComponent(
      `Demande de rappel via le devis en ligne pons-dpi.fr\n\n` +
      `Nom : ${callbackForm.name}\n` +
      `Téléphone : ${callbackForm.phone}\n` +
      `Créneau préféré : ${SLOTS.find((s) => s.value === callbackForm.slot)?.label || 'Pas de préférence'}\n\n` +
      `Diagnostics demandés :\n${diagsList}\n\n` +
      `Total estimé : ${total} €`
    )
    window.location.href = `mailto:contact@pons-dpi.fr?subject=${subject}&body=${body}`
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-text">Votre devis estimatif</h3>
        <p className="mt-1 text-sm text-text-secondary">
          {diagnostics.length} diagnostic{diagnostics.length > 1 ? 's' : ''} obligatoire{diagnostics.length > 1 ? 's' : ''} identifié{diagnostics.length > 1 ? 's' : ''} pour votre bien.
        </p>
      </div>

      {/* Liste plate des diagnostics avec prix unitaires */}
      <div className="rounded-md border border-border bg-surface divide-y divide-border">
        {diagnostics.map((diagKey) => {
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
        })}
      </div>

      {/* Récap calcul + total */}
      <div className="rounded-md bg-stone-50 border border-border p-4 space-y-2">
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <span>Sous-total ({diagnostics.length} diagnostic{diagnostics.length > 1 ? 's' : ''})</span>
          <span>{subtotal} €</span>
        </div>

        {saving > 0 && (
          <div className="flex items-center justify-between text-sm text-success font-medium">
            <span className="flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5" />
              {packName ? `Tarif ${packName}` : `Remise volume (${discount} %)`}
            </span>
            <span>-{saving} €</span>
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-base font-bold text-text">Total estimé</span>
          <span className="text-2xl font-bold text-accent">{total} €</span>
        </div>

        <p className="text-xs text-text-secondary pt-1">
          Prix TTC indicatif. Le tarif définitif est confirmé après échange.
        </p>
      </div>

      {/* Note pro */}
      <Link
        to="/professionnels"
        className="flex items-center justify-between gap-3 rounded-md border border-accent/20 bg-accent-light/40 px-4 py-3 text-sm hover:bg-accent-light transition-colors group"
      >
        <span className="flex items-center gap-2.5 text-text">
          <Briefcase className="h-4 w-4 text-accent shrink-0" />
          <span>
            <strong className="font-semibold">Vous êtes pro de l'immobilier ?</strong>{' '}
            <span className="text-text-secondary">Discuter d'un partenariat</span>
          </span>
        </span>
        <ArrowRight className="h-4 w-4 text-accent shrink-0 group-hover:translate-x-0.5 transition-transform" />
      </Link>

      {/* CTA — 2 méthodes de contact rapide */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          href="tel:0651669161"
          className="group flex items-center gap-4 rounded-lg bg-accent px-5 py-4 text-white shadow-sm hover:bg-accent-hover transition-colors"
        >
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/15 shrink-0">
            <Phone className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-base font-semibold leading-tight">06 51 66 91 61</div>
            <div className="text-xs text-white/80 mt-0.5">Appel direct, sans standard</div>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
        </a>

        <a
          href={`https://wa.me/33651669161?text=${encodeURIComponent(
            `Bonjour, je souhaite confirmer mon devis en ligne :\n${diagsList}\nTotal estimé : ${total} €`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-lg border border-border bg-surface px-5 py-4 text-text hover:border-accent/30 hover:bg-stone-50 transition-colors"
        >
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-whatsapp/10 shrink-0">
            <MessageCircle className="h-5 w-5 text-whatsapp" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-base font-semibold leading-tight">WhatsApp</div>
            <div className="text-xs text-text-secondary mt-0.5">Confirmer en 1 message</div>
          </div>
          <ArrowRight className="h-4 w-4 text-text-secondary shrink-0 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
        </a>
      </div>

      {/* Form rappel — toujours visible */}
      <form
        onSubmit={handleCallbackSubmit}
        className="rounded-lg border border-border bg-surface p-5 space-y-4"
      >
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent shrink-0">
            <PhoneCall className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-text">Vous préférez être rappelé(e) ?</h4>
            <p className="text-sm text-text-secondary mt-0.5">
              Laissez vos coordonnées, je vous rappelle au créneau choisi avec votre devis sous les yeux.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="callback-name" className="block text-sm font-medium text-text mb-1.5">
              Nom
            </label>
            <input
              id="callback-name"
              type="text"
              required
              value={callbackForm.name}
              onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
              className="w-full rounded-sm border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none"
              placeholder="Jean Dupont"
            />
          </div>
          <div>
            <label htmlFor="callback-phone" className="block text-sm font-medium text-text mb-1.5">
              Téléphone
            </label>
            <input
              id="callback-phone"
              type="tel"
              required
              value={callbackForm.phone}
              onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
              className="w-full rounded-sm border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none"
              placeholder="06 12 34 56 78"
            />
          </div>
        </div>

        <div>
          <label htmlFor="callback-slot" className="block text-sm font-medium text-text mb-1.5">
            Créneau préféré
          </label>
          <select
            id="callback-slot"
            value={callbackForm.slot}
            onChange={(e) => setCallbackForm({ ...callbackForm, slot: e.target.value })}
            className="w-full rounded-sm border border-border bg-surface px-3 py-2 text-sm text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none"
          >
            {SLOTS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors w-full sm:w-auto"
        >
          <Send className="h-4 w-4" />
          Demander à être rappelé(e)
        </button>

        <p className="text-xs text-text-secondary">
          En envoyant ce formulaire, vous acceptez d'être contacté par téléphone au créneau choisi.
          Vos données ne sont pas utilisées à d'autres fins.
        </p>
      </form>

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
