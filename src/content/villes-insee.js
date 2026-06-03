export const VILLE_INSEE = {
  'montpellier': '34172',
  'castelnau-le-lez': '34057',
  'le-cres': '34090',
  'jacou': '34120',
  'clapiers': '34077',
  'grabels': '34116',
  'juvignac': '34123',
  'saint-jean-de-vedas': '34270',
  'lattes': '34129',
  'perols': '34198',
  'mauguio': '34154',
  'palavas-les-flots': '34192',
  'villeneuve-les-maguelone': '34337',
  'pignan': '34202',
  'fabregues': '34095',
  'cournonterral': '34088',
  'saint-georges-d-orques': '34254',
  'prades-le-lez': '34217',
  'saint-clement-de-riviere': '34247',
  'saint-gely-du-fesc': '34255',
  'lunel': '34145',
  'sete': '34301',
  'frontignan': '34108',
  'beziers': '34032',
}

export function getInseeBySlug(slug) {
  return VILLE_INSEE[slug] || null
}
