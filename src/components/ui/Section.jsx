import React from 'react'

const Section = ({ id, label, heading, action, children, className = '' }) => (
  <section
    id={id}
    className={`rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur md:p-12 ${className}`}
  >
    <div className="flex items-center justify-between gap-4">
      <div>
        {label ? (
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">{label}</p>
        ) : null}
        {heading ? <h3 className="text-2xl font-semibold text-white">{heading}</h3> : null}
      </div>
      {action}
    </div>
    <div className="mt-6">{children}</div>
  </section>
)

export default Section

