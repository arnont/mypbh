/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-theme": "#A0EEA0",
        "nav-image": "#C0EEC0",
      }
    },
  },
  plugins: [],
}

