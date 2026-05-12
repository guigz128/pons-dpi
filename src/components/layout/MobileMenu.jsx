import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, MessageCircle, Sparkles } from 'lucide-react'

export default function MobileMenu({ open, onClose, links }) {
  const location = useLocation()

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden border-t border-border bg-surface"
          aria-label="Menu mobile"
        >
          <div className="px-4 py-4 space-y-1">
            {links.map(({ to, label, external, highlight }) => {
              const isActive = location.pathname === to
              const className = highlight
                ? `flex items-center gap-2 px-3 py-2.5 text-base font-semibold rounded-sm transition-colors ${
                    isActive ? 'bg-accent text-white' : 'bg-accent-light text-accent'
                  }`
                : `block px-3 py-2.5 text-base font-medium rounded-sm transition-colors ${
                    isActive
                      ? 'text-accent bg-accent-light'
                      : 'text-text-secondary hover:text-text hover:bg-stone-100'
                  }`
              const content = highlight ? (
                <>
                  <Sparkles className="h-4 w-4" />
                  {label}
                </>
              ) : (
                label
              )
              return external ? (
                <a key={to} href={to} onClick={onClose} className={className}>{content}</a>
              ) : (
                <Link key={to} to={to} onClick={onClose} className={className}>{content}</Link>
              )
            })}
            <hr className="my-3 border-border" />
            <a
              href="tel:0651669161"
              className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-text"
            >
              <Phone className="h-5 w-5 text-accent" />
              06 51 66 91 61
            </a>
            <a
              href="https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-text"
            >
              <MessageCircle className="h-5 w-5 text-whatsapp" />
              WhatsApp
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
