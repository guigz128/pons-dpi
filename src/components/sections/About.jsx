import { Award, ShieldCheck, Eye, Clock, Lightbulb, MapPin } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const DIFFERENCIATEURS = [
  {
    icon: ShieldCheck,
    title: 'Certifications COFRAC mars 2027',
    description: 'Formation Titre RNCP en cours (nov 2026 → fév 2027). Certifications COFRAC obtenues février-mars 2027 pour DPE, amiante, plomb, gaz, électricité et termites.',
  },
  {
    icon: Eye,
    title: 'Rapports clairs',
    description: 'Pas de jargon. Des rapports lisibles par tous, propriétaires comme professionnels.',
  },
  {
    icon: Clock,
    title: 'Réactivité',
    description: 'Devis instantané, intervention sous 48 h, rapport sous 24 h ouvrées dès l\'ouverture.',
  },
  {
    icon: Lightbulb,
    title: 'Approche conseil',
    description: 'Pas juste un diagnostic : un accompagnement et des recommandations concrètes.',
  },
  {
    icon: Award,
    title: 'Titre RNCP niveau 5',
    description: 'Titre professionnel Diagnostiqueur Immobilier (RNCP 38469) — formation en cours.',
  },
  {
    icon: MapPin,
    title: 'Proximité',
    description: 'Basé dans la région, connaissance fine du marché immobilier local.',
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
                Mon activité officielle débutera en mars 2027, après l'obtention du Titre
                professionnel Diagnostiqueur Immobilier (RNCP 38469, niveau 5) et des
                certifications COFRAC associées (formation en cours nov 2026 → fév 2027).
                Le site est en ligne dès maintenant pour préparer votre prochaine transaction.
              </p>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Mon engagement : des rapports clairs, une transparence tarifaire totale,
                et une réactivité sans faille. Je suis joignable par téléphone, email ou
                WhatsApp pour répondre à toutes vos questions et préparer votre devis.
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
