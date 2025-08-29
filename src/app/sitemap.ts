import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
 
export default function sitemap(): MetadataRoute.Sitemap {

    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        priority: 1,
    }))

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/leadership`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 1,
    },
    ...posts
  ]
}