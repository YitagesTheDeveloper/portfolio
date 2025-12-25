import React from 'react'

const Card = ({ children, className = '' }) => (
  <div
    className={`rounded-2xl border border-white/10 bg-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur ${className}`}
  >
    {children}
  </div>
)

export default Card

