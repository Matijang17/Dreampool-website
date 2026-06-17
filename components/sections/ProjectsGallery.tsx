'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

type Project = {
  id: string
  location: string
  images: string[]
}

const projects: Project[] = [
  {
    id: 'bazara',
    location: 'Bazara, Slovenija',
    images: [
      '/images/Bazara/bazara_bazen.webp',
      '/images/Bazara/bazara_bazen-1.webp',
      '/images/Bazara/bazara_bazen-2.webp',
      '/images/Bazara/bazara_bazen-3.webp',
    ],
  },
  {
    id: 'kaprije',
    location: 'Kaprije, Hrvaška',
    images: [
      '/images/Kaprije-Hrvaska/kaprije_bazen.webp',
      '/images/Kaprije-Hrvaska/kaprije_bazen-1.webp',
      '/images/Kaprije-Hrvaska/kaprije_bazen-2.webp',
    ],
  },
  {
    id: 'marezige',
    location: 'Marezige, Slovenija',
    images: [
      '/images/Marezige/marezige_bazen.webp',
      '/images/Marezige/marezige_bazen-1.webp',
      '/images/Marezige/marezige_bazen-2.webp',
    ],
  },
  {
    id: 'ozeljan',
    location: 'Ozeljan, Slovenija',
    images: [
      '/images/Ozeljan/ozelja-bazen.webp',
      '/images/Ozeljan/ozelja-bazen-1.webp',
      '/images/Ozeljan/ozeljan_bazen-2.webp',
    ],
  },
  {
    id: 'pivka',
    location: 'Pivka, Slovenija',
    images: [
      '/images/Pivka/pivka-bazen.webp',
      '/images/Pivka/pivka_bazen-1.webp',
      '/images/Pivka/pivka_bazen-2.webp',
    ],
  },
  {
    id: 'rozna-dolina',
    location: 'Rožna Dolina, Slovenija',
    images: [
      '/images/Rozna-Dolina/rozn-dolina.webp',
    ],
  },
  {
    id: 'pag-simuni',
    location: 'Pag-Šimuni, Hrvaška',
    images: [
      '/images/Pag/pag-simuni.webp',
      '/images/Pag/pag-simuni_1.webp',
      '/images/Pag/pag-simuni_2.webp',
    ],
  },
]

export function ProjectsGallery() {
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null)

  const open = (project: Project, index: number) => setLightbox({ project, index })
  const close = () => setLightbox(null)

  const prev = useCallback(() => {
    if (!lightbox) return
    setLightbox((l) => l ? { ...l, index: (l.index - 1 + l.project.images.length) % l.project.images.length } : null)
  }, [lightbox])

  const next = useCallback(() => {
    if (!lightbox) return
    setLightbox((l) => l ? { ...l, index: (l.index + 1) % l.project.images.length } : null)
  }, [lightbox])

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightbox, prev, next])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white"
            onClick={() => open(project, 0)}
          >
            {/* Main image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.location}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-pool-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 bg-white/90 text-pool-navy text-sm font-semibold px-4 py-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Odpri galerijo
                </span>
              </div>
            </div>

            {/* Card footer */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-pool-accent uppercase tracking-widest mb-0.5">Lokacija</p>
                <h3 className="font-display font-bold text-pool-navy text-base">{project.location}</h3>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-1.5">
                {project.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-lg overflow-hidden relative flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                    onClick={(e) => { e.stopPropagation(); open(project, i + 1) }}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="40px" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Zapri
            </button>

            {/* Main image */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={lightbox.project.images[lightbox.index]}
                alt={lightbox.project.location}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />

              {/* Prev / Next */}
              {lightbox.project.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Location + counter */}
            <div className="flex items-center justify-between mt-3 px-1">
              <p className="text-white font-semibold">{lightbox.project.location}</p>
              <p className="text-white/50 text-sm">{lightbox.index + 1} / {lightbox.project.images.length}</p>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-3 justify-center">
              {lightbox.project.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox((l) => l ? { ...l, index: i } : null)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden cursor-pointer transition-all ${
                    i === lightbox.index ? 'ring-2 ring-pool-accent opacity-100' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
