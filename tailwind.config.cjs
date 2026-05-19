module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff8fb',
          100: '#feeef6',
          200: '#ffd6ea',
          400: '#ff85c1',
          600: '#ff3b8f',
          800: '#d02a6d'
        },
        accent: {
          50: '#f2fbff',
          200: '#bfefff',
          500: '#00a7ff'
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
