import ContactForm from '../components/ContactForm'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Contact() {
  usePageTitle('Contact')
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

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Email
            </h2>
          </div>
          <div className="text-center">
            <a
              href="mailto:escobinleomar56@gmail.com"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors block mb-1"
            >
              escobinleomar56@gmail.com
            </a>
            <a
              href="mailto:leomaresc853@gmail.com"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              leomaresc853@gmail.com
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send Me a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

