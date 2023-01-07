const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#581F18',
        secondary: '#202C59',
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
