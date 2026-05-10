import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  AlertCircle,
  Search,
  FileCheck,
  ClipboardCheck,
  Lightbulb,
  Mail,
  Phone,
  MessageCircle,
  Info,
} from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Accordion from '../components/ui/Accordion'
import ScrollReveal from '../components/ui/ScrollReveal'

const PROCESS_STEPS = [
  {
    icon: Search,
    title: '1. Visite sur site',
    description:
      "Le bureau d'études partenaire visite le bien (~3 à 4h) : relevés de l'enveloppe (murs, toit, fenêtres, planchers), inspection des systèmes de chauffage / ECS / ventilation, prise de mesures et photos.",
  },
  {
    icon: ClipboardCheck,
    title: '2. Modélisation thermique',
    description:
      "Saisie des données dans un logiciel de modélisation conforme (méthode 3CL ou TH-C-E ex). Calcul des consommations actuelles (énergie primaire, GES) et identification des principaux postes de déperdition.",
  },
  {
    icon: Lightbulb,
    title: '3. Scénarios de travaux',
    description:
      "Au moins deux scénarios de rénovation sont proposés, avec chiffrage estimatif des travaux, gains énergétiques attendus, classement DPE projeté et éligibilité MaPrimeRénov' / aides locales.",
  },
  {
    icon: FileCheck,
    title: '4. Rapport final',
    description:
      "Document conforme à l'arrêté du 4 mai 2022, valable 5 ans. À joindre au dossier de vente (DDT) pour les biens classés F ou G.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Quelle est la différence entre DPE et audit énergétique ?",
    answer:
      "Le DPE est un état réglementaire obligatoire à la vente comme à la location, qui classe le logement de A à G. Il dure 10 ans. L'audit énergétique va beaucoup plus loin : c'est une étude approfondie qui propose des scénarios de travaux chiffrés pour améliorer la classe énergétique. Il est obligatoire en complément du DPE pour les ventes de maisons individuelles classées F ou G depuis le 1er avril 2023.",
  },
  {
    question: "Qui doit réaliser un audit énergétique avant la vente ?",
    answer:
      "Depuis le 1er avril 2023, tout propriétaire d'une maison individuelle (ou immeuble en monopropriété) classée F ou G au DPE doit fournir un audit énergétique au moment de la vente. Depuis le 1er janvier 2025, l'obligation s'étend aux logements classés E. Les copropriétés en monopriorité ne sont pas concernées par ce dispositif (qui relève des audits collectifs / DPE collectifs).",
  },
  {
    question: "Combien coûte un audit énergétique en 2026 ?",
    answer:
      "Le tarif d'un audit énergétique se situe généralement entre 700 € et 1 200 € TTC selon la surface, la complexité du bien et le bureau d'études. Le prix est libre (pas de tarif réglementé). Une partie peut être éligible à MaPrimeRénov' Audit (jusqu'à 500 € selon revenus). Pour un devis précis, je vous oriente vers mon partenaire qualifié.",
  },
  {
    question: "Pourquoi Pons DPI ne réalise pas l'audit énergétique en direct ?",
    answer:
      "L'audit énergétique réglementaire requiert une qualification spécifique — soit OPQIBI 1905 (audit énergétique en maison individuelle), soit le titre RGE Études (Reconnu Garant de l'Environnement, étude). C'est un référentiel différent de la certification COFRAC diagnostiqueur immobilier. Pour vous garantir un audit conforme, je travaille en partenariat avec un bureau d'études qualifié plutôt que de proposer un service que je ne suis pas habilité à réaliser.",
  },
  {
    question: "Comment fonctionne le partenariat OPQIBI / RGE Études ?",
    answer:
      "Vous me transmettez votre adresse, le DPE (ou son projet), et vos contraintes. Je vous mets en relation avec mon partenaire bureau d'études qualifié. Il vous fournit un devis sous 48 h. Si vous acceptez, il intervient sous 2 semaines avec rapport remis sous 10 jours. Avantage : un seul interlocuteur pour DPE + audit, gain de temps, et coordination directe entre les deux interventions.",
  },
  {
    question: "L'audit énergétique est-il obligatoire en location ?",
    answer:
      "Non. L'audit énergétique est obligatoire à la vente (depuis 2023 pour F/G, 2025 pour E). En location, c'est le DPE qui s'applique, avec le calendrier d'interdiction progressive : G interdits depuis 2025, F en 2028, E en 2034.",
  },
]

export default function AuditEnergetique() {
  const url = 'https://www.pons-dpi.fr/audit-energetique'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#page`,
        name: 'Audit énergétique à Montpellier — Obligation DPE F/G/E | Pons DPI',
        description:
          "Audit énergétique réglementaire à Montpellier et environs. Obligatoire pour la vente de maisons individuelles classées F, G ou E au DPE. Partenariat avec un bureau d'études qualifié OPQIBI 1905 / RGE Études.",
        url,
        isPartOf: { '@id': 'https://www.pons-dpi.fr/' },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: FAQ_ITEMS.map((it) => ({
          '@type': 'Question',
          name: it.question,
          acceptedAnswer: { '@type': 'Answer', text: it.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.pons-dpi.fr/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.pons-dpi.fr/services' },
          { '@type': 'ListItem', position: 3, name: 'Audit énergétique', item: url },
        ],
      },
    ],
  }

  return (
    <>
      <Helmet>
        <title>Audit énergétique à Montpellier — Obligation DPE F/G/E | Pons DPI</title>
        <meta
          name="description"
          content="Audit énergétique réglementaire à Montpellier et environs. Obligatoire pour la vente de maisons classées F/G/E. Partenariat avec un bureau d'études qualifié OPQIBI 1905 / RGE Études."
        />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Audit énergétique à Montpellier | Pons DPI" />
        <meta
          property="og:description"
          content="Obligatoire à la vente pour les DPE F/G/E. Partenariat bureau d'études qualifié."
        />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="fr_FR" />
        <meta name="geo.region" content="FR-34" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-light to-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <ScrollReveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Tous les services
            </Link>

            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
              Service complémentaire — partenariat bureau d'études
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text leading-[1.05]">
              Audit énergétique à <span className="text-highlight">Montpellier</span>
            </h1>

            <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Obligatoire à la vente pour les maisons individuelles classées F ou G au DPE depuis le 1er avril 2023, et étendu à la classe E depuis 2025. Pons DPI travaille en partenariat avec un bureau d'études qualifié OPQIBI 1905 / RGE Études pour vous orienter.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="warning">
                <AlertCircle className="h-3 w-3" />
                Obligatoire vente DPE F/G/E
              </Badge>
              <Badge>700 € à 1 200 € TTC</Badge>
              <Badge>Validité 5 ans</Badge>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Important — pourquoi Pons DPI n'est pas l'auditeur */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-md border-l-4 border-accent bg-accent-light/40 p-5">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white shrink-0">
                  <Info className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-text mb-2">
                    Pourquoi Pons DPI travaille avec un partenaire pour l'audit énergétique ?
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    L'audit énergétique réglementaire requiert une qualification spécifique
                    {' '}<strong className="text-text">OPQIBI 1905</strong> ou{' '}
                    <strong className="text-text">RGE Études</strong> — un référentiel
                    différent de la certification COFRAC diagnostiqueur immobilier. Plutôt
                    que de proposer un service que je ne suis pas habilité à réaliser, je
                    vous oriente vers un bureau d'études qualifié partenaire. Avantage pour
                    vous : un seul interlocuteur pour DPE et audit, coordination directe
                    entre les deux interventions, gain de temps sur le dossier de vente.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quand est-ce obligatoire */}
      <section className="py-12 sm:py-16 bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-display text-3xl sm:text-4xl text-text">
                Quand l'audit énergétique est-il obligatoire ?
              </h2>
              <p className="mt-3 text-text-secondary">
                Calendrier d'application progressif depuis 2023.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ScrollReveal>
              <Card className="h-full">
                <Badge variant="danger" className="mb-3">Depuis le 01/04/2023</Badge>
                <p className="text-sm font-semibold text-text">DPE F ou G</p>
                <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                  Maisons individuelles et immeubles en monopropriété classés F ou G au DPE.
                  Audit énergétique obligatoire à la vente.
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Card className="h-full">
                <Badge variant="warning" className="mb-3">Depuis le 01/01/2025</Badge>
                <p className="text-sm font-semibold text-text">DPE E</p>
                <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                  Extension de l'obligation à la classe E pour les ventes
                  de maisons individuelles. Calendrier confirmé par décret.
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <Badge variant="default" className="mb-3">À partir de 2034</Badge>
                <p className="text-sm font-semibold text-text">DPE D (envisagé)</p>
                <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                  Extension probable à la classe D dans le cadre du calendrier
                  loi Climat et Résilience. À confirmer par décret d'application.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process en 4 étapes */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl text-text">
                Comment se déroule un audit énergétique ?
              </h2>
              <p className="mt-3 text-text-secondary">
                4 étapes du premier contact au rapport final.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <Card className="h-full">
                    <div className="flex items-center justify-center h-11 w-11 rounded-md bg-accent-light text-accent mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-text">{step.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA partenariat */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl text-text">
              Demander un audit énergétique
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Vous vendez une maison classée F, G ou E ? Je vous mets en relation avec
              mon partenaire bureau d'études qualifié sous 24 h. Devis transmis sous 48 h,
              intervention sous 2 semaines, rapport remis sous 10 jours.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                href={`https://wa.me/33651669161?text=${encodeURIComponent(
                  "Bonjour, je souhaite un audit énergétique. Je vends un bien classé [F/G/E] au DPE. Pouvez-vous m'orienter vers votre partenaire ?",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                <MessageCircle className="h-5 w-5 text-whatsapp" />
                Demander par WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button href="tel:0651669161" variant="outline" size="lg">
                <Phone className="h-5 w-5" />
                06 51 66 91 61
              </Button>
              <Button to="/contact?type=audit" variant="outline" size="lg">
                <Mail className="h-5 w-5" />
                Formulaire
              </Button>
            </div>

            <p className="mt-6 text-xs text-text-secondary">
              Précision : la facturation et la prestation d'audit sont assurées
              directement par le bureau d'études partenaire (qualification OPQIBI 1905
              / RGE Études). Pons DPI joue le rôle de mise en relation et de coordination.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-display text-3xl sm:text-4xl text-text">
                Questions fréquentes
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Accordion items={FAQ_ITEMS} />
          </ScrollReveal>
        </div>
      </section>

      {/* Cross-link DPE */}
      <section className="py-12 bg-stone-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm text-text-secondary">
              Vous avez besoin d'un DPE avant l'audit énergétique ?{' '}
              <Link to="/services/dpe" className="text-accent font-semibold hover:text-accent-hover">
                Voir le DPE Pons DPI →
              </Link>
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              Ou{' '}
              <Link to="/devis" className="text-accent font-semibold hover:text-accent-hover">
                calculer le prix de mon DPE en 2 minutes
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
