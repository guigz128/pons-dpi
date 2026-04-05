import { Phone, MessageCircle, FileText, ChevronRight, Shield, Clock, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const STATS = [
  { value: '8', label: 'Certifications COFRAC' },
  { value: '48h', label: 'Délai d\'intervention' },
  { value: '100%', label: 'Rapports conformes' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-accent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/90 mb-6">
              <Shield className="h-3.5 w-3.5" />
              Certifié COFRAC — DPE et amiante avec mention
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Diagnostics immobiliers à{' '}
              <span className="text-accent-light">Montpellier</span>
            </h1>

            <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-lg">
              Réactivité, clarté, expertise. Devis en ligne instantané, intervention sous 48h, rapports clairs et conformes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/devis" size="lg" className="bg-white text-accent hover:bg-accent-light">
                <FileText className="h-5 w-5" />
                Devis en ligne gratuit
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" href="tel:0651669161" className="border-white/30 text-white hover:bg-white/10">
                <Phone className="h-5 w-5" />
                06 51 66 91 61
              </Button>
            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-whatsapp" />
                Ou contactez-moi sur WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-1 gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-5 flex items-center gap-5"
                >
                  <span className="text-4xl font-display text-white">{stat.value}</span>
                  <span className="text-sm text-white/70">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:hidden mt-10 grid grid-cols-3 gap-3"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="text-center rounded-xl bg-white/10 border border-white/10 px-3 py-4">
              <p className="text-2xl font-display text-white">{stat.value}</p>
              <p className="text-xs text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
