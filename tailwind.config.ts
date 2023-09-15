import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Righteous: ['Righteous', 'cursive']
      },
      colors: {
        primary: '#EA0006',
        easy: '#0000FF',
        medium: '#FFA500',
        hard: '#FFFFD0'
      },
    },
  },
  plugins: [],
}
export default config
