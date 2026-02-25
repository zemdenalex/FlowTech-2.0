import type { Config } from 'tailwindcss'

const preset: Partial<Config> = {
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xxs': '512px',
        'xs': '588px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '3rem',
          sm: '5rem',
        },
      },
      colors: {
        // Semantic colors via CSS vars (theme-aware)
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          accent: 'var(--color-bg-accent)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          inverse: 'var(--color-text-inverse)',
          muted: 'var(--color-text-muted)',
        },
        separator: 'var(--color-separator)',
        // Static brand colors
        brand: {
          main: '#1B1A28',
          secondary: '#252352',
          border: '#765BAB',
          purple: '#534FB8',
        },
        // Gradient stops
        gd: {
          0: '#040319',
          40: '#252352',
          70: '#534FB8',
          100: '#765BAB',
        },
        // Backwards-compat aliases (for code copied from site/)
        main: '#1B1A28',
        secondary: '#252352',
        border: '#765BAB',
        gd0: '#040319',
        gd40: '#252352',
        gd70: '#534FB8',
        gd100: '#765BAB',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default preset
