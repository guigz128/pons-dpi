export const communes = [
  'Montpellier',
  'Castelnau-le-Lez',
  'Le Crès',
  'Jacou',
  'Clapiers',
  'Grabels',
  'Juvignac',
  'Saint-Jean-de-Védas',
  'Lattes',
  'Pérols',
  'Mauguio',
  'Palavas-les-Flots',
  'Villeneuve-lès-Maguelone',
  'Pignan',
  'Fabrègues',
  'Cournonterral',
  'Saint-Georges-d\'Orques',
  'Prades-le-Lez',
  'Saint-Clément-de-Rivière',
  'Saint-Gély-du-Fesc',
  'Lunel',
  'Sète',
  'Frontignan',
  'Béziers (ponctuel)',
]

// Codes postaux dans la zone termites (Hérault)
export const zonesTermites = [
  '34000', '34070', '34080', '34090', // Montpellier
  '34170', // Castelnau-le-Lez
  '34920', // Le Crès
  '34830', // Jacou
  '34830', // Clapiers
  '34790', // Grabels
  '34990', // Juvignac
  '34430', // Saint-Jean-de-Védas
  '34970', // Lattes
  '34470', // Pérols
  '34130', // Mauguio
  '34250', // Palavas-les-Flots
  '34750', // Villeneuve-lès-Maguelone
  '34570', // Pignan
  '34690', // Fabrègues
  '34660', // Cournonterral
  '34680', // Saint-Georges-d'Orques
  '34730', // Prades-le-Lez
  '34980', // Saint-Clément-de-Rivière / Saint-Gély-du-Fesc
  '34400', // Lunel
  '34200', // Sète
  '34110', // Frontignan
]

export function isZoneTermites(codePostal) {
  // L'Hérault est globalement en zone termites
  return codePostal?.startsWith('34') ?? false
}
