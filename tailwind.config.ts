import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f5f1e8",
        ink: "#171413",
        mist: "#d7d0c6",
        clay: "#ae8d78"
      },
      fontFamily: {
        sans: ["Avenir Next", "Helvetica Neue", "Helvetica", "sans-serif"],
        serif: ["Iowan Old Style", "Baskerville", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 20, 19, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
