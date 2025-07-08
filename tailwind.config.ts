import type { Config } from "tailwindcss"
import { tokens } from "./lib/design-tokens"

// Helper function to convert pixel values to rem
function pxToRem(px: string): string {
  if (!px.endsWith("px")) return px
  const value = Number.parseFloat(px.replace("px", ""))
  return `${value / 16}rem`
}

// Convert spacing tokens from px to rem for Tailwind
const spacingTokens: Record<string, string> = {}
Object.entries(tokens.spacing).forEach(([key, value]) => {
  spacingTokens[key] = pxToRem(value as string)
})

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
    screens: {
      xs: tokens.breakpoints.xs,
      sm: tokens.breakpoints.sm,
      md: tokens.breakpoints.md,
      lg: tokens.breakpoints.lg,
      xl: tokens.breakpoints.xl,
      "2xl": tokens.breakpoints["2xl"],
    },
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
        transparent: "transparent",
        current: "currentColor",
        black: tokens.colors.brand.primary,
        white: tokens.colors.background.primary,
        gray: {
          50: tokens.colors.background.secondary,
          100: tokens.colors.background.tertiary,
          200: tokens.colors.ui.border,
          300: tokens.colors.ui.borderHover,
          600: tokens.colors.text.tertiary,
          700: tokens.colors.text.secondary,
          800: tokens.colors.text.primary,
        },
        blue: {
          50: tokens.colors.background.accent,
          100: "#DBEAFE",
          500: tokens.colors.feedback.info,
          600: tokens.colors.brand.accent,
          700: "#1D4ED8",
          800: "#1E40AF",
        },
        green: {
          100: "#DCFCE7",
          800: tokens.colors.feedback.success,
        },
        yellow: {
          100: "#FEF9C3",
          800: tokens.colors.feedback.warning,
        },
        red: {
          100: "#FEE2E2",
          600: tokens.colors.feedback.error,
          800: "#991B1B",
        },
      },
      fontFamily: {
        sans: [tokens.typography.fontFamily.sans],
        serif: [tokens.typography.fontFamily.serif],
        mono: [tokens.typography.fontFamily.mono],
      },
      fontSize: {
        xs: [tokens.typography.fontSize.xs, { lineHeight: tokens.typography.lineHeight.normal }],
        sm: [tokens.typography.fontSize.sm, { lineHeight: tokens.typography.lineHeight.normal }],
        base: [tokens.typography.fontSize.base, { lineHeight: tokens.typography.lineHeight.normal }],
        lg: [tokens.typography.fontSize.lg, { lineHeight: tokens.typography.lineHeight.normal }],
        xl: [tokens.typography.fontSize.xl, { lineHeight: tokens.typography.lineHeight.normal }],
        "2xl": [tokens.typography.fontSize["2xl"], { lineHeight: tokens.typography.lineHeight.normal }],
        "3xl": [tokens.typography.fontSize["3xl"], { lineHeight: tokens.typography.lineHeight.normal }],
        "4xl": [tokens.typography.fontSize["4xl"], { lineHeight: tokens.typography.lineHeight.tight }],
        "5xl": [tokens.typography.fontSize["5xl"], { lineHeight: tokens.typography.lineHeight.tight }],
        "6xl": [tokens.typography.fontSize["6xl"], { lineHeight: tokens.typography.lineHeight.tight }],
      },
      fontWeight: {
        light: tokens.typography.fontWeight.light,
        normal: tokens.typography.fontWeight.normal,
        medium: tokens.typography.fontWeight.medium,
        semibold: tokens.typography.fontWeight.semibold,
        bold: tokens.typography.fontWeight.bold,
        extrabold: tokens.typography.fontWeight.extrabold,
      },
      lineHeight: tokens.typography.lineHeight,
      letterSpacing: tokens.typography.letterSpacing,
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderWidth: tokens.borders.width,
      boxShadow: tokens.shadows,
      spacing: spacingTokens,
      zIndex: tokens.zIndex,
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionDuration: {
        DEFAULT: tokens.transitions.duration.DEFAULT,
        fast: tokens.transitions.duration.fast,
        normal: tokens.transitions.duration.normal,
        slow: tokens.transitions.duration.slow,
        slower: tokens.transitions.duration.slower,
      },
      transitionTimingFunction: tokens.transitions.timing,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
