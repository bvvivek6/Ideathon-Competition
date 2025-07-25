/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      mysuru: {
        maroon: "#6E1E1E",
        gold: "#C9A333",
        offwhite: "#F8F6F4",
        charcoal: "#333333",
      },
    },
    fontFamily: {
      sans: ["DM Sans", "Poppins", "Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
