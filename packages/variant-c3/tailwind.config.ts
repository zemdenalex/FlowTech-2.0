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
          main: '#1A1714',
          secondary: '#2A2520',
          border: '#8B7340',
          purple: '#C8A55C',
        },
        gd: {
          0: '#0A0908',
          40: '#2A2520',
          70: '#8B7340',
          100: '#C8A55C',
        },
        gd0: '#0A0908',
        gd40: '#2A2520',
        gd70: '#8B7340',
        gd100: '#C8A55C',
        main: '#1A1714',
        secondary: '#2A2520',
      },
    },
  },
  plugins: [],
} satisfies Config
