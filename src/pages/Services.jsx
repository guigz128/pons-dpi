import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { servicesVente, servicesAvantTravaux, servicesTertiaire } from '../content/services'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import ScrollReveal from '../components/ui/ScrollReveal'
import Cta from '../components/sections/Cta'

function ServiceGroup({ title, description, services }) {
  return (
    <div className="mb-12">
      <ScrollReveal>
        <h2 className="text-xl sm:text-2xl font-bold text-text">{title}</h2>
        {description && (
          <p className="mt-2 text-text-secondary">{description}</p>
        )}
      </ScrollReveal>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <ScrollReveal key={service.id} delay={i * 0.05}>
              <Link to={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-md hover:border-accent/20 transition-all group">
                  <div className="flex items-center justify-center h-10 w-10 rounded-[--radius-sm] bg-accent-light text-accent mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-text group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                  {service.condition && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <Badge>{service.condition}</Badge>
                      {service.validite && <Badge variant="accent">{service.validite}</Badge>}
                    </div>
                  )}
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent">
                    En savoir plus
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Card>
              </Link>
            </ScrollReveal>
          )
        })}
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Diagnostics immobiliers — Tous nos services | Pons DPI</title>
        <meta
          name="description"
          content="DPE, amiante, plomb, électricité, gaz, termites, ERP, mesurage Carrez, audit énergétique. Tous les diagnostics immobiliers obligatoires à Montpellier."
        />
        <link rel="canonical" href="https://www.pons-dpi.fr/services" />
      </Helmet>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-text">
                Nos diagnostics immobiliers
              </h1>
              <p className="mt-4 text-lg text-text-secondary">
                Tous les diagnostics obligatoires pour la vente, la location, les travaux
                et le tertiaire. Certifié COFRAC, intervention à Montpellier et environs.
              </p>
            </div>
          </ScrollReveal>

          <ServiceGroup
            title="Diagnostics pour la vente et la location"
            services={servicesVente}
          />

          <ServiceGroup
            title="Diagnostics avant travaux et démolition"
            description="Obligations du maître d'ouvrage avant tout chantier impactant des matériaux potentiellement amiantés."
            services={servicesAvantTravaux}
          />

          <ServiceGroup
            title="Services tertiaire et copropriété"
            description="Grâce aux certifications avec mention, j'interviens sur les bâtiments professionnels, publics et industriels."
            services={servicesTertiaire}
          />
        </div>
      </section>

      <Cta />
    </>
  )
}
