/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6366f1", // Indigo-500 - Modern, trustworthy
          "primary-content": "#ffffff",
          secondary: "#8b5cf6", // Violet-500 - Complementary purple
          "secondary-content": "#ffffff",
          accent: "#06b6d4", // Cyan-500 - Vibrant accent
          "accent-content": "#ffffff",
          neutral: "#1f2937", // Gray-800 - Professional dark
          "neutral-content": "#f9fafb",
          "base-100": "#ffffff", // Pure white background
          "base-200": "#f8fafc", // Slate-50 - Subtle background
          "base-300": "#e2e8f0", // Slate-200 - Border color
          "base-content": "#1e293b", // Slate-800 - Main text
          info: "#3b82f6", // Blue-500
          success: "#10b981", // Emerald-500
          warning: "#f59e0b", // Amber-500
          error: "#ef4444", // Red-500
          "--rounded-btn": "0.75rem",
          ".tooltip": { "--tooltip-tail": "6px" },
          ".link": { textUnderlineOffset: "2px" },
          ".link:hover": { opacity: "80%" },
        },
      },
      {
        dark: {
          primary: "#818cf8", // Indigo-400 - Lighter for dark mode
          "primary-content": "#1e1b4b",
          secondary: "#a78bfa", // Violet-400
          "secondary-content": "#2e1065",
          accent: "#22d3ee", // Cyan-400
          "accent-content": "#083344",
          neutral: "#f1f5f9", // Slate-100
          "neutral-content": "#0f172a",
          "base-100": "#0f172a", // Slate-900 - Dark background
          "base-200": "#1e293b", // Slate-800 - Card background
          "base-300": "#334155", // Slate-700 - Border color
          "base-content": "#f1f5f9", // Slate-100 - Light text
          info: "#60a5fa", // Blue-400
          success: "#34d399", // Emerald-400
          warning: "#fbbf24", // Amber-400
          error: "#f87171", // Red-400
          "--rounded-btn": "0.75rem",
          ".tooltip": { "--tooltip-tail": "6px", "--tooltip-color": "oklch(var(--p))" },
          ".link": { textUnderlineOffset: "2px" },
          ".link:hover": { opacity: "80%" },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: { 
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
      boxShadow: { 
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
        "glow": "0 0 20px rgba(99, 102, 241, 0.3)",
        "glow-lg": "0 0 40px rgba(99, 102, 241, 0.4)",
      },
      animation: { 
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "card-gradient": "linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)",
        "dark-card-gradient": "linear-gradient(145deg, #1e293b 0%, #334155 100%)",
      },
    },
  },
};
