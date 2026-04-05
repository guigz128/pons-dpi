import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/devis', label: 'Devis en ligne' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5">
            <span className="font-display text-xl text-text">Pons</span>
            <span className="font-display text-xl text-accent">DPI</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                  location.pathname === to
                    ? 'text-accent bg-accent-light'
                    : 'text-text-secondary hover:text-text hover:bg-surface-warm'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA phone + burger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0651669161"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              <Phone className="h-4 w-4" />
              <span>06 51 66 91 61</span>
            </a>
            <a
              href="tel:0651669161"
              className="sm:hidden inline-flex items-center justify-center rounded-full bg-accent p-2 text-white"
              aria-label="Appeler"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-text-secondary hover:bg-surface-warm"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </header>
  )
}
