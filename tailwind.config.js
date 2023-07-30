/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    animation: {
      nethria: "nethria 0.5s linear, shake 0.5s linear",
    },
    colors: {
      white: "#FFFFFF",
      red: "red",
      green: "#5DD4AE",
      "warm-gray": {
        25: "#FDFBF5",
        50: "#FAF8F2",
        100: "#F7F4E9",
        200: "#E7E4DA",
        300: "#D7D5CC",
        400: "#B8B6AF",
        500: "#A8A7A1",
        600: "#888884",
        700: "#797875",
        800: "#5C5C5A",
        900: "#3d3d3d",
      },
      "cold-gray": {
        25: "#FCFCFD",
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D2D6DB",
        400: "#9DA4AE",
        500: "#6C737F",
        600: "#4D5761",
        700: "#384250",
        800: "#1F2A37",
        900: "#111927",
      },
    },
    fontFamily: {
      sans: ["DM Sans"],
      mono: ["DM Mono"],
    },
    extend: {},
  },
  plugins: [],
};
