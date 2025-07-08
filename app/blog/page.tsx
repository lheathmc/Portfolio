"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts, categories } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Filter posts by category if one is selected
  const filteredPosts = activeCategory
    ? blogPosts.filter((post) => post.categories.includes(activeCategory))
    : blogPosts

  return (
    <main className="min-h-screen py-12 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Insights, tutorials, and resources on design, development, and creative processes.
        </p>

        {/* Category Filter */}
        <div className="mb-8">
          <Tabs defaultValue="all" onValueChange={(value) => setActiveCategory(value === "all" ? null : value)}>
            <TabsList className="mb-4 flex flex-wrap h-auto">
              <TabsTrigger value="all" className="mb-2">
                All Posts
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="mb-2">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter((post) => post.categories.includes(category.id))
                    .map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  )
}

function BlogPostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-video relative">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {post.categories.map((categoryId: string) => {
            const category = categories.find((c) => c.id === categoryId)
            return (
              <Badge key={categoryId} variant="secondary">
                {category?.name}
              </Badge>
            )
          })}
        </div>
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          <h2 className="text-xl font-bold">{post.title}</h2>
        </Link>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
