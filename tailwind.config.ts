import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wii: ["'M PLUS Rounded 1c'", "'Rounded Mplus 1c'", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-ring": "pulseRing 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spinReverse 15s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseRing: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(100,200,255,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(100,200,255,0)" },
        },
        spinReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
