import { cloneElement, useEffect } from 'react'

// Shim client de react-helmet-async (React 19).
//
// Pourquoi : en React 19, react-helmet-async rend <title>/<meta>/<link> comme
// des balises « hoistables » que React déplace vers le <head>. Avec un SSR de
// fragment (#root) + hydratation, ces balises provoquent un mismatch (erreur
// #418) et des doublons (la version SSG hissée dans le <head> par prerender +
// celle que React réinjecte au runtime).
//
// Ce shim remplace react-helmet-async côté CLIENT uniquement (cf. alias dans
// vite.config). Au SSR (entry-server), le vrai Helmet tourne et produit les
// balises, que scripts/prerender.mjs hisse dans le <head>. Côté client :
//   - les <script> (JSON-LD) sont rendus inline, à la même position que le SSR
//     → l'hydratation correspond, pas de #418 ;
//   - title / meta / link sont appliqués à document.head via un effet, en
//     mettant à jour les balises existantes (celles du SSG) → aucun doublon,
//     et la nav SPA reste correcte.

export function HelmetProvider({ children }) {
  return children
}

// react-helmet-async exporte aussi HelmetData ; on garde l'export pour la compat.
export class HelmetData {}

function textOf(children) {
  if (children == null || children === false) return ''
  if (typeof children === 'string' || typeof children === 'number') return String(children)
  if (Array.isArray(children)) return children.map(textOf).join('')
  return ''
}

function metaSelector(props) {
  if (props.name) return ['name', props.name]
  if (props.property) return ['property', props.property]
  if (props.httpEquiv) return ['http-equiv', props.httpEquiv]
  return null
}

function upsert(selector, create, apply) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  apply(el)
}

export function Helmet({ children }) {
  const els = []
  const walk = (c) => {
    if (Array.isArray(c)) c.forEach(walk)
    else if (c && typeof c === 'object' && c.type) els.push(c)
  }
  walk(children)

  // Les <script> (JSON-LD) restent dans l'arbre pour matcher le SSR.
  const scripts = els.filter((e) => e.type === 'script')
  // title / meta / link → appliqués au <head>.
  const headEls = els.filter((e) => e.type === 'title' || e.type === 'meta' || e.type === 'link')

  useEffect(() => {
    for (const el of headEls) {
      if (el.type === 'title') {
        const t = textOf(el.props.children)
        if (t) document.title = t
      } else if (el.type === 'meta') {
        const key = metaSelector(el.props)
        if (!key || el.props.content == null) continue
        upsert(
          `meta[${key[0]}="${cssEscape(key[1])}"]`,
          () => {
            const m = document.createElement('meta')
            m.setAttribute(key[0], key[1])
            return m
          },
          (m) => m.setAttribute('content', String(el.props.content)),
        )
      } else if (el.type === 'link') {
        if (!el.props.rel || el.props.href == null) continue
        upsert(
          `link[rel="${cssEscape(el.props.rel)}"]`,
          () => {
            const l = document.createElement('link')
            l.setAttribute('rel', el.props.rel)
            return l
          },
          (l) => l.setAttribute('href', String(el.props.href)),
        )
      }
    }
    // Pas de cleanup : title/description/canonical/og sont définis par chaque
    // page, donc systématiquement écrasés à la navigation suivante.
  })

  if (!scripts.length) return null
  return scripts.map((s, i) => cloneElement(s, { key: s.key ?? `helmet-script-${i}` }))
}

function cssEscape(value) {
  return String(value).replace(/"/g, '\\"')
}

export default Helmet
