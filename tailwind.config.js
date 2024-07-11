/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      boxShadow: {
       'custom': '0px 4px 30px rgba(0, 0, 0, 0.06)',
       'custom1': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        none: 'none',
      },
      gridTemplateRows: {

       'custom': 'repeat(auto-fit, minmax(150px, 1fr))',
      }
    },
  },
}