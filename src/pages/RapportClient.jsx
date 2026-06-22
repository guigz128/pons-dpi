import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { Lock, ArrowLeft } from 'lucide-react'
import RapportMission from '../components/rapport/RapportMission'
import { getRapport } from '../content/rapports'

export default function RapportClient() {
  const { slug } = useParams()
  const data = getRapport(slug)

  if (!data) {
    return (
      <>
        <Helmet>
          <title>Rapport introuvable | Pons DPI</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <div className="mx-auto max-w-xl px-4 py-24 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-stone-100">
            <Lock className="h-6 w-6 text-text-secondary" />
          </div>
          <h1 className="font-display text-2xl">Ce rapport n'existe pas ou n'est plus accessible</h1>
          <p className="mt-3 text-text-secondary">
            Le lien que vous avez utilisé est peut-être incomplet ou expiré. Contactez votre
            diagnostiqueur pour recevoir un nouveau lien.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{`Rapport ${data.mission.reference} | Pons DPI`}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/* Bandeau confidentialité */}
      <div className="border-b border-border bg-stone-100 print:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Lock className="h-4 w-4 shrink-0 text-text-secondary" />
          <p className="text-xs text-text-secondary">
            Document confidentiel destiné au propriétaire et à ses mandataires. Lien privé — merci de
            ne pas le diffuser publiquement.
          </p>
        </div>
      </div>

      <RapportMission data={data} />
    </>
  )
}
