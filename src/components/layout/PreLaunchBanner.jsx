import { Info } from 'lucide-react'

export default function PreLaunchBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-2 flex items-start sm:items-center gap-2 text-xs sm:text-sm">
        <Info className="h-4 w-4 shrink-0 mt-0.5 sm:mt-0 text-amber-700" />
        <p className="leading-snug">
          <strong className="font-semibold">Activité officielle à partir de mars 2027.</strong>{' '}
          <span className="text-amber-800">
            Formation Titre RNCP en cours, certifications COFRAC obtenues février-mars 2027.
            Devis indicatifs et pré-inscriptions ouvertes.
          </span>
        </p>
      </div>
    </div>
  )
}
