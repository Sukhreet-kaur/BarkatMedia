/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        barkat: {
          green: '#1A5C3A',
          greenLight: '#2A7A4A',
          greenDark: '#0D2E1E',
          lightGreen: '#F0F7F4',
          gold: '#C79A45',
          goldLight: '#E8D5A3',
          cream: '#F5F1E8',
          white: '#FFFFFF',
          dark: '#0A1A12',
          darkBg: '#0D2E1E',
          text: '#1A1A1A',
          textLight: '#666666',
          textDark: '#E8EDE9',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}