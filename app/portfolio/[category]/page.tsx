import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

// Define the categories and their projects
const categories = {
  "web-design": {
    title: "Web Design",
    description: "A collection of responsive and user-friendly website designs",
    projects: Array.from({ length: 9 }, (_, i) => ({
      id: `project-${i + 1}`,
      title: `Web Design Project ${i + 1}`,
      description: "Responsive website design with modern UI/UX principles",
    })),
  },
  logos: {
    title: "Logos",
    description: "Brand identity designs that capture the essence of each business",
    projects: Array.from({ length: 9 }, (_, i) => ({
      id: `project-${i + 1}`,
      title: `Logo Project ${i + 1}`,
      description: "Minimalist logo design with strong brand identity",
    })),
  },
  illustrations: {
    title: "Illustrations",
    description: "Digital illustrations showcasing creativity and artistic skill",
    projects: Array.from({ length: 9 }, (_, i) => ({
      id: `project-${i + 1}`,
      title: `Illustration Project ${i + 1}`,
      description: "Digital illustration with vibrant colors and detailed composition",
    })),
  },
}

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category
  const categoryData = categories[category as keyof typeof categories]

  if (!categoryData) {
    return <div>Category not found</div>
  }

  return (
    <main className="min-h-screen py-12 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <Link href="/portfolio" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Portfolio
          </Link>
          <h1 className="text-4xl font-bold">{categoryData.title}</h1>
          <p className="text-muted-foreground mt-2">{categoryData.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoryData.projects.map((project) => (
            <Link key={project.id} href={`/portfolio/${category}/${project.id}`} className="group">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-card">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-card-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
