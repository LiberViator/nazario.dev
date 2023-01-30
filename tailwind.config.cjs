/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      display: ["Nothing You Could Do", "serif"],
    },
    fontSize: {
      h1: ["4rem", { lineHeight: "125%" }],
      h2: ["2rem", { lineHeight: "125%" }],
      h3: ["2rem", { lineHeight: "150%" }],
      h4: ["1.125rem", { lineHeight: "125%" }],
      p: ["1.125rem", { lineHeight: "175%" }],
    },
    extend: {
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(720px at 72% 40%, rgba(51, 65, 85, 0.88) 0%, #1e293b 100%)",
        "border-gradient":
          "radial-gradient(100% 100% at 50% 100%, #475569 0%, rgba(51, 65, 85, 0) 100%), #334155",
      },
      dropShadow: {
        custom: "-16px 16px 32px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
