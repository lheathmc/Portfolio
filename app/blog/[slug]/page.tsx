import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { blogPosts, categories } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { formatDate } from "@/lib/utils"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen py-12 px-4 bg-background">
      <article className="container mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((categoryId) => {
              const category = categories.find((c) => c.id === categoryId)
              return (
                <Badge key={categoryId} variant="secondary">
                  {category?.name}
                </Badge>
              )
            })}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center mb-6">
            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split("\n").map((paragraph, index) => {
            if (paragraph.startsWith("# ")) {
              return (
                <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                  {paragraph.substring(2)}
                </h1>
              )
            } else if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.substring(3)}
                </h2>
              )
            } else if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                  {paragraph.substring(4)}
                </h3>
              )
            } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <p key={index} className="font-bold mb-4">
                  {paragraph.substring(2, paragraph.length - 2)}
                </p>
              )
            } else if (paragraph.startsWith("- ")) {
              return (
                <li key={index} className="ml-6 mb-2">
                  {paragraph.substring(2)}
                </li>
              )
            } else if (paragraph.startsWith("```")) {
              // Skip code blocks for now (would need more complex parsing)
              return null
            } else if (paragraph.trim() === "") {
              return null
            } else {
              return (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              )
            }
          })}
        </div>

        <Separator className="my-12" />

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(
                (relatedPost) =>
                  relatedPost.id !== post.id &&
                  relatedPost.categories.some((category) => post.categories.includes(category)),
              )
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block overflow-hidden rounded-lg border border-border"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={relatedPost.coverImage || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1 group-hover:underline">{relatedPost.title}</h3>
                    <p className="text-sm text-muted-foreground">{relatedPost.readingTime}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </main>
  )
}
