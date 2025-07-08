"use client"

import { useEffect, useState } from "react"
import { tokens, getToken } from "@/lib/design-tokens"

export function useDesignTokens() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check initial theme
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)

    // Set up observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark")
          setIsDarkMode(isDark)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Get a token value, with optional dark mode override
  const getTokenValue = (path: string, darkPath?: string) => {
    if (isDarkMode && darkPath) {
      return getToken(darkPath)
    }
    return getToken(path)
  }

  return {
    tokens,
    isDarkMode,
    getTokenValue,
  }
}
