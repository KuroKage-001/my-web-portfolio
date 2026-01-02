import dataAnalyticsBadge from '../assets/badges/data-analytics-essentials.png'
import itFundamentalsBadge from '../assets/badges/information-technology-fundamentals.png'
import osBasicsBadge from '../assets/badges/operating-systems-basics.png'
import webDevBadge from '../assets/badges/web-development-fundamentals.png'
import digitalWorldBadge from '../assets/badges/working-in-a-digital-world-professional-skills.png'
import cloudEssentialsBadge from '../assets/badges/cloud-essentials.1.png'

export default function About() {
  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Laravel',
    'PHP',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'Git',
    'AWS',
    'Cloud Computing',
    'Project Management',
    'REST APIs',
    'MySQL',
    'MongoDB'
  ]

  const certifications = [
    {
      name: 'Data Analytics Essentials',
      issuer: 'Cisco',
      date: 'View Credential',
      badgeUrl: dataAnalyticsBadge,
      credlyUrl: 'https://www.credly.com/users/leomar-escobin'
    },
    {
      name: 'Information Technology Fundamentals',
      issuer: 'IBM',
      date: 'View Credential',
      badgeUrl: itFundamentalsBadge,
      credlyUrl: 'https://www.credly.com/users/leomar-escobin'
    },
    {
      name: 'Operating Systems Basics',
      issuer: 'Cisco',
      date: 'View Credential',
      badgeUrl: osBasicsBadge,
      credlyUrl: 'https://www.credly.com/users/leomar-escobin'
    },
    {
      name: 'Web Development Fundamentals',
      issuer: 'IBM',
      date: 'View Credential',
      badgeUrl: webDevBadge,
      credlyUrl: 'https://www.credly.com/users/leomar-escobin'
    },
    {
      name: 'Working in a Digital World: Professional Skills',
      issuer: 'IBM',
      date: 'View Credential',
      badgeUrl: digitalWorldBadge,
      credlyUrl: 'https://www.credly.com/users/leomar-escobin'
    },
    {
      name: 'Cloud Essentials',
      issuer: 'IBM',
      date: 'View Credential',
      badgeUrl: cloudEssentialsBadge,
      credlyUrl: 'https://www.credly.com/users/leomar-escobin'
    }
  ]

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h1>

        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a passionate full-stack web developer with expertise in creating scalable, 
                efficient, and user-friendly web applications. My journey in web development 
                combines technical excellence with strong project management skills, allowing 
                me to deliver comprehensive solutions from concept to deployment.
              </p>
              <p>
                I specialize in modern web technologies including React, Node.js, Laravel, and 
                cloud platforms like AWS. With a focus on both frontend and backend development, 
                I build complete systems that are performant, maintainable, and aligned with 
                business objectives.
              </p>
              <p>
                Beyond coding, I'm committed to continuous learning and professional growth. 
                I hold various certifications in cloud computing and development practices, 
                and I actively contribute to the developer community through knowledge sharing 
                and collaboration.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <span className="text-gray-900 dark:text-white font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications & Credentials
          </h2>
          <div className="mb-6 text-center">
            <a
              href="https://www.credly.com/users/leomar-escobin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium"
            >
              View All Credentials on Credly
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                <div className="mb-4 w-32 h-32 flex items-center justify-center">
                  <img
                    src={cert.badgeUrl}
                    alt={`${cert.name} Badge`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {cert.issuer}
                </p>
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium group-hover:underline">
                  {cert.date}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

