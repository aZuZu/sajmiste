const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#6D28D9',
        secondary: '#8B5CF6'
      }
    }
  },
  plugins: []
}
