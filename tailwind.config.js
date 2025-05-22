/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4ADE80",
        secondary: "#2DD4BF",
        background: "#000000",
        surface: "#1A1A1A",
        surfaceLight: "#2A2A2A",
        white: "#FFFFFF",
        grey: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
