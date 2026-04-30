import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Overflow Bazeni | DreamPool — Luksuzni Efekt Brez Robov',
  description: 'Overflow bazeni v Sloveniji. Voda teče čez rob brez vidnih robov — luksuzni vizualni efekt za zahtevne stranke. Brezplačna ponudba.',
  keywords: ['overflow bazen', 'overflow bazen slovenija', 'infinity bazen', 'neskončni bazen', 'luksuzni bazen'],
  alternates: { canonical: 'https://dreampool.si/bazeni/overflow-bazeni' },
}

export default function OverflowBazeni() {
  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pool-deep via-pool-blue/30 to-pool-navy" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-pool-white/30 text-sm mb-8">
              <Link href="/" className="hover:text-pool-accent transition-colors">Domov</Link><span>/</span>
              <Link href="/gradnja-bazenov" className="hover:text-pool-accent transition-colors">Bazeni</Link><span>/</span>
              <span className="text-pool-white/50">Overflow bazeni</span>
            </nav>
            <div className="max-w-3xl">
              <p className="section-subtitle">Luksuzna rešitev</p>
              <div className="gold-line mb-6" />
              <h1 className="section-title text-pool-white mb-6">
                Overflow bazeni — <span className="text-gradient">voda brez meja</span>
              </h1>
              <p className="text-pool-white/70 text-xl leading-relaxed mb-8">
                Eleganten dizajn brez vidnih robov. Voda teče čez rob v prelivni kanal in se reciklira — vizualni efekt luksuza za zahtevne lastnike.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ponudba" className="btn-primary">Brezplačna ponudba</Link>
                <a href="tel:+38670579648" className="btn-outline">070 579 648</a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image src="https://cdn.sanity.io/images/u77huvva/production/7ee2f8ad2f09fc39781fb51d3857c7613b4f66f7-5120x2880.jpg?w=800&fit=max&auto=format" alt="Overflow bazen" fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-pool-navy mb-6">Kaj je overflow bazen?</h2>
                <div className="space-y-4 text-pool-navy/65 leading-relaxed">
                  <p>Overflow bazen je tip bazena, kjer rob bazena sega do ravni vode — ko bazen deluje, voda teče čez rob v zunanji kanal in se reciklira nazaj v sistem.</p>
                  <p>Rezultat je čisti, minimalistični izgled brez vidnih betonskih ali plastičnih robov. Bazen izgleda, kot bi bil del naravnega okolja.</p>
                  <p>Overflow sistemi zahtevajo natančno načrtovanje in izkušene izvajalce — DreamPool ima bogate izkušnje z montažo overflow in infinity bazenov v zahodni in primorski Sloveniji.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  )
}
