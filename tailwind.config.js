/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f4f7f2',
          100: '#e5ede0',
          200: '#c7dbbb',
          300: '#a2c490',
          400: '#7aa865',
          500: '#43682b',
          600: '#335220',
          700: '#284218',
          800: '#1f3313',
          900: '#15240c',
        },
        cream: {
          50: '#faf8f5',
          100: '#f5efe6',
          200: '#e8dec9',
          300: '#d6c7a7',
          400: '#c2af84',
        },
        earth: {
          100: '#f7f1ec',
          200: '#e9d6c7',
          500: '#8c532b',
          600: '#6e3f1f',
          700: '#542f16',
          800: '#3b200e',
        },
        amber: {
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'organic': '0 10px 30px -10px rgba(40, 66, 24, 0.12)',
        'organic-hover': '0 20px 40px -15px rgba(40, 66, 24, 0.22)',
        'glow': '0 0 25px rgba(67, 104, 43, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
}
