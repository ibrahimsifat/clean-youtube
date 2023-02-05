/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        border: "border 4s ease infinite",
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        load: {
          "0%": { left: "-100%" },
          "100%": { left: "150%" },
        },
      },
    },
  },
  plugins: [],
};
