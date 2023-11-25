/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'aim-bg': 'url("/src/assets/images/parallax01.jpg")',
        'footer-bg': 'url("/src/assets/images/footer-bkg.png")'
      },
      colors:{
        'dark-gray': '#25272E',
      },
    },
  },
  plugins: [],
}
