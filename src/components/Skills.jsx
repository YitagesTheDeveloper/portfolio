import React from 'react'
import Section from './ui/Section'
import Card from './ui/Card'
import Badge from './ui/Badge'

const Skills = ({ skills }) => (
  <Section
    id="skills"
    label="Skills"
    heading="Favorite tools & stacks"
    action={<Badge tone="accent">Ready for Netlify</Badge>}
  >
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((group) => (
        <Card
          key={group.title}
          className="flex flex-col gap-3 border p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
        >
          <p className="text-sm font-semibold text-white">{group.title}</p>
          <div className="flex flex-wrap gap-2 text-sm text-white/80">
            {group.items.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </Section>
)

export default Skills

