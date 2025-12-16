import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Section from './ui/Section'
import SocialLinks from './ui/SocialLinks'
import Card from './ui/Card'

const Contact = ({ socials }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_title: '',
    project_details: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // EmailJS configuration (provided)
  const EMAILJS_SERVICE_ID = 'service_7xo2m8n'
  const EMAILJS_TEMPLATE_ID = 'template_x32itz8'
  const EMAILJS_PUBLIC_KEY = 'SYXl1oc0pgIkM1SRE'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear status message when user starts typing
    if (status.message) {
      setStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY)

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        project_title: formData.project_title,
        project_details: formData.project_details
      }

      // Send email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        project_title: '',
        project_details: ''
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        message: error.text || 'Failed to send message. Please try again or contact me directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" label="Contact" heading="Let's build something together">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-white/80">
            Need a performant, modern web experience? I can help with React/Next.js frontends, Node.js backends,
            dashboards, and cloud deployment. I respond quickly.
          </p>
          <SocialLinks socials={socials} pill />
        </div>
        <Card className="space-y-4 border p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white">Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-[rgba(254,126,3,0.9)] focus:ring-2 focus:ring-[rgba(254,126,3,0.15)]"
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-[rgba(254,126,3,0.9)] focus:ring-2 focus:ring-[rgba(254,126,3,0.15)]"
                placeholder="you@example.com"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white">Project title</label>
              <input
                id="projetc_title"
                name="project_title"
                type="text"
                value={formData.project_title}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-[rgba(254,126,3,0.9)] focus:ring-2 focus:ring-[rgba(254,126,3,0.15)]"
                placeholder="e.g., SaaS dashboard, portfolio, store"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white">Project details</label>
              <textarea
                name="project_details"
                value={formData.project_details}
                onChange={handleChange}
                rows="4"
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-[rgba(254,126,3,0.9)] focus:ring-2 focus:ring-[rgba(254,126,3,0.15)]"
                placeholder="What do you want to build?"
                disabled={isSubmitting}
              />
            </div>
            
            {status.message && (
              <div
                className={`rounded-xl px-3 py-2 text-sm ${
                  status.type === 'success'
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-[linear-gradient(90deg,rgba(252,172,21,1),rgba(254,126,3,1))] px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(254,126,3,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
            <p className="text-xs text-white/60">
              Your message will be sent directly to my email inbox.
            </p>
          </form>
        </Card>
      </div>
    </Section>
  )
}

export default Contact

