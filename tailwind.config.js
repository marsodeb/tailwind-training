/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bar-color': 'rgba(255, 255, 255, 0.1)',
      },
      boxShadow: {
        'main': '0px 0px 10px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}

