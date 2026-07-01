// ─────────────────────────────────────────────────────────────────────────
// SOURCE DE VÉRITÉ DU THÈME PONS DPI
// ─────────────────────────────────────────────────────────────────────────
// Un seul thème pour les 3 surfaces : site vitrine, app carnet, blog.
//
// Pour CHANGER de thème :
//   1. Édite les valeurs d'un thème ci-dessous, OU ajoute une nouvelle palette.
//   2. Pointe `ACTIVE` sur le thème voulu.
//   3. Lance `npm run theme:sync` (depuis le repo pons-dpi).
//      → propage les tokens dans vitrine + app + blog entre les marqueurs THEME.
//
// Règles de contraste (voir CLAUDE.md) : le texte blanc sur fond coloré utilise
// `accent` (AA-safe ~4,4:1), jamais `highlight` (décoratif uniquement).
// ─────────────────────────────────────────────────────────────────────────

export const themes = {
  // Palette « Vert santé » — confiance, santé du bâtiment, clarté.
  vertSante: {
    fonts: {
      sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
      display: '"Figtree", "Inter", ui-sans-serif, system-ui, sans-serif',
    },
    colors: {
      // Neutres
      'bg': '#F3F7F3',              // fond page — vert très clair
      'surface': '#FFFFFF',         // cartes, modales
      'text': '#13241A',            // texte principal — vert-noir
      'text-secondary': '#5C6873',  // texte secondaire — gris ardoise
      'text-muted': '#94A3B8',      // légendes, crédits photo
      'border': '#E2E9E1',          // bordures

      // Accent — vert forêt, AA-safe (blanc dessus ~4,4:1)
      'accent': '#2E7D43',
      'accent-hover': '#246135',
      'accent-light': '#E8F3EA',

      // Highlight — vert vif, décoratif uniquement (jauges, accents non-textuels)
      'highlight': '#3DA35D',
      'highlight-hover': '#2E7D43',
      'highlight-light': '#E8F3EA',

      // Secondaire — terracotta, CTA secondaires, accents chauds
      'secondary': '#D9614A',
      'secondary-hover': '#C24A35',
      'secondary-light': '#FBECE7',

      // États
      'success': '#10B981',         // émeraude — confirmations, DPE A-B
      'warning': '#D97706',         // DPE D-E, alertes
      'danger': '#DC2626',          // DPE F-G, erreurs
      'whatsapp': '#25D366',        // token conservé (widget utilise `secondary`)
    },
    radius: {
      'sm': '10px',   // boutons, inputs
      'md': '16px',   // cartes
      'lg': '20px',   // modales, hero
    },
  },
}

// Thème actif propagé aux 3 surfaces.
export const ACTIVE = 'vertSante'
