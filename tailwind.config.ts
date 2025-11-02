/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik Marker Hatch"', 'cursive'], // apenas uma classe, não altera o padrão
      },
    },
  },
  plugins: [],
}
