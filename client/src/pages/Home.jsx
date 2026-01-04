import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import projects from '../utils/projectsData'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle()
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  return (
    <div>
      <Hero
        name="Leomar Escobin"
        role="Web Developer"
        tagline="Web Developer | Full-Stack Web Developer | Project Management | Cloud | Code"
        aboutText="I'm a passionate full-stack web developer with expertise in building modern, scalable web applications. I specialize in React, Node.js, cloud technologies, and project management."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Check out some of my recent work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

