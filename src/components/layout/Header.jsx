import React from 'react'
import Button from '../ui/Button'
import ThemeToggle from '../ThemeToggle'

const Header = ({ isDark, onToggle }) => (
  <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_18px_48px_rgba(0,0,0,0.35)] backdrop-blur">
    <div>
      <p className="text-sm text-white/70">Adama, Ethiopia · Full-stack</p>
      <h1 className="text-xl font-semibold text-white">Yitages Adane Temeche</h1>
    </div>
    <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-end">
      <nav className="flex w-full flex-wrap items-center justify-center gap-3 text-sm text-white/80 md:w-auto md:justify-end">
        {[
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' },
          { label: 'Skills', href: '#skills' },
          { label: 'Experience', href: '#experience' },
          { label: 'Education', href: '#education' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-1 transition hover:text-[rgba(252,172,21,1)] hover:-translate-y-0.5"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <Button href="#contact" variant="primary" size="sm">
          Let&apos;s Talk
        </Button>
        <ThemeToggle isDark={isDark} onToggle={onToggle} />
      </div>
    </div>
  </header>
)

export default Header