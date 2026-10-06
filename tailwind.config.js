/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          bg: '#F5F0E3',
          card: '#FFFEFA',
          subtle: '#EDE6D6',
        },
        ink: {
          DEFAULT: '#191410',
          muted: '#665E55',
          light: '#948A7D',
        },
        brand: {
          amber: '#D97706',
          orange: '#F2721C',
          yellow: '#EAFA2E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'tactile-sm': '2px 2px 0px #191410',
        'tactile': '4px 4px 0px #191410',
        'tactile-lg': '6px 6px 0px #191410',
        'tactile-amber': '4px 4px 0px #D97706',
      }
    },
  },
  plugins: [],
}
