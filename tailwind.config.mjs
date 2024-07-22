import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        primary: "#1f1f1f",
        "black-semi-transparent": "rgba(0, 0, 0, 0.4)",
        surface1: "#303030",
        "surface1-semi-transparent": "#303030aa",
        surface2: "rgba(36, 43, 57, 0.75)",
      },
      backgroundImage: {
        ryoBackground:
          "url('/assets/img/background_image/background-desktop.png')",
      },
      colors: {
        primary: "#e8e4f5",
        "accent-color": "#3c5ac9",
        info: "#5a5a5ad0",
        "box-shadow": "#ff9d9c88",
      },
      borderColor: {
        primary: "rgba(205, 199, 229, 0.5)",
        secondary: "#ff9d9c",
      },
      keyframes: {
        scaleIn: {
          from: {
            transform: "scale(0)",
            "backdrop-filter": "blur(0)",
          },
          to: { transform: "scale(1)" },
        },
        slideIn: {
          from: { transform: "translateX(1000%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        scaleIn: "scaleIn 0.8s cubic-bezier(0.28, -0.2, 0.55, 1.35)",
        slideIn: "slideIn 1s ease-in-out both",
      },
      animationDelay: {
        0: "0",
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            "animation-delay": value,
          }),
        },
        { values: theme("animationDelay") },
      );
    }),
  ],
};
