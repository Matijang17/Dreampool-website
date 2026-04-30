import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

const staticPosts = [
  {
    _id: '1',
    title: 'Koliko stane bazen v Sloveniji 2026?',
    excerpt: 'Celovit vodič po cenah gradnje bazenov — od fiberglass do betonskih, z vsemi skritimi stroški.',
    slug: { current: 'koliko-stane-bazen-slovenija-2026' },
    publishedAt: '2026-01-15',
    mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/6da0045ebc99873dd993284fa370bc86a4dc51fa-5120x2880.jpg?w=800&fit=max&auto=format' } },
  },
  {
    _id: '2',
    title: 'Fiberglass ali beton: kateri bazen izbrati?',
    excerpt: 'Primerjava prednosti in slabosti obeh materialov, ki vam bo pomagala sprejeti pravo odločitev.',
    slug: { current: 'fiberglass-ali-beton-bazen' },
    publishedAt: '2026-01-05',
    mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/7ee2f8ad2f09fc39781fb51d3857c7613b4f66f7-5120x2880.jpg?w=800&fit=max&auto=format' } },
  },
  {
    _id: '3',
    title: 'Ali potrebujem gradbeno dovoljenje za bazen?',
    excerpt: 'Pravila za gradnjo bazenov v Sloveniji — kdaj potrebujete dovoljenje in kdaj ne.',
    slug: { current: 'gradbeno-dovoljenje-bazen-slovenija' },
    publishedAt: '2025-12-20',
    mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/1ec7050f3670dd73d67ef907f398c548f2e64e4f-5120x2880.jpg?w=800&fit=max&auto=format' } },
  },
]

export function BlogPreviewSection({ posts = [] }: { posts?: any[] }) {
  const displayPosts = posts.length > 0 ? posts.slice(0, 3) : staticPosts

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="section-subtitle">Blog & nasveti</p>
              <div className="gold-line mb-6" />
              <h2 className="font-display text-5xl md:text-6xl font-bold text-pool-navy leading-tight uppercase">
                Koristni <span className="text-gradient">nasveti</span>
              </h2>
            </div>
            <Link href="/blog" className="btn-outline-dark whitespace-nowrap self-start md:self-auto">
              Vsi članki
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayPosts.map((post) => {
            const imgSrc = post.mainImage?.asset?.url ||
              (post.mainImage ? urlFor(post.mainImage).width(600).url() : '')
            const date = new Date(post.publishedAt).toLocaleDateString('sl-SI', {
              day: 'numeric', month: 'long', year: 'numeric',
            })

            return (
              <Link key={post._id} href={`/blog/${post.slug.current}`} className="card-light group">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  {imgSrc && (
                    <Image
                      src={imgSrc}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                </div>
                <div className="p-6">
                  <p className="text-pool-navy/40 text-xs mb-3">{date}</p>
                  <h3 className="font-display text-lg font-bold text-pool-navy mb-3 group-hover:text-pool-accent transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-pool-navy/55 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-pool-accent font-semibold text-xs tracking-wider uppercase">
                    Preberi več
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
