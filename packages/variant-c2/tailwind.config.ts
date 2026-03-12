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
          main: '#0F1923',
          secondary: '#1A2E3E',
          border: '#1B7A8A',
          purple: '#2EC4B6',
        },
        gd: {
          0: '#060D14',
          40: '#1A2E3E',
          70: '#1B7A8A',
          100: '#2EC4B6',
        },
        gd0: '#060D14',
        gd40: '#1A2E3E',
        gd70: '#1B7A8A',
        gd100: '#2EC4B6',
        main: '#0F1923',
        secondary: '#1A2E3E',
      },
    },
  },
  plugins: [],
} satisfies Config
