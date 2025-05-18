/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: '#1E3A8A',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode with class-based toggling
}