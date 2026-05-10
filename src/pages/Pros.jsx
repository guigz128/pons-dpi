import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  FileCheck,
  Headphones,
  Percent,
  UserCheck,
  Sparkles,
} from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ScrollReveal from '../components/ui/ScrollReveal'

const BENEFITS = [
  {
    icon: Clock,
    title: 'Réactivité 48 h confirmée',
    description: "Engagement contractuel sur le délai d'intervention. Vos transactions ne sont jamais bloquées par l'attente d'un diagnostic.",
  },
  {
    icon: FileCheck,
    title: 'Rapport sous 24 h (j. ouvrés)',
    description: "Vos clients reçoivent leur rapport en 24 heures ouvrées. Vous gagnez du temps sur chaque dossier de vente ou location.",
  },
  {
    icon: Headphones,
    title: 'Communication directe',
    description: 'WhatsApp et téléphone direct. Pas de standard, pas de relance perdue. Un interlocuteur unique pour tous vos dossiers.',
  },
  {
    icon: Percent,
    title: 'Tarifs négociés selon volume',
    description: "Au-delà de 3 missions par mois, jusqu'à -20 % sur la grille standard. Grille dédiée disponible sur demande.",
  },
  {
    icon: UserCheck,
    title: 'Pas de relance client',
    description: "Je gère le contact direct avec le vendeur ou le bailleur : prise de RDV, accès au bien, retours. Vous pilotez la transaction, pas le diagnostic.",
  },
  {
    icon: Sparkles,
    title: 'Outils digitaux modernes',
    description: 'Devis en ligne instantané, suivi de mission, transmission directe au notaire ou au syndic. Tout digital, rien à scanner.',
  },
]

const PROCESS = [
  {
    step: 1,
    title: 'Vous transmettez le mandat',
    description: 'Par email, WhatsApp ou via votre logiciel métier. Coordonnées du vendeur, adresse, type de transaction.',
  },
  {
    step: 2,
    title: 'Je contacte le vendeur sous 24 h',
    description: "Prise de RDV directe avec le vendeur ou le bailleur. Vous êtes informé en copie, sans relance à faire.",
  },
  {
    step: 3,
    title: 'Intervention sous 48 h',
    description: "Diagnostics réalisés sur site en une seule visite. Durée moyenne 1 à 3 h selon le bien.",
  },
  {
    step: 4,
    title: 'Rapport remis sous 24 h',
    description: 'Envoyé en simultané à vous, au vendeur et au notaire. Format PDF normé, prêt pour le compromis.',
  },
]

export default function Pros() {
  const url = 'https://www.pons-dpi.fr/professionnels'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: "Diagnostics immobiliers pour les professionnels de l'immobilier",
    description:
      "Diagnostics immobiliers pour les agences immobilières, notaires et syndics à Montpellier. Réactivité contractuelle, rapport sous 24 h, communication directe, tarifs négociés selon volume.",
    provider: {
      '@type': 'LocalBusiness',
      name: 'Pons DPI',
      url: 'https://www.pons-dpi.fr/',
    },
    areaServed: {
      '@type': 'City',
      name: 'Montpellier',
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: "Agences immobilières, notaires et syndics",
    },
  }

  return (
    <>
      <Helmet>
        <title>Espace pros — Agences, notaires, syndics | Pons DPI</title>
        <meta
          name="description"
          content="Diagnostics immobiliers pour les agences, notaires et syndics à Montpellier. Réactivité 48 h, rapport sous 24 h, communication directe, tarifs négociés selon volume."
        />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Espace pros — Pons DPI" />
        <meta
          property="og:description"
          content="Diagnostiqueur immobilier partenaire pour les agences, notaires et syndics à Montpellier."
        />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="fr_FR" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-light to-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>

            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
              Pour les pros de l'immobilier
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text leading-[1.05]">
              Diagnostiqueur partenaire pour <span className="text-highlight">agences, notaires et syndics</span>
            </h1>

            <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Réactivité 48 h confirmée. Rapport sous 24 h. Communication directe par WhatsApp.
              Une seule personne, joignable, qui gère le contact vendeur de bout en bout.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact?type=pro" size="lg">
                Discuter d'un partenariat
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="tel:0651669161" variant="outline" size="lg">
                <Phone className="h-5 w-5" />
                06 51 66 91 61
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl text-text">
                Pourquoi me confier vos missions ?
              </h2>
              <p className="mt-3 text-text-secondary">
                Six engagements concrets, vérifiables sur chaque dossier.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <Card className="h-full">
                    <div className="flex items-center justify-center h-11 w-11 rounded-md bg-accent-light text-accent mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-text">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl text-text">
                Comment ça se passe
              </h2>
              <p className="mt-3 text-text-secondary">
                Un process en 4 étapes, sans aller-retour ni relance à votre charge.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-white font-bold text-lg mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-text">{step.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs pros */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl text-text">
              Tarifs pros
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Tarifs négociés selon le volume mensuel.
              Au-delà de 3 missions par mois, jusqu'à <strong className="text-text">-20 %</strong> sur la grille standard.
              Grille dédiée envoyée sur demande, ajustable selon votre volume réel.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/contact?type=pro" size="lg">
                Demander une grille personnalisée
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Témoignages placeholder */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl text-text">
              Ce que disent les pros
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Premiers retours d'agences et notaires partenaires à venir avec le démarrage de l'activité.
              Cette section sera enrichie au fil des premiers dossiers traités.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-20 lg:py-24 bg-stone-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl sm:text-5xl text-white">
              Discutons d'un <span className="text-highlight-light">partenariat</span>
            </h2>
            <p className="mt-4 text-stone-400 leading-relaxed">
              Tarif personnalisé selon votre volume.
              Première mission test à -20 % pour valider le service ensemble.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/contact?type=pro" size="lg">
                <Mail className="h-5 w-5" />
                Formulaire pro
              </Button>
              <Button href="tel:0651669161" variant="outline" size="lg" className="border-stone-600 text-white hover:bg-stone-800">
                <Phone className="h-5 w-5" />
                06 51 66 91 61
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="https://wa.me/33651669161?text=Bonjour%2C%20je%20suis%20professionnel%20de%20l%27immobilier%20et%20je%20souhaite%20discuter%20d%27un%20partenariat."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-stone-800"
              >
                <MessageCircle className="h-5 w-5 text-whatsapp" />
                WhatsApp pro
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
