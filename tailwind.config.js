/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      "light",
      "dark", 
      "dim"
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        ranco: '"Rancho", "cursive"',
        common: "Raleway"
      }
    },
    
  },
  plugins: [require('daisyui')],
}
