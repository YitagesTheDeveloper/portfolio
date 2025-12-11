import React from 'react'

const Badge = ({ children, className = '', tone = 'subtle' }) => {
  const tones = {
    subtle: 'bg-white/10 text-white border border-white/10',
    accent: 'accent-pill text-slate-900 shadow-[0_10px_30px_rgba(254,126,3,0.35)]',
  }
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${tones[tone] ?? tones.subtle} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge

