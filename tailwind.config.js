/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffdf0',
          100: '#fff8cc',
          200: '#ffef85',
          300: '#ffe03d',
          400: '#ffd000',
          500: '#e6b800',
          600: '#c49a00',
          700: '#a07c00',
          800: '#7a5e00',
          900: '#5c4600',
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          dark: '#8B6914',
        },
        luxury: {
          black: '#0A0A0A',
          darkgray: '#111111',
          charcoal: '#1a1a1a',
          silver: '#C0C0C0',
          pearl: '#F8F6F0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
        'luxury-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #1a1a1a 100%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.85) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201,168,76,0.7)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
