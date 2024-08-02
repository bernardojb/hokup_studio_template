/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      // xs: { min: "320px", max: "480px" },
      // sm: { min: "481px", max: "767px" },
      // md: { min: "768px", max: "1024px" },
      // lg: { min: "1025px", max: "1279px" },
      // xl: { min: "1280px", max: "1366px" },
      // "2xl": { min: "1367px", max: "1440px" },
      // "3xl": { min: "1441px", max: "1920px" },
      // "4xl": { min: "1921px", max: "2560px" },
      // "5xl": { min: "2561px" },
      xs: "480px",
      sm: "767px",
      md: "1024px",
      lg: "1279px",
      xl: "1366px",
      "2xl": "1440px",
      "3xl": "1920px",
      "4xl": "2560px",
      // "5xl": { min: "2561px" },
    },
    extend: {
      colors: {
        primary: {
          light: "#fd4a65",
          default: "#FF2847",
          dark: "#aa1d32",
        },
        secondary: {
          light: "#22D3EE",
          default: "#06B6D4",
          dark: "#0E7490",
        },
        neutral: {
          light: "#F3F4F6",
          default: "#9CA3AF",
          dark: "#1F2937",
        },
        typo: {
          primary: "#FFFFFF",
          secondary: "#C0C0C0",
          extra: "#1F2937",
        },
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
