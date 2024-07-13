/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0000FF",
        "secondary": "#0000FF",
        "disabled": "rgb(209, 213, 219)",
        "description": "#737373",
        "gray-container": "rgb(248, 248, 248)",
        "gray-hover": "rgb(240, 240, 240)",
      }
    },
  },
  plugins: [],
}