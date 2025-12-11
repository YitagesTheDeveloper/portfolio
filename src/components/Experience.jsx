import React from 'react'
import Section from './ui/Section'
import Card from './ui/Card'
import MetricList from './ui/MetricList'
import Badge from './ui/Badge'

const Experience = ({ experiences }) => (
  <Section
    id="experience"
    label="Experience"
    heading="Where I’m growing"
    action={<Badge tone="accent">Open to opportunities</Badge>}
  >
    <div className="space-y-4">
      {experiences.map((exp) => (
        <Card key={exp.role} className="border p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">{exp.period}</p>
              <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
              <p className="text-sm text-white/60">{exp.org}</p>
            </div>
          </div>
          <div className="mt-3">
            <MetricList items={exp.bullets} />
          </div>
        </Card>
      ))}
    </div>
  </Section>
)

export default Experience

