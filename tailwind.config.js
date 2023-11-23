/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'workSans': 'Work Sans, sans-serif',
      },
    },
  },
  plugins: [],
});
