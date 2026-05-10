import { Helmet } from 'react-helmet-async'

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions légales | Pons DPI</title>
        <meta name="description" content="Mentions légales du site pons-dpi.fr — Pons DPI, diagnostics immobiliers à Montpellier." />
        <link rel="canonical" href="https://www.pons-dpi.fr/mentions-legales" />
      </Helmet>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-text mb-8">Mentions légales</h1>

          <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-text mb-3">Éditeur du site</h2>
              <p>
                <strong>Pons DPI — Diagnostics et Performance Immobilière</strong><br />
                Guillaume Pons<br />
                Diagnostiqueur immobilier<br />
                Titre professionnel RNCP 38469 — Niveau 5<br /><br />
                Téléphone : <a href="tel:0651669161" className="text-accent hover:underline">06 51 66 91 61</a><br />
                Email : <a href="mailto:contact@pons-dpi.fr" className="text-accent hover:underline">contact@pons-dpi.fr</a><br />
                Site : <a href="https://pons-dpi.fr" className="text-accent hover:underline">pons-dpi.fr</a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text mb-3">Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc.<br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">vercel.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text mb-3">Statut et activité</h2>
              <p>
                Le site pons-dpi.fr est en ligne dès maintenant pour préparer le lancement
                de l'activité officielle, prévu en mars 2027. Guillaume Pons suit actuellement
                une formation au Titre professionnel Diagnostiqueur Immobilier (RNCP 38469,
                niveau 5) et obtiendra les certifications COFRAC associées (DPE, amiante,
                plomb, gaz, électricité, termites) entre février et mars 2027. Aucune mission
                de diagnostic ne pourra être réalisée avant cette date. Les devis fournis sur
                le site sont indicatifs et permettent de pré-réserver une mission au démarrage
                de l'activité.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text mb-3">Certifications visées (mars 2027)</h2>
              <p>
                À l'issue de la formation, Guillaume Pons sera titulaire de certifications
                délivrées par un organisme certificateur accrédité COFRAC pour les domaines
                suivants : DPE, amiante, plomb, gaz, électricité, termites. Habilitation
                électrique BE complémentaire.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text mb-3">Assurance responsabilité civile professionnelle</h2>
              <p>
                Une assurance responsabilité civile professionnelle, conforme aux exigences
                réglementaires applicables aux diagnostiqueurs immobiliers, sera souscrite
                au démarrage de l'activité (mars 2027). Les coordonnées de l'assureur seront
                publiées sur cette page à cette date.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text mb-3">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, mises en page)
                est la propriété exclusive de Pons DPI, sauf mention contraire.
                Toute reproduction, totale ou partielle, est interdite sans autorisation préalable.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text mb-3">Protection des données personnelles (RGPD)</h2>
              <p>
                Les données collectées via le formulaire de contact sont utilisées uniquement
                pour répondre à votre demande. Elles ne sont ni cédées ni vendues à des tiers.
              </p>
              <p className="mt-2">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un
                droit d'accès, de rectification, d'effacement et de portabilité de vos données.
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@pons-dpi.fr" className="text-accent hover:underline">contact@pons-dpi.fr</a>.
              </p>
              <p className="mt-2">
                Ce site n'utilise pas de cookies publicitaires. Si un outil d'analyse
                est utilisé (Plausible ou Umami), il fonctionne sans cookies et respecte
                le RGPD sans nécessité de bandeau de consentement.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text mb-3">Crédits</h2>
              <p>
                Site conçu et développé par Guillaume Pons.<br />
                Icônes : Lucide Icons (licence MIT).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
