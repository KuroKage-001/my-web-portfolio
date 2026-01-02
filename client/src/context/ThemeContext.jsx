import { createContext, useState, useEffect, useContext } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      // Clear any existing theme to start fresh
      const savedTheme = localStorage.getItem('theme')
      // Default to light mode
      return savedTheme === 'dark' ? 'dark' : 'light'
    } catch (error) {
      console.error('Failed to load theme from localStorage:', error)
      return 'light'
    }
  })

  useEffect(() => {
    try {
      const root = document.documentElement
      
      // Force remove the dark class first
      root.classList.remove('dark')
      
      // Then add it back only if theme is dark
      if (theme === 'dark') {
        root.classList.add('dark')
      }
      
      // Save to localStorage
      localStorage.setItem('theme', theme)
      
      console.log('Theme applied:', theme, 'Dark class present:', root.classList.contains('dark'))
      console.log('HTML classes:', root.className)
    } catch (error) {
      console.error('Failed to save theme to localStorage:', error)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      console.log('Toggling theme from', prevTheme, 'to', newTheme)
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
