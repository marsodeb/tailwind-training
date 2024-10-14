/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-color': 'rgba(255, 255, 255, 0.1)',
        'nav-color-hover': 'rgba(255, 255, 255, 0.2)',
      },
      boxShadow: {
        'main': '0px 0px 10px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}

