import { useState, useMemo } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../utils/projectsData'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Projects() {
  usePageTitle('Projects')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const allTags = useMemo(() => {
    const tags = new Set()
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag))
    })
    return ['all', ...Array.from(tags).sort()]
  }, [])

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') {
      return projects
    }
    return projects.filter(project => 
      project.tags.includes(selectedFilter)
    )
  }, [selectedFilter])

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Explore my portfolio of web development projects. Filter by technology to see specific work.
        </p>

        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Filter by Technology
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedFilter(tag)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                  selectedFilter === tag
                    ? 'bg-primary-600 text-white dark:bg-primary-500'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                }`}
              >
                {tag === 'all' ? 'All Projects' : tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found with the selected filter.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

