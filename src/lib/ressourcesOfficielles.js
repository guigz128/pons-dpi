import { getInseeBySlug } from '../content/villes-insee'

/**
 * Construit la liste des ressources officielles d'une commune, à partir de son
 * code INSEE (deeplinks fiables, sans maintenance) + son nom.
 *
 * Toutes les sources sont gouvernementales / publiques et ouvertes en dofollow
 * (target="_blank" rel="noopener"). But SEO : différencier les pages communes
 * (anti thin-content, E-E-A-T local), tout en rendant service au visiteur.
 *
 * @param {{ slug: string, name: string }} ville
 * @returns {Array<{ key: string, label: string, description: string, href: string, source: string }>}
 */
export function getRessourcesOfficielles(ville) {
  if (!ville?.slug) return []
  const insee = getInseeBySlug(ville.slug)
  const name = ville.name || ''
  const nameEnc = encodeURIComponent(name)

  const resources = []

  // Mairie — annuaire officiel de l'administration (toujours à jour)
  if (name) {
    resources.push({
      key: 'mairie',
      label: `Mairie de ${name}`,
      description: 'Coordonnées, horaires et démarches en mairie via l’annuaire officiel.',
      href: `https://lannuaire.service-public.gouv.fr/recherche?whoWhat=mairie&where=${nameEnc}`,
      source: 'service-public.gouv.fr',
    })
  }

  // Les ressources suivantes sont deeplinkées par code INSEE
  if (insee) {
    resources.push({
      key: 'georisques',
      label: `Risques à ${name}`,
      description: 'Rapport Géorisques : inondation, retrait-gonflement des argiles, sismicité, radon…',
      href: `https://www.georisques.gouv.fr/mes-risques/connaitre-les-risques-pres-de-chez-moi/rapport2?city=${nameEnc}&codeInsee=${insee}`,
      source: 'georisques.gouv.fr',
    })

    resources.push({
      key: 'insee',
      label: `Chiffres clés de ${name}`,
      description: 'Dossier complet INSEE : population, logements, résidences principales et secondaires.',
      href: `https://www.insee.fr/fr/statistiques/2011101?geo=COM-${insee}`,
      source: 'insee.fr',
    })

    resources.push({
      key: 'dvf',
      label: `Prix de l’immobilier à ${name}`,
      description: 'Valeurs foncières réelles (DVF) des transactions enregistrées sur la commune.',
      href: `https://explore.data.gouv.fr/fr/immobilier?code=${insee}&level=commune`,
      source: 'data.gouv.fr',
    })
  }

  // Observatoire DPE national (source des statistiques DPE affichées sur la page)
  resources.push({
    key: 'ademe',
    label: 'Observatoire DPE-Audit',
    description: 'La base nationale des DPE réalisés, publiée par l’ADEME.',
    href: 'https://observatoire-dpe-audit.ademe.fr/',
    source: 'ademe.fr',
  })

  return resources
}
