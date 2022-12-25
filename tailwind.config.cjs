/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      h1: ["4rem", { lineHeight: "125%" }],
      h2: ["2rem", { lineHeight: "125%" }],
      h3: ["2rem", { lineHeight: "150%" }],
      h4: ["1.125rem", { lineHeight: "125%" }],
      p: ["1.125rem", { lineHeight: "175%" }],
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      main: "#F0F3F8",
      secondary: "#D2DAEA",
      accent: "#473BF0",
      alternative: "#D7263D",
    },
    extend: {
      dropShadow: {
        custom: "-16px 16px 32px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
