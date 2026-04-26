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
        navy: {
          DEFAULT: "#0B1F3B",
          light: "#132847",
        },
        charcoal: {
          DEFAULT: "#111827",
          light: "#1F2937",
        },
        offwhite: {
          DEFAULT: "#F6F7F9",
          muted: "#E5E7EB",
        },
        signal: {
          DEFAULT: "#E23A3A",
          dark: "#C42D2D",
        },
        cyan: {
          DEFAULT: "#4FC3F7",
          dark: "#3BA3D9",
        },
        muted: {
          DEFAULT: "#9CA3AF",
          light: "#B8C5D6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        section: "0.375rem",
        card: "0.5rem",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)",
        card: "0 2px 8px -2px rgb(0 0 0 / 0.12), 0 4px 12px -4px rgb(0 0 0 / 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
