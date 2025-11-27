/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#355DFF',
        secondary: '#5A7CFF',
      },
    },
  },
  plugins: [],
}
