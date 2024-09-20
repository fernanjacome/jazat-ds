/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
      },
      fontFamily: {
        montserrat: ["var(--font-primary)", "sans-serif"],
      },
      fontSize: {
        sizeBase: "var(--font-s-base)",
        sizeH1: "var(--font-s-h1)",
        sizeH2: "var(--font-s-h2)",
        sizeH3: "var(--font-s-h3)",
        sizeH4: "var(--font-s-h4)",
      },
    },
  },
  plugins: [],
};
