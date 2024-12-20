/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#fafafa',
        'bg-dark': '#121212',
        'secondary': '#e5e5e5',
        'secondary-dark': '#1e1e1e',
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

