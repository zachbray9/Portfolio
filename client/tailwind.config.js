/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#f5f5f5',
        'bg-dark': '#18191a',
        'text-light': '#333333',
        'text-dark': '#ffffff'
      }
    },
  },
  darkMode: "class",
  plugins: [],
}

