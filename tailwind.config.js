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
       'card-primary': 'hsl(246, 80%, 60%)',
       'work': 'hsl(15, 100%, 70%)',
       'play': ' hsl(195, 74%, 62%)',
       'study': 'hsl(348, 100%, 68%)',
       'exercise': 'hsl(145, 58%, 55%)',
       'social': 'hsl(264, 64%, 52%)',
       'self-care': 'hsl(43, 84%, 65%)'
      },
    },
  },
  plugins: [],
}