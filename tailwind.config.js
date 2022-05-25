const typography = require('@tailwindcss/typography')

module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, require('./plugins')],
}
