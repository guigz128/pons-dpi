import { FileText, CalendarCheck, ClipboardCheck, Send } from 'lucide-react'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

const STEPS = [
  {
    icon: FileText,
    title: 'Devis en ligne',
    description: 'Renseignez votre bien en 2 minutes. Recevez un devis instantané avec la liste des diagnostics obligatoires.',
  },
  {
    icon: CalendarCheck,
    title: 'Prise de rendez-vous',
    description: 'On convient d\'un créneau sous 48h. Je m\'adapte à vos disponibilités, y compris le samedi.',
  },
  {
    icon: ClipboardCheck,
    title: 'Intervention sur site',
    description: 'Je réalise tous les diagnostics en une seule visite. Durée : 1 à 3h selon le bien.',
  },
  {
    icon: Send,
    title: 'Rapports transmis',
    description: 'Rapports clairs et conformes sous 24 à 48h, envoyés à vous et à votre notaire ou agence.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Comment ça marche</p>
            <h2 className="font-display text-3xl sm:text-4xl text-text">
              Un processus simple et rapide, du devis à la remise des rapports.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white text-sm font-bold">
                      {i + 1}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="font-semibold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <Button to="/devis" size="lg">
              Commencer mon devis
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
