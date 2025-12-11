import React from 'react'
import Avatar from './ui/Avatar'
import Button from './ui/Button'
import Badge from './ui/Badge'

const chips = ['Next.js', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind']

const Hero = ({ resumeLink }) => (
  <section
    id="hero"
    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur md:p-12"
  >
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(252,172,21,0.16),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(254,126,3,0.2),transparent_35%)]" />
    <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <Badge tone="accent" className="shadow-[0_15px_40px_rgba(254,126,3,0.45)]">
          Passionate React Full-Stack Developer
        </Badge>
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
          Building performant, delightful web apps with React, Next.js, and Node.js.
        </h2>
        <p className="text-lg text-white/80">
          I love creating scalable, user-first experiences. From responsive UIs to secure APIs, I ship clean,
          performant code that balances developer ergonomics with business impact.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href={resumeLink} download>
            Download Resume
          </Button>
          <Button href="#projects" variant="ghost">
            View Projects
          </Button>
        </div>
        <div className="flex flex-wrap gap-3">
          {chips.map((chip) => (
            <Badge key={chip}>{chip}</Badge>
          ))}
        </div>
      </div>
      <Avatar />
    </div>
  </section>
)

export default Hero

