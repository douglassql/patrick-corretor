module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffaf5',
          100: '#fff2e6',
          200: '#ffd7b3',
          400: '#ff8a2b',
          500: '#ff6b1a',
          600: '#ff5600',
          800: '#cc4200'
        },
        accent: {
          50: '#fffbea',
          200: '#ffecb3',
          500: '#ffbf00'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(16,24,40,0.08)'
      },
      borderRadius: {
        xl: '14px'
      }
    }
  },
  plugins: [],
}
