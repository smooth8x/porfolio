import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08080a",
        foreground: "#f4f4f6",
        surface: {
          DEFAULT: "#0f0f14",
          50: "#1a1a24",
          100: "#14141d",
          200: "#0f0f14",
          300: "#0a0a0e",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.15)",
          strong: "rgba(255, 255, 255, 0.25)",
          accent: "rgba(229, 169, 60, 0.4)",
        },
        gold: {
          50: "#fffdf0",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#E5A93C",
          600: "#ca8a04",
          700: "#a16207",
          DEFAULT: "#E5A93C",
        },
        cinematic: {
          dark: "#08080a",
          card: "#111116",
          cardHover: "#181822",
          slate: "#8e8e9f",
          glow: "rgba(229, 169, 60, 0.15)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
        "glow": "glow 4s ease-in-out infinite alternate",
        "border-beam": "border-beam 6s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(32px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cinematic-card": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
        "gold-gradient": "linear-gradient(135deg, #F9D976 0%, #E5A93C 50%, #C98226 100%)",
      },
      boxShadow: {
        "cinematic-sm": "0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)",
        "cinematic-md": "0 12px 36px -4px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "cinematic-lg": "0 24px 60px -8px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(229, 169, 60, 0.2)",
        "gold-glow": "0 0 35px -5px rgba(229, 169, 60, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
