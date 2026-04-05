import { Helmet } from 'react-helmet-async'
import { ShieldCheck, Clock, BadgeEuro } from 'lucide-react'
import DevisForm from '../components/devis/DevisForm'
import ScrollReveal from '../components/ui/ScrollReveal'

const TRUST_SIGNALS = [
  { icon: ShieldCheck, label: 'Gratuit et sans engagement' },
  { icon: Clock, label: 'Réponse en 2 minutes' },
  { icon: BadgeEuro, label: 'Prix transparents' },
]

export default function Devis() {
  return (
    <>
      <Helmet>
        <title>Devis en ligne — Diagnostics immobiliers | Pons DPI</title>
        <meta
          name="description"
          content="Obtenez votre devis en ligne en 2 minutes. Diagnostics immobiliers obligatoires calculés automatiquement selon votre bien. Prix transparents."
        />
        <link rel="canonical" href="https://pons-dpi.fr/devis" />
      </Helmet>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-text">
                Devis en ligne gratuit
              </h1>
              <p className="mt-4 text-text-secondary">
                Répondez à quelques questions sur votre bien. Nous identifions
                automatiquement les diagnostics obligatoires et vous proposons
                un prix immédiat.
              </p>

              {/* Trust signals */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {TRUST_SIGNALS.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary"
                  >
                    <Icon className="h-3.5 w-3.5 text-accent" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <DevisForm />
        </div>
      </section>
    </>
  )
}
