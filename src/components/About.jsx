import React from 'react'
import Section from './ui/Section'
import Card from './ui/Card'

const About = ({ socials }) => (
  <Section id="about" label="About" heading="Building modern, scalable, user-friendly products">
    <div className="flex items-start justify-between gap-6">
      <div className="max-w-3xl space-y-4">
        <p className="text-white/80">
          I specialize in React, Next.js, and Node.js. As a 4th-year Software Engineering student, I thrive in
          collaborative environments where design, performance, and clean code meet. I care about accessibility,
          animations that feel purposeful, and resilient backend APIs.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Full-stack development with a clean-code mindset.',
            'Authentication, dashboards, analytics, and cloud deployments.',
            'Responsive UI/UX with smooth micro-animations.',
            'Obsessed with performance budgets and DX.',
          ].map((item) => (
            <Card
              key={item}
              className="flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-[rgba(254,126,3,0.8)]" />
              <p className="text-white/90">{item}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="hidden w-px self-stretch bg-gradient-to-b from-transparent via-white/20 to-transparent md:block" />
      <Card className="w-full max-w-xs space-y-3 border px-4 py-4 text-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-white/70">Contact</p>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="flex items-center justify-between rounded-xl px-3 py-2 text-white transition hover:-translate-y-0.5 hover:bg-white/5"
          >
            <span>{s.label}</span>
            <span className="text-white/60">↗</span>
          </a>
        ))}
      </Card>
    </div>
  </Section>
)

export default About

