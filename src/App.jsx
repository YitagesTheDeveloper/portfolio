import React from 'react'
import Layout from './components/layout/Layout'
import Header from './components/layout/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Peojects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import skills from './data/skills'
import projects from './data/projects'
import experiences from './data/experience'
import socials from './data/socials'

const resumeLink = '/resume.pdf' // Served from public/

const App = () => {
  return (
    <Layout>
      {({ isDark, setIsDark }) => (
        <>
          <Header isDark={isDark} onToggle={() => setIsDark((v) => !v)} />
          <main className="mt-10 space-y-16 md:space-y-20">
            <Hero resumeLink={resumeLink} />
            <About socials={socials} />
            <Skills skills={skills} />
            <Projects projects={projects} />
            <Experience experiences={experiences} />
            <Education />
            <Contact socials={socials} />
          </main>
          <Footer socials={socials} />
        </>
      )}
    </Layout>
  )
}

export default App