import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Vkopani Bazeni po Meri | DreamPool Slovenija',
  description: 'Gradnja vkopanih bazenov po meri v Sloveniji. Popolna svoboda oblike in velikosti. Premium materiali, garancija, brezplačna ponudba.',
  keywords: ['vkopani bazeni', 'vkopani bazen cena', 'vkopani bazen slovenija', 'betonski bazen', 'bazen po meri'],
  alternates: { canonical: 'https://dreampool.si/bazeni/vkopani-bazeni' },
}

const faqs = [
  { q: 'Koliko stane vkopani bazen?', a: 'Cena vkopanega bazena začne pri ca. 25.000 €, odvisno od dimenzij, oblike, materiali in opreme. Za točno ponudbo stopite v kontakt z nami.' },
  { q: 'Kako dolgo traja gradnja vkopanega bazena?', a: 'Gradnja standardnega vkopanega bazena traja 4–8 tednov glede na kompleksnost projekta, vreme in dostop do lokacije.' },
  { q: 'Kakšne oblike so možne?', a: 'Vkopani bazeni so popolnoma prilagodljivi — pravokotni, ovalni, ledvičasti ali povsem atipični. Prav tako je možna integracija wellness cone, cascade ali overflow efektov.' },
]

export default function VkopaniBazeni() {
  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pool-deep via-pool-blue/30 to-pool-navy" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-pool-white/30 text-sm mb-8">
              <Link href="/" className="hover:text-pool-accent transition-colors">Domov</Link>
              <span>/</span>
              <Link href="/gradnja-bazenov" className="hover:text-pool-accent transition-colors">Bazeni</Link>
              <span>/</span>
              <span className="text-pool-white/50">Vkopani bazeni</span>
            </nav>
            <div className="max-w-3xl">
              <p className="section-subtitle">Tip bazena</p>
              <div className="gold-line mb-6" />
              <h1 className="section-title text-pool-white mb-6">
                Vkopani bazeni <span className="text-gradient">po meri</span>
              </h1>
              <p className="text-pool-white/70 text-xl leading-relaxed mb-8">
                Popolna svoboda oblike, velikosti in globine. Vkopani bazeni so najfleksibilnejša in najtrajnejša rešitev za vaš zasebni vodni raj.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Poljubna oblika in velikost', 'Izjemna trajnost', 'Prilagodljiva globina', 'Premium materiali'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-pool-white/70">
                    <svg className="w-4 h-4 text-pool-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ponudba" className="btn-primary">Brezplačna ponudba</Link>
                <a href="tel:+38670579648" className="btn-outline">070 579 648</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="font-display text-3xl font-bold text-pool-navy mb-6">Klasika, ki traja generacije</h2>
                <div className="space-y-4 text-pool-navy/65 leading-relaxed">
                  <p>Vkopani bazen je klasična in najpogostejša oblika bazena za domača dvorišča. Gradi se na mestu iz betonskih sklopov ali monolitne armiranobetonske konstrukcije, prekritih s folijo ali keramičnimi ploščicami.</p>
                  <p>Prednost je absolutna svoboda projektiranja — oblika, dimenzije, globina, stopnice, police za sedenje, integrirana svetila in sistem vodnih atrakcij so povsem prilagodljivi vašim željam in prostoru.</p>
                  <p>DreamPool vgradi celovit bazenski sistem: filtracijo, ogrevanje, LED razsvetljavo, pokrivalo in kemijsko doziranje — vse usklajeno in testirano pred predajo.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image src="https://cdn.sanity.io/images/u77huvva/production/6da0045ebc99873dd993284fa370bc86a4dc51fa-5120x2880.jpg?w=800&fit=max&auto=format" alt="Vkopani bazen" fill className="object-cover" />
              </div>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-10 text-center">Pogosta vprašanja</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="card-light p-6">
                  <h3 className="font-semibold text-pool-navy mb-3 flex items-start gap-3">
                    <span className="text-pool-accent text-sm mt-0.5 flex-shrink-0">Q</span>{faq.q}
                  </h3>
                  <p className="text-pool-navy/60 text-sm leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  )
}
