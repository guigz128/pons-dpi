import { Helmet } from 'react-helmet-async'
import { Home } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page non trouvée | Pons DPI</title>
      </Helmet>

      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-md px-4 text-center">
          <p className="text-6xl font-bold text-accent">404</p>
          <h1 className="font-display mt-4 text-2xl text-text">Page non trouvée</h1>
          <p className="mt-3 text-text-secondary">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button to="/" className="mt-8">
            <Home className="h-4 w-4" />
            Retour à l'accueil
          </Button>
        </div>
      </section>
    </>
  )
}
