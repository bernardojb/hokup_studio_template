// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // darkMode: false,
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
// container: {
//   center: true,
//   padding: "1rem",
// },
// screens: {
// xs: { min: "320px", max: "480px" },
// sm: { min: "481px", max: "767px" },
// md: { min: "768px", max: "1024px" },
// lg: { min: "1025px", max: "1279px" },
// xl: { min: "1280px", max: "1366px" },
// "2xl": { min: "1367px", max: "1440px" },
// "3xl": { min: "1441px", max: "1920px" },
// "4xl": { min: "1921px", max: "2560px" },
// "5xl": { min: "2561px" },
// xs: "480px",
// sm: "767px",
// md: "1024px",
// lg: "1279px",
// xl: "1366px",
// "2xl": "1440px",
// "3xl": "1920px",
// "4xl": "2560px",
// "5xl": { min: "2561px" },
// },
//     extend: {
//       colors: {
//         primary: {
//           light: "#fd4a65",
//           default: "#FF2847",
//           dark: "#aa1d32",
//         },
//         secondary: {
//           light: "#22D3EE",
//           default: "#06B6D4",
//           dark: "#0E7490",
//         },
//         neutral: {
//           light: "#F3F4F6",
//           default: "#9CA3AF",
//           dark: "#1F2937",
//         },
//         typo: {
//           primary: "#FFFFFF",
//           secondary: "#C0C0C0",
//           extra: "#1F2937",
//         },
//       },
//       fontFamily: {
//         primary: ["Inter", "sans-serif"],
//         secondary: ["Inter", "sans-serif"],
//       },
//       backgroundImage: {
//         hero: "url('/assets/images/hero-bg.jpg')",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
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
          extra: "#dddddd",
        },
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/assets/images/hero-bg.jpg')",
        initialGradient: "linear-gradient(0deg, #0A2723 0%, #000 100%)",
        middleGradient: "linear-gradient(180deg, #0A2723 0%, #0A2723 100%)",
        finalGradient: "linear-gradient(180deg, #0A2723 0%, #000 100%)",
        contactGradient: "linear-gradient(180deg, #000 0%, #0A2723 100%)",
        headerGradient:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.20) 0%, rgba(38, 38, 38, 0.20) 100%)",
      },
      dividerGradient:
        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,0) 100%)",
    },
  },
  plugins: [],
};
