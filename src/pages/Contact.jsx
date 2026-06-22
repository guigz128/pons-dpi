import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Toast from '../components/ui/Toast'
import ScrollReveal from '../components/ui/ScrollReveal'
import { sendContactForm } from '../lib/contact'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', honeypot: '' })
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)

    try {
      await sendContactForm({ type: 'contact', ...form })
      setForm({ name: '', email: '', phone: '', message: '', honeypot: '' })
      setToast({
        show: true,
        type: 'success',
        message: 'Message envoyé. Je vous réponds au plus vite.',
      })
    } catch (err) {
      setToast({
        show: true,
        type: 'error',
        message: "L'envoi a échoué. Réessayez, ou joignez-moi par téléphone ou WhatsApp.",
      })
    } finally {
      setSending(false)
      setTimeout(() => setToast((t) => ({ ...t, show: false })), 6000)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact — Diagnostics immobiliers Montpellier | Pons DPI</title>
        <meta
          name="description"
          content="Contactez Pons DPI pour vos diagnostics immobiliers à Montpellier. Téléphone, email, WhatsApp. Réponse rapide garantie."
        />
        <link rel="canonical" href="https://www.pons-dpi.fr/contact" />
      </Helmet>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Contact
            </h1>
            <p className="text-lg text-text-secondary max-w-xl">
              Une question, un devis ? Contactez-moi par le moyen de votre choix.
              Je réponds sous 2 heures en moyenne.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              <ScrollReveal>
                <Card>
                  <a href="tel:0651669161" className="flex items-center gap-4 group">
                    <div className="flex items-center justify-center h-11 w-11 rounded-full bg-accent-light text-accent">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                        06 51 66 91 61
                      </p>
                      <p className="text-xs text-text-secondary">Du lundi au samedi</p>
                    </div>
                  </a>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <Card>
                  <a href="mailto:contact@pons-dpi.fr" className="flex items-center gap-4 group">
                    <div className="flex items-center justify-center h-11 w-11 rounded-full bg-accent-light text-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                        contact@pons-dpi.fr
                      </p>
                      <p className="text-xs text-text-secondary">Réponse sous 24h</p>
                    </div>
                  </a>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Card>
                  <a
                    href="https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex items-center justify-center h-11 w-11 rounded-full bg-green-50 text-whatsapp">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text group-hover:text-whatsapp transition-colors">
                        WhatsApp
                      </p>
                      <p className="text-xs text-text-secondary">Réponse rapide</p>
                    </div>
                  </a>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <Card>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-11 w-11 rounded-full bg-accent-light text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">Montpellier et environs</p>
                      <p className="text-xs text-text-secondary">Département de l'Hérault (34)</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>

            {/* Contact form */}
            <ScrollReveal className="lg:col-span-3">
              <Card>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot anti-spam : invisible pour les humains, rempli par les bots */}
                  <input
                    type="text"
                    name="honeypot"
                    value={form.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                        Nom complet
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                        placeholder="jean@exemple.fr"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-y"
                      placeholder="Décrivez votre besoin (type de bien, adresse, transaction prévue...)"
                    />
                  </div>
                  <Button type="submit" disabled={sending} className="w-full sm:w-auto">
                    <Send className="h-4 w-4" />
                    {sending ? 'Envoi...' : 'Envoyer le message'}
                  </Button>
                </form>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </>
  )
}
