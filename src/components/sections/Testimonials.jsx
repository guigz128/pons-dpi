import { Star } from 'lucide-react'
import Card from '../ui/Card'
import ScrollReveal from '../ui/ScrollReveal'

const TESTIMONIALS = [
  {
    name: 'À venir',
    role: 'Propriétaire',
    text: 'Les premiers avis clients seront affichés ici après les premières missions.',
    rating: 5,
  },
]

export default function Testimonials() {
  // Don't render the section until we have real testimonials
  if (TESTIMONIALS.length === 1 && TESTIMONIALS[0].name === 'À venir') {
    return null
  }

  return (
    <section id="avis" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              Avis clients
            </h2>
            <p className="mt-3 text-text-secondary">
              Ce que disent nos clients de notre travail.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Card className="h-full">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
