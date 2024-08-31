/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        primary: "#0FA47F",
        secondary: "#5536DA",
        tertiary: "#202123",
        background: "#343541",
        blackC: "#2E3339",
      },
    },
  },
  plugins: [],
};
