// Prix unitaires marché Montpellier 2026
export const pricing = {
  dpe: { base: 150, label: 'DPE' },
  amiante: { base: 120, label: 'Amiante (vente)' },
  plomb: { base: 130, label: 'Plomb (CREP)' },
  electricite: { base: 100, label: 'Électricité' },
  gaz: { base: 100, label: 'Gaz' },
  termites: { base: 100, label: 'Termites' },
  erp: { base: 20, label: 'ERP' },
  carrez: { base: 90, label: 'Mesurage Carrez' },
  boutin: { base: 80, label: 'Surface habitable (Boutin)' },
  assainissement: { base: 150, label: 'Assainissement' },
}

// Diagnostics premium : toujours facturés au prix unitaire, jamais inclus dans un pack
const PREMIUM_DIAGS = ['assainissement']

// Packs définis du plus grand au plus petit (on matche le plus gros d'abord)
const PACKS = [
  {
    id: 'vente_maison',
    name: 'Pack Vente Maison',
    items: ['dpe', 'amiante', 'electricite', 'gaz', 'termites', 'erp'],
    price: 380,
  },
  {
    id: 'vente_appart',
    name: 'Pack Vente Appartement',
    items: ['dpe', 'amiante', 'electricite', 'gaz', 'erp', 'carrez'],
    price: 290,
  },
  {
    id: 'location',
    name: 'Pack Location',
    items: ['dpe', 'electricite', 'gaz', 'erp', 'boutin'],
    price: 200,
  },
]

function findBestPack(diags) {
  const standardDiags = diags.filter((d) => !PREMIUM_DIAGS.includes(d))

  for (const pack of PACKS) {
    const allPackItemsPresent = pack.items.every((item) => standardDiags.includes(item))
    if (allPackItemsPresent) {
      const extraStandard = standardDiags.filter((d) => !pack.items.includes(d))
      const premiumInDiags = diags.filter((d) => PREMIUM_DIAGS.includes(d))
      return {
        pack,
        extraDiags: [...extraStandard, ...premiumInDiags],
      }
    }
  }

  return null
}

export function calculateTotal(diags) {
  const subtotal = diags.reduce((sum, d) => sum + (pricing[d]?.base || 0), 0)

  // Essayer de matcher un pack
  const packMatch = findBestPack(diags)

  if (packMatch) {
    const { pack, extraDiags } = packMatch
    const extrasTotal = extraDiags.reduce((sum, d) => sum + (pricing[d]?.base || 0), 0)
    const total = pack.price + extrasTotal
    const saving = subtotal - total

    return {
      subtotal,
      total,
      saving,
      packName: pack.name,
      packPrice: pack.price,
      packItems: pack.items,
      extraDiags,
    }
  }

  // Pas de pack : remise au volume sur les diagnostics standard
  const standardDiags = diags.filter((d) => !PREMIUM_DIAGS.includes(d))
  const standardTotal = standardDiags.reduce((sum, d) => sum + (pricing[d]?.base || 0), 0)
  const premiumTotal = diags
    .filter((d) => PREMIUM_DIAGS.includes(d))
    .reduce((sum, d) => sum + (pricing[d]?.base || 0), 0)

  let discount = 0
  if (standardDiags.length >= 4) discount = 15
  else if (standardDiags.length >= 3) discount = 10

  const discountedStandard = Math.round(standardTotal * (1 - discount / 100))
  const total = discountedStandard + premiumTotal
  const saving = subtotal - total

  return {
    subtotal,
    total,
    saving,
    discount,
    packName: null,
    packItems: [],
    extraDiags: [],
  }
}
