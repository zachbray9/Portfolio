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
        text: {
          light: '#333333',
          dark: '#ffffff'
        },
        muted: {
          DEFAULT: '#6B7280',
          dark: '#A1A1AA'
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
}

