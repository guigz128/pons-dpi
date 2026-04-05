import { Phone, FileText, MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

export default function Cta() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-stone-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Besoin d'un diagnostic immobilier ?
          </h2>
          <p className="mt-4 text-stone-400 leading-relaxed">
            Obtenez votre devis en ligne en 2 minutes. Intervention sous 48h,
            rapports clairs et conformes.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/devis" size="lg">
              <FileText className="h-5 w-5" />
              Devis en ligne gratuit
            </Button>
            <Button variant="outline" size="lg" href="tel:0651669161" className="border-stone-600 text-white hover:bg-stone-800">
              <Phone className="h-5 w-5" />
              06 51 66 91 61
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:bg-stone-800"
            >
              <MessageCircle className="h-5 w-5 text-whatsapp" />
              WhatsApp
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
