/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "DM Sans"],
      },
      colors: {
        primary: "#38426C",
        banner: "#FBFCFE",
        red: "#FB",
        button: "#f3f3f3",
      },
    },
  },
  plugins: [],
};
