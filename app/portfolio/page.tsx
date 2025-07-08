import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Portfolio</h1>

        <div className="grid grid-cols-1 gap-16">
          {/* Web Design Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Web Design</h2>
              <Link
                href="/portfolio/web-design"
                className="inline-flex items-center text-muted-foreground hover:text-foreground"
              >
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Link key={item} href={`/portfolio/web-design/project-${item}`} className="group">
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-card">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-medium">View Project</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-card-foreground">Web Design Project {item}</h3>
                      <p className="text-sm text-muted-foreground mt-1">Responsive website design</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Logos Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Logos</h2>
              <Link
                href="/portfolio/logos"
                className="inline-flex items-center text-muted-foreground hover:text-foreground"
              >
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Link key={item} href={`/portfolio/logos/project-${item}`} className="group">
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-card">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-medium">View Project</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-card-foreground">Logo Project {item}</h3>
                      <p className="text-sm text-muted-foreground mt-1">Brand identity design</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Illustrations Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Illustrations</h2>
              <Link
                href="/portfolio/illustrations"
                className="inline-flex items-center text-muted-foreground hover:text-foreground"
              >
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Link key={item} href={`/portfolio/illustrations/project-${item}`} className="group">
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-card">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-medium">View Project</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-card-foreground">Illustration Project {item}</h3>
                      <p className="text-sm text-muted-foreground mt-1">Digital illustration</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
