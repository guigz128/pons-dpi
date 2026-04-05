import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-accent text-white/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-1.5 mb-4">
              <span className="font-display text-xl text-white">Pons</span>
              <span className="font-display text-xl text-accent-light">DPI</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Diagnostics immobiliers à Montpellier et environs. Réactivité, clarté, expertise.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services#dpe" className="hover:text-white transition-colors">DPE</Link></li>
              <li><Link to="/services#amiante" className="hover:text-white transition-colors">Amiante</Link></li>
              <li><Link to="/services#plomb" className="hover:text-white transition-colors">Plomb (CREP)</Link></li>
              <li><Link to="/services#electricite" className="hover:text-white transition-colors">Électricité</Link></li>
              <li><Link to="/services#gaz" className="hover:text-white transition-colors">Gaz</Link></li>
              <li><Link to="/services#termites" className="hover:text-white transition-colors">Termites</Link></li>
              <li><Link to="/devis" className="hover:text-white transition-colors">Devis en ligne</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:0651669161" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  06 51 66 91 61
                </a>
              </li>
              <li>
                <a href="mailto:contact@pons-dpi.fr" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 shrink-0" />
                  contact@pons-dpi.fr
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Montpellier et alentours (34)</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Informations
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Pons DPI — Tous droits réservés</p>
          <p>Certifications COFRAC — RNCP 38469</p>
        </div>
      </div>
    </footer>
  )
}
