import { useEffect } from 'react'

export default function Toast({ type = 'success', message, onClose, duration = 5000 }) {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const icons = {
    success: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    error: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    info: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  }

  const styles = {
    success: 'bg-green-50 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-200',
    error: 'bg-red-50 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-200',
    info: 'bg-blue-50 dark:bg-blue-900/30 border-blue-500 text-blue-800 dark:text-blue-200',
    warning: 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-500 text-yellow-800 dark:text-yellow-200'
  }

  const iconColors = {
    success: 'text-green-500 dark:text-green-400',
    error: 'text-red-500 dark:text-red-400',
    info: 'text-blue-500 dark:text-blue-400',
    warning: 'text-yellow-500 dark:text-yellow-400'
  }

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-in-right">
      <div className={`flex items-start gap-3 min-w-[320px] max-w-md p-4 rounded-lg border-l-4 shadow-lg backdrop-blur-sm ${styles[type]}`}>
        <div className={`flex-shrink-0 ${iconColors[type]}`}>
          {icons[type]}
        </div>
        <div className="flex-1 pt-0.5">
          <p className="text-sm font-medium leading-relaxed">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 hover:opacity-70 transition-opacity"
          aria-label="Close notification"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
