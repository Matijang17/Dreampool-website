import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politika piškotkov | DreamPool',
  description: 'Politika piškotkov DreamPool — informacije o uporabi piškotkov na spletni strani dreampool.si.',
  robots: { index: false, follow: false },
}

export default function PiskotkyPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="btn-ghost text-xs mb-8 inline-flex">
          <svg className="w-3.5 h-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Nazaj
        </Link>
        <h1 className="font-display text-4xl font-bold text-pool-navy mb-8">Politika piškotkov</h1>
        <div className="space-y-6 text-pool-navy/65 leading-relaxed">
          <p>Ta spletna stran uporablja piškotke za zagotavljanje najboljše uporabniške izkušnje.</p>

          <h2 className="font-display text-2xl text-pool-navy">Kaj so piškotki?</h2>
          <p>Piškotki so majhne besedilne datoteke, ki jih spletne strani shranijo na vašo napravo ob obisku. Omogočajo, da si stran zapomni vaše nastavitve in izboljša delovanje.</p>

          <h2 className="font-display text-2xl text-pool-navy">Katere piškotke uporabljamo?</h2>
          <p><strong className="text-pool-navy">Nujno potrebni piškotki</strong> — zagotavljajo osnovno delovanje strani (navigacija, varnost). Brez njih stran ne deluje pravilno.</p>
          <p><strong className="text-pool-navy">Analitični piškotki</strong> — anonimno beležijo, kako obiskovalci uporabljajo stran (Google Analytics). Pomagajo nam izboljšati vsebino.</p>

          <h2 className="font-display text-2xl text-pool-navy">Upravljanje piškotkov</h2>
          <p>Piškotke lahko kadar koli onemogočite v nastavitvah brskalnika. Upoštevajte, da onemogočanje nekaterih piškotkov lahko vpliva na delovanje strani.</p>

          <h2 className="font-display text-2xl text-pool-navy">Kontakt</h2>
          <p>Za vprašanja glede piškotkov nas kontaktirajte na <a href="mailto:info@dreampool.si" className="text-pool-accent">info@dreampool.si</a>.</p>
          <p className="text-sm text-pool-navy/40">TD inženiring d.o.o., Vogrsko 172, 5293 Volčja Draga</p>
        </div>
      </div>
    </div>
  )
}
