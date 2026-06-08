/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy:   '#0a0e1a',
        navy2:  '#0f1629',
        indigo: { DEFAULT: '#4a5fc1', light: '#6b7fe0' },
        cyan:   { DEFAULT: '#5ebec4', light: '#7dd4d9' },
        slate:  '#394f8a',
        muted:  '#a0aecd',
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 1s ease forwards',
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'shimmer':    'shimmer 3s linear infinite',
        'spin-slow':  'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
