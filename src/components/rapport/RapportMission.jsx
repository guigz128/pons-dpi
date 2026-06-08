import { useState } from 'react'
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Thermometer,
  Zap,
  Flame,
  Droplet,
  Shield,
  Bug,
  FileText,
  Ruler,
  TrendingDown,
  Banknote,
  Clock,
  Phone,
  MessageCircle,
  Download,
  Info,
  Sparkles,
  Wind,
  Printer,
} from 'lucide-react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import ScrollReveal from '../ui/ScrollReveal'

const DPE_SCALE = [
  { letter: 'A', range: '≤ 70', color: '#319831' },
  { letter: 'B', range: '71 – 110', color: '#34c83a' },
  { letter: 'C', range: '111 – 180', color: '#c8e600' },
  { letter: 'D', range: '181 – 250', color: '#fff200' },
  { letter: 'E', range: '251 – 330', color: '#f5b521' },
  { letter: 'F', range: '331 – 420', color: '#ee5b1e' },
  { letter: 'G', range: '> 420', color: '#d6181c' },
]

const STATUS_STYLES = {
  success: { icon: CheckCircle2, badge: 'success', text: 'text-success', bg: 'bg-green-50' },
  warning: { icon: AlertCircle, badge: 'warning', text: 'text-warning', bg: 'bg-amber-50' },
  danger: { icon: XCircle, badge: 'danger', text: 'text-danger', bg: 'bg-red-50' },
  neutral: { icon: Info, badge: 'default', text: 'text-text-secondary', bg: 'bg-stone-100' },
}

// Mappe la clé d'un diagnostic vers son icône Lucide (données = JSON pur, sans React)
const ICON_BY_KEY = {
  dpe: Thermometer,
  amiante: Shield,
  electricite: Zap,
  gaz: Flame,
  termites: Bug,
  plomb: Droplet,
  erp: FileText,
  carrez: Ruler,
  boutin: Ruler,
}

const fmt = (n) => n.toLocaleString('fr-FR')

function DpeBadge({ letter, size = 'lg' }) {
  const data = DPE_SCALE.find((d) => d.letter === letter)
  const sizes = {
    sm: 'h-10 w-10 text-base',
    md: 'h-14 w-14 text-xl',
    lg: 'h-24 w-24 text-4xl',
  }
  return (
    <div
      className={`${sizes[size]} flex items-center justify-center rounded-lg font-display font-black text-stone-900 shadow-sm`}
      style={{ backgroundColor: data?.color }}
    >
      {letter}
    </div>
  )
}

function DpeScale({ current }) {
  return (
    <div className="space-y-1.5">
      {DPE_SCALE.map((row) => {
        const isCurrent = row.letter === current
        return (
          <div
            key={row.letter}
            className={`flex items-center gap-3 rounded-md p-2 transition-all ${
              isCurrent ? 'ring-2 ring-text shadow-sm' : ''
            }`}
            style={{ backgroundColor: isCurrent ? row.color : 'transparent' }}
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded font-display text-base font-black text-stone-900"
              style={{ backgroundColor: row.color }}
            >
              {row.letter}
            </div>
            <div className="flex-1 text-sm">
              <span className="font-semibold">{row.range}</span>
              <span className="ml-1 text-text-secondary">kWh/m²/an</span>
            </div>
            {isCurrent && (
              <span className="text-xs font-bold uppercase tracking-wide">Votre bien</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

function FindingCard({ finding }) {
  const style = STATUS_STYLES[finding.status]
  const Icon = ICON_BY_KEY[finding.key] || Info
  return (
    <div className="flex gap-4 rounded-md border border-border bg-surface p-4">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${style.bg}`}>
        <Icon className={`h-5 w-5 ${style.text}`} strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
          {finding.label}
        </p>
        <p className="mt-0.5 text-base font-bold">{finding.value}</p>
        <p className="mt-1 text-sm text-text-secondary leading-snug">{finding.detail}</p>
      </div>
    </div>
  )
}

function ScenarioCard({ scenario, tranche }) {
  const net = scenario.netCost[tranche]
  const aides = scenario.cost - net
  return (
    <div
      className={`scenario-card relative flex flex-col rounded-lg border bg-surface p-6 ${
        scenario.recommended ? 'border-accent shadow-md ring-1 ring-accent' : 'border-border'
      }`}
    >
      {scenario.recommended && (
        <div className="scenario-badge absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow">
          <Sparkles className="h-3 w-3" />
          RECOMMANDÉ
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-display text-xl">{scenario.name}</h3>
        <p className="text-sm text-text-secondary">{scenario.tagline}</p>
      </div>

      <div className="mb-5 flex items-center justify-center gap-3 rounded-md bg-stone-50 p-3">
        <DpeBadge letter={scenario.dpeBefore} size="sm" />
        <ArrowRight className="h-4 w-4 text-text-secondary" />
        <DpeBadge letter={scenario.dpeAfter} size="md" />
      </div>

      <div className="mb-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-md bg-stone-50 p-3">
          <div className="flex items-center gap-1.5 text-text-secondary">
            <TrendingDown className="h-3.5 w-3.5" />
            <span className="text-xs font-medium uppercase tracking-wide">Conso</span>
          </div>
          <p className="mt-0.5 font-display text-lg font-bold text-success">
            −{scenario.consoReduction}%
          </p>
        </div>
        <div className="rounded-md bg-stone-50 p-3">
          <div className="flex items-center gap-1.5 text-text-secondary">
            <Wind className="h-3.5 w-3.5" />
            <span className="text-xs font-medium uppercase tracking-wide">CO₂</span>
          </div>
          <p className="mt-0.5 font-display text-lg font-bold text-success">
            −{scenario.co2Reduction}%
          </p>
        </div>
      </div>

      <ul className="mb-5 space-y-2 text-sm">
        {scenario.items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto rounded-md border border-border bg-stone-50 p-4">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-text-secondary">
            Coût travaux
          </span>
          <span className="font-display text-lg font-bold">{fmt(scenario.cost)} €</span>
        </div>
        <div className="mb-3 flex items-baseline justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-success">
            Aides estimées
          </span>
          <span className="font-semibold text-success">−{fmt(aides)} €</span>
        </div>
        <div className="border-t border-border pt-3">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-semibold">Reste à charge</span>
            <span className="font-display text-2xl font-black text-accent">{fmt(net)} €</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-text-secondary">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {scenario.duration}
            </span>
            <span>ROI ~{scenario.roi} ans</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function DiagnosticCard({ diag }) {
  const style = STATUS_STYLES[diag.status]
  const StatusIcon = style.icon
  const DiagIcon = ICON_BY_KEY[diag.key] || FileText
  return (
    <div className="rounded-lg border border-border bg-surface overflow-hidden">
      <div className="flex items-start gap-4 border-b border-border p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-stone-100">
          <DiagIcon className="h-5 w-5 text-text" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold leading-tight">{diag.name}</h3>
          <p className="mt-0.5 text-xs text-text-secondary">Validité : {diag.validity}</p>
        </div>
        <Badge variant={style.badge}>
          <StatusIcon className="h-3 w-3" />
          {diag.statusLabel}
        </Badge>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed">{diag.summary}</p>
        <ul className="mt-4 space-y-2">
          {diag.keyPoints.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-text-secondary">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-secondary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const ACTION_PLAN_STYLES = [
  { color: 'border-danger bg-red-50', iconBg: 'bg-red-100 text-danger' },
  { color: 'border-warning bg-amber-50', iconBg: 'bg-amber-100 text-warning' },
  { color: 'border-accent bg-accent-light', iconBg: 'bg-accent-light text-accent' },
]

export default function RapportMission({ data, showPrint = true }) {
  const [tranche, setTranche] = useState('intermediaire')
  const { bien, mission, diagnostiqueur, dpe } = data

  const coverTiles = [
    { label: 'Surface', value: `${fmt(bien.surface)} m²` },
    bien.rooms ? { label: 'Pièces', value: `T${bien.rooms}` } : null,
    { label: 'Année', value: bien.year },
    mission.duration ? { label: 'Durée', value: mission.duration } : null,
  ].filter(Boolean)

  return (
    <>
      {showPrint && (
        <button
          type="button"
          onClick={() => window.print()}
          className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-semibold shadow-lg transition-colors hover:border-accent hover:text-accent print:hidden"
        >
          <Printer className="h-4 w-4" />
          Imprimer / PDF
        </button>
      )}

      {/* COVER — Identité bien */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <Badge variant="accent">Rapport n° {mission.reference}</Badge>
            <Badge variant="default">
              <Calendar className="h-3 w-3" />
              Intervention {mission.intervention}
            </Badge>
            <Badge variant="default">{mission.transaction}</Badge>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-text-secondary">
                Synthèse de diagnostic immobilier
              </p>
              <h1 className="font-display text-4xl leading-tight sm:text-5xl">
                {bien.type}
                <br />
                <span className="text-text-secondary">{bien.address}</span>
              </h1>
              {bien.parcelle && (
                <p className="mt-3 text-sm text-text-secondary">{bien.parcelle}</p>
              )}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {coverTiles.map((t) => (
                  <div key={t.label}>
                    <p className="text-xs uppercase tracking-wide text-text-secondary">{t.label}</p>
                    <p className="mt-1 font-display text-2xl font-bold">{t.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Identité diagnostiqueur */}
            <div className="rounded-lg border border-border bg-stone-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-text font-display text-lg font-bold text-white">
                  {diagnostiqueur.initials}
                </div>
                <div>
                  <p className="font-semibold">{diagnostiqueur.name}</p>
                  <p className="text-sm text-text-secondary">{diagnostiqueur.role}</p>
                </div>
              </div>
              <div className="space-y-1.5 text-sm">
                <p className="flex items-center justify-between">
                  <span className="text-text-secondary">Certifications COFRAC</span>
                  <span className="font-semibold">{diagnostiqueur.certifsCount}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-text-secondary">Titre RNCP</span>
                  <span className="font-semibold">{diagnostiqueur.rncp}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-text-secondary">Assurance RC Pro</span>
                  <span className="font-semibold">{diagnostiqueur.assurance}</span>
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {diagnostiqueur.badges.map((c) => (
                  <span
                    key={c}
                    className="rounded bg-surface px-2 py-1 text-xs font-semibold text-text-secondary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — SYNTHÈSE EXÉCUTIVE */}
      {data.findings?.length > 0 && (
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <ScrollReveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  01 — Synthèse en un coup d'œil
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">L'essentiel à retenir</h2>
              </div>
              {data.summaryNote && (
                <p className="hidden max-w-md text-sm text-text-secondary sm:block">
                  {data.summaryNote}
                </p>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.findings.map((f) => (
                <FindingCard key={f.key} finding={f} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      )}

      {/* 02 — PERFORMANCE ÉNERGÉTIQUE */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                02 — Performance énergétique
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">{dpe.headline}</h2>
              <p className="mt-3 max-w-2xl text-text-secondary">{dpe.intro}</p>
            </div>
          </ScrollReveal>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            {/* Échelle DPE */}
            <ScrollReveal>
              <div className="rounded-lg border border-border bg-stone-50 p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  Étiquette énergie
                </p>
                <p className="font-display text-2xl">
                  <span className="font-black">{dpe.consoEP}</span>
                  <span className="ml-1 text-base font-normal text-text-secondary">
                    kWh/m²/an d'énergie primaire
                  </span>
                </p>
                {dpe.ges && (
                  <p className="mt-1 text-sm text-text-secondary">
                    GES : classe {dpe.ges} · {dpe.gesValue} kg CO₂/m²/an
                  </p>
                )}
                <div className="mt-6">
                  <DpeScale current={dpe.etiquette} />
                </div>
              </div>
            </ScrollReveal>

            {/* Colonne droite : comparaison OU détail coûts, + déperditions */}
            <div className="space-y-6">
              {dpe.comparison && (
                <ScrollReveal>
                  <div className="rounded-lg border border-border bg-stone-50 p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold">Consommation théorique vs réelle</h3>
                    </div>
                    <p className="mb-5 text-sm text-text-secondary">{dpe.comparison.note}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-md bg-surface p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                          DPE théorique
                        </p>
                        <p className="mt-1 font-display text-2xl font-bold">
                          {dpe.comparison.theoretical}
                        </p>
                        <p className="text-xs text-text-secondary">kWh/m²/an</p>
                      </div>
                      <div className="rounded-md bg-accent-light p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                          Mesuré sur factures
                        </p>
                        <p className="mt-1 font-display text-2xl font-bold">{dpe.comparison.real}</p>
                        <p className="text-xs text-text-secondary">kWh/m²/an</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                      <span className="text-sm text-text-secondary">Coût annuel énergie</span>
                      <span className="font-display text-xl font-bold">
                        {fmt(dpe.comparison.costYear)} €/an
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {dpe.costBreakdown && (
                <ScrollReveal>
                  <div className="rounded-lg border border-border bg-stone-50 p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <Banknote className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold">Coûts annuels par poste</h3>
                    </div>
                    <div className="space-y-2">
                      {dpe.costBreakdown.items.map((it) => (
                        <div
                          key={it.usage}
                          className="flex items-baseline justify-between rounded-md bg-surface px-4 py-3 text-sm"
                        >
                          <div>
                            <span className="font-medium">{it.usage}</span>
                            <span className="ml-2 text-xs text-text-secondary">
                              {fmt(it.kwh)} kWh EP
                            </span>
                          </div>
                          <span className="font-display text-lg font-bold">{fmt(it.cost)} €</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                      <span className="text-sm text-text-secondary">
                        Total énergie
                        {dpe.costBreakdown.abonnement
                          ? ` (dont ${fmt(dpe.costBreakdown.abonnement)} € d'abonnement)`
                          : ''}
                      </span>
                      <span className="font-display text-xl font-bold">
                        {fmt(dpe.costBreakdown.total)} €/an
                      </span>
                    </div>
                    {dpe.costBreakdown.enr && (
                      <p className="mt-3 text-xs text-text-secondary">{dpe.costBreakdown.enr}</p>
                    )}
                  </div>
                </ScrollReveal>
              )}

              {dpe.heatLoss && (
                <ScrollReveal>
                  <div className="rounded-lg border border-border bg-stone-50 p-6">
                    <h3 className="mb-4 font-semibold">Où s'échappe votre énergie ?</h3>
                    <div className="space-y-3">
                      {dpe.heatLoss.map((h) => (
                        <div key={h.label}>
                          <div className="mb-1 flex items-baseline justify-between text-sm">
                            <span className="font-medium">{h.label}</span>
                            <span className="font-semibold">{h.percent}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-stone-200">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{ width: `${h.percent * 2.5}%`, backgroundColor: h.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    {dpe.heatLossNote && (
                      <p className="mt-4 text-xs text-text-secondary">{dpe.heatLossNote}</p>
                    )}
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — SCÉNARIOS DE TRAVAUX */}
      {data.scenarios?.length > 0 && (
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <ScrollReveal>
              <div className="mb-10">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  03 — Scénarios de travaux chiffrés
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">Trois trajectoires possibles</h2>
                <p className="mt-3 max-w-2xl text-text-secondary">
                  Chaque scénario est chiffré aux prix locaux Montpellier, avec les aides financières
                  estimées selon votre tranche de revenus. Le scénario Confort offre le meilleur
                  rapport gain énergétique / investissement.
                </p>
              </div>
            </ScrollReveal>

            {/* Sélecteur tranche revenus */}
            <ScrollReveal>
              <div className="mb-8 rounded-lg border border-border bg-surface p-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">Votre tranche de revenus MaPrimeRénov'</p>
                    <p className="text-xs text-text-secondary">
                      Pour ajuster les aides estimées (estimation indicative)
                    </p>
                  </div>
                  <div className="flex gap-1 rounded-md border border-border bg-stone-50 p-1">
                    {[
                      { id: 'modeste', label: 'Très modestes' },
                      { id: 'intermediaire', label: 'Intermédiaires' },
                      { id: 'superieur', label: 'Supérieurs' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTranche(t.id)}
                        className={`rounded px-3 py-1.5 text-sm font-semibold transition-colors ${
                          tranche === t.id
                            ? 'bg-text text-white shadow-sm'
                            : 'text-text-secondary hover:text-text'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 lg:grid-cols-3">
              {data.scenarios.map((s) => (
                <ScrollReveal key={s.id}>
                  <ScenarioCard scenario={s} tranche={tranche} />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="mt-8 rounded-md border border-border bg-surface p-5">
                <div className="flex gap-3">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div className="text-sm text-text-secondary">
                    Les aides incluent MaPrimeRénov', CEE, éco-PTZ et TVA 5,5 %. Montants indicatifs
                    basés sur les barèmes 2026.
                    <strong className="text-text"> Pour un chiffrage définitif</strong>, un audit
                    énergétique réglementaire (OPQIBI 1905) est nécessaire — je vous mets en relation
                    avec mon partenaire qualifié.
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 04 — DIAGNOSTICS DÉTAILLÉS */}
      {data.diagnostics?.length > 0 && (
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                04 — Diagnostics réalisés
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Le détail, en langage clair</h2>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Pour chaque diagnostic, l'essentiel à retenir et ce qu'il faut savoir. Les rapports
                officiels complets (PDF réglementaires) sont disponibles plus bas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {data.diagnostics.map((d) => (
              <ScrollReveal key={d.key}>
                <DiagnosticCard diag={d} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 05 — PLAN D'ACTION */}
      {data.actionPlan?.length > 0 && (
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                05 — Plan d'action priorisé
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Que faire maintenant&nbsp;?</h2>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Une feuille de route claire en trois horizons. Vous gardez la main sur le rythme :
                tout n'a pas besoin d'être fait en même temps.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {data.actionPlan.map((step, idx) => {
              const s = ACTION_PLAN_STYLES[idx] || ACTION_PLAN_STYLES[2]
              return (
                <ScrollReveal key={step.horizon}>
                  <div className={`rounded-lg border-l-4 ${s.color} p-6`}>
                    <div className="flex flex-wrap items-center gap-3 border-b border-border/60 pb-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${s.iconBg} font-display text-base font-black`}
                      >
                        {idx + 1}
                      </div>
                      <h3 className="font-display text-xl">{step.horizon}</h3>
                    </div>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {step.items.map((item) => (
                        <div key={item.title}>
                          <p className="font-semibold leading-tight">{item.title}</p>
                          <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
      )}

      {/* 06 — DOCUMENTS OFFICIELS */}
      {data.documents?.length > 0 && (
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                06 — Documents officiels
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Vos rapports réglementaires</h2>
              <p className="mt-3 max-w-2xl text-text-secondary">
                Les PDF officiels conformes à l'arrêté, à joindre au DDT (Dossier de Diagnostic
                Technique) de la promesse de vente.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-hidden rounded-lg border border-border bg-stone-50">
              {data.documents.map((doc, idx) => {
                const Tag = doc.url ? 'a' : 'button'
                return (
                  <div
                    key={doc.name}
                    className={`flex items-center justify-between gap-4 px-5 py-4 ${
                      idx !== 0 ? 'border-t border-border' : ''
                    } hover:bg-stone-100 transition-colors`}
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-50">
                        <FileText className="h-5 w-5 text-danger" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-medium">{doc.name}</p>
                        <p className="text-xs text-text-secondary">
                          {['PDF', doc.pages && `${doc.pages} pages`, doc.size]
                            .filter(Boolean)
                            .join(' · ')}
                        </p>
                      </div>
                    </div>
                    <Tag
                      {...(doc.url
                        ? { href: doc.url, target: '_blank', rel: 'noopener' }
                        : { type: 'button', disabled: true, title: 'PDF non encore joint' })}
                      className={`flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-semibold transition-colors ${
                        doc.url
                          ? 'text-text-secondary hover:text-text hover:border-text/30'
                          : 'cursor-not-allowed text-text-secondary/50'
                      }`}
                    >
                      <Download className="h-4 w-4" />
                      <span className="hidden sm:inline">
                        {doc.url ? 'Télécharger' : 'Bientôt'}
                      </span>
                    </Tag>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
      )}

      {/* CTA FINAL */}
      <section className="bg-text text-white print:hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Un rapport comme celui-ci pour votre bien
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                  Chaque mission Pons DPI donne lieu à ce niveau de restitution.
                </h2>
                <p className="mt-4 max-w-xl text-white/70">
                  Synthèse claire, scénarios chiffrés, plan d'action priorisé, aides estimées. Inclus
                  dans la prestation standard — pas une option.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button to="/devis" size="lg" className="bg-accent hover:bg-accent-hover text-white w-full">
                  Demander mon devis
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="tel:0651669161"
                  variant="outline"
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  06 51 66 91 61
                </Button>
                <Button
                  href="https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers."
                  variant="outline"
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
