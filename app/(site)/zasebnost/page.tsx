import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politika zasebnosti | DreamPool',
  description: 'Politika zasebnosti DreamPool — zbiranje, uporaba in varstvo osebnih podatkov v skladu z GDPR in slovensko zakonodajo.',
  alternates: { canonical: 'https://dreampool.si/zasebnost' },
  robots: { index: true, follow: true },
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="font-display text-xl font-bold text-pool-navy mb-3">{title}</h2>
    <div className="text-pool-navy/65 leading-relaxed space-y-3">{children}</div>
  </div>
)

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-5 space-y-1 text-pool-navy/65 text-sm">
    {items.map((i) => <li key={i}>{i}</li>)}
  </ul>
)

export default function ZasebnostPage() {
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
        <h1 className="font-display text-4xl font-bold text-pool-navy mb-2">Politika zasebnosti</h1>
        <p className="text-pool-navy/40 text-sm mb-10">Za spletno stran DreamPool · Veljavno od 1. 1. 2025</p>

        <Section title="1. Uvod">
          <p>Ta Politika zasebnosti opisuje, kako TD inženiring d.o.o. — DreamPool ("podjetje", "mi", "nas") zbira, uporablja, hrani in varuje osebne podatke uporabnikov spletne strani in storitev.</p>
          <p>Politika je pripravljena skladno z: GDPR (EU General Data Protection Regulation), ePrivacy Directive, slovensko zakonodajo o varstvu osebnih podatkov ter Google Consent Mode v2 zahtevami.</p>
        </Section>

        <Section title="2. Katere podatke zbiramo">
          <p className="font-medium text-pool-navy">Kontaktni podatki</p>
          <List items={['Ime in priimek', 'Telefonska številka', 'E-poštni naslov', 'Naslov objekta ali lokacije bazena']} />
          <p className="font-medium text-pool-navy mt-4">Tehnični podatki</p>
          <List items={['IP naslov', 'Vrsta naprave in operacijski sistem', 'Vrsta brskalnika in ločljivost zaslona', 'Jezik brskalnika in časovni pas']} />
          <p className="font-medium text-pool-navy mt-4">Podatki o uporabi</p>
          <List items={['Obiskane strani in trajanje obiska', 'Kliknjeni elementi in scroll aktivnosti', 'Oddani obrazci in konverzije', 'Vir obiska']} />
          <p className="font-medium text-pool-navy mt-4">Marketinški podatki</p>
          <List items={['Oglaševalski identifikatorji', 'Remarketing podatki', 'Podatki o atribuciji kampanj', 'Podatki o interakcijah z oglasi']} />
        </Section>

        <Section title="3. Namen uporabe podatkov">
          <List items={[
            'Izvajanje storitev bazenske tehnike',
            'Komunikacija s strankami in priprava ponudb',
            'Tehnična podpora',
            'Izboljšanje uporabniške izkušnje',
            'Analitika spletne strani',
            'Marketinške kampanje in remarketing',
            'Merjenje učinkovitosti oglaševanja',
            'Preprečevanje zlorab in varnost',
          ]} />
        </Section>

        <Section title="4. Analitična in marketinška orodja">
          <p>Spletna stran lahko uporablja naslednja orodja:</p>
          <div className="space-y-4 mt-2">
            {[
              { name: 'Google Analytics 4 (GA4)', uses: ['Analitika obiska', 'Merjenje vedenja uporabnikov', 'Spremljanje konverzij', 'Attribution tracking'], link: 'https://policies.google.com/privacy', linkText: 'Google Privacy Policy' },
              { name: 'Google Ads', uses: ['Remarketing', 'Conversion tracking', 'Audience segmentation', 'Google Consent Mode v2'], link: 'https://policies.google.com/privacy', linkText: 'Google Privacy Policy' },
              { name: 'Meta Pixel (Facebook & Instagram)', uses: ['Sledenje konverzijam', 'Remarketing', 'Optimizacija kampanj'], link: 'https://www.facebook.com/privacy/policy/', linkText: 'Meta Privacy Center' },
              { name: 'TikTok Pixel', uses: ['Atribucija kampanj', 'Remarketing', 'Analitika vedenja'], link: 'https://www.tiktok.com/legal/page/row/privacy-policy/', linkText: 'TikTok Privacy Policy' },
              { name: 'LinkedIn Insight Tag', uses: ['B2B analitika', 'Remarketing', 'Spremljanje konverzij'], link: 'https://www.linkedin.com/legal/privacy-policy', linkText: 'LinkedIn Privacy Policy' },
            ].map((tool) => (
              <div key={tool.name} className="p-4 bg-gray-50 rounded-xl">
                <p className="font-semibold text-pool-navy text-sm mb-2">{tool.name}</p>
                <List items={tool.uses} />
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-pool-accent text-xs mt-2 inline-block hover:underline">{tool.linkText} ↗</a>
              </div>
            ))}
          </div>
        </Section>

        <Section title="5. Piškotki">
          <p>Spletna stran uporablja nujne, analitične in marketinške piškotke. Podrobnosti so opisane v naši <Link href="/piskotki" className="text-pool-accent hover:underline">Politiki piškotkov</Link>.</p>
        </Section>

        <Section title="6. Pravna podlaga za obdelavo">
          <List items={['Privolitev uporabnika', 'Pogodbeno razmerje', 'Zakoniti interes', 'Zakonske obveznosti']} />
          <p>Privolitev lahko kadarkoli prekličete prek nastavitev piškotkov ali z zahtevkom na <a href="mailto:info@dreampool.si" className="text-pool-accent hover:underline">info@dreampool.si</a>.</p>
        </Section>

        <Section title="7. Hramba podatkov">
          <List items={['Kontaktni podatki: do izpolnitve namena ali preklica soglasja', 'Analitični in marketinški podatki: do 26 mesecev (odvisno od platforme)', 'Zakonsko predpisani podatki: skladno z zakonodajo']} />
        </Section>

        <Section title="8. Deljenje podatkov">
          <p>Podatke lahko delimo s ponudniki gostovanja, analitičnimi in oglaševalskimi platformami, CRM sistemi, ponudniki e-pošte ter pogodbenimi izvajalci. Pri prenosu izven EU ponudniki zagotavljajo SCC (Standard Contractual Clauses) ali EU-U.S. Data Privacy Framework.</p>
        </Section>

        <Section title="9. Varnost">
          <List items={['SSL/TLS zaščita', 'Omejen dostop do podatkov', 'Varnostni nadzori in posodobitve', 'Monitoring sistemov']} />
          <p>Kljub ukrepom noben sistem ni 100 % varen.</p>
        </Section>

        <Section title="10. Pravice uporabnikov">
          <p>Imate pravico do: dostopa, popravka, izbrisa, omejitve obdelave, prenosa podatkov, ugovora obdelavi in preklica privolitve.</p>
          <p>Zahtevek pošljite na <a href="mailto:info@dreampool.si" className="text-pool-accent hover:underline">info@dreampool.si</a> ali prek <Link href="/kontakt" className="text-pool-accent hover:underline">kontaktnega obrazca</Link>.</p>
        </Section>

        <Section title="11. Mladoletne osebe">
          <p>Storitve niso namenjene osebam mlajšim od 16 let. Zavestno ne zbiramo podatkov mladoletnih oseb.</p>
        </Section>

        <Section title="12. Spremembe politike">
          <p>Politiko lahko kadarkoli posodobimo. Priporočamo redno preverjanje aktualne verzije na tej strani.</p>
        </Section>

        <Section title="13. Kontakt">
          <p>TD inženiring d.o.o. — DreamPool<br />Vogrsko 172, 5293 Volčja Draga<br />
            <a href="mailto:info@dreampool.si" className="text-pool-accent hover:underline">info@dreampool.si</a> · <a href="tel:+38670579648" className="text-pool-accent hover:underline">+386 70 579 648</a>
          </p>
        </Section>
      </div>
    </div>
  )
}
