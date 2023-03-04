/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading' : ['Clash Display', 'sans-serif'],
        'body': ['Satoshi', 'sans-serif']
      }
    },
  },
  plugins: [],
}
