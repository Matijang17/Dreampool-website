import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { SITE } from '@/lib/seo'

type Freq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

const staticRoutes: { path: string; changeFrequency: Freq; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/gradnja-bazenov', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/bazeni/vkopani-bazeni', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/bazeni/overflow-bazeni', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/bazeni/wellness-bazeni', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/servis', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/vzdrzevanje-bazenov', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pokrivala-za-bazene', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/kronsko-vrtanje', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/hidroizolacija/folija', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/hidroizolacija/rezervoarji', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/projekti', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/kontakt', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/ponudba', changeFrequency: 'yearly', priority: 0.9 },
  { path: '/zasebnost', changeFrequency: 'yearly', priority: 0.2 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE.url
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${baseUrl}${r.path === '/' ? '' : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  let blogPosts: MetadataRoute.Sitemap = []
  try {
    const posts = await client.fetch(`*[_type == "post" && defined(slug.current)]{ slug, publishedAt, _updatedAt }`)
    blogPosts = posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post._updatedAt || post.publishedAt || Date.now()),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {}

  let projects: MetadataRoute.Sitemap = []
  try {
    const projs = await client.fetch(`*[_type == "project" && defined(slug.current)]{ slug, publishedAt, _updatedAt }`)
    projects = projs.map((p: any) => ({
      url: `${baseUrl}/projekti/${p.slug.current}`,
      lastModified: new Date(p._updatedAt || p.publishedAt || Date.now()),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))
  } catch {}

  return [...staticPages, ...blogPosts, ...projects]
}
