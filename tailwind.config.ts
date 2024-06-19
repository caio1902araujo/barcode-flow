import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
          primary: "var(--primary)",
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
    },
  },
  plugins: [],
};
export default config;
