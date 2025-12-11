import React from 'react'

const ThemeToggle = ({ isDark, onToggle }) => (
  <button
    onClick={onToggle}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
    aria-label="Toggle theme"
    type="button"
  >
    {isDark ? '🌙' : '☀️'}
  </button>
)

export default ThemeToggle


