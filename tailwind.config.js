/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#fdfcf9',
          100: '#f9f6f0',
          200: '#f1ebe0',
          300: '#e8ddc9',
        },
        sage: {
          50: '#f3f6f1',
          100: '#e3ebe0',
          200: '#c7d6c2',
          300: '#a7bda2',
          400: '#85a07f',
          500: '#688463',
          600: '#52684f',
          700: '#415340',
          800: '#354336',
          900: '#2c3830',
        },
        blush: {
          50: '#fbf3f1',
          100: '#f6e3df',
          200: '#ecc7c0',
          300: '#dfa9a0',
          400: '#d08b80',
          500: '#bd6f64',
        },
        wood: {
          300: '#d9b896',
          400: '#c79a72',
          500: '#b07f55',
          600: '#946642',
        },
        gold: {
          300: '#e6cd8a',
          400: '#d4b56a',
          500: '#bd9c4e',
          600: '#a0823c',
        },
        ink: '#1c1b19',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        oval: '50% / 45%',
      },
      boxShadow: {
        soft: '0 18px 50px -20px rgba(44, 56, 48, 0.35)',
        glow: '0 0 0 1px rgba(189, 156, 78, 0.25), 0 24px 60px -24px rgba(44, 56, 48, 0.4)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatPulse: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        floatPulse: 'floatPulse 3s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
