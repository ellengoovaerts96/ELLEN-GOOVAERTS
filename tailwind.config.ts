import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f5f1e8",
        ink: "#171413",
        mist: "#d7d0c6",
        clay: "#7a8b98"
      },
      fontFamily: {
        sans: ["var(--font-body)", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-display)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 20, 19, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
