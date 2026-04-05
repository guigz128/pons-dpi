import { ShieldCheck } from 'lucide-react'
import Badge from '../ui/Badge'
import ScrollReveal from '../ui/ScrollReveal'

const CERTIFICATIONS = [
  { name: 'DPE sans mention', description: 'Logements individuels et collectifs' },
  { name: 'DPE avec mention', description: 'Bâtiments tertiaires, publics, industriels', highlight: true },
  { name: 'Amiante sans mention', description: 'Repérage vente, DTA, DAPP' },
  { name: 'Amiante avec mention', description: 'Avant travaux, avant démolition, IGH, ERP', highlight: true },
  { name: 'Amiante SS4', description: 'Opérateur de chantier — interventions sur matériaux amiantés' },
  { name: 'Plomb', description: 'Constat de Risque d\'Exposition au Plomb (CREP)' },
  { name: 'Gaz', description: 'État de l\'installation intérieure de gaz' },
  { name: 'Électricité', description: 'État de l\'installation intérieure d\'électricité' },
  { name: 'Termites', description: 'État relatif à la présence de termites' },
  { name: 'Habilitation électrique BE', description: 'Intervention sur installations électriques' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-surface-warm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Qualifications</p>
            <h2 className="font-display text-3xl sm:text-4xl text-text">
              Certifications COFRAC
            </h2>
            <p className="mt-3 text-text-secondary">
              Toutes les certifications délivrées par un organisme accrédité COFRAC.
              Titre professionnel Diagnostiqueur Immobilier (RNCP 38469, niveau 5).
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className={`flex items-start gap-3 rounded-2xl border p-5 transition-colors ${
                cert.highlight
                  ? 'border-accent/30 bg-accent-light'
                  : 'border-border bg-surface'
              }`}>
                <div className={`flex items-center justify-center h-9 w-9 rounded-full shrink-0 ${
                  cert.highlight ? 'bg-accent text-white' : 'bg-surface-warm text-accent'
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
