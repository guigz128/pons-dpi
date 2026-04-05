import { isZoneTermites } from '../../content/zone'

export function getDiagnosticsObligatoires({
  typeBien,
  transaction,
  annee,
  surface,
  copro,
  codePostal,
  hasGaz,
}) {
  const diags = []
  const currentYear = new Date().getFullYear()

  // DPE obligatoire pour tous les biens > 50 m²
  if (surface >= 50) diags.push('dpe')

  // Amiante : selon transaction et année de construction
  if (annee < 1997) {
    if (transaction === 'vente') diags.push('amiante')
    if (transaction === 'avant_travaux') diags.push('amiante_avant_travaux')
    if (transaction === 'avant_demolition') diags.push('amiante_avant_demolition')
  }

  // Plomb : avant 1949
  if (annee < 1949) diags.push('plomb')

  // Électricité : installation > 15 ans
  if (currentYear - annee > 15) diags.push('electricite')

  // Gaz : installation > 15 ans ET le bien a une installation gaz
  if (currentYear - annee > 15 && hasGaz !== false) diags.push('gaz')

  // Termites : zone arrêté préfectoral
  if (isZoneTermites(codePostal)) diags.push('termites')

  // ERP : toujours
  diags.push('erp')

  // Mesurage Carrez : vente + copropriété
  if (transaction === 'vente' && copro) diags.push('carrez')

  // Surface habitable Boutin : location
  if (transaction === 'location') diags.push('boutin')

  return diags
}

export const ANNEE_TRANCHES = [
  { value: 1900, label: 'Avant 1949' },
  { value: 1970, label: '1949 - 1997' },
  { value: 2005, label: 'Après 1997' },
]

export const TYPE_BIENS = [
  { value: 'maison', label: 'Maison' },
  { value: 'appartement', label: 'Appartement' },
  { value: 'local_commercial', label: 'Local commercial' },
  { value: 'bureau_tertiaire', label: 'Bureau / Tertiaire' },
]

export const TRANSACTIONS = [
  { value: 'vente', label: 'Vente' },
  { value: 'location', label: 'Location' },
  { value: 'avant_travaux', label: 'Avant travaux' },
  { value: 'avant_demolition', label: 'Avant démolition' },
]
