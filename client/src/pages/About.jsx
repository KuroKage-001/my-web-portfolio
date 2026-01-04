import dataAnalyticsBadge from '../assets/badges/data-analytics-essentials.png'
import itFundamentalsBadge from '../assets/badges/information-technology-fundamentals.png'
import osBasicsBadge from '../assets/badges/operating-systems-basics.png'
import webDevBadge from '../assets/badges/web-development-fundamentals.png'
import digitalWorldBadge from '../assets/badges/working-in-a-digital-world-professional-skills.png'
import cloudEssentialsBadge from '../assets/badges/cloud-essentials.1.png'
import { usePageTitle } from '../hooks/usePageTitle'

export default function About() {
  usePageTitle('About')
  const frontendSkills = [
    'React',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS'
  ]

  const backendSkills = [
    'Node.js',
    'Laravel',
    'PHP',
    'REST APIs',
    'MySQL',
    'MongoDB'
  ]

  const toolsSkills = [
    'Git',
    'AWS',
    'Cloud Computing',
    'Project Management'
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
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Cube Background */}
      <div className="cube-background">
        <div className="cube" style={{ top: '10%', left: '5%', animationDuration: '25s' }}>
          <div className="cube-face" style={{ transform: 'rotateY(0deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
        </div>
        <div className="cube" style={{ top: '60%', left: '15%', animationDuration: '30s', animationDirection: 'reverse' }}>
          <div className="cube-face" style={{ transform: 'rotateY(0deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
        </div>
        <div className="cube" style={{ top: '20%', right: '10%', animationDuration: '22s' }}>
          <div className="cube-face" style={{ transform: 'rotateY(0deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
        </div>
        <div className="cube" style={{ top: '70%', right: '20%', animationDuration: '28s', animationDirection: 'reverse' }}>
          <div className="cube-face" style={{ transform: 'rotateY(0deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
        </div>
        <div className="cube" style={{ top: '35%', left: '8%', animationDuration: '27s' }}>
          <div className="cube-face" style={{ transform: 'rotateY(0deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
        </div>
        <div className="cube" style={{ top: '45%', right: '8%', animationDuration: '24s', animationDirection: 'reverse' }}>
          <div className="cube-face" style={{ transform: 'rotateY(0deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
        </div>
        <div className="cube" style={{ top: '85%', left: '25%', animationDuration: '26s' }}>
          <div className="cube-face" style={{ transform: 'rotateY(0deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
        </div>
        <div className="cube" style={{ top: '5%', left: '50%', animationDuration: '29s', animationDirection: 'reverse' }}>
          <div className="cube-face" style={{ transform: 'rotateY(0deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
        </div>
        <div className="cube" style={{ top: '90%', right: '35%', animationDuration: '23s' }}>
          <div className="cube-face" style={{ transform: 'rotateY(0deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
        </div>
        <div className="cube" style={{ top: '15%', right: '30%', animationDuration: '31s', animationDirection: 'reverse' }}>
          <div className="cube-face" style={{ transform: 'rotateY(0deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(30px)' }}></div>
          <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
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
                I am a passionate full-stack web developer with strong hands-on experience in building 
                scalable, secure, and user-centered web-based systems. I specialize in modern technologies 
                such as React, JavaScript, TypeScript, Node.js, Laravel, and PHP, with a solid foundation 
                in database-driven application development.
              </p>
              <p>
                My practical experience includes developing complete web applications using React, Laravel, 
                MySQL, MongoDB, and Git/GitHub, with a strong emphasis on clean code, scalable architecture, 
                and maintainable system design. I am comfortable working across both frontend and backend, 
                ensuring performance, usability, and alignment with real-world requirements.
              </p>
              <p>
                Beyond development, I am committed to continuous learning and professional growth, supported 
                by certifications in cloud computing, operating systems, data analytics, and IT fundamentals. 
                I thrive in collaborative environments and aim to build solutions that are both technically 
                robust and impactful.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Tech Stack
          </h2>
          
          {/* Frontend Section */}
          <div className="mb-10">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Frontend Development
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg shadow-md p-4 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-blue-200 dark:border-blue-700"
                >
                  <span className="text-gray-900 dark:text-white font-semibold">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div className="mb-10">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Backend Development
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg shadow-md p-4 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-green-200 dark:border-green-700"
                >
                  <span className="text-gray-900 dark:text-white font-semibold">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Others Section */}
          <div>
            <div className="flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tools & Others
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {toolsSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg shadow-md p-4 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-purple-200 dark:border-purple-700"
                >
                  <span className="text-gray-900 dark:text-white font-semibold">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
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

