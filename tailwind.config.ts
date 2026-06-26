import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f1117",
        "background-secondary": "#161b22",
        foreground: "#e6edf3",
        "foreground-secondary": "#8b949e",
        primary: "#58a6ff",
        "primary-dark": "#1f6feb",
        secondary: "#30363d",
        accent: "#79c0ff",
        "accent-secondary": "#1f6feb",
      },
      fontFamily: {
        sans: ["'Inter'", 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
