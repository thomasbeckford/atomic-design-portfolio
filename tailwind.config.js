/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flashingMixBlendMode: {
          "0%": { mixBlendMode: "normal", opacity: 1 },
          "50%": { mixBlendMode: "difference", opacity: 0.5 },
          "100%": { mixBlendMode: "normal", opacity: 1 },
        },
        wave: {
          "0%": {
            transform: "translateY(0) rotate(0)",
          },
          "25%": {
            transform: "translateY(-15px) rotate(-5deg)",
          },
          "50%": {
            transform: "translateY(0) rotate(0)",
          },
          "75%": {
            transform: "translateY(5px) rotate(5deg)",
          },
          "100%": {
            transform: "translateY(0) rotate(0)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-out",
        wave: "wave 1s ease-in-out infinite",
        flashingMixBlendMode: "flashingMixBlendMode .1s 10 ease-in-out ",
      },
    },
  },
  plugins: [],
};
