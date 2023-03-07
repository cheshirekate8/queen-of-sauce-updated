/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sv-thin": ["SV Thin"],
        "sv-bold": ["SV Bold"],
        "sv-title": ["SV Title"],
        "sv-title-caps": ["SV Title Caps"],
      }
    },
  },
  plugins: [],
}
