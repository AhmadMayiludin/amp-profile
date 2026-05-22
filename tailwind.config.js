/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        navy: '#07152f',
        ink: '#0b1220',
        electric: '#2563eb',
        aqua: '#06b6d4',
        violet: '#7c3aed',
      },
      boxShadow: {
        premium: '0 24px 70px rgba(15, 23, 42, 0.12)',
        glow: '0 0 34px rgba(37, 99, 235, 0.22)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(6, 182, 212, 0.18)' },
          '50%': { boxShadow: '0 0 42px rgba(124, 58, 237, 0.28)' },
        },
      },
    },
  },
  plugins: [],
};
