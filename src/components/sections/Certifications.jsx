import { ShieldCheck } from 'lucide-react'
import Badge from '../ui/Badge'
import ScrollReveal from '../ui/ScrollReveal'

const CERTIFICATIONS = [
  { name: 'DPE', description: 'Logements individuels et collectifs' },
  { name: 'Amiante', description: 'Repérage pour vente — logements individuels et collectifs' },
  { name: 'Plomb', description: 'Constat de Risque d\'Exposition au Plomb (CREP)' },
  { name: 'Gaz', description: 'État de l\'installation intérieure de gaz' },
  { name: 'Électricité', description: 'État de l\'installation intérieure d\'électricité' },
  { name: 'Termites', description: 'État relatif à la présence de termites' },
  { name: 'Habilitation électrique BE', description: 'Intervention sur installations électriques' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-4xl sm:text-5xl text-text">
              Certifications <span className="text-highlight">COFRAC</span>
            </h2>
            <p className="mt-3 text-text-secondary">
              Toutes les certifications délivrées par un organisme accrédité COFRAC.
              Titre professionnel Diagnostiqueur Immobilier (RNCP 38469, niveau 5).
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 0.04} className="h-full">
              <div className={`h-full flex items-start gap-3 rounded-md border p-4 transition-colors ${
                cert.highlight
                  ? 'border-accent/30 bg-accent-light/50'
                  : 'border-border bg-surface'
              }`}>
                <div className={`flex items-center justify-center h-9 w-9 rounded-full shrink-0 ${
                  cert.highlight ? 'bg-accent text-white' : 'bg-stone-100 text-accent'
                }`}>
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-text">{cert.name}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{cert.description}</p>
                  {cert.highlight && (
                    <Badge variant="accent" className="mt-2">Périmètre élargi</Badge>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
