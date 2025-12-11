import React, { useEffect, useState } from 'react'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return true
  const saved = localStorage.getItem('theme')
  if (saved) return saved === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.body.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="relative min-h-screen text-white antialiased transition-colors duration-300">
      <div className="absolute inset-0 -z-10 opacity-100" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(252,172,21,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(254,126,3,0.18),transparent_35%),linear-gradient(135deg,rgba(13,33,37,0.96),rgba(16,46,56,0.96))]" />
      <div className="relative mx-auto max-w-6xl px-6 py-10 md:py-14">
        {typeof children === 'function' ? children({ isDark, setIsDark }) : children}
      </div>
    </div>
  )
}

export default Layout