/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
      // backgroundImage: {
      //   "michael-pogi": "url('./images/michael-pogi.jpg')",
      // },
    },
  },
  plugins: [],
};
