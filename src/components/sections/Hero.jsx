import { Phone, MessageCircle, FileText, ChevronRight, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent-light to-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-border px-3 py-1 text-xs font-semibold text-accent mb-6">
              <Clock className="h-3.5 w-3.5" />
              Rapport sous 24 h
            </div>

            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
              Diagnostics et Performance Immobilière
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-text leading-[1.05]">
              Vos diagnostics immobiliers à{' '}
              <span className="text-highlight">Montpellier</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
              Devis en ligne en 2 minutes. Intervention sous 48 h. Rapport sous 24 h (jours ouvrés).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button to="/devis" size="lg">
              <FileText className="h-5 w-5" />
              Devis en ligne gratuit
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" href="tel:0651669161">
              <Phone className="h-5 w-5" />
              06 51 66 91 61
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 text-whatsapp" />
              WhatsApp
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
