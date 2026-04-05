import { Helmet } from 'react-helmet-async'
import AboutSection from '../components/sections/About'
import Certifications from '../components/sections/Certifications'
import Zone from '../components/sections/Zone'
import Cta from '../components/sections/Cta'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>À propos — Guillaume Pons, diagnostiqueur immobilier | Pons DPI</title>
        <meta
          name="description"
          content="Guillaume Pons, diagnostiqueur immobilier certifié COFRAC à Montpellier. 8 certifications, DPE et amiante avec mention. Titre RNCP 38469."
        />
        <link rel="canonical" href="https://pons-dpi.fr/a-propos" />
      </Helmet>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-display text-3xl sm:text-4xl text-text">
              À propos de Pons DPI
            </h1>
            <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
              <p>
                Je suis Guillaume Pons, diagnostiqueur immobilier certifié, basé à Prades-le-Lez
                près de Montpellier. Titulaire du Titre professionnel Diagnostiqueur Immobilier
                (RNCP 38469, niveau 5), j'interviens sur l'ensemble de la métropole de Montpellier
                et du département de l'Hérault.
              </p>
              <p>
                Ce qui me différencie : mes certifications avec mention en DPE et en amiante,
                qui me permettent d'intervenir sur les bâtiments tertiaires, publics et industriels.
                Avec 8 certifications COFRAC et une habilitation électrique BE, je couvre l'intégralité
                des diagnostics obligatoires — pour les particuliers comme pour les professionnels.
              </p>
              <p>
                Mon approche est fondée sur trois piliers : la réactivité (intervention sous 48h),
                la clarté (des rapports lisibles, sans jargon) et la transparence (des tarifs affichés,
                sans surprise). Je suis joignable par téléphone, email ou WhatsApp pour répondre
                à toutes vos questions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AboutSection />
      <Certifications />
      <Zone />
      <Cta />
    </>
  )
}
