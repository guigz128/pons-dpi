import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Type, ChevronUp, ChevronDown, Check } from 'lucide-react'

import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Pricing from '../components/sections/Pricing'
import Process from '../components/sections/Process'
import Certifications from '../components/sections/Certifications'
import About from '../components/sections/About'
import Zone from '../components/sections/Zone'
import Faq from '../components/sections/Faq'
import Cta from '../components/sections/Cta'

/* ═══════════════════════════════════════════════════════════
   Palette inspirée de la réf Insurance (cream + royal blue)
══════════════════════════════════════════════════════════ */
const PALETTE = {
  '--color-bg': '#EDE6D3',
  '--color-surface': '#FAF5EB',
  '--color-text': '#0F172A',
  '--color-text-secondary': '#475569',
  '--color-border': '#DDD2B8',
  '--color-accent': '#1E3A8A',
  '--color-accent-hover': '#172E6B',
  '--color-accent-light': '#E4E9F5',
  '--color-highlight': '#1E3A8A',
  '--color-highlight-hover': '#172E6B',
  '--color-highlight-light': '#E4E9F5',
}

/* ═══════════════════════════════════════════════════════════
   Pairings Google Fonts à tester
══════════════════════════════════════════════════════════ */
const FONT_PAIRS = [
  {
    id: 'current',
    label: 'Actuel',
    description: 'Geist + Bricolage Grotesque',
    sans: '"Geist", ui-sans-serif, system-ui, sans-serif',
    display: '"Bricolage Grotesque", "Geist", sans-serif',
    google: null,
  },
  {
    id: 'inter-fraunces',
    label: 'Inter + Fraunces',
    description: 'Clean modern + editorial serif',
    sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
    display: '"Fraunces", "Inter", serif',
    google:
      'family=Inter:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..900',
  },
  {
    id: 'jakarta-playfair',
    label: 'Plus Jakarta + Playfair',
    description: 'Friendly geometric + classic serif',
    sans: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif',
    display: '"Playfair Display", "Plus Jakarta Sans", serif',
    google:
      'family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900',
  },
  {
    id: 'manrope-instrument',
    label: 'Manrope + Instrument Serif',
    description: 'Neutre + editorial italique',
    sans: '"Manrope", ui-sans-serif, system-ui, sans-serif',
    display: '"Instrument Serif", "Manrope", serif',
    google:
      'family=Manrope:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1',
  },
  {
    id: 'dmsans-dmserif',
    label: 'DM Sans + DM Serif',
    description: 'Pairing Google officiel',
    sans: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
    display: '"DM Serif Display", "DM Sans", serif',
    google:
      'family=DM+Sans:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1',
  },
  {
    id: 'space-eb',
    label: 'Space Grotesk + EB Garamond',
    description: 'Technique + classique intemporel',
    sans: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
    display: '"EB Garamond", "Space Grotesk", serif',
    google:
      'family=Space+Grotesk:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400..800;1,400..800',
  },
  {
    id: 'outfit-lora',
    label: 'Outfit + Lora',
    description: 'Rond moderne + serif lisible',
    sans: '"Outfit", ui-sans-serif, system-ui, sans-serif',
    display: '"Lora", "Outfit", serif',
    google:
      'family=Outfit:wght@400;500;600;700;800&family=Lora:ital,wght@0,400..700;1,400..700',
  },
  {
    id: 'figtree-fraunces',
    label: 'Figtree + Fraunces',
    description: 'Chaleureux + expressif',
    sans: '"Figtree", ui-sans-serif, system-ui, sans-serif',
    display: '"Fraunces", "Figtree", serif',
    google:
      'family=Figtree:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..900',
  },
]

/* ═══════════════════════════════════════════════════════════
   HomeTest — mêmes sections que la home live,
   juste les tokens de couleur et de font sont overridés
══════════════════════════════════════════════════════════ */
export default function HomeTest() {
  const [pairId, setPairId] = useState(() => {
    if (typeof window === 'undefined') return 'inter-fraunces'
    return localStorage.getItem('ponsdpi-font-pair') || 'inter-fraunces'
  })

  const pair = FONT_PAIRS.find((p) => p.id === pairId) || FONT_PAIRS[0]

  useEffect(() => {
    localStorage.setItem('ponsdpi-font-pair', pairId)
  }, [pairId])

  useEffect(() => {
    if (!pair.google) return
    const id = `gf-${pair.id}`
    if (document.getElementById(id)) return

    const preconnect1 = document.createElement('link')
    preconnect1.rel = 'preconnect'
    preconnect1.href = 'https://fonts.googleapis.com'
    const preconnect2 = document.createElement('link')
    preconnect2.rel = 'preconnect'
    preconnect2.href = 'https://fonts.gstatic.com'
    preconnect2.crossOrigin = 'anonymous'

    const link = document.createElement('link')
    link.id = id
    link.rel = 'stylesheet'
    link.href = `https://fonts.googleapis.com/css2?${pair.google}&display=swap`

    document.head.appendChild(preconnect1)
    document.head.appendChild(preconnect2)
    document.head.appendChild(link)
  }, [pair])

  return (
    <>
      <Helmet>
        <title>Pons DPI — Test design</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div
        style={{
          ...PALETTE,
          '--font-sans': pair.sans,
          '--font-display': pair.display,
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-text)',
          fontFamily: pair.sans,
        }}
      >
        <Hero />
        <Services />
        <Pricing />
        <Process />
        <Certifications />
        <About />
        <Zone />
        <Faq />
        <Cta />
      </div>

      <FontToggle pairs={FONT_PAIRS} activeId={pairId} onChange={setPairId} />
    </>
  )
}

/* ═══════════════════════════════════════════════════════════
   Font Toggle — panneau flottant bas droite
══════════════════════════════════════════════════════════ */
function FontToggle({ pairs, activeId, onChange }) {
  const [open, setOpen] = useState(false)
  const active = pairs.find((p) => p.id === activeId) || pairs[0]

  return (
    <div className="fixed bottom-5 right-5 z-[60] font-sans" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {open && (
        <div className="mb-2 w-72 rounded-2xl bg-white shadow-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-stone-100 flex items-center gap-2">
            <Type className="h-4 w-4 text-stone-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Test de fonts
            </span>
          </div>
          <div className="max-h-96 overflow-y-auto py-1">
            {pairs.map((p) => {
              const isActive = p.id === activeId
              return (
                <button
                  key={p.id}
                  onClick={() => onChange(p.id)}
                  className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors ${
                    isActive ? 'bg-stone-50' : 'hover:bg-stone-50'
                  }`}
                >
                  <span className="mt-0.5 h-4 w-4 shrink-0 inline-flex items-center justify-center">
                    {isActive && <Check className="h-4 w-4 text-blue-600" />}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span
                      className="block text-[15px] font-semibold text-stone-900 truncate"
                      style={{ fontFamily: p.sans }}
                    >
                      {p.label}
                    </span>
                    <span
                      className="block text-[13px] text-stone-500 truncate"
                      style={{ fontFamily: p.display }}
                    >
                      {p.description}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-white px-4 py-2.5 text-sm font-semibold shadow-xl hover:bg-stone-800 transition-colors"
      >
        <Type className="h-4 w-4" />
        <span className="hidden sm:inline">{active.label}</span>
        {open ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
      </button>
    </div>
  )
}
