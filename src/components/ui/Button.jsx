import React from 'react'

const variants = {
  primary:
    'accent-pill shadow-[0_15px_40px_rgba(254,126,3,0.35)] hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(254,126,3,0.45)]',
  ghost:
    'border border-white/15 text-white hover:-translate-y-0.5 hover:border-white/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  sm: 'px-4 py-2 text-sm',
}

const Button = ({ as = 'a', href, children, variant = 'primary', size = 'md', className = '', ...rest }) => {
  const Comp = as
  const base =
    'inline-flex items-center justify-center rounded-full font-semibold transition duration-200 disabled:opacity-60 disabled:pointer-events-none text-slate-900'
  const cls = `${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`
  return (
    <Comp href={href} className={cls} {...rest}>
      {children}
    </Comp>
  )
}

export default Button

