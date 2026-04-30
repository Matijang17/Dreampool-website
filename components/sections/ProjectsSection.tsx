import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

const staticProjects = [
  {
    _id: '1',
    title: 'Elegantni vkopani bazen — Ljubljana',
    location: 'Ljubljana',
    type: 'vkopan',
    mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/6da0045ebc99873dd993284fa370bc86a4dc51fa-5120x2880.jpg?w=800&fit=max&auto=format' } },
  },
  {
    _id: '2',
    title: 'Moderni overflow bazen — Primorska',
    location: 'Primorska',
    type: 'overflow',
    mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/7ee2f8ad2f09fc39781fb51d3857c7613b4f66f7-5120x2880.jpg?w=800&fit=max&auto=format' } },
  },
  {
    _id: '3',
    title: 'Fiberglass bazen z jacuzzijem',
    location: 'Gorenjska',
    type: 'fiberglass',
    mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/1ec7050f3670dd73d67ef907f398c548f2e64e4f-5120x2880.jpg?w=800&fit=max&auto=format' } },
  },
  {
    _id: '4',
    title: 'Premium bazen za villu',
    location: 'Štajerska',
    type: 'vkopan',
    mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/de537d3e33593130bfe59dc259ccea1babc816fa-5120x2880.jpg?w=800&fit=max&auto=format' } },
  },
  {
    _id: '5',
    title: 'Infinity bazen z razgledom',
    location: 'Kras',
    type: 'infinity',
    mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/9a698061e50bd3de0ed9b3046e9ad89427fd0576-5120x2880.jpg?w=800&fit=max&auto=format' } },
  },
  {
    _id: '6',
    title: 'Wellness bazen s savno',
    location: 'Dolenjska',
    type: 'wellness',
    mainImage: { asset: { url: 'https://cdn.sanity.io/images/u77huvva/production/3148dc011711f8ce31c71fd854c39d43ba78280c-5120x2880.jpg?w=800&fit=max&auto=format' } },
  },
]

const typeLabels: Record<string, string> = {
  vkopan: 'Vkopan bazen',
  fiberglass: 'Fiberglass',
  overflow: 'Overflow',
  infinity: 'Infinity',
  wellness: 'Wellness',
}

export function ProjectsSection({ projects = [] }: { projects?: any[] }) {
  const displayProjects = projects.length > 0 ? projects.slice(0, 6) : staticProjects

  return (
    <section id="projekti" className="py-24 bg-pool-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-subtitle">Naš portfelj</p>
            <div className="gold-line mb-6" />
            <h2 className="section-title text-pool-white">
              Najnovejši <span className="text-gradient">projekti</span>
            </h2>
          </div>
          <Link href="/projekti" className="btn-outline whitespace-nowrap self-start md:self-auto">
            Vsi projekti
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayProjects.map((project, i) => {
            const imgSrc = project.mainImage?.asset?.url || 
              (project.mainImage ? urlFor(project.mainImage).width(800).url() : '')

            return (
              <Link
                key={project._id}
                href={`/projekti/${project.slug?.current || project._id}`}
                className="relative group overflow-hidden rounded-sm aspect-video block"
              >
                <Image
                  src={imgSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pool-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-pool-accent text-xs uppercase tracking-widest mb-1 block">
                    {typeLabels[project.type] || project.type}
                    {project.location && ` · ${project.location}`}
                  </span>
                  <h3 className="font-display text-lg font-bold text-pool-white">
                    {project.title}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
