/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./{components,app}/**/*.{ts,tsx}",
    "./node_modules/@rafty/{ui,corp}/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@rafty/plugin")],
};
