/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "kids": "url('/src/images/foto-hero.webp')",
        "background3": "url('src/images/background3.svg')",
      },
      colors: {
        primaryYellow: "#E9C033",
        customGreen: "#355d3d",
        customGreenHover: '#16261a'
      }
    },
  },
  plugins: [],
}
