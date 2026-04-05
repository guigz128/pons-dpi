import { faqItems } from '../../content/faq'
import Accordion from '../ui/Accordion'
import ScrollReveal from '../ui/ScrollReveal'

export default function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl text-text">
              Questions fréquentes
            </h2>
            <p className="mt-3 text-text-secondary">
              Les réponses aux questions les plus courantes sur les diagnostics immobiliers.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion items={faqItems} />
        </ScrollReveal>
      </div>
    </section>
  )
}
