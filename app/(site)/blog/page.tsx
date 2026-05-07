import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { client, blogPostsQuery, urlFor } from '@/sanity/lib/client'

export const metadata: Metadata = {
  title: 'Blog — Nasveti o Bazenih | DreamPool',
  description:
    'Koristni nasveti, vodniki in informacije o gradnji, vzdrževanju in izbiri bazena v Sloveniji.',
  alternates: { canonical: 'https://dreampool.si/blog' },
}

const staticPosts = [
  { _id: '1', title: 'Koliko stane bazen v Sloveniji 2026?', excerpt: 'Celovit vodič po cenah gradnje bazenov — vkopani in betonski, z vsemi skritimi stroški.', slug: { current: 'koliko-stane-bazen-slovenija-2026' }, publishedAt: '2026-01-15', mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/6da0045ebc99873dd993284fa370bc86a4dc51fa-5120x2880.jpg?w=800&fit=max&auto=format' } } },
  { _id: '2', title: 'Vkopani bazen: vodič po izbiri prave oblike', excerpt: 'Pravokotni, ovalni ali atipični — kako izbrati obliko vkopanega bazena, ki najbolj ustreza vašemu vrtu.', slug: { current: 'vkopani-bazen-izbira-oblike' }, publishedAt: '2026-01-05', mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/7ee2f8ad2f09fc39781fb51d3857c7613b4f66f7-5120x2880.jpg?w=800&fit=max&auto=format' } } },
  { _id: '3', title: 'Ali potrebujem gradbeno dovoljenje za bazen?', excerpt: 'Pravila za gradnjo bazenov v Sloveniji — kdaj potrebujete dovoljenje in kdaj ne.', slug: { current: 'gradbeno-dovoljenje-bazen-slovenija' }, publishedAt: '2025-12-20', mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/1ec7050f3670dd73d67ef907f398c548f2e64e4f-5120x2880.jpg?w=800&fit=max&auto=format' } } },
  { _id: '4', title: 'Ogrevanje bazena: stroški in možnosti', excerpt: 'Toplotne črpalke, solarni sistemi ali električni grelci — kaj je ekonomično in zakaj.', slug: { current: 'ogrevanje-bazena-stroski' }, publishedAt: '2025-12-01', mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/de537d3e33593130bfe59dc259ccea1babc816fa-5120x2880.jpg?w=800&fit=max&auto=format' } } },
]

export default async function BlogPage() {
  let posts = []
  try { posts = await client.fetch(blogPostsQuery) } catch {}
  const displayPosts = posts.length > 0 ? posts : staticPosts

  return (
    <div className="min-h-screen bg-pool-navy pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-16">
          <p className="section-subtitle">Blog & nasveti</p>
          <div className="gold-line mb-6" />
          <h1 className="section-title text-pool-white mb-4">
            Vse o <span className="text-gradient">bazenih</span>
          </h1>
          <p className="text-pool-white/60 text-lg leading-relaxed">
            Strokovni nasveti, vodniki in odgovori na najpogostejša vprašanja o gradnji in vzdrževanju bazenov.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post: any) => {
            const imgSrc = post.mainImage?.asset?.url || (post.mainImage ? urlFor(post.mainImage).width(600).url() : '')
            const date = new Date(post.publishedAt).toLocaleDateString('sl-SI', { day: 'numeric', month: 'long', year: 'numeric' })
            return (
              <Link key={post._id} href={`/blog/${post.slug.current}`} className="card group">
                <div className="relative h-52 overflow-hidden">
                  {imgSrc && <Image src={imgSrc} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-pool-deep/80 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-pool-white/30 text-xs mb-3">{date}</p>
                  <h2 className="font-display text-xl font-bold text-pool-white mb-3 group-hover:text-pool-accent transition-colors leading-snug">{post.title}</h2>
                  <p className="text-pool-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="btn-ghost text-xs">
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
    </div>
  )
}
