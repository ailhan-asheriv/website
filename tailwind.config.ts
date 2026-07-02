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
        brand: {
          navy: "#0A0F1E",
          gradient: "#0D1424",
          steel: "#1C3D5A",
          cyan: "#00D4FF",
          offwhite: "#F7F9FA",
          slate: "#3D4852",
          ice: "#E3E8EB",
        },
        navy: {
          DEFAULT: "#0A0F1E",
          light: "#1C3D5A",
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
          DEFAULT: "#00D4FF",
          dark: "#00B8D9",
        },
        muted: {
          DEFAULT: "#9CA3AF",
          light: "#B8C5D6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Calibri", "Segoe UI", "Arial", "Helvetica", "sans-serif"],
        heading: ["var(--font-sans)", "Calibri", "Segoe UI", "Arial", "Helvetica", "sans-serif"],
        body: ["Calibri", "Segoe UI", "Arial", "Helvetica", "sans-serif"],
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
