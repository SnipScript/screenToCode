/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Nunito":["Nunito", "sans-serif"]
      },
      colors: {grayColor: "#202842"}
    },
  },
  plugins: [],
} 