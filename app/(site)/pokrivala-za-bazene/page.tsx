import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Pokrivala za Bazene | Zimska Pokrivala in Letne Rolete | DreamPool',
  description:
    'Kakovostna pokrivala za bazene v Sloveniji: zimska zaščitna pokrivala, letne rolete z ročnim ali avtomatskim pogonom. Prihranite pri kemiji in ogrevanju. Montaža in servis.',
  keywords: ['pokrivala za bazene', 'zimsko pokrivalo bazena', 'letna roleta bazen', 'avtomatsko pokrivalo bazena'],
  alternates: { canonical: '/pokrivala-za-bazene' },
  openGraph: {
    title: 'Pokrivala za Bazene | DreamPool',
    description: 'Zimska pokrivala in letne rolete za bazene — zaščita in prihranek pri ogrevanju.',
    url: '/pokrivala-za-bazene',
    images: [{ url: '/images/Bazen-hero-image.webp', width: 1200, height: 630 }],
  },
}

const types = [
  {
    title: 'Zimska zaščitna pokrivala',
    desc: 'Trdna pokrivala iz UV odpornega materiala, ki zaščitijo bazen pred listjem, nečistočami in mrazom med zimovanjem. Enostavna pritrditev na obstoječe sidriščne točke.',
    features: ['UV odporno', 'Neprepustno za nečistoče', 'Prilagodljivo dimenzijam', 'Enostavna montaža'],
  },
  {
    title: 'Letne rolete — ročne',
    desc: 'Rolete iz izolacijskih balon-folij, ki zmanjšajo izhlapevanje za do 90 % in segrejejo vodo za 2–4 °C z energijo sonca. Idealne za standardne pravokotne bazene.',
    features: ['90 % manj izhlapevanja', 'Solarno segrevanje', 'Enostavno navijanje', 'Cena dostopna'],
  },
  {
    title: 'Letne rolete — avtomatske',
    desc: 'Električno gnane rolete z motoriziranim navijalcem. Z enim pritiskom gumba pokrijete ali odkrijete bazen. Idealne za intenzivno dnevno uporabo.',
    features: ['Električni pogon', 'Daljinsko upravljanje', 'Integracija v obloge', 'Premium videz'],
    highlight: true,
  },
  {
    title: 'Varnostna pokrivala',
    desc: 'Trda mrežasta pokrivala, ki preprečijo nepooblaščen dostop do bazena. Certificirana varnostna pokrivala nosijo do 100 kg — namenjena zaščiti otrok in živali.',
    features: ['Certificirana varnost', 'Nosi do 100 kg', 'Prepušča svetlobo', 'Sidranje v obloge'],
  },
]

const faqs = [
  {
    q: 'Kolikšen je dejanski prihranek z bazensko roleto?',
    a: 'Kakovostna letna roleta zmanjša izhlapevanje za 90 %, porabo kemije za do 50 % in toplotne izgube za 70 %. Povprečen sezonski prihranek pri 8×4m bazenu znaša 400–800 € — roleta se povrne v eni do dveh sezonah.',
  },
  {
    q: 'Kakšna je razlika med zimskim pokrivalom in letno roleto?',
    a: 'Zimsko pokrivalo je namenjeno dolgotrajni zaščiti med zimovanjem — je trdno, neprepustno in odporni na UV ter mraz. Letna roleta se uporablja vsak dan med sezono za zmanjšanje izhlapevanja in solarno segrevanje. Obe pokrivali skupaj zagotavljata celoletno zaščito.',
  },
  {
    q: 'Ali namestite pokrivala na nestandardne oblike bazena?',
    a: 'Da. Pokrivala prilagodimo vsaki obliki in dimenziji — pravokotni, ovalni, ledvičasti ali povsem atipični bazen. Za nestandardne oblike se vedno najprej dogovorimo za ogled.',
  },
  {
    q: 'Ali nudite servis in zamenjavo obstoječih pokrivil?',
    a: 'Da, servisiramo in zamenjujemo pokrivala vseh proizvajalcev. Preverimo stanje navijalne osi, pogona in pokrivne folije ter predlagamo nadomestitev, če je potrebna.',
  },
]

export default function PokrivalaZaBazene() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Pokrivala za bazene',
            description: 'Prodaja in montaža zimskih pokrivil in letnih bazenskih rolet v Sloveniji.',
            url: '/pokrivala-za-bazene',
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Domov', url: '/' },
            { name: 'Pokrivala za bazene', url: '/pokrivala-za-bazene' },
          ]),
        ]}
      />

      <div className="min-h-screen bg-white pt-24">
        <section className="relative py-20 overflow-hidden">
          <Image
            src="/images/Bazen-hero-image.webp"
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
              <span className="text-pool-white/50">Pokrivala za bazene</span>
            </nav>
            <div className="max-w-3xl">
              <p className="section-subtitle">Zaščita bazena</p>
              <div className="gold-line mb-6" />
              <h1 className="section-title text-pool-white mb-6">
                Pokrivala za bazene — <span className="text-gradient">zaščita in prihranek</span>
              </h1>
              <p className="text-pool-white/70 text-xl leading-relaxed mb-8">
                Pravo pokrivalo zmanjša stroške ogrevanja in kemije, zaščiti bazen pred nečistočami
                in podaljša sezono kopanja. Od zimskih pokrivil do avtomatskih rolet — svetujemo in montiramo.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['90 % manj izhlapevanja', 'Sezonski prihranek 400–800 €', 'Montaža po meri', 'Servis in garancija'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-pool-white/70">
                    <svg className="w-4 h-4 text-pool-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ponudba" className="btn-primary">Povpraševanje za pokrivalo</Link>
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
                  Pokrivalo — ena pametna naložba
                </h2>
                <div className="space-y-4 text-pool-navy/65 leading-relaxed">
                  <p>Večina lastnikov bazenov ne zavestno nosi enega največjih stroškov — izhlapevanje ogrete vode. Nezaštiten 8×4m bazen izhlapi do 150 litrov vode dnevno, skupaj s toploto in kemijo.</p>
                  <p>Kakovostna letna roleta je edini pripomoček, ki s prijazno ceno prinese takojšnje, merljive prihranke. Povrnitev investicije v 1–2 sezonah je realna — ne teoretična.</p>
                  <p>Zimsko pokrivalo pa zagotovi, da v novo sezono vstopite z bazenom, ki je pripravljen — ne z mesecom razkuževanja po zimski zarasti.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image
                  src="https://cdn.sanity.io/images/u77huvva/production/1bb606657d2e476e823436bac196ec3f3b965e0d-600x383.jpg?w=800&fit=max&auto=format"
                  alt="Pokrivala za bazene — DreamPool"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mb-20">
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-10 text-center">
                Vrste pokrivil
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {types.map((type) => (
                  <div key={type.title} className={`card-light p-7 ${type.highlight ? 'ring-2 ring-pool-accent' : ''}`}>
                    {type.highlight && (
                      <span className="inline-block bg-pool-accent text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4">
                        Najbolj priljubljeno
                      </span>
                    )}
                    <h3 className="font-display text-xl font-bold text-pool-navy mb-3">{type.title}</h3>
                    <p className="text-pool-navy/60 text-sm leading-relaxed mb-5">{type.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((f) => (
                        <span key={f} className="text-xs bg-pool-accent/10 text-pool-accent px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
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
