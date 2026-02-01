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
        dark: {
          DEFAULT: "#0A0E1A",
          light: "#141B2D",
          lighter: "#1E2838",
        },
        primary: {
          DEFAULT: "#00D9FF",
          dark: "#00B8D9",
          light: "#33E0FF",
        },
        accent: {
          DEFAULT: "#6366F1",
          dark: "#4F46E5",
          light: "#818CF8",
        },
        gray: {
          DEFAULT: "#94A3B8",
          light: "#CBD5E1",
          dark: "#64748B",
        },
      },
    },
  },
  plugins: [],
};
export default config;

