/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#111926",
          700: "#022859",
          400: "#044BD9",
          200: "#92AFCD"
        },
        gray: {
          100: "#E9E9E9"
        },
      }
    },
  },
  plugins: [],
}
