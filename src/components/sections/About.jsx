import { Award, ShieldCheck, Eye, Clock, Lightbulb, MapPin } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const DIFFERENCIATEURS = [
  {
    icon: ShieldCheck,
    title: 'Certifié avec mention',
    description: 'DPE et amiante avec mention : tertiaire, ERP, IGH. Un périmètre que peu de diagnostiqueurs couvrent.',
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
    title: '8 certifications COFRAC',
    description: 'DPE, amiante, plomb, gaz, électricité, termites + habilitation électrique + SS4.',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Texte */}
          <ScrollReveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">À propos</p>
              <h2 className="font-display text-3xl sm:text-4xl text-text">
                Guillaume Pons, diagnostiqueur immobilier
              </h2>
              <p className="mt-5 text-text-secondary leading-relaxed">
                Titulaire du Titre professionnel Diagnostiqueur Immobilier (RNCP 38469, niveau 5),
                je suis certifié par un organisme accrédité COFRAC pour l'ensemble des diagnostics
                immobiliers obligatoires.
              </p>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Mes certifications avec mention (DPE et amiante) me permettent d'intervenir
                également sur les bâtiments tertiaires, publics et industriels — un périmètre
                que la majorité des diagnostiqueurs ne couvrent pas.
              </p>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Mon engagement : des rapports clairs, une transparence tarifaire totale,
                et une réactivité sans faille. Je suis joignable par téléphone, email ou
                WhatsApp pour répondre à toutes vos questions.
              </p>
            </div>
          </ScrollReveal>

          {/* Grille différenciateurs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENCIATEURS.map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">{item.title}</p>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed">{item.description}</p>
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
