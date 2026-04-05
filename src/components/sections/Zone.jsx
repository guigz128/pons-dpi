import { MapPin } from 'lucide-react'
import { communes } from '../../content/zone'
import ScrollReveal from '../ui/ScrollReveal'

export default function Zone() {
  return (
    <section id="zone" className="py-16 sm:py-20 lg:py-24 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              Zone d'intervention
            </h2>
            <p className="mt-3 text-text-secondary">
              J'interviens sur Montpellier et l'ensemble de la métropole, ainsi que les communes environnantes du département de l'Hérault.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2">
            {communes.map((commune) => (
              <span
                key={commune}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-text"
              >
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {commune}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
