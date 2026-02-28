/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tinos: ['"Tinos"', ...defaultTheme.fontFamily.serif], // Adds 'font-tinos' class
      },
    },
  },
  plugins: [],
}

