import { useEffect, useState } from 'react'

export const useThemeDetector = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const isDarkTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(isDarkTheme() ? 'dark' : 'light')

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (event) => {
      const newColorScheme = event.matches ? 'light' : 'dark'
      setTheme(newColorScheme)
    })

    return () => {
      window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', () => {})
    }
  }, [])
  return theme
}
