import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Kronsko (Diamantno) Vrtanje | DreamPool Slovenija',
  description:
    'Strokovno kronsko in diamantno vrtanje skozi beton, armirani beton in ploščice v Sloveniji. Natančni preboji brez poškodb za bazensko inštalacijo in renovacije. Povpraševanje.',
  keywords: ['kronsko vrtanje', 'diamantno vrtanje', 'preboji v betonu', 'bazenski preboji'],
  alternates: { canonical: '/kronsko-vrtanje' },
  openGraph: {
    title: 'Kronsko (Diamantno) Vrtanje | DreamPool',
    description: 'Diamantno vrtanje skozi beton, armirani beton in ploščice — Ø30 do Ø400 mm.',
    url: '/kronsko-vrtanje',
    images: [{ url: '/images/kronsko-diamantno-vrtanje.webp', width: 1200, height: 630 }],
  },
}

const applications = [
  {
    title: 'Bazenski inštalacijski preboji',
    desc: 'Odprtine za dovode in odvode vode, priključke skimmerjev, lučnih niš in masažnih šob. Vsak preboj je natančno izmerjen in izveden brez poškodb folije ali ploščic.',
  },
  {
    title: 'Renovacija obstoječih bazenov',
    desc: 'Dodajanje novih priključkov k obstoječemu bazenu — nove šobe, protitokovne naprave, svetlobne niše. Brez rušitve celotnega sistema.',
  },
  {
    title: 'Cevni preboji skozi betonske stene',
    desc: 'Tehnični preboji za vodovod, ogrevanje ali elektriko skozi armiranobetonske stene in temelje. Natančne odprtine od Ø30 do Ø400 mm.',
  },
  {
    title: 'Vrtanje skozi ploščice in keramiko',
    desc: 'Diamantna tehnika ne povzroča vibracij — vrtamo neposredno skozi finozidne ploščice brez razpok ali poškodb okoliškega materiala.',
  },
  {
    title: 'Industrijska in gradbena vrtanja',
    desc: 'Preboji za kanalske in prezračevalne sisteme, drenažne odprtine in druge infrastrukturne potrebe v gradbeništvu.',
  },
  {
    title: 'Mokro in suho vrtanje',
    desc: 'Glede na zahteve lokacije izberemo mokro vrtanje (hladilna voda za diamantno krono) ali suho vrtanje s sesalnim sistemom za čistost na mestu.',
  },
]

const faqs = [
  {
    q: 'Kaj je kronsko oziroma diamantno vrtanje?',
    a: 'Kronsko vrtanje je tehnika vrtanja z diamantno krono — cilindrično rezilom z diamantnimi segmenti. Omogoča natančne okrogle izvrtine v betonu, armiranem betonu, kamnu ali ploščicah — brez udarnih vibracij in posledičnih razpok v okoliškem materialu.',
  },
  {
    q: 'Kakšne premere odprtin vrtate?',
    a: 'Vrtamo vse standardne premere od Ø30 mm do Ø400 mm. Za specifične premere (npr. nestandardni priključki ali kanalski preboji) se predhodno dogovorimo. Globina vrtanja ni omejena — prilagodimo se debelini stene ali konstrukcije.',
  },
  {
    q: 'Ali pri vrtanju pride do poškodb ploščic?',
    a: 'Diamantna tehnika zagotavlja čiste reze brez tresljajev in udarov. Z ustreznim vbodnim kronom vrtamo neposredno skozi ploščice, mozaik ali naravni kamen brez razpok ali odbiranja materiala v okolici vboda.',
  },
  {
    q: 'Koliko časa traja en preboj?',
    a: 'Tipičen preboj skozi 20–30 cm betonsko steno (Ø110 mm) traja 15–30 minut. Armiran beton z gosto armaturo vzame nekoliko več časa. Za več prebojevo v enem dnevu je ceneje in priročneje vse opraviti v enkratnem obisku.',
  },
  {
    q: 'Ali nudite vrtanje za bazensko renovacijo?',
    a: 'Da — to je eno pogostejših področij našega dela. Ob renovaciji bazena (menjava folije, dograditev šob, dodajanje led luči) opravimo vse potrebne preboje skozi obstoječi bazenski plašč brez rušitve celotnega sistema.',
  },
]

export default function KronskoVrtanjePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Kronsko (diamantno) vrtanje',
            description: 'Diamantno in kronsko vrtanje skozi beton in armirani beton za bazensko inštalacijo in renovacije.',
            url: '/kronsko-vrtanje',
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Domov', url: '/' },
            { name: 'Kronsko (diamantno) vrtanje', url: '/kronsko-vrtanje' },
          ]),
        ]}
      />

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <Image
            src="/images/kronsko-diamantno-vrtanje.webp"
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
              <span className="text-pool-white/50">Kronsko (diamantno) vrtanje</span>
            </nav>
            <div className="max-w-3xl">
              <p className="section-subtitle">Specializirana storitev</p>
              <div className="gold-line mb-6" />
              <h1 className="section-title text-pool-white mb-6">
                Kronsko (diamantno) vrtanje — <span className="text-gradient">natančno, brez poškodb</span>
              </h1>
              <p className="text-pool-white/70 text-xl leading-relaxed mb-8">
                Diamantna kronika reže — ne trka. Natančne okrogle odprtine skozi beton, armirani beton
                in ploščice brez razpok, brez vibracij in brez poškodb okoliškega materiala.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Ø30 — Ø400 mm', 'Beton in armirani beton', 'Ploščice brez poškodb', 'Mokro in suho vrtanje'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-pool-white/70">
                    <svg className="w-4 h-4 text-pool-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ponudba" className="btn-primary">Povpraševanje</Link>
                <a href="tel:+38670579648" className="btn-outline">070 579 648</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="font-display text-3xl font-bold text-pool-navy mb-6">
                    Zakaj diamantno vrtanje?
                  </h2>
                  <div className="space-y-4 text-pool-navy/65 leading-relaxed">
                    <p>Klasično udarno vrtanje povzroča vibracije, ki se prenašajo skozi material. V bližini ploščic, finišev ali že nameščenih inštalacij to pogosto pomeni razpoke, odbitji ali poškodovane priključke.</p>
                    <p>Diamantna kronika reže material s fino dentičnostjo — brez udarov, brez vibracij. Rezultat je natančna, gladka odprtina z minimalnim prahom in maksimalno spoštovanjem okolišča.</p>
                    <p>Za bazensko industrijo je to ključno: vsak preboj skozi bazenski plašč mora biti čist in tesno zapolnjen — vsaka nepravilnost pomeni potencialno puščanje.</p>
                  </div>
                  <div className="mt-8 p-6 bg-pool-accent/5 border border-pool-accent/20 rounded-2xl">
                    <p className="text-pool-navy/70 text-sm leading-relaxed">
                      <strong className="text-pool-navy">Izkušnja:</strong> Naši tehniki opravijo celoten preboj — od zakoličenja do čiščenja vrtine. Prinesemo vso opremo, vi pa samo pokažete kje.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-pool-navy rounded-2xl p-8 text-white">
                    <p className="text-pool-accent text-xs uppercase tracking-widest mb-4">Tehnični parametri</p>
                    <div className="space-y-3">
                      {[
                        ['Premer vrtanja', 'Ø30 – Ø400 mm'],
                        ['Material', 'Beton, ARM beton, ploščice, kamen'],
                        ['Metoda', 'Mokro in suho diamantno'],
                        ['Globina', 'Neomejeno (prilagodljivo)'],
                        ['Hitrost preboja', '15–30 min / preboj*'],
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between text-sm border-b border-white/10 pb-2">
                          <span className="text-white/50">{label}</span>
                          <span className="text-white font-medium">{value}</span>
                        </div>
                      ))}
                      <p className="text-white/30 text-xs mt-2">* za standardno 20 cm steno, Ø110 mm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-10 text-center">
                Področja uporabe
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {applications.map((app, i) => (
                  <div key={i} className="card-light p-6">
                    <div className="w-8 h-8 rounded-full bg-pool-accent text-white text-sm font-bold flex items-center justify-center mb-4 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display text-lg font-bold text-pool-navy mb-2">{app.title}</h3>
                    <p className="text-pool-navy/60 text-sm leading-relaxed">{app.desc}</p>
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
