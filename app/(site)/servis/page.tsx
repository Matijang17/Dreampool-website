import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Servis Bazenske Tehnike | DreamPool Slovenija',
  description:
    'Strokoven servis črpalk, filtrov, grelcev in dozirnih sistemov v Sloveniji. Redno vzdrževanje, hitre intervencije, prednostna obravnava stalnih strank. Pokličite zdaj.',
  alternates: { canonical: '/servis' },
  openGraph: {
    title: 'Servis Bazenske Tehnike | DreamPool',
    description: 'Strokoven servis bazenske tehnike po Sloveniji — Astralpool, Microwell, Zodiac, Bayrol.',
    url: '/servis',
    images: [{ url: '/images/vzdrzevanje-bazena.webp', width: 1200, height: 630 }],
  },
}

const services = [
  {
    title: 'Servis črpalk in motorjev',
    desc: 'Pregled, čiščenje, mazanje in zamenjava tesnilnih elementov. Diagnostika porabe in pretoka. Podaljšamo življenjsko dobo vaše črpalke.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Servis filtrskih naprav',
    desc: 'Povratno izpiranje peščenih filtrov, zamenjava filterskega peska ali kremenovega peska. Kontrola tlačnih razlik in pretoka.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    title: 'Servis grelcev',
    desc: 'Pregled toplotnih izmenjevalcev, čiščenje kalcinatnih oblog, kontrola termostata in varnostnih ventilov. Servis toplotnih črpalk Microwell in Astralpool.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    title: 'Servis dozirnih sistemov',
    desc: 'Umerjanje avtomatskih dozatorjev klora in pH regulatorjev. Zamenjava membranskih črpalk in senzorjev. Kalibracija elektrod.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Servis robotskih čistilcev',
    desc: 'Čiščenje filtrov in krtač robotov Zodiac in Astralpool. Diagnostika in zamenjava gonilnih enot. Posodobitev programske opreme.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    title: 'Urgentne intervencije',
    desc: 'Pri nenadni okvari smo pri vas v najkrajšem možnem času. Naše stranke imajo prednostno obravnavo — pokličite nas kadarkoli.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    q: 'Kako pogosto naj servisiramo bazensko tehniko?',
    a: 'Priporočamo letni servis pred ali po sezoni. Kritične naprave (črpalke, grelci) je priporočljivo pregledati vsake 2 leti ali pri prvih znakih nepravilnega delovanja — nenavadni zvoki, slabši pretok, povišana poraba energije.',
  },
  {
    q: 'Katere znamke bazenskih naprav servisirate?',
    a: 'Servisiramo vse uveljavljene znamke: Astralpool, Microwell, Zodiac, Bayrol, Cepex, Fluidra in ostale. Naši tehniki so usposobljeni za celoten spekter bazenske opreme.',
  },
  {
    q: 'Ali nudite urgentne intervencije?',
    a: 'Da. Naše stranke s sklenjenim servisnim pogodbo imajo prednostno obravnavo in zagotovljeno odzivnost v istem delovnem dnevu. Pokličite nas na 070 579 648.',
  },
  {
    q: 'Ali servis vključuje potrebne rezervne dele?',
    a: 'Diagnoza in menjava enostavnih potrošnih delov (tesnila, filteri, krtače) sta vključeni v ceno servisnega obiska. Za večje rezervne dele vam pošljemo predračun pred izvedbo dela.',
  },
]

export default function ServisPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Servis bazenske tehnike',
            description: 'Servis in vzdrževanje bazenske tehnike — črpalke, filtri, grelci, dozirni sistemi.',
            url: '/servis',
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Domov', url: '/' },
            { name: 'Servis bazenske tehnike', url: '/servis' },
          ]),
        ]}
      />

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <Image
            src="/images/vzdrzevanje-bazena.webp"
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
              <span className="text-pool-white/50">Servis bazenske tehnike</span>
            </nav>
            <div className="max-w-3xl">
              <p className="section-subtitle">Poprodajne storitve</p>
              <div className="gold-line mb-6" />
              <h1 className="section-title text-pool-white mb-6">
                Servis bazenske tehnike — <span className="text-gradient">hitro in zanesljivo</span>
              </h1>
              <p className="text-pool-white/70 text-xl leading-relaxed mb-8">
                Vaša bazenska tehnika je srce sistema. Redno vzdrževanje podaljša življenjsko dobo naprav,
                prepreči drage okvare in zagotavlja kristalno čisto vodo skozi celotno sezono.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Astralpool', 'Microwell', 'Zodiac', 'Bayrol', 'Cepex'].map((brand) => (
                  <span key={brand} className="text-xs text-pool-white/60 border border-pool-white/20 px-3 py-1 rounded-full">
                    {brand}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ponudba" className="btn-primary">Naročite servis</Link>
                <a href="tel:+38670579648" className="btn-outline">070 579 648</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="font-display text-3xl font-bold text-pool-navy mb-6">
                  Zakaj je reden servis ključen?
                </h2>
                <div className="space-y-4 text-pool-navy/65 leading-relaxed">
                  <p>Bazenska tehnika deluje v zahtevnih pogojih — konstantna vlaga, kemikalije, sezonske temperature. Brez rednega pregleda se naprave hitro obrabljajo, poraba energije raste, kakovost vode pa upada.</p>
                  <p>Pravočasno odkrit problem je cenejši za 5–10× od sanacije po okvari. Naši servisni tehniki opravijo sistematičen pregled celotnega sistema in vas opozorijo na morebitne težave preden postanejo drage.</p>
                  <p>Z letnim servisnim obiskom dobite mir — in bazen, ki deluje brez presenečenj skozi celotno poletje.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image
                  src="/images/servisiranje-bazenov.webp"
                  alt="Servis bazenske tehnike — DreamPool"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mb-20">
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-10 text-center">
                Kaj servisiramo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((s, i) => (
                  <div key={i} className="card-light p-6">
                    <div className="w-11 h-11 bg-pool-accent/10 rounded-xl flex items-center justify-center text-pool-accent mb-4">
                      {s.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-pool-navy mb-2">{s.title}</h3>
                    <p className="text-pool-navy/60 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-10 text-center">
                Pogosta vprašanja o servisu
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
