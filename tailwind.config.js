const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#62e377",
        accent: "#0e0e0e",
      },
      fontFamily: {
        outfit: ["Outfit", " sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
