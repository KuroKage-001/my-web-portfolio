import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useTheme } from '../hooks/useTheme'
import profileImageDark from '../assets/images/profile.jpg'
import profileImageDarkHover from '../assets/images/profile01.png'
import profileImageLight from '../assets/images/profile-light01.jpg'
import profileImageLightHover from '../assets/images/profile-light02.png'

export default function Hero({ name, role, tagline, aboutText }) {
  const [isHovered, setIsHovered] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
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
  
  // Get theme with error handling
  let theme = 'light'
  try {
    const themeContext = useTheme()
    theme = themeContext.theme
  } catch (error) {
    console.error('Theme context error:', error)
  }

  // Determine which image to show
  const currentImage = theme === 'dark'
    ? (isHovered ? profileImageDarkHover : profileImageDark)
    : (isHovered ? profileImageLightHover : profileImageLight)

  // Typing effect
  useEffect(() => {
    const currentSkill = skills[currentSkillIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (typedText.length < currentSkill.length) {
          setTypedText(currentSkill.slice(0, typedText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (typedText.length > 0) {
          setTypedText(currentSkill.slice(0, typedText.length - 1))
        } else {
          // Finished deleting, move to next skill
          setIsDeleting(false)
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, currentSkillIndex, skills])

  return (
    <section className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
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

      {/* Floating Social Media Icons */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        <a 
          href="https://github.com/KuroKage-001" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-gray-900 dark:hover:bg-green-600 hover:text-white transition-all duration-300 group"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/leomar-escobin-738563188" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a 
          href="https://www.credly.com/users/leomar-escobin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-orange-500 hover:text-white transition-all duration-300 group"
          aria-label="Credly"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.564 14.621c-.504 1.572-1.557 2.892-2.955 3.705-1.398.813-3.019 1.053-4.557.675-1.538-.378-2.865-1.296-3.729-2.58-.864-1.284-1.197-2.844-.936-4.383.261-1.539 1.089-2.925 2.326-3.893 1.237-.968 2.794-1.437 4.373-1.318 1.579.119 3.042.849 4.111 2.051l-2.121 2.121c-.534-.601-1.266-.964-2.055-1.021-.789-.057-1.567.186-2.186.683-.619.497-.999 1.226-1.066 2.047-.067.821.186 1.631.71 2.275.524.644 1.283 1.053 2.131 1.149.848.096 1.698-.096 2.388-.539.69-.443 1.164-1.104 1.332-1.857h-3.33v-3h6.564v.885z"/>
          </svg>
        </a>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          {/* Profile Image with Floating Cards */}
          <div className="flex-shrink-0 relative w-full max-w-[500px] lg:max-w-[550px] mx-auto">
            {/* Top-Left Card */}
            <div 
              className="absolute -top-6 left-4 md:left-6 lg:-left-8 z-10"
              style={{ 
                animation: 'fadeIn 600ms ease-out forwards, floatCard 3s ease-in-out infinite',
                animationDelay: '0ms, 600ms'
              }}
            >
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl border-2 border-primary-200 dark:border-primary-700 transform hover:scale-105 transition-transform duration-300">
                <p className="text-sm md:text-base font-bold text-primary-600 dark:text-primary-400">💻 Full-Stack</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Web Developer</p>
              </div>
            </div>

            {/* Top-Right Card */}
            <div 
              className="absolute -top-6 right-4 md:right-6 lg:-right-8 z-10"
              style={{ 
                animation: 'fadeIn 600ms ease-out forwards, floatCard 3.5s ease-in-out infinite',
                animationDelay: '100ms, 700ms'
              }}
            >
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl border-2 border-primary-200 dark:border-primary-700 transform hover:scale-105 transition-transform duration-300">
                <p className="text-sm md:text-base font-bold text-primary-600 dark:text-primary-400">⚛️ React & Node.js</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Modern Stack</p>
              </div>
            </div>

            {/* Left Card */}
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 lg:-translate-x-10 z-10"
              style={{ 
                animation: 'fadeIn 600ms ease-out forwards, floatCard 4s ease-in-out infinite',
                animationDelay: '200ms, 800ms'
              }}
            >
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl border-2 border-primary-200 dark:border-primary-700 transform hover:scale-105 transition-transform duration-300 max-w-[140px] md:max-w-[160px]">
                <p className="text-sm md:text-base font-bold text-primary-600 dark:text-primary-400">☁️ Cloud Expert</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">AWS & Azure</p>
              </div>
            </div>

            {/* Right Card */}
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 lg:translate-x-10 z-10"
              style={{ 
                animation: 'fadeIn 600ms ease-out forwards, floatCard 3.2s ease-in-out infinite',
                animationDelay: '300ms, 900ms'
              }}
            >
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl border-2 border-primary-200 dark:border-primary-700 transform hover:scale-105 transition-transform duration-300 max-w-[140px] md:max-w-[160px]">
                <p className="text-sm md:text-base font-bold text-primary-600 dark:text-primary-400">📊 Project Manager</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Agile & Scrum</p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative mx-auto w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
              {/* Base Image */}
              <img 
                src={theme === 'dark' ? profileImageDark : profileImageLight}
                alt={`${name} - ${role}`}
                className="absolute inset-0 w-full h-full rounded-full border-[6px] border-primary-300 dark:border-primary-600 shadow-2xl dark:shadow-primary-900/50 object-cover transition-all duration-500"
                loading="eager"
              />
              {/* Hover Image with Crossfade */}
              <img 
                src={theme === 'dark' ? profileImageDarkHover : profileImageLightHover}
                alt={`${name} - ${role}`}
                className={`absolute inset-0 w-full h-full rounded-full border-[6px] border-primary-300 dark:border-primary-600 shadow-2xl dark:shadow-primary-900/50 object-cover transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-105 border-primary-400 dark:border-primary-500 shadow-3xl' : 'opacity-0 scale-100'
                }`}
                loading="eager"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>

            {/* Bottom-Left Card */}
            <div 
              className="absolute -bottom-6 left-4 md:left-6 lg:-left-8 z-10"
              style={{ 
                animation: 'fadeIn 600ms ease-out forwards, floatCard 3.8s ease-in-out infinite',
                animationDelay: '400ms, 1000ms'
              }}
            >
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl border-2 border-primary-200 dark:border-primary-700 transform hover:scale-105 transition-transform duration-300">
                <p className="text-sm md:text-base font-bold text-primary-600 dark:text-primary-400">🎨 UI/UX Design</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">User Focused</p>
              </div>
            </div>

            {/* Bottom-Right Card */}
            <div 
              className="absolute -bottom-6 right-4 md:right-6 lg:-right-8 z-10"
              style={{ 
                animation: 'fadeIn 600ms ease-out forwards, floatCard 4.2s ease-in-out infinite',
                animationDelay: '500ms, 1100ms'
              }}
            >
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl border-2 border-primary-200 dark:border-primary-700 transform hover:scale-105 transition-transform duration-300">
                <p className="text-sm md:text-base font-bold text-primary-600 dark:text-primary-400">🚀 Scalable Apps</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Performance</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
              {name}
            </h1>
            <div className="mb-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-600 dark:text-primary-400">
                {role}
              </h2>
              <div className="relative">
                <div className="bg-gray-400 dark:bg-gray-600 text-white px-6 py-4 rounded-3xl shadow-lg min-w-[200px] sm:min-w-[250px] text-center">
                  <span className="text-xl sm:text-2xl font-medium inline-flex items-center justify-center">
                    {typedText}
                    <span className="inline-block w-0.5 h-6 sm:h-7 bg-white ml-1 animate-pulse"></span>
                  </span>
                </div>
                {/* Speech bubble tail */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-r-[15px] border-r-gray-400 dark:border-r-gray-600 border-b-[12px] border-b-transparent"></div>
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              {tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link to="/projects">
                <Button variant="primary">View Projects</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
