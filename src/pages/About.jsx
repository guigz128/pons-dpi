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
          content="Guillaume Pons, futur diagnostiqueur immobilier indépendant à Montpellier. Formation Titre RNCP 38469 en cours, certifications COFRAC obtenues février-mars 2027. Activité officielle dès mars 2027."
        />
        <link rel="canonical" href="https://www.pons-dpi.fr/a-propos" />
      </Helmet>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl font-bold text-text">
              À propos de Pons DPI
            </h1>
            <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
              <p>
                Je suis Guillaume Pons, futur diagnostiqueur immobilier indépendant, basé dans la
                région près de Montpellier. Mon activité débutera officiellement en mars 2027,
                après obtention du Titre professionnel Diagnostiqueur Immobilier (RNCP 38469,
                niveau 5) et des certifications COFRAC associées (formation en cours nov 2026 →
                fév 2027). Je couvrirai l'ensemble de la métropole de Montpellier, du Gard sud
                et des communes voisines.
              </p>
              <p>
                À l'issue de la formation, je serai certifié par un organisme accrédité COFRAC
                pour l'ensemble des diagnostics immobiliers obligatoires : DPE, amiante, plomb,
                gaz, électricité et termites. Avec une habilitation électrique BE complémentaire,
                je couvrirai l'intégralité des diagnostics nécessaires à la vente et à la location
                d'un logement. Le site est en ligne dès maintenant pour préparer votre prochaine
                transaction et vous offrir un devis indicatif.
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
