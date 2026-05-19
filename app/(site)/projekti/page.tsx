import type { Metadata } from 'next'
import { ProjectsGallery } from '@/components/sections/ProjectsGallery'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Naši Projekti — Galerija Bazenov | DreamPool',
  description: 'Oglejte si galerijo naših dokončanih bazenov po vsej Sloveniji. Premium projekti — fiberglass, vkopani, overflow in infinity bazeni.',
  alternates: { canonical: 'https://dreampool.si/projekti' },
}

export default function ProjektiPage() {
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
              Vsak bazen je edinstvena zgodba. Poglejte si naše dokončane projekte po vsej Sloveniji in sosednjih državah.
            </p>
          </div>

          <ProjectsGallery />
        </div>
      </div>
      <CTASection />
    </>
  )
}
