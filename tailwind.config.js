/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        league_spartan: ['"League Spartan"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary-clr1' : '#502050',
        'primary-clr2' : '#ee68a4',
        'secondary-clr1' : '#937b92',
        'secondary-clr2' : '#f7f2f7',
        'secondary-clr3' : '#fdfdfd',
      },
      screens: {
        'sm' : '375px',
        "md" : '600px',
        "lg" : '900px',
        "xlg" : '1040px',
      }
    },
  },
  plugins: [],
}

