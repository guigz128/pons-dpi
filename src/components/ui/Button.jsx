import { Link } from 'react-router-dom'

const VARIANTS = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-sm',
  secondary:
    'bg-stone-900 text-white hover:bg-stone-800 shadow-sm',
  outline:
    'border border-border text-text hover:bg-stone-50',
  ghost:
    'text-text-secondary hover:text-text hover:bg-stone-100',
}

const SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  children,
  className = '',
  ...props
}) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  if (to) return <Link to={to} className={base} {...props}>{children}</Link>
  if (href) return <a href={href} className={base} {...props}>{children}</a>
  return <button className={base} {...props}>{children}</button>
}
