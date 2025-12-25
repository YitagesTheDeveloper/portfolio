import React from 'react'
import Section from './ui/Section'
import Card from './ui/Card'
import Badge from './ui/Badge'

const Education = () => (
  <Section id="education" label="Education" heading="Learning & community">
    <Card className="border p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h4 className="text-lg font-semibold text-white">Arbaminch University</h4>
          <p className="text-sm text-white/70">BSc, Software Engineering (Year 4)</p>
        </div>
        <Badge tone="accent">Member, Tech Hub</Badge>
      </div>
    </Card>
  </Section>
)

export default Education

