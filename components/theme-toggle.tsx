"use client"

import type React from "react"

import { Check, Moon, Sun, Palette } from "lucide-react"
import { type Theme, type ThemeColor, type ThemeMode, useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Theme color options with their display names and icons
const themeColorOptions: { value: ThemeColor; label: string; color: string }[] = [
  { value: "default", label: "Default", color: "bg-black dark:bg-white" },
  { value: "blue", label: "Blue", color: "bg-blue-600" },
  { value: "green", label: "Green", color: "bg-green-600" },
  { value: "purple", label: "Purple", color: "bg-purple-600" },
]

// Theme mode options
const themeModeOptions: { value: ThemeMode; label: string; icon: React.ReactNode }[] = [
  { value: "light", label: "Light", icon: <Sun className="h-4 w-4" /> },
  { value: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> },
]

export function ThemeToggle() {
  const { theme, setTheme, themeColor, themeMode } = useTheme()

  // Helper function to set theme with color and mode
  const setThemeWithColorAndMode = (color: ThemeColor, mode: ThemeMode) => {
    setTheme(`${color}-${mode}` as Theme)
  }

  // Get the current theme color display name
  const currentColorName = themeColorOptions.find((option) => option.value === themeColor)?.label || "Default"

  // Get the current theme mode display name
  const currentModeName = themeModeOptions.find((option) => option.value === themeMode)?.label || "System"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md">
          <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Theme Color Selection */}
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Color</DropdownMenuLabel>
          {themeColorOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setThemeWithColorAndMode(option.value, themeMode)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className={`h-4 w-4 rounded-full ${option.color}`} />
                {option.label}
              </div>
              {themeColor === option.value && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Theme Mode Selection */}
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Mode</DropdownMenuLabel>
          {themeModeOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setThemeWithColorAndMode(themeColor, option.value)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                {option.icon}
                {option.label}
              </div>
              {themeMode === option.value && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
              System
            </div>
            {theme === "system" && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
