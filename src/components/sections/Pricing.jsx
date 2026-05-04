import { Check, ArrowRight, Star } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

const PACKS = [
  {
    name: 'Pack Location',
    price: 200,
    description: 'Appartement ou maison',
    highlight: false,
    includes: ['DPE', 'Électricité', 'Gaz', 'ERP', 'Surface Boutin'],
    note: 'Mise en location d\'un logement',
  },
  {
    name: 'Pack Vente Appartement',
    price: 290,
    description: 'Copropriété, avant 1997',
    highlight: true,
    includes: ['DPE', 'Amiante', 'Électricité', 'Gaz', 'ERP', 'Mesurage Carrez'],
    note: 'Le plus demandé',
  },
  {
    name: 'Pack Vente Maison',
    price: 380,
    description: 'Maison individuelle',
    highlight: false,
    includes: ['DPE', 'Amiante', 'Électricité', 'Gaz', 'Termites', 'ERP'],
    note: 'Pack complet hors copropriété',
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" className="py-16 sm:py-20 lg:py-24 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-4xl sm:text-5xl text-text">
              Tarifs <span className="text-highlight">transparents</span>
            </h2>
            <p className="mt-3 text-text-secondary">
              Des packs avantageux pour les diagnostics courants. Prix clairs,
              pas de surprise. Devis personnalisé en 2 minutes.
            </p>
          </div>
        </ScrollReveal>

        {/* Packs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKS.map((pack, i) => (
            <ScrollReveal key={pack.name} delay={i * 0.1}>
              <Card
                className={`h-full flex flex-col ${
                  pack.highlight
                    ? 'border-accent shadow-md ring-1 ring-accent/10'
                    : ''
                }`}
              >
                {pack.highlight && (
                  <Badge variant="accent" className="self-start mb-3">
                    <Star className="h-3 w-3" />
                    Le plus demandé
                  </Badge>
                )}
                <h3 className="text-lg font-bold text-text">{pack.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">{pack.description}</p>

                <p className="mt-4">
                  <span className="text-3xl font-bold text-accent">{pack.price}</span>
                  <span className="text-base text-text-secondary ml-1">€</span>
                </p>

                <ul className="mt-5 space-y-2.5 flex-1">
                  {pack.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text">
                      <Check className="h-4 w-4 text-success shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  to="/devis"
                  variant={pack.highlight ? 'primary' : 'outline'}
                  className="mt-6 w-full"
                >
                  Obtenir mon devis
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal>
          <p className="mt-8 text-center text-xs text-text-secondary">
            Plomb (+130 €), assainissement (+150 €) et autres diagnostics spécifiques en supplément.
            Prix TTC indicatifs — le tarif définitif est confirmé après échange.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
