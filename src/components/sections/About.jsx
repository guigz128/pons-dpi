import { Award, ShieldCheck, Eye, Clock, Lightbulb, MapPin } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const DIFFERENCIATEURS = [
  {
    icon: ShieldCheck,
    title: 'Certifié COFRAC',
    description: 'Certifications délivrées par un organisme accrédité COFRAC pour l\'ensemble des diagnostics obligatoires.',
  },
  {
    icon: Eye,
    title: 'Rapports clairs',
    description: 'Pas de jargon. Des rapports lisibles par tous, propriétaires comme professionnels.',
  },
  {
    icon: Clock,
    title: 'Réactivité',
    description: 'Devis instantané, intervention sous 48h, rapports sous 24 à 48h.',
  },
  {
    icon: Lightbulb,
    title: 'Approche conseil',
    description: 'Pas juste un diagnostic : un accompagnement et des recommandations concrètes.',
  },
  {
    icon: Award,
    title: 'Titre RNCP niveau 5',
    description: 'Titre professionnel Diagnostiqueur Immobilier (RNCP 38469).',
  },
  {
    icon: MapPin,
    title: 'Proximité',
    description: 'Basé à Prades-le-Lez, connaissance fine du marché immobilier local.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texte */}
          <ScrollReveal>
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-text leading-[1.1]">
                Guillaume Pons, <span className="text-highlight">diagnostiqueur immobilier</span>
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Titulaire du Titre professionnel Diagnostiqueur Immobilier (RNCP 38469, niveau 5),
                je suis certifié par un organisme accrédité COFRAC pour l'ensemble des diagnostics
                immobiliers obligatoires.
              </p>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Mon engagement : des rapports clairs, une transparence tarifaire totale,
                et une réactivité sans faille. Je suis joignable par téléphone, email ou
                WhatsApp pour répondre à toutes vos questions.
              </p>
            </div>
          </ScrollReveal>

          {/* Grille différenciateurs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIFFERENCIATEURS.map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-9 w-9 rounded-sm bg-accent-light text-accent shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">{item.title}</p>
                      <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
