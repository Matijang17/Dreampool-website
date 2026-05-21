import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pogoji uporabe | DreamPool',
  description: 'Pogoji uporabe spletne strani DreamPool — TD inženiring d.o.o.',
  alternates: { canonical: 'https://dreampool.si/pogoji' },
  robots: { index: true, follow: false },
}

const Section = ({ num, title, children }: { num: string; title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="font-display text-xl font-bold text-pool-navy mb-3">{num}. {title}</h2>
    <div className="text-pool-navy/65 leading-relaxed space-y-3">{children}</div>
  </div>
)

export default function PogojiPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="btn-ghost text-xs mb-8 inline-flex">
          <svg className="w-3.5 h-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Nazaj
        </Link>

        <p className="text-pool-accent text-xs uppercase tracking-widest mb-2">Pravni dokumenti</p>
        <h1 className="font-display text-4xl font-bold text-pool-navy mb-2">Pogoji uporabe</h1>
        <p className="text-pool-navy/40 text-sm mb-10">DreamPool · TD inženiring d.o.o. · Veljavno od 1. 1. 2025</p>

        <Section num="1" title="Splošno">
          <p>Z uporabo spletne strani <strong className="text-pool-navy">dreampool.si</strong> potrjujete, da ste prebrali in se strinjate s temi Pogoji uporabe. Stran upravlja TD inženiring d.o.o., Vogrsko 172, 5293 Volčja Draga ("DreamPool", "mi").</p>
        </Section>

        <Section num="2" title="Storitve">
          <p>DreamPool prek spletne strani nudi informacije o naslednjih storitvah:</p>
          <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
            <li>Novogradnja bazenov po meri</li>
            <li>Servis bazenske tehnike</li>
            <li>Vzdrževanje bazenov</li>
            <li>Pokrivala za bazene</li>
            <li>Kronsko (diamantno) vrtanje</li>
            <li>Hidroizolacija s folijo</li>
            <li>Hidroizolacije rezervoarjev</li>
            <li>Svetovanje in projektiranje</li>
          </ul>
          <p>Spletna stran je informativne narave. Pogodba o storitvi nastane šele s pisno potrditvijo ponudbe.</p>
        </Section>

        <Section num="3" title="Omejitev odgovornosti">
          <p>Ne odgovarjamo za:</p>
          <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
            <li>Začasno nedelovanje strani</li>
            <li>Izgubo podatkov</li>
            <li>Posredno škodo</li>
            <li>Storitve tretjih oseb</li>
            <li>Prekinitve omrežja</li>
            <li>Nepravilne vnose uporabnikov</li>
          </ul>
          <p>Informacije na strani so informativne narave in se lahko kadarkoli spremenijo brez predhodnega obvestila.</p>
        </Section>

        <Section num="4" title="Intelektualna lastnina">
          <p>Vse vsebine na spletni strani — slike, logotipi, besedila, grafike in dizajn — so last TD inženiring d.o.o. ali so uporabljene z dovoljenjem. Kopiranje, reproduciranje ali distribucija brez pisnega dovoljenja ni dovoljena.</p>
        </Section>

        <Section num="5" title="Prepovedana uporaba">
          <p>Prepovedano je:</p>
          <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
            <li>Zlorabljanje kontaktnih obrazcev</li>
            <li>Avtomatizirano zbiranje podatkov (scraping)</li>
            <li>Napadi na strežnik ali infrastrukturo</li>
            <li>Širjenje zlonamerne kode</li>
            <li>Reverse engineering spletne strani</li>
          </ul>
        </Section>

        <Section num="6" title="Zunanje povezave">
          <p>Spletna stran vsebuje povezave do spletnih strani partnerjev in tretjih strani. Ne odgovarjamo za njihovo vsebino, politike zasebnosti ali razpoložljivost.</p>
        </Section>

        <Section num="7" title="Spremembe pogojev">
          <p>Pogoje uporabe lahko kadarkoli spremenimo brez predhodnega obvestila. Priporočamo redno preverjanje aktualne verzije na tej strani.</p>
        </Section>

        <Section num="8" title="Veljavno pravo">
          <p>Za morebitne spore velja pravo Republike Slovenije. Pristojna so slovenija sodišča.</p>
        </Section>

        <Section num="9" title="Kontakt">
          <p>
            TD inženiring d.o.o. — DreamPool<br />
            Vogrsko 172, 5293 Volčja Draga<br />
            <a href="mailto:info@dreampool.si" className="text-pool-accent hover:underline">info@dreampool.si</a> · <a href="tel:+38670579648" className="text-pool-accent hover:underline">+386 70 579 648</a>
          </p>
          <p className="mt-3">
            <Link href="/zasebnost" className="text-pool-accent hover:underline mr-4">Politika zasebnosti</Link>
            <Link href="/piskotki" className="text-pool-accent hover:underline">Politika piškotkov</Link>
          </p>
        </Section>
      </div>
    </div>
  )
}
