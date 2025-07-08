"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

// Define all available themes
export type ThemeColor = "default" | "blue" | "green" | "purple"
export type ThemeMode = "light" | "dark"
export type Theme = `${ThemeColor}-${ThemeMode}` | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  themeColor: ThemeColor
  themeMode: ThemeMode
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  themeColor: "default",
  themeMode: "light",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "portfolio-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [themeColor, setThemeColor] = useState<ThemeColor>("default")
  const [themeMode, setThemeMode] = useState<ThemeMode>("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey)

    if (savedTheme && isValidTheme(savedTheme)) {
      setTheme(savedTheme as Theme)
    }
  }, [storageKey])

  useEffect(() => {
    const root = window.document.documentElement

    // Remove all theme classes
    root.classList.remove("light", "dark", "theme-default", "theme-blue", "theme-green", "theme-purple")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
      setThemeMode(systemTheme as ThemeMode)
      setThemeColor("default")
      return
    }

    // For custom themes, extract the color and mode
    const [color, mode] = theme.split("-") as [ThemeColor, ThemeMode]

    // Add the appropriate classes
    root.classList.add(mode)
    root.classList.add(`theme-${color}`)

    // Update state
    setThemeColor(color)
    setThemeMode(mode)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
    themeColor,
    themeMode,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

// Helper function to validate theme values
function isValidTheme(theme: string): boolean {
  if (theme === "system") return true

  const validColors = ["default", "blue", "green", "purple"]
  const validModes = ["light", "dark"]

  const [color, mode] = theme.split("-")

  return validColors.includes(color) && validModes.includes(mode)
}
