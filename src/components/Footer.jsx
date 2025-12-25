import React from 'react'

const Footer = ({ socials }) => (
  <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60">
    <span>© {new Date().getFullYear()} Yitages Adane Temeche. Built with React + Tailwind.</span>
    <div className="flex gap-3">
      {socials.map((s) => (
        <a key={s.label} href={s.href} className="hover:text-[rgba(252,172,21,1)]">
          {s.label}
        </a>
      ))}
    </div>
  </footer>
)

export default Footer

