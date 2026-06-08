import { Helmet } from 'react-helmet-async'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../components/ui/Button'
import RapportMission from '../components/rapport/RapportMission'
import { demo } from '../content/rapports'

export default function RapportExemple() {
  return (
    <>
      <Helmet>
        <title>Exemple de rapport client | Pons DPI</title>
        <meta
          name="description"
          content="Aperçu du rapport client Pons DPI : synthèse claire, scénarios de travaux chiffrés, aides estimées, plan d'action. Bien plus qu'un PDF officiel."
        />
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      {/* Bannière démo */}
      <div className="border-b border-border bg-accent-light print:hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold">Exemple de rapport client</p>
              <p className="text-xs text-text-secondary">
                Aperçu réaliste de ce que vous recevez après votre intervention. Données fictives à
                but démonstratif.
              </p>
            </div>
          </div>
          <Button to="/devis" size="sm">
            Demander mon devis <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <RapportMission data={demo} />
    </>
  )
}
