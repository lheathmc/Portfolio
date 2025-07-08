/**
 * Design Tokens
 *
 * This file contains all design tokens used throughout the application.
 * It serves as a single source of truth for the design system.
 */

export const tokens = {
  colors: {
    // Brand colors
    brand: {
      primary: "#0A0A0A",
      secondary: "#F5F5F5",
      accent: "#3B82F6",
    },

    // Text colors
    text: {
      primary: "#0A0A0A",
      secondary: "#525252",
      tertiary: "#737373",
      inverse: "#FFFFFF",
    },

    // Background colors
    background: {
      primary: "#FFFFFF",
      secondary: "#F5F5F5",
      tertiary: "#E5E5E5",
      accent: "#EFF6FF",
      inverse: "#0A0A0A",
    },

    // UI colors
    ui: {
      border: "#E5E5E5",
      borderHover: "#D4D4D4",
      borderFocus: "#3B82F6",
      shadow: "rgba(0, 0, 0, 0.1)",
    },

    // Feedback colors
    feedback: {
      success: "#10B981",
      error: "#EF4444",
      warning: "#F59E0B",
      info: "#3B82F6",
    },
  },

  typography: {
    // Font families
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },

    // Font sizes (in pixels)
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "60px",
    },

    // Font weights
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },

    // Line heights
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },

    // Letter spacing
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },

  spacing: {
    // Spacing scale (in pixels)
    0: "0",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
    20: "80px",
    24: "96px",
    32: "128px",
    40: "160px",
    48: "192px",
    56: "224px",
    64: "256px",
  },

  borders: {
    // Border radius
    radius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },

    // Border widths
    width: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      8: "8px",
    },
  },

  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none",
  },

  transitions: {
    duration: {
      DEFAULT: "150ms",
      fast: "100ms",
      normal: "200ms",
      slow: "300ms",
      slower: "500ms",
    },
    timing: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  breakpoints: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  zIndex: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    auto: "auto",
  },
}

// Helper function to access tokens with dot notation
export function getToken(path: string): any {
  return path.split(".").reduce((obj, key) => obj && obj[key], tokens)
}

// Export individual token categories for convenience
export const colors = tokens.colors
export const typography = tokens.typography
export const spacing = tokens.spacing
export const borders = tokens.borders
export const shadows = tokens.shadows
export const transitions = tokens.transitions
export const breakpoints = tokens.breakpoints
export const zIndex = tokens.zIndex
