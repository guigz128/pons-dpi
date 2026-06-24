import { useState } from 'react'
import {
  Search,
  Calendar,
  Maximize,
  Building,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import DpeBadge from '../ui/DpeBadge'
import AddressAutocomplete from '../ui/AddressAutocomplete'
import { searchDpeByAddress } from '../../lib/ademe'

// Recherche d'un DPE déjà réalisé à une adresse, via l'API ADEME (base DPE
// Logements existants). Composant autonome réutilisé sur /dpe-existant, les
// pages /dpe-existant/:ville et les pages ville /diagnostic-immobilier/:ville.

function formatDate(s) {
  if (!s) return '—'
  try {
    return new Date(s).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return s
  }
}

export default function DpeAddressSearch({ villeName, autoFocus = false, limit = 15 }) {
  const [address, setAddress] = useState(null)
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSelect(item) {
    setAddress(item)
    setResults(null)
    setError(null)
    setLoading(true)
    try {
      const r = await searchDpeByAddress(item.label, { limit })
      setResults(r)
    } catch {
      setError("Impossible d'interroger la base ADEME pour le moment.")
    } finally {
      setLoading(false)
    }
  }

  function handleClear() {
    setAddress(null)
    setResults(null)
    setError(null)
  }

  const placeholder = villeName
    ? `Tapez votre adresse — ex : 12 rue de la Mairie, ${villeName}`
    : 'Tapez votre adresse — ex : 12 rue de la Loge, Montpellier'

  return (
    <div>
      <AddressAutocomplete
        value={address}
        onSelect={handleSelect}
        onClear={handleClear}
        label=""
        placeholder={placeholder}
        autoFocus={autoFocus}
        size="lg"
        hint="Recherche sur la base ADEME des DPE Logements existants (depuis juillet 2021)."
      />

      {loading && (
        <div className="flex items-center gap-2 justify-center text-sm text-text-secondary py-6">
          <Loader2 className="h-4 w-4 animate-spin" />
          Recherche dans la base ADEME…
        </div>
      )}

      {error && (
        <div className="mt-4 flex items-start gap-2 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {results && !loading && (
        <div className="mt-6">
          {results.total === 0 ? (
            <Card className="text-center py-10">
              <Search className="h-8 w-8 text-text-secondary mx-auto mb-3" />
              <h3 className="font-display text-2xl text-text">Aucun DPE trouvé</h3>
              <p className="mt-2 text-text-secondary max-w-md mx-auto">
                Aucun DPE n'a été enregistré dans la base ADEME pour cette adresse depuis
                juillet 2021. Si vous vendez ou louez, vous devez faire réaliser un DPE.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Button to="/devis">
                  <Sparkles className="h-4 w-4" />
                  Devis en ligne
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/contact" variant="outline">
                  Me contacter
                </Button>
              </div>
            </Card>
          ) : (
            <>
              <div className="mb-4 flex items-baseline justify-between flex-wrap gap-2">
                <h3 className="font-display text-2xl text-text">
                  {results.total} DPE trouvé{results.total > 1 ? 's' : ''}
                </h3>
                <p className="text-sm text-text-secondary">
                  Les {Math.min(results.results.length, results.total)} plus récents
                </p>
              </div>
              <div className="space-y-3">
                {results.results.map((d) => (
                  <DpeRow key={d.numero_dpe} dpe={d} />
                ))}
              </div>

              <div className="mt-6 rounded-md border-l-4 border-accent bg-accent-light/40 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-9 w-9 rounded-full bg-accent text-white shrink-0">
                    <Info className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text">
                      Votre DPE est-il encore valide ?
                    </h4>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                      Un DPE est valable 10 ans. Si le vôtre date d'avant juillet 2021, il
                      faut absolument le refaire (nouvelle méthode de calcul). En cas de
                      classe F ou G, un audit énergétique est obligatoire à la vente.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button to="/devis" size="sm">
                        Refaire mon DPE
                      </Button>
                      <Button to="/audit-energetique" variant="outline" size="sm">
                        Audit énergétique
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

function DpeRow({ dpe }) {
  return (
    <div className="rounded-md border border-border bg-surface p-4 hover:border-accent/30 transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center gap-1 shrink-0">
          <DpeBadge letter={dpe.etiquette_dpe} size="lg" label="DPE" />
          <span className="text-[10px] text-text-secondary uppercase tracking-wide">DPE</span>
        </div>
        <div className="flex flex-col items-center gap-1 shrink-0">
          <DpeBadge letter={dpe.etiquette_ges} size="lg" label="GES" />
          <span className="text-[10px] text-text-secondary uppercase tracking-wide">GES</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-text truncate">{dpe.adresse_ban || '—'}</p>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-secondary">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formatDate(dpe.date_etablissement_dpe)}
            </span>
            {dpe.surface_habitable_logement && (
              <span className="inline-flex items-center gap-1">
                <Maximize className="h-3 w-3" />
                {Math.round(dpe.surface_habitable_logement)} m²
              </span>
            )}
            {dpe.type_batiment && (
              <span className="inline-flex items-center gap-1">
                <Building className="h-3 w-3" />
                {dpe.type_batiment}
              </span>
            )}
            {dpe.annee_construction && <span>Construction {dpe.annee_construction}</span>}
          </div>
          {dpe.numero_dpe && (
            <p className="mt-1 text-[11px] text-text-secondary font-mono">N° {dpe.numero_dpe}</p>
          )}
        </div>
      </div>
    </div>
  )
}
