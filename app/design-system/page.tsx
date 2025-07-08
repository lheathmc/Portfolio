import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { tokens } from "@/lib/design-tokens"
import { ThemeShowcase } from "@/components/theme-showcase"

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Design System</h1>
          <p className="text-muted-foreground mt-2">
            A showcase of design tokens and components used in this portfolio.
          </p>
        </div>

        {/* Theme Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Themes</h2>
          <ThemeShowcase />
        </section>

        {/* Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Colors</h2>

          <h3 className="text-xl font-semibold mb-4">Brand Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-primary text-primary-foreground rounded-md">
              <div className="font-medium">Primary</div>
              <div className="text-sm opacity-80">var(--color-brand-primary)</div>
            </div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded-md">
              <div className="font-medium">Secondary</div>
              <div className="text-sm opacity-80">var(--color-brand-secondary)</div>
            </div>
            <div className="p-4 bg-blue-600 text-white rounded-md">
              <div className="font-medium">Accent</div>
              <div className="text-sm opacity-80">var(--color-brand-accent)</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Text Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-foreground text-background rounded-md">
              <div className="font-medium">Foreground</div>
              <div className="text-sm opacity-80">var(--color-text-primary)</div>
            </div>
            <div className="p-4 bg-muted-foreground text-background rounded-md">
              <div className="font-medium">Muted Foreground</div>
              <div className="text-sm opacity-80">var(--color-text-secondary)</div>
            </div>
            <div className="p-4 bg-gray-600 text-white rounded-md">
              <div className="font-medium">Tertiary</div>
              <div className="text-sm opacity-80">var(--color-text-tertiary)</div>
            </div>
            <div className="p-4 bg-background text-foreground border rounded-md">
              <div className="font-medium">Background</div>
              <div className="text-sm opacity-80">var(--color-text-inverse)</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Feedback Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-green-800 text-white rounded-md">
              <div className="font-medium">Success</div>
              <div className="text-sm opacity-80">var(--color-feedback-success)</div>
            </div>
            <div className="p-4 bg-red-600 text-white rounded-md">
              <div className="font-medium">Error</div>
              <div className="text-sm opacity-80">var(--color-feedback-error)</div>
            </div>
            <div className="p-4 bg-yellow-800 text-white rounded-md">
              <div className="font-medium">Warning</div>
              <div className="text-sm opacity-80">var(--color-feedback-warning)</div>
            </div>
            <div className="p-4 bg-blue-500 text-white rounded-md">
              <div className="font-medium">Info</div>
              <div className="text-sm opacity-80">var(--color-feedback-info)</div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Typography</h2>

          <h3 className="text-xl font-semibold mb-4">Font Sizes</h3>
          <div className="space-y-4">
            <div className="p-4 border rounded-md">
              <div className="text-6xl">Text 6XL</div>
              <div className="text-sm text-muted-foreground mt-2">60px / 3.75rem</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="text-5xl">Text 5XL</div>
              <div className="text-sm text-muted-foreground mt-2">48px / 3rem</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="text-4xl">Text 4XL</div>
              <div className="text-sm text-muted-foreground mt-2">36px / 2.25rem</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="text-3xl">Text 3XL</div>
              <div className="text-sm text-muted-foreground mt-2">30px / 1.875rem</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="text-2xl">Text 2XL</div>
              <div className="text-sm text-muted-foreground mt-2">24px / 1.5rem</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="text-xl">Text XL</div>
              <div className="text-sm text-muted-foreground mt-2">20px / 1.25rem</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="text-lg">Text LG</div>
              <div className="text-sm text-muted-foreground mt-2">18px / 1.125rem</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="text-base">Text Base</div>
              <div className="text-sm text-muted-foreground mt-2">16px / 1rem</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="text-sm">Text SM</div>
              <div className="text-sm text-muted-foreground mt-2">14px / 0.875rem</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="text-xs">Text XS</div>
              <div className="text-sm text-muted-foreground mt-2">12px / 0.75rem</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-8">Font Weights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded-md">
              <div className="font-light text-xl">Light (300)</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="font-normal text-xl">Normal (400)</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="font-medium text-xl">Medium (500)</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="font-semibold text-xl">Semibold (600)</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="font-bold text-xl">Bold (700)</div>
            </div>
            <div className="p-4 border rounded-md">
              <div className="font-extrabold text-xl">Extrabold (800)</div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Spacing</h2>
          <div className="space-y-4">
            {Object.entries(tokens.spacing).map(([key, value]) => (
              <div key={key} className="flex items-center">
                <div className="w-16 text-sm font-medium">{key}</div>
                <div className="bg-blue-500 h-4" style={{ width: value }}></div>
                <div className="ml-4 text-sm text-muted-foreground">{value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Borders */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Border Radius</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.entries(tokens.borders.radius).map(([key, value]) => (
              <div key={key} className="p-4 border rounded-md">
                <div className="w-full h-16 bg-muted mb-2" style={{ borderRadius: value }}></div>
                <div className="font-medium">{key === "DEFAULT" ? "Default" : key}</div>
                <div className="text-sm text-muted-foreground">{value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Shadows</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(tokens.shadows).map(([key, value]) => (
              <div key={key} className="p-8 rounded-md bg-card" style={{ boxShadow: value }}>
                <div className="font-medium">{key === "DEFAULT" ? "Default" : key}</div>
                <div className="text-sm text-muted-foreground mt-1 break-words">{value}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
