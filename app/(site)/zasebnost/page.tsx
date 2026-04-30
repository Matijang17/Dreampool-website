import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Zasebnost | DreamPool',
  description: 'Politika zasebnosti DreamPool — informacije o zbiranju in obdelavi osebnih podatkov.',
}

export default function ZasebnostPage() {
  return (
    <div className="min-h-screen bg-pool-navy pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="btn-ghost text-xs mb-8 inline-flex">
          <svg className="w-3.5 h-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Nazaj
        </Link>
        <h1 className="font-display text-4xl font-bold text-pool-white mb-8">Politika zasebnosti</h1>
        <div className="prose-pool space-y-6 text-pool-white/65 leading-relaxed">
          <p>TD inženiring d.o.o. (DreamPool) spoštuje vašo zasebnost in se zavezuje k varstvu osebnih podatkov v skladu z Uredbo GDPR.</p>
          <h2 className="font-display text-2xl text-pool-white">Katere podatke zbiramo</h2>
          <p>Zbiramo osebne podatke, ki nam jih prostovoljno posredujete prek kontaktnega obrazca: ime, telefonska številka, e-poštni naslov in informacije o projektu.</p>
          <h2 className="font-display text-2xl text-pool-white">Namen zbiranja</h2>
          <p>Podatki se uporabljajo izključno za namen odgovarjanja na vaša povpraševanja in priprave ponudb. Podatkov ne posredujemo tretjim osebam.</p>
          <h2 className="font-display text-2xl text-pool-white">Hramba podatkov</h2>
          <p>Osebne podatke hranimo le toliko časa, kot je potrebno za namen zbiranja, oz. v skladu z zakonskimi obveznostmi.</p>
          <h2 className="font-display text-2xl text-pool-white">Vaše pravice</h2>
          <p>Imate pravico do dostopa, popravka, izbrisa in prenosljivosti vaših osebnih podatkov. Za uveljavljanje pravic nas kontaktirajte na <a href="mailto:info@dreampool.si" className="text-pool-accent">info@dreampool.si</a>.</p>
          <h2 className="font-display text-2xl text-pool-white">Kontakt</h2>
          <p>TD inženiring d.o.o., Vogrsko 172, 5293 Volčja Draga — <a href="mailto:info@dreampool.si" className="text-pool-accent">info@dreampool.si</a></p>
        </div>
      </div>
    </div>
  )
}
