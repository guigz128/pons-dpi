import { FileText, CalendarCheck, ClipboardCheck, Send } from 'lucide-react'
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-4xl sm:text-5xl text-text">
              Comment ça <span className="text-highlight">marche</span>
            </h2>
            <p className="mt-3 text-text-secondary">
              Un processus simple et rapide, du devis à la remise des rapports.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="relative mx-auto mb-4">
                    <div className="flex items-center justify-center h-14 w-14 mx-auto rounded-full bg-accent-light text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="absolute -top-1 -right-1 flex items-center justify-center h-6 w-6 rounded-full bg-accent text-white text-xs font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-text">{step.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
