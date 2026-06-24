import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f0fa",
        foreground: "#2d2d3d",
        primary: "#8b7bb8",
        secondary: "#9d94ac",
        accent: "#d4a5d4",
        light: "#faf8fe",
        muted: "#e8e0f0",
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
