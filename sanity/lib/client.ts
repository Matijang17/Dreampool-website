import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '07wkbqrg',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage { asset->{ url } },
  categories[]->{ title, slug }
}`

export const blogPostQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  metaTitle,
  metaDescription,
  mainImage { asset->{ url }, alt },
  body,
  author->{ name },
  categories[]->{ title, slug }
}`

export const projectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  location,
  type,
  year,
  slug,
  publishedAt,
  mainImage { asset->{ url } }
}`
