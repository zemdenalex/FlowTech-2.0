import { useTheme } from '../theme/index'

interface ThemeToggleProps {
  className?: string
}

const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors ${className}`}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? '\u263E' : '\u2600'}
    </button>
  )
}

export default ThemeToggle
