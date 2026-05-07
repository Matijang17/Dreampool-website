import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Gradnja Bazenov v Sloveniji | DreamPool — Ključ v Roke',
  description:
    'Iščete zanesljivo podjetje za gradnjo bazena v Sloveniji? DreamPool izvaja celoten projekt od načrta do vode. 50+ projektov, garancija, brezplačna ponudba.',
  keywords: ['gradnja bazenov', 'gradnja bazenov slovenija', 'bazen po meri', 'novogradnja bazena', 'vkopani bazen gradnja'],
  alternates: { canonical: 'https://dreampool.si/gradnja-bazenov' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gradnja bazenov po meri',
  provider: { '@type': 'LocalBusiness', name: 'DreamPool' },
  areaServed: 'Slovenia',
  description: 'Projektiranje, dobava in montaža premium bazenov po meri v Sloveniji.',
}

const faqs = [
  { q: 'Koliko časa traja gradnja bazena?', a: 'Odvisno od tipa bazena. Betonski ali vkopani bazen vzame 3–6 tednov glede na velikost in zahtevnost projekta.' },
  { q: 'Ali potrebujem gradbeno dovoljenje?', a: 'Bazeni do 50 m³ in do 150 cm globine praviloma ne potrebujejo gradbenega dovoljenja. Za večje bazene je potrebna priglasitev del. Vedno preverite lokalni urbanistični načrt.' },
  { q: 'Kakšen je minimalen vrt za bazen?', a: 'Za standardni bazen (8x4m) priporočamo vsaj 150 m² prostega travnika. Upoštevati je treba odmik od sosedov (min. 1,5 m) in od objekta.' },
  { q: 'Ali nudite poprodajni servis?', a: 'Da, nudimo letno in mesečno vzdrževanje, servis bazenske tehnike in urgentne intervencije. Naše stranke imajo prednostno obravnavo.' },
]

export default function GradnjaBazenov() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="min-h-screen bg-white pt-24">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pool-deep via-pool-blue/30 to-pool-navy" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-pool-white/30 text-sm mb-8">
              <Link href="/" className="hover:text-pool-accent transition-colors">Domov</Link>
              <span>/</span>
              <span className="text-pool-white/50">Gradnja bazenov</span>
            </nav>
            <div className="max-w-3xl">
              <p className="section-subtitle">Storitev</p>
              <div className="gold-line mb-6" />
              <h1 className="section-title text-pool-white mb-6">
                Gradnja bazenov <span className="text-gradient">po meri</span><br />v Sloveniji
              </h1>
              <p className="text-pool-white/70 text-xl leading-relaxed mb-8">
                Od prvega obrisa do prvega skoka — celoten projekt v enih rokah.
                Gradimo premium bazene po vsej Sloveniji z nemško tehnologijo in pisno garancijo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ponudba" className="btn-primary">Brezplačna ponudba</Link>
                <a href="tel:+38670579648" className="btn-outline">070 579 648</a>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="font-display text-3xl font-bold text-pool-navy mb-6">
                  Zakaj izbrati DreamPool za gradnjo bazena?
                </h2>
                <div className="space-y-4 text-pool-navy/65 leading-relaxed">
                  <p>Gradnja bazena je investicija za desetletja. Zato je izbira pravega izvajalca ključna odločitev. DreamPool je specializirano podjetje za gradnjo in montažo bazenov z dokazanimi referencami po vsej Sloveniji.</p>
                  <p>Naša ekipa izkušenih strokovnjakov pokriva celoten proces — od svetovanja in projektiranja, skozi pridobivanje morebitnih dovoljenj, izkop, montažo, inštalacijo bazenske tehnike, do zagona in predaje ključev.</p>
                  <p>Uporabljamo izključno premium materiale uveljavljenih evropskih blagovnih znamk: Alkorplan, Astralpool, Bayrol, Microwell in Cepex — kar zagotavlja dolgotrajnost in nizke stroške vzdrževanja.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image
                  src="images/gradnja-bazenov.webp"
                  alt="Gradnja bazena - DreamPool"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Types */}
            <div className="mb-20">
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-10 text-center">
                Kateri bazen je pravi za vas?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { title: 'Vkopani bazeni', desc: 'Popolna svoboda oblike in velikosti. Betonska ali modularna konstrukcija — trajna investicija.', href: '/bazeni/vkopani-bazeni' },
                  { title: 'Overflow bazeni', desc: 'Eleganten dizajn brez vidnih robov. Voda teče čez rob — luksuzni vizualni efekt za zahtevne.', href: '/bazeni/overflow-bazeni' },
                  { title: 'Wellness & Jacuzzi', desc: 'Zasebni spa v vrtu — masažne šobe, LED osvetlitev in celoletno ogrevanje.', href: '/bazeni/wellness-bazeni' },
                ].map((type) => (
                  <Link key={type.href} href={type.href} className="card-light p-6 group">
                    <h3 className="font-display text-lg font-bold text-pool-navy mb-3 group-hover:text-pool-accent transition-colors">{type.title}</h3>
                    <p className="text-pool-navy/55 text-sm leading-relaxed mb-4">{type.desc}</p>
                    <span className="inline-flex items-center gap-1 text-pool-accent font-semibold text-xs tracking-wider uppercase">
                      Več info
                      <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-10 text-center">
                Pogosta vprašanja o gradnji bazena
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
