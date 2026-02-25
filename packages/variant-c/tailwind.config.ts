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
    extend: {},
  },
  plugins: [],
} satisfies Config
