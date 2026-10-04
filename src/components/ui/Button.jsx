import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary:
    'bg-gold text-forest-dark hover:bg-[#deb557] focus-visible:outline-gold',
  secondary:
    'border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-forest-dark focus-visible:outline-white',
  dark: 'bg-forest text-cream hover:bg-forest-dark focus-visible:outline-forest',
}

export default function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  showIcon = true,
  onClick,
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold tracking-wide transition duration-300 sm:px-6'

  const content = (
    <>
      <span>{children}</span>
      {showIcon && <ArrowUpRight size={17} strokeWidth={2.5} aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  )
}