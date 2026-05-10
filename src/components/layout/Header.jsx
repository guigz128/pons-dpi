import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/devis', label: 'Devis en ligne' },
  { to: 'https://pons-dpi.fr/blog/', label: 'Blog', external: true },
  { to: '/a-propos', label: 'À propos' },
  { to: '/professionnels', label: 'Espace pros' },
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
          <Link to="/" className="flex items-center gap-2">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold tracking-tight text-text">Pons</span>
                <span className="text-xl font-bold tracking-tight text-accent">DPI</span>
              </div>
              <p className="text-[10px] tracking-wide text-text-secondary -mt-1 hidden sm:block">
                Diagnostics et Performance Immobilière
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
            {NAV_LINKS.map(({ to, label, external }) => {
              const isActive = location.pathname === to
              const className = `px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] rounded-full transition-colors ${
                isActive
                  ? 'text-accent bg-accent-light'
                  : 'text-text-secondary hover:text-text hover:bg-stone-100'
              }`
              return external ? (
                <a key={to} href={to} className={className}>{label}</a>
              ) : (
                <Link key={to} to={to} className={className}>{label}</Link>
              )
            })}
          </nav>

          {/* CTA phone + burger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0651669161"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
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
              className="md:hidden inline-flex items-center justify-center rounded-sm p-2 text-text-secondary hover:bg-stone-100"
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
