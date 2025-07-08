import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from 'lucide-react'

// Define the categories and their projects
const categories = {
  "web-design": {
    title: "Web Design",
    projects: Array.from({ length: 9 }, (_, i) => ({
      id: `project-${i + 1}`,
      title: `Web Design Project ${i + 1}`,
      description:
        "This responsive website design focuses on user experience and modern aesthetics. The project involved wireframing, prototyping, and implementing a fully responsive design that works across all devices. Special attention was given to accessibility and performance optimization.",
      images: Array.from({ length: 4 }, (_, j) => ({
        src: `/placeholder.svg?height=600&width=800`,
        alt: `Web Design Project ${i + 1} - Image ${j + 1}`,
      })),
    })),
  },
  logos: {
    title: "Logos",
    projects: Array.from({ length: 9 }, (_, i) => ({
      id: `project-${i + 1}`,
      title: `Logo Project ${i + 1}`,
      description:
        "This logo design project focused on creating a strong brand identity that resonates with the target audience. The design process included research, sketching, and refining concepts to create a versatile logo that works across various mediums and sizes. The final design captures the essence of the brand while maintaining simplicity and memorability.",
      images: Array.from({ length: 4 }, (_, j) => ({
        src: `/placeholder.svg?height=600&width=800`,
        alt: `Logo Project ${i + 1} - Image ${j + 1}`,
      })),
    })),
  },
  illustrations: {
    title: "Illustrations",
    projects: Array.from({ length: 9 }, (_, i) => ({
      id: `project-${i + 1}`,
      title: `Illustration Project ${i + 1}`,
      description:
        "This digital illustration showcases creativity and artistic skill through vibrant colors and detailed composition. The illustration was created using digital tools to achieve a unique style that blends traditional art techniques with modern digital capabilities. The project required careful attention to lighting, composition, and color theory to create a visually striking piece.",
      images: Array.from({ length: 4 }, (_, j) => ({
        src: `/placeholder.svg?height=600&width=800`,
        alt: `Illustration Project ${i + 1} - Image ${j + 1}`,
      })),
    })),
  },
}

export function generateStaticParams() {
  const params: { category: string; project: string }[] = []

  Object.entries(categories).forEach(([category, data]) => {
    data.projects.forEach((project) => {
      params.push({
        category,
        project: project.id,
      })
    })
  })

  return params
}

export default function ProjectPage({ params }: { params: { category: string; project: string } }) {
  const { category, project } = params
  const categoryData = categories[category as keyof typeof categories]

  if (!categoryData) {
    return <div>Category not found</div>
  }

  const projectData = categoryData.projects.find((p) => p.id === project)

  if (!projectData) {
    return <div>Project not found</div>
  }

  return (
    <main className="min-h-screen py-12 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            href={`/portfolio/${category}`}
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to {categoryData.title}
          </Link>
          <h1 className="text-4xl font-bold">{projectData.title}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="aspect-video relative overflow-hidden rounded-lg shadow-md bg-muted">
              <Image
                src={projectData.images[0].src || "/placeholder.svg"}
                alt={projectData.images[0].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <p className="text-foreground mb-6">{projectData.description}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectData.images.slice(1).map((image, index) => (
            <div key={index} className="aspect-video relative overflow-hidden rounded-lg shadow-md bg-muted">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
