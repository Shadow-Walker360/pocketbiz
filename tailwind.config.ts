import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        // Kenyan flag inspired color palette
        "kenyan-black": "#000000",
        "kenyan-red": "#CE1126",
        "kenyan-green": "#006B3F",
        "kenyan-white": "#FFFFFF",
        "kenyan-blue": "#002868", // From Maasai shield

        // Psychological color variations
        "success-green": "#10B981", // Prosperity, growth
        "warning-red": "#EF4444", // Attention, urgency
        "trust-blue": "#3B82F6", // Reliability, stability
        "wealth-gold": "#F59E0B", // Prosperity, premium

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#006B3F", // Kenyan green
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#002868", // Kenyan blue
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#CE1126", // Kenyan red
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#F59E0B", // Wealth gold
          foreground: "#000000",
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-green": {
          "0%, 100%": {
            backgroundColor: "rgba(0, 107, 63, 0.1)",
            transform: "scale(1)",
          },
          "50%": {
            backgroundColor: "rgba(0, 107, 63, 0.2)",
            transform: "scale(1.02)",
          },
        },
        "slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-green": "pulse-green 2s ease-in-out infinite",
        "slide-up": "slide-up 0.3s ease-out",
      },
      backgroundImage: {
        "kenyan-gradient": "linear-gradient(135deg, #006B3F 0%, #002868 100%)",
        "prosperity-gradient": "linear-gradient(135deg, #10B981 0%, #F59E0B 100%)",
        "trust-gradient": "linear-gradient(135deg, #3B82F6 0%, #002868 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
