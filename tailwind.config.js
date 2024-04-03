/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        BgModal:'rgba(37, 40, 41, 0.664)',
        Bgnav: '#1C2833'
      },
      backgroundImage: {
        'Bg-imagen1': "url('../Frame1.png')",
        'Bg-fondoh': "url('../fondoh.jpg')",
        'Bg-fondop': "url('../fondop.jpg')",
        'Bg-fondohg': "url('../fondohg.jpg')",
      },
    },
  },
  plugins: [],
}

