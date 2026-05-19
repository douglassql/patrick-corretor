module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* brand kept for compatibility with existing classes */
        brand: {
          50: '#fff8f2',
          100: '#fff0e6',
          200: '#ffd9bf',
          400: '#ff9a59',
          500: '#ff7a1f',
          600: '#ff6100',
          800: '#b14300'
        },
        primary: {
          50: '#fff8f2',
          100: '#fff0e6',
          200: '#ffd9bf',
          400: '#ff9a59',
          500: '#ff7a1f',
          600: '#ff6100',
          800: '#b14300'
        },
        petrol: {
          50: '#f2fbfc',
          100: '#e6f6fa',
          200: '#bfe6ef',
          400: '#3b7285',
          500: '#0f5670',
          700: '#0a3a4a'
        },
        accent: {
          50: '#fff9ec',
          100: '#fff3d6',
          200: '#ffe399',
          400: '#ffd000',
          500: '#ffbf00'
        },
        sand: {
          50: '#fbf7f2',
          100: '#f2e9d9',
          300: '#e7d8bf',
          500: '#d8c6a8'
        },
        charcoal: {
          50: '#f7f8f9',
          100: '#eef0f2',
          300: '#b6bcc3',
          500: '#334155',
          700: '#111827'
        },
        cta: {
          primary: '#ff7a1f',
          primaryHover: '#ff6100',
          secondary: '#0f5670',
          secondaryHover: '#0a3a4a'
        },
        ui: {
          bg: '#fbf9f7',
          section: '#ffffff',
          muted: '#f6f6f7'
        },
        card: {
          1: '#fff4ef',
          2: '#fff9f0',
          3: '#f7fbfb'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16,24,40,0.08)',
        pop: '0 18px 50px rgba(16,24,40,0.12)'
      },
      borderRadius: {
        xl: '14px',
        lg: '10px'
      }
    }
  },
  plugins: [],
}
