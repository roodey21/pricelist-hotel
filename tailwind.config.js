/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      blur: {
        'xs': '2px',
      }
    },
    fontFamily: {
      'latin' : ['Dancing Script', 'sans-serif']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
