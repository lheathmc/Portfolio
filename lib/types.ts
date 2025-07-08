export interface Category {
  id: string
  name: string
  description?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: {
    name: string
    avatar: string
  }
  categories: string[] // Category IDs
  readingTime: string
}
