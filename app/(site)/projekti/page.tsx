import type { Metadata } from 'next'
import Image from 'next/image'

import { client, urlFor, projectsQuery } from '@/lib/sanity'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Naši Projekti — Galerija Bazenov | DreamPool',
  description: 'Oglejte si galerijo naših dokončanih bazenov po vsej Sloveniji. 50+ premium projektov — vkopani, overflow, infinity in wellness bazeni.',
  alternates: { canonical: 'https://dreampool.si/projekti' },
}

const staticProjects = [
  { _id: '1', title: 'Elegantni vkopani bazen', location: 'Ljubljana', type: 'vkopan', year: 2025, mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/6da0045ebc99873dd993284fa370bc86a4dc51fa-5120x2880.jpg?w=800&fit=max&auto=format' } } },
  { _id: '2', title: 'Moderni overflow bazen', location: 'Primorska', type: 'overflow', year: 2025, mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/7ee2f8ad2f09fc39781fb51d3857c7613b4f66f7-5120x2880.jpg?w=800&fit=max&auto=format' } } },
  { _id: '3', title: 'Vkopani bazen z jacuzzijem', location: 'Gorenjska', type: 'wellness', year: 2024, mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/1ec7050f3670dd73d67ef907f398c548f2e64e4f-5120x2880.jpg?w=800&fit=max&auto=format' } } },
  { _id: '4', title: 'Premium bazen za villu', location: 'Štajerska', type: 'vkopan', year: 2024, mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/de537d3e33593130bfe59dc259ccea1babc816fa-5120x2880.jpg?w=800&fit=max&auto=format' } } },
  { _id: '5', title: 'Infinity bazen z razgledom', location: 'Kras', type: 'infinity', year: 2024, mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/9a698061e50bd3de0ed9b3046e9ad89427fd0576-5120x2880.jpg?w=800&fit=max&auto=format' } } },
  { _id: '6', title: 'Wellness bazen s savno', location: 'Dolenjska', type: 'wellness', year: 2023, mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/3148dc011711f8ce31c71fd854c39d43ba78280c-5120x2880.jpg?w=800&fit=max&auto=format' } } },
  { _id: '7', title: 'Kompaktni vkopani bazen', location: 'Notranjska', type: 'vkopan', year: 2023, mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/845f1d37a96e904b301c913511fdf1df31f57356-2880x5120.jpg?w=800&fit=max&auto=format' } } },
  { _id: '8', title: 'Moderni bazen z roletami', location: 'Savinjska', type: 'vkopan', year: 2023, mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/518e25a9167f5312b733aabac421a00e267d848f-5120x2880.jpg?w=800&fit=max&auto=format' } } },
]

const typeLabels: Record<string, string> = {
  vkopan: 'Vkopan bazen', overflow: 'Overflow', infinity: 'Infinity', wellness: 'Wellness',
}

export default async function ProjektiPage() {
  let projects = []
  try { projects = await client.fetch(projectsQuery) } catch {}
  const displayProjects = projects.length > 0 ? projects : staticProjects

  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mb-16">
            <p className="section-subtitle">Naš portfelj</p>
            <div className="gold-line mb-6" />
            <h1 className="section-title text-pool-navy mb-4">
              Naši <span className="text-gradient">projekti</span>
            </h1>
            <p className="text-pool-navy/60 text-lg leading-relaxed">
              Vsak bazen je edinstvena zgodba. Poglejte si naše dokončane projekte po vsej Sloveniji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayProjects.map((project: any) => {
              const imgSrc = project.mainImage?.asset?.url || (project.mainImage ? urlFor(project.mainImage).width(800).url() : '')
              return (
                <div key={project._id} className="relative group overflow-hidden rounded-2xl aspect-video">
                  {imgSrc && (
                    <Image src={imgSrc} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-pool-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-pool-accent text-xs uppercase tracking-widest mb-1 block">
                      {typeLabels[project.type] || project.type}{project.location && ` · ${project.location}`}{project.year && ` · ${project.year}`}
                    </span>
                    <h3 className="font-display text-lg font-bold text-pool-white">{project.title}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  )
}
