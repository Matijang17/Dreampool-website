import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politika piškotkov | DreamPool',
  description: 'Politika piškotkov DreamPool — katere piškotke uporabljamo in kako upravljate z nastavitvami.',
  alternates: { canonical: 'https://dreampool.si/piskotki' },
  robots: { index: true, follow: false },
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

        <p className="text-pool-accent text-xs uppercase tracking-widest mb-2">Pravni dokumenti</p>
        <h1 className="font-display text-4xl font-bold text-pool-navy mb-2">Politika piškotkov</h1>
        <p className="text-pool-navy/40 text-sm mb-10">Za spletno stran DreamPool · Veljavno od 1. 1. 2025</p>

        <div className="space-y-8 text-pool-navy/65 leading-relaxed">

          <div>
            <h2 className="font-display text-xl font-bold text-pool-navy mb-3">Kaj so piškotki?</h2>
            <p>Piškotki so majhne tekstovne datoteke, ki se shranijo na vašo napravo ob obisku spletne strani. Omogočajo pravilno delovanje strani, shranjevanje vaših nastavitev ter zbiranje analitičnih in marketinških podatkov.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-pool-navy mb-4">Katere piškotke uporabljamo</h2>
            <div className="space-y-4">

              <div className="p-5 border border-gray-100 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">Nujni</span>
                  <h3 className="font-semibold text-pool-navy">Essential Cookies</h3>
                </div>
                <p className="text-sm mb-2">Potrebni za osnovno delovanje strani — brez teh piškotkov stran ne deluje pravilno.</p>
                <ul className="list-disc pl-4 text-sm space-y-0.5">
                  <li>Navigacija in varnost</li>
                  <li>Delovanje kontaktnih obrazcev</li>
                  <li>Shranjevanje nastavitev piškotkov</li>
                </ul>
                <p className="text-xs text-pool-navy/40 mt-2">Vedno aktivni · Ni mogoče onemogočiti</p>
              </div>

              <div className="p-5 border border-gray-100 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">Analitični</span>
                  <h3 className="font-semibold text-pool-navy">Analytics Cookies</h3>
                </div>
                <p className="text-sm mb-2">Pomagajo nam razumeti, kako obiskovalci uporabljajo stran.</p>
                <ul className="list-disc pl-4 text-sm space-y-0.5">
                  <li>Google Analytics 4 — analitika obiskov, vedenje, konverzije</li>
                  <li>Microsoft Clarity / Hotjar — heatmaps, session recordings, UX analitika</li>
                </ul>
                <p className="text-xs text-pool-navy/40 mt-2">Zahteva privolitev</p>
              </div>

              <div className="p-5 border border-gray-100 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-1 rounded-full">Marketinški</span>
                  <h3 className="font-semibold text-pool-navy">Marketing Cookies</h3>
                </div>
                <p className="text-sm mb-2">Omogočajo personalizirane oglase in remarketing kampanje.</p>
                <ul className="list-disc pl-4 text-sm space-y-0.5">
                  <li>Google Ads — remarketing, conversion tracking, Google Consent Mode v2</li>
                  <li>Meta Pixel (Facebook & Instagram) — remarketing, atribucija kampanj</li>
                  <li>TikTok Pixel — remarketing, optimizacija oglasov</li>
                  <li>LinkedIn Insight Tag — B2B remarketing</li>
                </ul>
                <p className="text-xs text-pool-navy/40 mt-2">Zahteva privolitev</p>
              </div>

            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-pool-navy mb-3">Upravljanje piškotkov</h2>
            <p className="mb-3">Nastavitve piškotkov lahko kadar koli spremenite:</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Prek <button onClick={() => { if (typeof window !== 'undefined') { localStorage.removeItem('dp-cookie-consent'); window.location.reload() } }} className="text-pool-accent hover:underline cursor-pointer">nastavitev piškotkov</button> na tej strani (prikaže baner znova)</li>
              <li>V nastavitvah vašega brskalnika (Chrome, Firefox, Safari, Edge)</li>
              <li>Prek opt-out strani posameznih platform (Google, Meta, TikTok, LinkedIn)</li>
            </ul>
            <p className="mt-3 text-sm">Upoštevajte, da onemogočanje nekaterih piškotkov lahko vpliva na delovanje strani.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-pool-navy mb-3">Kontakt</h2>
            <p>Za vprašanja glede piškotkov nas kontaktirajte na <a href="mailto:info@dreampool.si" className="text-pool-accent hover:underline">info@dreampool.si</a> ali preberite našo <Link href="/zasebnost" className="text-pool-accent hover:underline">Politiko zasebnosti</Link>.</p>
            <p className="text-sm text-pool-navy/40 mt-2">TD inženiring d.o.o., Vogrsko 172, 5293 Volčja Draga</p>
          </div>

        </div>
      </div>
    </div>
  )
}
