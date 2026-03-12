import type { Config } from 'tailwindcss'
import sharedPreset from '../shared/theme/tailwind-preset'

export default {
  presets: [sharedPreset as Config],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../shared/components/**/*.{js,jsx,ts,tsx}',
    '../shared/theme/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: 'var(--color-brand-purple)',
        },
        // Override gradient stops to use CSS vars (theme-aware)
        gd: {
          0: 'var(--color-gd-0)',
          40: 'var(--color-gd-40)',
          70: 'var(--color-gd-70)',
          100: 'var(--color-gd-100)',
        },
        gd0: 'var(--color-gd-0)',
        gd40: 'var(--color-gd-40)',
        gd70: 'var(--color-gd-70)',
        gd100: 'var(--color-gd-100)',
        // Static accent gradient (stays purple in all themes)
        accent: {
          from: '#534FB8',
          to: '#765BAB',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
