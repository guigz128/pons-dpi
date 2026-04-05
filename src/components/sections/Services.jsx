import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { servicesVente } from '../../content/services'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import ScrollReveal from '../ui/ScrollReveal'

export default function Services() {
  const featured = servicesVente.slice(0, 8)

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Services</p>
            <h2 className="font-display text-3xl sm:text-4xl text-text">
              Nos diagnostics immobiliers
            </h2>
            <p className="mt-3 text-text-secondary">
              Tous les diagnostics obligatoires pour la vente, la location et les travaux.
              Certifié COFRAC, rapports conformes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((service, i) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.id} delay={i * 0.05}>
                <Link to={`/services/${service.slug}`}>
                  <Card className="h-full hover:shadow-md hover:border-accent/20 transition-all group">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-light text-accent mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-text group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <Badge>{service.condition}</Badge>
                      <Badge variant="accent">{service.validite}</Badge>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              Voir tous les diagnostics
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
