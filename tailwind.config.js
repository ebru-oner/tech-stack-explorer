/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define your custom colors
        primary: "#B7B7A4", // Light mode primary color
        secondary: "#3A6b7A", // Light mode secondary color
        darkPrimary: "#6B705C", // Dark mode primary color
        darkSecondary: "#F0EFEB", // Dark mode secondary color
      },
    },
  },
  plugins: [],
};
