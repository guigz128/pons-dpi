import { Phone, FileText, MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

export default function Cta() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-accent">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            Besoin d'un diagnostic immobilier ?
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Obtenez votre devis en ligne en 2 minutes. Intervention sous 48h,
            rapports clairs et conformes.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/devis" size="lg" className="bg-white text-accent hover:bg-accent-light">
              <FileText className="h-5 w-5" />
              Devis en ligne gratuit
            </Button>
            <Button variant="outline" size="lg" href="tel:0651669161" className="border-white/30 text-white hover:bg-white/10">
              <Phone className="h-5 w-5" />
              06 51 66 91 61
            </Button>
          </div>
          <div className="mt-4">
            <a
              href="https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-whatsapp" />
              Ou contactez-moi sur WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
