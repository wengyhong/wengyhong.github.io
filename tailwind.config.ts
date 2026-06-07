import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090b",
          900: "#0d0f12",
          850: "#111418",
          800: "#171a20",
          700: "#252a32",
        },
        mist: {
          50: "#f7f8f7",
          100: "#e7e9e6",
          300: "#b7bdb5",
          500: "#7d8780",
        },
        brass: {
          300: "#d8bf8d",
          400: "#b99c61",
        },
        pine: {
          300: "#82b1a0",
          500: "#3f7564",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
    },
  },
  plugins: [],
};

export default config;
