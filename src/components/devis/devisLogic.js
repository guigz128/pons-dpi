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

  // Amiante : vente d'un bien construit avant 1997
  if (annee < 1997 && transaction === 'vente') diags.push('amiante')

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
]

export const TRANSACTIONS = [
  { value: 'vente', label: 'Vente' },
  { value: 'location', label: 'Location' },
]
