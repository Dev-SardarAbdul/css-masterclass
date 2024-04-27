/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orangish: "#1F2B7B",
        blueish: "#00235B",
      },
      backgroundImage: {
        heroImage: "url(/images/cardImg.png)",
      },
    },
  },
  plugins: [],
};
