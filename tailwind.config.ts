import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "logo-cloud": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 4rem))" },
        },
        "logo-cloud-reverse": {
          from: { transform: "translateX(calc(-100% + 4rem))" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "logo-cloud": "logo-cloud 30s linear infinite",
        "logo-cloud-reverse": "logo-cloud-reverse 30s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addBase }: any) {
      const scrollbarStyles = {
        "::-webkit-scrollbar": {
          width: "20px",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#d6dee1",
          borderRadius: "20px",
          border: "6px solid transparent",
          backgroundClip: "content-box",
        },
        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#a8bbbf",
        },
      };

      addBase(scrollbarStyles);
    },
  ],
} satisfies Config;

export default config;
