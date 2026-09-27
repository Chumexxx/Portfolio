import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

const getInitialTheme = () => {
  const current = document.documentElement.getAttribute('data-theme')
  if (current === 'light' || current === 'dark') return current
  return 'dark'
}

// The initial theme is set by an inline script in index.html (before paint)
// to avoid a flash; this hook just keeps React in sync and persists toggles.
export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'light' ? '#fafafa' : '#09090b')
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // storage can be unavailable (private mode); theme still applies for this visit
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
