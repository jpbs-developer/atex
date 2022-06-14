/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'Atex_blue': '#138EFF',
        'Dark_Grey_ATEX': '#404449',
        'black_button': '#141414',
        'gray_Atex': '#B5B5B5'
      }
    },
  },
  plugins: [],
}