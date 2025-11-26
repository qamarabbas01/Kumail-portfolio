/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightColor: "#06b6d4", // teal-ish
        accent: "#0ea5a6",
        backgroundColor: "#f8fafc",
        primary: "#0f172a"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(6,182,212,0.06), rgba(14,165,166,0.03))'
      }
    },
  },
  plugins: [],
}

