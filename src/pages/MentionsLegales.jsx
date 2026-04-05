import { Helmet } from 'react-helmet-async'

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions légales | Pons DPI</title>
        <meta name="description" content="Mentions légales du site pons-dpi.fr — Pons DPI, diagnostics immobiliers à Montpellier." />
        <link rel="canonical" href="https://pons-dpi.fr/mentions-legales" />
      </Helmet>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl text-text mb-8">Mentions légales</h1>

          <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
            <div>
              <h2 className="font-display text-lg text-text mb-3">Éditeur du site</h2>
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
              <h2 className="font-display text-lg text-text mb-3">Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc.<br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">vercel.com</a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg text-text mb-3">Certifications</h2>
              <p>
                Guillaume Pons est titulaire de certifications délivrées par un organisme
                certificateur accrédité COFRAC pour les domaines suivants : DPE (avec et sans mention),
                amiante (avec et sans mention), plomb, gaz, électricité, termites.
                Habilitation électrique BE et certification amiante SS4.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg text-text mb-3">Assurance responsabilité civile professionnelle</h2>
              <p>
                Pons DPI est couvert par une assurance responsabilité civile professionnelle
                conforme aux exigences réglementaires applicables aux diagnostiqueurs immobiliers.
                Les coordonnées de l'assureur sont disponibles sur demande.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg text-text mb-3">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, mises en page)
                est la propriété exclusive de Pons DPI, sauf mention contraire.
                Toute reproduction, totale ou partielle, est interdite sans autorisation préalable.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg text-text mb-3">Protection des données personnelles (RGPD)</h2>
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
              <h2 className="font-display text-lg text-text mb-3">Crédits</h2>
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
