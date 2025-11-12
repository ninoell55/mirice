// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // 'nama-class': ['Nama Font dari @font-face', ...fallback]
        mirice: ["MiriceFont", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
  