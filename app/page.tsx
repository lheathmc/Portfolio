import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-col items-center justify-center px-4 py-24 md:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Creative Portfolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Showcasing my work in web design, logo creation, and illustration with a passion for creating beautiful,
            functional designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/portfolio/web-design" className="group">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all">
                    <h3 className="text-white text-xl font-bold">Web Design</h3>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/portfolio/logos" className="group">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all">
                    <h3 className="text-white text-xl font-bold">Logos</h3>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/portfolio/illustrations" className="group">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all">
                    <h3 className="text-white text-xl font-bold">Illustrations</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
