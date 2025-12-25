import React from 'react'
import Section from './ui/Section'
import Card from './ui/Card'
import MetricList from './ui/MetricList'
import Badge from './ui/Badge'

const Projects = ({ projects }) => (
  <Section
    id="projects"
    label="Projects"
    heading="Featured work"
    action={
      <a href="https://github.com/YitagesTheDeveloper" className="text-sm font-semibold text-[rgba(252,172,21,1)] hover:text-[rgba(254,126,3,1)]">
        GitHub ↗
      </a>
    }
  >
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <Card
          key={project.title}
          className="group relative overflow-hidden border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(252,172,21,0.15),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(254,126,3,0.18),transparent_45%)]" />
          </div>
          <div className="relative flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-white">{project.title}</h4>
              <Badge className="text-slate-900" tone="accent">
                {project.tech}
              </Badge>
            </div>
            <MetricList items={project.points} />
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  className="text-sm font-semibold text-white transition hover:text-[rgba(252,172,21,1)]"
                >
                  View code ↗
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[rgba(252,172,21,1)] transition hover:text-[rgba(254,126,3,1)]"
                >
                  Live demo ↗
                </a>
              )}
              <Badge className="ml-auto border border-white/20 text-white/70">Performance first</Badge>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
)

export default Projects

