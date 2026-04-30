import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Fiberglass Bazeni | DreamPool — Hitra Montaža, Minimalno Vzdrževanje',
  description: 'Fiberglass bazeni po meri v Sloveniji. Hitra montaža v 2–5 dneh, minimalno vzdrževanje, odlična kakovost. Brezplačna ponudba za fiberglass bazen.',
  keywords: ['fiberglass bazeni', 'fiberglass bazen cena', 'fiberglass bazen slovenija', 'stekloplastični bazen'],
  alternates: { canonical: 'https://dreampool.si/bazeni/fiberglass-bazeni' },
}

const faqs = [
  { q: 'Kako dolgo traja montaža fiberglass bazena?', a: 'Fiberglass bazen je eden hitrejših projektov — od izkopa do polnjenja traja 3 do 7 dni. Prednost je tovarniška izdelava lupine, ki se montira v celoti.' },
  { q: 'Koliko stane fiberglass bazen?', a: 'Cena fiberglass bazena začne pri ca. 15.000–20.000 € za standardne dimenzije, vključno z montažo in osnovno opremo. Za točno ceno pošljite povpraševanje.' },
  { q: 'Kakšno je vzdrževanje fiberglass bazena?', a: 'Fiberglass površina je ne-porozna, kar pomeni manj alg, manj kemikalij in lažje čiščenje. Vzdrževanje je bistveno nižje kot pri betonskih bazenih.' },
  { q: 'Kakšne dimenzije so na voljo?', a: 'Standardne lupine so v razponih od 3x2m do 10x5m. Prav tako nudimo nestandardne oblike in dimenzije po naročilu.' },
]

export default function FiberglassBazeni() {
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
              <span className="text-pool-white/50">Fiberglass bazeni</span>
            </nav>
            <div className="max-w-3xl">
              <p className="section-subtitle">Tip bazena</p>
              <div className="gold-line mb-6" />
              <h1 className="section-title text-pool-white mb-6">
                Fiberglass bazeni <span className="text-gradient">v Sloveniji</span>
              </h1>
              <p className="text-pool-white/70 text-xl leading-relaxed mb-8">
                Najhitrejša pot do lastnega bazena. Montaža v 2–5 dneh, minimalno vzdrževanje, maksimalen užitek. Premium fiberglass lupine z 10-letno garancijo.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Montaža v 2–5 dneh', 'Minimalno vzdrževanje', '10-letna garancija', 'Različne oblike in barve'].map((item) => (
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
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image src="https://cdn.sanity.io/images/u77huvva/production/1ec7050f3670dd73d67ef907f398c548f2e64e4f-5120x2880.jpg?w=800&fit=max&auto=format" alt="Fiberglass bazen" fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-pool-navy mb-6">Zakaj fiberglass bazen?</h2>
                <div className="space-y-4 text-pool-navy/65 leading-relaxed">
                  <p>Fiberglass bazeni so danes ena najpopularnejših izbir za domače bazene v Sloveniji. Razlog je preprost: hitra montaža, dolga življenjska doba in minimalni stroški vzdrževanja.</p>
                  <p>Lupina je narejena tovarniško iz visokokakovostnih steklenih vlaken in poliestra, kar zagotavlja absolutno vodotesnost brez potrebe po dodatni hidroizolaciji. Gladka površina preprečuje rast alg in olajša čiščenje.</p>
                  <p>DreamPool vgrajuje fiberglass bazene od specialistov z dokazano kakovostjo, ki jih pokrivamo z 10-letno garancijo na lupino.</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-10 text-center">
                Pogosta vprašanja o fiberglass bazenih
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="card-light p-6">
                    <h3 className="font-semibold text-pool-navy mb-3 flex items-start gap-3">
                      <span className="text-pool-accent text-sm mt-0.5 flex-shrink-0">Q</span>
                      {faq.q}
                    </h3>
                    <p className="text-pool-navy/60 text-sm leading-relaxed pl-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  )
}
