/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5f2',
          100: '#ffe8e2',
          200: '#ffd3c8',
          300: '#ffb2a1',
          400: '#ff7e63',
          500: '#ff441f', // Primary tomato/vibrant red-orange
          600: '#eb300c',
          700: '#c52407',
          800: '#9e200a',
          900: '#7f1f0e',
          950: '#450c05',
        },
        crave: {
          yellow: '#FFB703',
          amber: '#FB8500',
          dark: '#121316',
          darker: '#0A0B0D',
          surface: '#1A1D22',
          surfaceLight: '#242930',
          warmWhite: '#FAF8F5',
          warmGray: '#F3EFE9',
          borderLight: '#E8E1D7',
          borderDark: '#2C323B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 25px -5px rgba(255, 68, 31, 0.4)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
