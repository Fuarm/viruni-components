const typography = require('@tailwindcss/typography')

module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [typography, require('./plugin')],
}
