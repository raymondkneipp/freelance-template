const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3E6990',
        secondary: '#381D2A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        heading: ['var(--font-syne)', ...fontFamily.sans],
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
