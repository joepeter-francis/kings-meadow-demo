import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f8f3ed",
        "cream-dark": "#f0e8df",
        gold: "#c4953a",
        "gold-light": "#e0b96a",
        "gold-pale": "#f5e8cc",
        forest: "#1d3820",
        "forest-dark": "#0e1710",
        "forest-mid": "#2a4a2e",
        sand: "#d4b896",
        "text-primary": "#1a1410",
        "text-muted": "#6b6255",
        "border-warm": "#e5ddd0",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
