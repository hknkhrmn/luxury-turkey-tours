/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0F1A',
        accent: '#C8A96A',
        'accent-light': '#E2C98A',
        'text-secondary': '#A0A0A0',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        layout: '1320px',
      },
    },
  },
  plugins: [],
}
