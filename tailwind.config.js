/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./lch/**/*.{html,js}",
    "./lgh/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      blur: {
        'xs': '2px',
      }
    },
    fontFamily: {
      'latin' : ['Dancing Script', 'Inter'],
      'inter' : ['Montserrat', 'sans-serif'],
      'montaga' : ['Montaga', 'serif'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
