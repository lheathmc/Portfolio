"use client"

import { useState } from "react"
import { type Theme, type ThemeColor, type ThemeMode, useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Theme color options
const themeColors: ThemeColor[] = ["default", "blue", "green", "purple"]

// Theme mode options
const themeModes: ThemeMode[] = ["light", "dark"]

export function ThemeShowcase() {
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState<string>("preview")

  return (
    <div className="w-full">
      <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 w-[200px] mb-4">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="themes">Themes</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Theme</CardTitle>
              <CardDescription>
                {theme === "system"
                  ? "System preference (follows your device settings)"
                  : `${theme.split("-")[0].charAt(0).toUpperCase() + theme.split("-")[0].slice(1)} - ${theme.split("-")[1].charAt(0).toUpperCase() + theme.split("-")[1].slice(1)}`}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-8 w-full rounded-md bg-primary"></div>
                  <p className="text-sm text-center">Primary</p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-full rounded-md bg-secondary"></div>
                  <p className="text-sm text-center">Secondary</p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-full rounded-md bg-accent"></div>
                  <p className="text-sm text-center">Accent</p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-full rounded-md bg-muted"></div>
                  <p className="text-sm text-center">Muted</p>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="themes" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {themeColors.map((color) => (
              <div key={color} className="space-y-4">
                <h3 className="text-lg font-medium capitalize">{color} Theme</h3>
                <div className="grid grid-cols-2 gap-4">
                  {themeModes.map((mode) => {
                    const themeValue = `${color}-${mode}` as Theme
                    return (
                      <Card key={mode} className="overflow-hidden">
                        <div
                          className={`h-20 ${
                            color === "default" && mode === "light"
                              ? "bg-white"
                              : color === "default" && mode === "dark"
                                ? "bg-gray-900"
                                : color === "blue" && mode === "light"
                                  ? "bg-blue-50"
                                  : color === "blue" && mode === "dark"
                                    ? "bg-blue-900"
                                    : color === "green" && mode === "light"
                                      ? "bg-green-50"
                                      : color === "green" && mode === "dark"
                                        ? "bg-green-900"
                                        : color === "purple" && mode === "light"
                                          ? "bg-purple-50"
                                          : "bg-purple-900"
                          } flex items-center justify-center`}
                        >
                          <div
                            className={`h-8 w-24 rounded-md ${
                              color === "default" && mode === "light"
                                ? "bg-black"
                                : color === "default" && mode === "dark"
                                  ? "bg-white"
                                  : color === "blue" && mode === "light"
                                    ? "bg-blue-600"
                                    : color === "blue" && mode === "dark"
                                      ? "bg-blue-400"
                                      : color === "green" && mode === "light"
                                        ? "bg-green-600"
                                        : color === "green" && mode === "dark"
                                          ? "bg-green-400"
                                          : color === "purple" && mode === "light"
                                            ? "bg-purple-600"
                                            : "bg-purple-400"
                            }`}
                          ></div>
                        </div>
                        <CardFooter className="flex justify-between p-2">
                          <p className="text-sm capitalize">{mode}</p>
                          <Button variant="ghost" size="sm" onClick={() => setTheme(themeValue)} className="h-8">
                            Apply
                          </Button>
                        </CardFooter>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Button onClick={() => setTheme("system")}>Reset to System Preference</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
