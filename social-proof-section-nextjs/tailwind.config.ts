import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryMagenta: "var(--primary-magenta)",
        primaryPink: "var(--primary-pink)",
        darkMagenta: "var(--dark-magenta)",
        lightMagenta: "var(--light-magenta)"
      },
    },
  },
  plugins: [],
};
export default config;
