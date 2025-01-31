/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       'josef':["Josefin Sans", "serif"],
       'lato':['Lato', 'serif']
      },
    colors:{
      'praimary':' #FB2E86'
    }
    },
  },
  plugins: [],
}