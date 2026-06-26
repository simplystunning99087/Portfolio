import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0e27",
        "background-secondary": "#131b35",
        foreground: "#f0f3ff",
        "foreground-secondary": "#b8c2e1",
        primary: "#6366f1",
        "primary-light": "#818cf8",
        secondary: "#7c8adb",
        accent: "#10b981",
        "accent-light": "#34d399",
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
