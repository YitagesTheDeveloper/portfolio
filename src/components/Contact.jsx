import React from 'react'
import Section from './ui/Section'
import SocialLinks from './ui/SocialLinks'
import Card from './ui/Card'

const Contact = ({ socials }) => (
  <Section id="contact" label="Contact" heading="Let’s build something together">
    <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <p className="text-white/80">
          Need a performant, modern web experience? I can help with React/Next.js frontends, Node.js backends,
          dashboards, and cloud deployment. I respond quickly.
        </p>
        <SocialLinks socials={socials} pill />
      </div>
      <Card className="space-y-4 border p-6 shadow-sm">
        <form name="contact" method="POST" data-netlify="true" className="space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Name</label>
            <input
              name="name"
              required
              className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-[rgba(254,126,3,0.9)] focus:ring-2 focus:ring-[rgba(254,126,3,0.15)]"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-[rgba(254,126,3,0.9)] focus:ring-2 focus:ring-[rgba(254,126,3,0.15)]"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Project details</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-[rgba(254,126,3,0.9)] focus:ring-2 focus:ring-[rgba(254,126,3,0.15)]"
              placeholder="What do you want to build?"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-[linear-gradient(90deg,rgba(252,172,21,1),rgba(254,126,3,1))] px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(254,126,3,0.4)]"
          >
            Send message
          </button>
          <p className="text-xs text-white/60">
            Deployed on Netlify · Form ready with Netlify Forms · Analytics friendly.
          </p>
        </form>
      </Card>
    </div>
  </Section>
)

export default Contact

