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
        'gray_Atex': '#B5B5B5',
        'atex_light_orange': '#FDE6D2',
        'atex_orange': '#F48120',
        'atex_light_gray': '#E9E9E9',
        'light_green_atex': '#CDF1CC',
        'green_atex': '#57CC5B',
        'atex_cinza_terroso': '#968D8D'
      }
    },
  },
  plugins: [],
}