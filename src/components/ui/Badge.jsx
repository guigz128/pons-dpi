const VARIANTS = {
  default: 'bg-surface-warm text-text-secondary',
  accent: 'bg-accent-light text-accent',
  success: 'bg-green-50 text-success',
  warning: 'bg-amber-50 text-amber-700',
  danger: 'bg-red-50 text-danger',
}

export default function Badge({ variant = 'default', children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
