import React from 'react'

const SocialLinks = ({ socials, className = '', pill = false }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        className={`rounded-${pill ? 'full' : 'xl'} border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]`}
      >
        {s.label}
      </a>
    ))}
  </div>
)

export default SocialLinks

