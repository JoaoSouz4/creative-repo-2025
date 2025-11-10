/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'h-xs': {'raw': '(min-height):400px'},
        'h-sm': {'raw': '(min-height: 600px)'},
        'h-md': { 'raw': '(min-height: 800px)' },
        'h-lg': { 'raw': '(min-height: 1000px)' },
      },

      keyframes: {
        orbit: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(50px)' },
        }
      },

      animation: {
        orbit: 'orbit 1s ease-in-out infinite alternate',
      },

      fontFamily: {
        rubik: ['"Rubik Marker Hatch"', 'cursive'], // apenas uma classe, não altera o padrão
      },
    },
  },
  plugins: [],
}
