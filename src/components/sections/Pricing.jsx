import { ArrowRight, FileText, Clock, ClipboardList, Calculator } from 'lucide-react'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

const STEPS = [
  { icon: ClipboardList, label: '5 questions sur votre bien' },
  { icon: Calculator, label: 'Diagnostics obligatoires identifiés' },
  { icon: FileText, label: 'Prix exact affiché' },
  { icon: Clock, label: 'En 2 minutes, sans engagement' },
]

export default function Pricing() {
  return (
    <section id="tarifs" className="py-16 sm:py-20 lg:py-24 bg-stone-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl sm:text-5xl text-text">
            Combien pour <span className="text-highlight">votre bien</span> ?
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Le prix dépend des diagnostics obligatoires pour votre bien : année de construction,
            surface, copropriété, type de transaction. Calculez-le en 2 minutes,
            sans contact ni rappel commercial.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-light text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-snug">
                    {step.label}
                  </p>
                </div>
              )
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 flex justify-center">
            <Button to="/devis" size="lg">
              <FileText className="h-5 w-5" />
              Calculer mon prix en 2 minutes
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-6 text-xs text-text-secondary">
            Tarif dégressif au-delà de 3 diagnostics. Pas de frais de déplacement sur Montpellier et sa métropole.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
