import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dreampool.si'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/gradnja-bazenov`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/bazeni/fiberglass-bazeni`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/bazeni/vkopani-bazeni`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/bazeni/overflow-bazeni`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/bazeni/wellness-bazeni`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projekti`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/ponudba`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
  ]

  // Dynamic blog posts from Sanity
  let blogPosts: MetadataRoute.Sitemap = []
  try {
    const posts = await client.fetch(`*[_type == "post"]{ slug, publishedAt }`)
    blogPosts = posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {}

  // Dynamic projects
  let projects: MetadataRoute.Sitemap = []
  try {
    const projs = await client.fetch(`*[_type == "project" && defined(slug.current)]{ slug, publishedAt }`)
    projects = projs.map((p: any) => ({
      url: `${baseUrl}/projekti/${p.slug.current}`,
      lastModified: new Date(p.publishedAt || Date.now()),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))
  } catch {}

  return [...staticPages, ...blogPosts, ...projects]
}
