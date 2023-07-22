/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "col-1": "#01baef",
        "col-2": "#0CBABA",
        "col-3": "#380036",
        "col-4": "#26081C",
        "col-5": "#150811",
        "light-dark": "#181818"
      },
      backgroundImage: {
        "story-img" : "url('./src/assets/read-story-bg.jpg')"
      },
    },
  },
  plugins: [],
}