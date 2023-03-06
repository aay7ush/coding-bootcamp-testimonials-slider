/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-blue": "hsl(240, 38%, 20%)",
        "grayish-blue": "hsl(240, 18%, 77%)",
      },
    },
  },
  plugins: [],
}
