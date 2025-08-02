/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
      },
      keyframes: {
        revealDown: {
          "0%": { maxHeight: "0", opacity: "0" },
          "100%": { maxHeight: "300px", opacity: "1" },
        },
        hideUp: {
          "0%": { maxHeight: "300px", opacity: "1" },
          "100%": { maxHeight: "0", opacity: "0" },
        },
      },
      animation: {
        revealDown: "revealDown 800ms ease-out forwards",
        hideUp: "hideUp 800ms ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
