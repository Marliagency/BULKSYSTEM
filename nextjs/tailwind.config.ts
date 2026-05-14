import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050505",
          secondary: "#0B0B0B",
          elevated: "#111111",
          border: "rgba(255,255,255,0.06)",
        },
        accent: {
          DEFAULT: "#10B981",
          dim: "#059669",
          glow: "rgba(16,185,129,0.12)",
          "glow-strong": "rgba(16,185,129,0.25)",
        },
        ink: {
          primary: "#F5F5F5",
          secondary: "#A1A1AA",
          muted: "#52525B",
          faint: "#27272A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        display: ["clamp(2.5rem,5vw,4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3rem,6vw,5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "section": "8rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(16,185,129,0.15)",
        "glow": "0 0 40px rgba(16,185,129,0.2)",
        "glow-lg": "0 0 80px rgba(16,185,129,0.15)",
        "card": "0 1px 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.06)",
        "elevated": "0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url('/noise.svg')",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};
export default config;
