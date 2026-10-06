/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        navy: '#1A1814',
        ink: '#221F1C',
        brand: {
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F5E8CB',
          300: '#EED69E',
          400: '#E2BF6A',
          500: '#D4A838', // Emas Kujang / Warm Amber Gold
          600: '#B88A24',
          700: '#916718',
          800: '#6B4912',
          900: '#3D2808',
        },
        gold: '#D4A838',
        'gold-light': '#FDF9EC',
        'gold-hover': '#C2962C',
        paper: '#FFFFFF',
        'paper-warm': '#FDFBF7',
        'paper-border': '#EFECE6',
      },
      boxShadow: {
        premium: '0 20px 50px rgba(34, 31, 28, 0.06)',
        glow: '0 0 30px rgba(212, 168, 56, 0.25)',
        gold: '0 10px 25px -5px rgba(212, 168, 56, 0.3)',
      },
    },
  },
  plugins: [],
};
