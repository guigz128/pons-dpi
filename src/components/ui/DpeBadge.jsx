const COLORS = {
  A: 'bg-emerald-600 text-white',
  B: 'bg-emerald-500 text-white',
  C: 'bg-lime-500 text-stone-900',
  D: 'bg-yellow-400 text-stone-900',
  E: 'bg-orange-500 text-white',
  F: 'bg-red-500 text-white',
  G: 'bg-red-700 text-white',
}

const SIZES = {
  sm: 'h-6 w-6 text-xs',
  md: 'h-8 w-8 text-sm',
  lg: 'h-10 w-10 text-base',
}

export default function DpeBadge({ letter, size = 'md', label = 'DPE' }) {
  const L = (letter || '').toUpperCase()
  const colorClass = COLORS[L] || 'bg-stone-300 text-stone-700'
  return (
    <span
      title={`${label} ${L || '?'}`}
      className={`inline-flex items-center justify-center rounded-md font-bold ${colorClass} ${SIZES[size]}`}
    >
      {L || '?'}
    </span>
  )
}
