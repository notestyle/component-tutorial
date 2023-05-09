/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18ebc5",
        main: "#722dfe",
        mid: "#a82bfa",
        dark: "#120330",
        white: "#efe9fe",
      },
    },
  },
  plugins: [],
};
