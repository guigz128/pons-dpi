import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowRight, ArrowUpRight, Loader2, Sparkles } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import DpeBadge from '../ui/DpeBadge'
import ScrollReveal from '../ui/ScrollReveal'
import DpeAddressSearch from './DpeAddressSearch'

const DPE_COLOR = {
  A: 'bg-emerald-600',
  B: 'bg-emerald-500',
  C: 'bg-lime-500',
  D: 'bg-yellow-400',
  E: 'bg-orange-500',
  F: 'bg-red-500',
  G: 'bg-red-700',
}

function formatNum(n) {
  return new Intl.NumberFormat('fr-FR').format(n)
}

function StatBlock({ value, sub, label, tone = 'default' }) {
  const toneClass =
    tone === 'danger'
      ? 'text-red-600'
      : tone === 'warning'
        ? 'text-orange-600'
        : 'text-accent'
  return (
    <Card className="text-center">
      <p className={`font-display text-3xl sm:text-4xl ${toneClass}`}>{value}</p>
      {sub && <p className="text-xs text-text-secondary mt-1">{sub}</p>}
      <p className="text-sm text-text mt-2 leading-tight">{label}</p>
    </Card>
  )
}

// Section "stats DPE réelles" pour la page ville — données live ADEME.
// Présentielle : reçoit stats/loading/failed du hook useDpeStats (fetch mutualisé avec le hero).
// Se masque entièrement en cas d'erreur ou d'absence de données (ne casse jamais la page).
export default function DpeStatsLive({ villeName, slug, stats, loading, failed }) {
  // Rien à montrer : on masque la section pour garder la page propre.
  if (failed || (!loading && (!stats || stats.total === 0))) return null

  const maxCount = stats ? Math.max(...stats.distribution.map((d) => d.count), 1) : 1

  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
              Données officielles ADEME
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-text">
              Le vrai DPE des logements à <span className="text-highlight">{villeName}</span>
            </h2>
            <p className="mt-3 text-text-secondary">
              Distribution réelle des étiquettes DPE enregistrées à {villeName} depuis juillet 2021.
              Mise à jour quotidienne.
            </p>
          </div>
        </ScrollReveal>

        {/* Recherche DPE par adresse (API ADEME) — hook d'engagement direct */}
        <ScrollReveal>
          <Card className="mb-10">
            <h3 className="text-base font-semibold text-text">
              Un DPE existe-t-il déjà à votre adresse à {villeName} ?
            </h3>
            <p className="text-xs text-text-secondary mt-1 mb-4">
              Saisissez votre adresse : je consulte la base officielle ADEME et affiche
              l'historique des DPE réalisés.
            </p>
            <DpeAddressSearch villeName={villeName} limit={8} />
          </Card>
        </ScrollReveal>

        {loading && (
          <div className="flex items-center gap-2 justify-center text-sm text-text-secondary py-10">
            <Loader2 className="h-4 w-4 animate-spin" />
            Calcul des statistiques pour {villeName}…
          </div>
        )}

        {stats && !loading && (
          <>
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <StatBlock value={formatNum(stats.total)} label="DPE recensés depuis 2021" />
                <StatBlock
                  value={`${formatNum(stats.fgPct)} %`}
                  sub={`${formatNum(stats.fgCount)} logements`}
                  label="Classés F ou G"
                  tone="danger"
                />
                <StatBlock
                  value={`${formatNum(stats.efgPct)} %`}
                  sub={`${formatNum(stats.efgCount)} logements`}
                  label="Classés E, F ou G"
                  tone="warning"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <h3 className="text-base font-semibold text-text mb-1">
                  Distribution des étiquettes DPE
                </h3>
                <p className="text-xs text-text-secondary mb-5">
                  Sur {formatNum(stats.total)} DPE enregistrés à {villeName}
                </p>
                <div className="space-y-2">
                  {stats.distribution.map((d) => (
                    <div key={d.label} className="flex items-center gap-3">
                      <DpeBadge letter={d.label} size="sm" />
                      <div className="flex-1">
                        <div className="h-6 bg-stone-100 rounded overflow-hidden">
                          <div
                            className={`h-full ${DPE_COLOR[d.label]} transition-all`}
                            style={{ width: `${(d.count / maxCount) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="w-24 text-right text-sm">
                        <span className="font-semibold text-text">{formatNum(d.count)}</span>
                        <span className="ml-1.5 text-xs text-text-secondary">{formatNum(d.pct)} %</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>

            {stats.fgCount > 0 && (
              <ScrollReveal>
                <div className="mt-8 rounded-md border-l-4 border-warning bg-yellow-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-warning text-white shrink-0">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-text">
                        {formatNum(stats.fgCount)} logements F ou G à {villeName}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                        Ces propriétaires doivent obligatoirement faire réaliser un{' '}
                        <strong className="text-text">audit énergétique</strong> avant de vendre
                        leur bien (obligation depuis 2023). Et à partir de 2028, les logements F
                        seront interdits à la location.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Button to="/audit-energetique" size="md">
                          Audit énergétique
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button to="/devis" variant="outline" size="md">
                          <Sparkles className="h-4 w-4" />
                          Devis DPE en ligne
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal>
              <p className="mt-8 text-center text-sm text-text-secondary">
                <Link
                  to={`/dpe-existant/${slug}`}
                  className="inline-flex items-center gap-1.5 text-accent font-semibold hover:text-accent-hover transition-colors"
                >
                  Détail complet et derniers DPE enregistrés à {villeName}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </p>
            </ScrollReveal>
          </>
        )}
      </div>
    </section>
  )
}
