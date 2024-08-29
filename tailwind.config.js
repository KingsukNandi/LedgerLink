/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        highlight: "#caff33",
        primary: "#ffffff",
        secondary: "#e4e4e7",
        body: "#191919",
        border: "#262626",
        borderAccent: "#454f29",
        cardBg: "#1c1c1c",
        buttonBG: "#22251b",
        darkText: "#b3b3b3",
      },
    },
  },
  plugins: [],
};
