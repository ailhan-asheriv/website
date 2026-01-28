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
        cream: {
          DEFAULT: "#F6F2EA",
          light: "#FAF7F1",
          dark: "#F5F1E8",
        },
        maritime: {
          DEFAULT: "#0E2A3A",
          dark: "#0B2F44",
          light: "#102C3A",
        },
        steel: {
          DEFAULT: "#4A6F82",
          light: "#5F7F8F",
        },
      },
    },
  },
  plugins: [],
};
export default config;

