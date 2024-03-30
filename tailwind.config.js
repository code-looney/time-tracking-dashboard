/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'very-dark-blue': 'hsl(226, 43%, 10%)',
       'card-primary': 'hsl(246, 80%, 60%)'
      },
      backgroundImage: {
        'card-paterns': 'url(`public/images/icon-work.svg`)'
      }
    },
  },
  plugins: [],
}