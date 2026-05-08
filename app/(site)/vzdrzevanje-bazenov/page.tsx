import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Vzdrževanje Bazenov | Čiščenje in Kemija | DreamPool',
  description:
    'Profesionalno vzdrževanje bazena v Sloveniji. Tedensko ali mesečno čiščenje, kemijska obdelava vode Bayrol, servis filtra. Prednostna obravnava stalnih strank.',
  keywords: ['vzdrževanje bazenov', 'čiščenje bazena', 'kemija bazen', 'bayrol', 'servis bazen'],
  alternates: { canonical: '/vzdrzevanje-bazenov' },
  openGraph: {
    title: 'Vzdrževanje Bazenov | DreamPool',
    description: 'Tedensko ali mesečno vzdrževanje, kemijska obdelava vode in čiščenje bazena.',
    url: '/vzdrzevanje-bazenov',
    images: [{ url: '/images/servisiranje-bazenov.webp', width: 1200, height: 630 }],
  },
}

const packages = [
  {
    name: 'Enkratno čiščenje',
    ideal: 'Pred sezono ali po daljši odsotnosti',
    items: ['Sesanje dna in sten', 'Čiščenje vodne linije', 'Povratno izpiranje filtra', 'Merjenje in korekcija kemije', 'Čiščenje košarice pred črpalko'],
  },
  {
    name: 'Mesečno vzdrževanje',
    ideal: 'Minimalni standard za zdrav bazen',
    items: ['Vse iz enkratnega čiščenja', 'Mesečni pregled tehnike', 'Poročilo o stanju vode', 'Priporočila za kemijo', 'Prednostna obravnava pri kvarah'],
    highlight: true,
  },
  {
    name: 'Tedenski servis',
    ideal: 'Za popolno sproščenost brez skrbi',
    items: ['Tedenski obisk servisnika', 'Polna kemijska obdelava', 'Čiščenje robov in ploščic', 'Čiščenje robotskega čistilca', 'Letno brezplačno zimovanje'],
  },
]

const faqs = [
  {
    q: 'Kako pogosto je potrebno vzdrževanje bazena?',
    a: 'Med sezono priporočamo vsaj mesečno čiščenje in tedenski pregled kemije vode. Za popolno sproščenost je idealen tedenski servisni obisk — takrat se voda vzdržuje konstantno in se izognete napakam pri doziranju.',
  },
  {
    q: 'Ali vključuje vzdrževanje kemijo?',
    a: 'V ceno paketa je vključeno merjenje in korekcija kemije med obiskom. Kemikalije Bayrol zaračunamo po dejanski porabi ali po dogovoru vključimo v mesečni paket. Ob prvem obisku svetujemo glede na velikost in tip vašega bazena.',
  },
  {
    q: 'Ali vzdržujete bazene po vsej Sloveniji?',
    a: 'Delujemo po vsej osrednji in zahodni Sloveniji. Za oddaljene lokacije se dogovorimo za kombiniran obisk. Pokličite nas in skupaj najdemo rešitev.',
  },
  {
    q: 'Kaj se zgodi, če je kakovost vode slaba?',
    a: 'Ob prekomerni zarasti alg ali motni vodi opravimo šok kloriranje in intenzivno čiščenje. V primeru vztrajajoče težave preverimo kemično ravnovesje, delovanje filtrasije in možnost zamenjave dela vode.',
  },
]

export default function VzdrzevanjeBarenov() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Vzdrževanje bazenov',
            description: 'Redno vzdrževanje, čiščenje in kemijska obdelava bazenov v Sloveniji.',
            url: '/vzdrzevanje-bazenov',
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Domov', url: '/' },
            { name: 'Vzdrževanje bazenov', url: '/vzdrzevanje-bazenov' },
          ]),
        ]}
      />

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <Image
            src="/images/servisiranje-bazenov.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pool-navy/85 via-pool-navy/70 to-pool-navy/90" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-pool-white/30 text-sm mb-8">
              <Link href="/" className="hover:text-pool-accent transition-colors">Domov</Link>
              <span>/</span>
              <span className="text-pool-white/50">Vzdrževanje bazenov</span>
            </nav>
            <div className="max-w-3xl">
              <p className="section-subtitle">Vzdrževanje</p>
              <div className="gold-line mb-6" />
              <h1 className="section-title text-pool-white mb-6">
                Vzdrževanje bazena — <span className="text-gradient">čist bazen brez vašega dela</span>
              </h1>
              <p className="text-pool-white/70 text-xl leading-relaxed mb-8">
                Prepustite skrb za kakovost vode nam. Naši servisniki poskrbijo za čistoč, kemijsko
                ravnovesje in delovanje filtracije — vi pa uživate v kristalno čistem bazenu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ponudba" className="btn-primary">Naročite vzdrževanje</Link>
                <a href="tel:+38670579648" className="btn-outline">070 579 648</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image
                  src="https://cdn.sanity.io/images/u77huvva/production/a513af9a8bc73b2caa378d7473023b813f56930f-600x327.jpg?w=800&fit=max&auto=format"
                  alt="Vzdrževanje bazena — DreamPool"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-pool-navy mb-6">
                  Zakaj redno vzdrževanje ni opcija
                </h2>
                <div className="space-y-4 text-pool-navy/65 leading-relaxed">
                  <p>Bazen brez rednega vzdrževanja hitro postane problem — alge, motna voda, dražeča kemija ali poškodovana tehnika. Preventiva je vedno cenejša od sanacije.</p>
                  <p>Z rednim vzdrževanjem zagotovite zdravo kopalniško vodo za vašo družino, podaljšate življenjsko dobo folije in opreme ter ohranjate vrednost naložbe.</p>
                  <p>Kemija Bayrol, ki jo uporabljamo, je varno aplicirana v pravih količinah — brez prekoračitve in brez nevarnih reakcij pri napačnem mešanju.</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { num: '50%', label: 'manj kemije z rednim vzdrž.' },
                    { num: '3×', label: 'daljša življ. doba opreme' },
                    { num: '24h', label: 'odzivni čas pri urgencah' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="font-display text-2xl font-bold text-gradient mb-1">{stat.num}</div>
                      <div className="text-pool-navy/50 text-xs leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-4 text-center">
                Servisni paketi
              </h2>
              <p className="text-pool-navy/55 text-center mb-10">Izberite paket, ki ustreza vašim potrebam. Cene prilagodimo glede na velikost bazena.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.name} className={`card-light p-7 flex flex-col ${pkg.highlight ? 'ring-2 ring-pool-accent' : ''}`}>
                    {pkg.highlight && (
                      <span className="inline-block bg-pool-accent text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4 self-start">
                        Priporočeno
                      </span>
                    )}
                    <h3 className="font-display text-xl font-bold text-pool-navy mb-1">{pkg.name}</h3>
                    <p className="text-pool-accent text-xs uppercase tracking-wide mb-5">{pkg.ideal}</p>
                    <ul className="space-y-2.5 flex-grow">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-pool-navy/65">
                          <svg className="w-4 h-4 text-pool-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/ponudba" className="btn-primary justify-center mt-6 text-xs py-3">
                      Povpraševanje
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-10 text-center">
                Pogosta vprašanja
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
