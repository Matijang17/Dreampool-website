import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { client, blogPostQuery, urlFor } from '@/sanity/lib/client'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { articleSchema, breadcrumbSchema } from '@/lib/seo'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let post = null
  try { post = await client.fetch(blogPostQuery, { slug: params.slug }) } catch {}
  if (!post) {
    return {
      title: 'Članek ni najden | DreamPool',
      robots: { index: false, follow: true },
    }
  }
  const ogImg = post.mainImage ? urlFor(post.mainImage).width(1200).url() : undefined
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${params.slug}`,
      images: ogImg ? [{ url: ogImg, width: 1200, height: 630 }] : [],
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ogImg ? [ogImg] : [],
    },
  }
}

const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || ''}
          width={800}
          height={450}
          className="w-full rounded-sm"
        />
        {value.caption && <p className="text-pool-white/40 text-sm text-center mt-2">{value.caption}</p>}
      </div>
    ),
  },
}

export default async function BlogPostPage({ params }: Props) {
  let post = null
  try { post = await client.fetch(blogPostQuery, { slug: params.slug }) } catch {}

  if (!post) {
    return (
      <div className="min-h-screen bg-pool-navy pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-pool-white mb-4">Članek ni najden</h1>
          <Link href="/blog" className="btn-primary">Nazaj na blog</Link>
        </div>
      </div>
    )
  }

  const imgSrc = post.mainImage ? urlFor(post.mainImage).width(1200).url() : null
  const date = new Date(post.publishedAt).toLocaleDateString('sl-SI', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.excerpt || '',
            slug: params.slug,
            image: imgSrc || undefined,
            datePublished: post.publishedAt,
            authorName: post.author?.name,
          }),
          breadcrumbSchema([
            { name: 'Domov', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${params.slug}` },
          ]),
        ]}
      />
      <article className="min-h-screen bg-pool-navy pt-24">
        {/* Hero */}
        {imgSrc && (
          <div className="relative h-[50vh] min-h-[400px]">
            <Image src={imgSrc} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 hero-overlay" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-pool-navy to-transparent" />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-pool-white/30 text-sm mb-8">
            <Link href="/" className="hover:text-pool-accent transition-colors">Domov</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-pool-accent transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-pool-white/50 truncate">{post.title}</span>
          </nav>

          {/* Categories */}
          {post.categories?.length > 0 && (
            <div className="flex gap-2 mb-4">
              {post.categories.map((cat: any) => (
                <span key={cat.slug?.current} className="text-pool-accent text-xs uppercase tracking-widest bg-pool-accent/10 px-3 py-1 rounded-sm">
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display text-4xl md:text-5xl font-bold text-pool-white mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-pool-white/40 text-sm mb-10 pb-10 border-b border-pool-white/10">
            {post.author && <span>Avtor: {post.author.name}</span>}
            <span>·</span>
            <span>{date}</span>
          </div>

          {/* Body */}
          <div className="prose-pool">
            {post.body && <PortableText value={post.body} components={ptComponents} />}
          </div>

          {/* Back */}
          <div className="mt-16 pt-10 border-t border-pool-white/10">
            <Link href="/blog" className="btn-outline">
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Nazaj na blog
            </Link>
          </div>
        </div>
      </article>
      <CTASection />
    </>
  )
}
