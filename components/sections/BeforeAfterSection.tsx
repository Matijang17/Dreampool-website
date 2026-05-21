'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function BeforeAfterSection() {
  const [position, setPosition] = useState(42)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => { dragging.current = true; e.preventDefault() }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePosition(e.clientX) }
  const onMouseUp = () => { dragging.current = false }
  const onTouchStart = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX) }
  const onTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX) }

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Slider */}
          <div className="order-2 lg:order-1">
            <p className="text-pool-navy/40 text-xs uppercase tracking-widest mb-4 text-center">
              ← Povlecite za primerjavo →
            </p>
            <div
              ref={containerRef}
              className="relative overflow-hidden rounded-2xl aspect-video cursor-col-resize select-none shadow-xl"
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
            >
              {/* After image (base) */}
              <Image
                src="/images/Rozna-dolina-before_after/rozna_dolina-after.webp"
                alt="Po prenovi — Rožna Dolina"
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Before image (clipped left) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <Image
                  src="/images/Rozna-dolina-before_after/rozna_dolina-before.webp"
                  alt="Pred prenovo — Rožna Dolina"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Labels */}
              <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-2.5 py-1 rounded-full pointer-events-none tracking-wide">
                PRED
              </div>
              <div className="absolute top-3 right-3 bg-pool-accent text-white text-xs font-bold px-2.5 py-1 rounded-full pointer-events-none tracking-wide">
                PO
              </div>

              {/* Divider line + handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg pointer-events-none"
                style={{ left: `${position}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-white/80">
                  <svg className="w-4 h-4 text-pool-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* After thumbnails */}
            <div className="flex gap-3 mt-4 justify-center">
              {[
                '/images/Rozna-dolina-before_after/rozna_dolina-after-1.webp',
                '/images/Rozna-dolina-before_after/rozna_dolina-after-2.webp',
              ].map((src, i) => (
                <div key={i} className="relative w-20 h-14 rounded-xl overflow-hidden shadow-md">
                  <Image src={src} alt={`Po prenovi ${i + 2}`} fill className="object-cover" sizes="80px" />
                </div>
              ))}
              <div className="relative w-20 h-14 rounded-xl overflow-hidden shadow-md">
                <Image src="/images/Rozna-Dolina/rozn-dolina.webp" alt="Rožna Dolina bazen" fill className="object-cover" sizes="80px" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="section-subtitle">Referenčni projekt</p>
            <div className="gold-line mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-pool-navy leading-tight mb-6">
              Iz zastarelega<br />
              <span className="text-gradient">v sanjski bazen</span>
            </h2>
            <p className="text-pool-navy/65 text-lg leading-relaxed mb-6">
              Projekt Rožna Dolina — celovita prenova dotrajane bazenske folije in posodobitev tehnike.
              Rezultat: kot nov bazen, brez gradnje od začetka.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Nova bazenska folija Alkorplan',
                'Posodobitev filtracije in ogrevanja',
                'Kronsko vrtanje za nove priključke',
                'Čiščenje in kemična obdelava',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-pool-navy/70 text-sm">
                  <svg className="w-4 h-4 text-pool-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/projekti" className="btn-primary">Oglejte si vse projekte</Link>
              <Link href="/ponudba" className="btn-outline-dark">Brezplačna ponudba</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
