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
        background: " var(--background)",
        foreground: " var(--foreground)",
        muted: {
          DEFAULT: " var(--muted)",
          foreground: " var(--muted-foreground)",
        },
        popover: {
          DEFAULT: " var(--popover)",
          foreground: " var(--popover-foreground)",
        },
        card: {
          DEFAULT: " var(--card)",
          foreground: " var(--card-foreground)",
        },
        border: " var(--border)",
        input: "var(--input)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: "var(--secondary)",
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        success: "var(--success)",
        destructive: "var(--destructive)",
        ring: "var(--ring)",
      },
      borderRadius: {
        sm: "4px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
