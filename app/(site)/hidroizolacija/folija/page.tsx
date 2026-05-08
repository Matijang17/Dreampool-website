import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Hidroizolacija Bazena s Folijo | Alkorplan | DreamPool',
  description:
    'Zamenjava ali nova vgradnja bazenske folije Alkorplan v Sloveniji. Trajna zaščita pred puščanjem, 10-letna garancija, široka izbira barv in vzorcev. Povpraševanje brez obveznosti.',
  keywords: ['hidroizolacija bazena', 'alkorplan folija', 'bazenska folija', 'zamenjava folije bazen'],
  alternates: { canonical: '/hidroizolacija/folija' },
  openGraph: {
    title: 'Hidroizolacija Bazena s Folijo Alkorplan | DreamPool',
    description: 'Vgradnja in zamenjava bazenske folije Alkorplan z 10-letno garancijo.',
    url: '/hidroizolacija/folija',
    images: [{ url: '/images/Bazen-hero-image.webp', width: 1200, height: 630 }],
  },
}

const steps = [
  { num: '01', title: 'Ogled in merjenje', desc: 'Preverimo stanje obstoječe folije, izmerimo bazen in ocenimo obseg del. Brez obveznosti.' },
  { num: '02', title: 'Izbira folije', desc: 'Skupaj izberemo barvo in vzorec Alkorplan folije — od klasične modre do modernih granitnih in marmornih vzorcev.' },
  { num: '03', title: 'Priprava površine', desc: 'Izpraznitev bazena, čiščenje in izravnava podlage. Odstranitev stare folije, če gre za zamenjavo.' },
  { num: '04', title: 'Vgradnja folije', desc: 'Profesionalna vgradnja z varjenjem na vroče — neprekinjeni šivi brez šibkih mest. Vsi prehodi (priključki, luči) so tesno zavarjeni.' },
  { num: '05', title: 'Preizkus tesnosti', desc: 'Po vgradnji opravimo preizkus tesnosti in pregled vseh šivov in priključkov.' },
  { num: '06', title: 'Predaja z garancijo', desc: 'Bazen predamo z 10-letno garancijo na vgrajeno folijo in pisnim potrdilom o izvedbi.' },
]

const faqs = [
  {
    q: 'Kdaj je čas za zamenjavo bazenske folije?',
    a: 'Priporočamo pregled vsake 3–5 let. Jasni znaki obrabljenosti so razpoke ali vbočine v foliji, razbarvanje in bledenje barve, odlepljanje pri robovih in priključkih ter ponavljajoče se puščanje na istem mestu. Sveža folija obnovi videz in vodotesnost bazena.',
  },
  {
    q: 'Koliko časa traja vgradnja nove folije?',
    a: 'Zamenjava folije v standardnem 8×4m bazenu traja 2–4 delovne dni. To vključuje izpraznitev, pripravo površine, vgradnjo in sušenje. Točen čas je odvisen od dimenzij bazena, dostopnosti in stanja podlage.',
  },
  {
    q: 'Kakšne barve in vzorce folije Alkorplan ponujate?',
    a: 'Alkorplan ponuja širok izbor: klasična modra, turkizna, zelena, bela, siva ter moderne marmorne, granitne in peščene vzorce. Vzorčnik si lahko ogledate pri ogledu ali nas prosite za fotografije.',
  },
  {
    q: 'Kako debela je folija Alkorplan?',
    a: 'Standardna Alkorplan folija za bazene je debela 1,5 mm. Na voljo so tudi različice 2,0 mm za zahtevnejše pogoje (intenzivna UV izpostavljenost, večje bazene). Svetujemo glede na vaš specifičen primer.',
  },
  {
    q: 'Ali hidroizolacijo s folijo nudite tudi za terase in ravne strehe?',
    a: 'Da. Alkorplan sistem je primeren za vse vodonepropustne površine — terase, ravne strehe, garažne podlage, zadrževalne površine in ostale eksponirane površine. Vsak projekt obravnavamo individualno.',
  },
]

export default function HidroizolacijaFolijaPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Hidroizolacija bazena s folijo Alkorplan',
            description: 'Vgradnja in zamenjava bazenske hidroizolacijske folije Alkorplan z 10-letno garancijo.',
            url: '/hidroizolacija/folija',
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Domov', url: '/' },
            { name: 'Hidroizolacija', url: '/hidroizolacija/folija' },
            { name: 'Hidroizolacija s folijo', url: '/hidroizolacija/folija' },
          ]),
        ]}
      />

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 overflow-hidden">
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
              <Link href="/hidroizolacija/rezervoarji" className="hover:text-pool-accent transition-colors">Hidroizolacija</Link>
              <span>/</span>
              <span className="text-pool-white/50">Hidroizolacija s folijo</span>
            </nav>
            <div className="max-w-3xl">
              <p className="section-subtitle">Hidroizolacija</p>
              <div className="gold-line mb-6" />
              <h1 className="section-title text-pool-white mb-6">
                Hidroizolacija s folijo — <span className="text-gradient">Alkorplan, 10 let garancije</span>
              </h1>
              <p className="text-pool-white/70 text-xl leading-relaxed mb-8">
                Nova bazenska folija obnovi videz in vodotesnost bazena za naslednjih 15–20 let.
                Strokovna vgradnja z varjenjem na vroče, certificirani material, pisna garancija.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ponudba" className="btn-primary">Brezplačen ogled</Link>
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
                  src="https://cdn.sanity.io/images/u77huvva/production/f859b30257fad7d28d83d3c1996e36cf25fa9119-1200x896.jpg?w=800&fit=max&auto=format"
                  alt="Hidroizolacija bazena s folijo Alkorplan"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-pool-navy mb-6">
                  Zakaj Alkorplan?
                </h2>
                <div className="space-y-4 text-pool-navy/65 leading-relaxed">
                  <p>Alkorplan je vodilna evropska blagovna znamka za bazenske hidroizolacijske folije — prisotna na trgu že več kot 40 let, certificirana po EU standardih za stik z vodo za kopanje.</p>
                  <p>Folija je odporni na UV sevanje, kemikalije in mehansko obrabo. Gladka površina preprečuje rast alg in olajša čiščenje — manj dela, čistejši bazen.</p>
                  <p>Profesionalna vgradnja z varjenjem na vroče zagotavlja neprekinjene šive — ni lepljenih spojev, ni šibkih mest. Vsak priključek, svetlobna niša in skimmer so zavarjeni posamično.</p>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-10 text-center">
                Postopek vgradnje
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {steps.map((step) => (
                  <div key={step.num} className="card-light p-6">
                    <span className="text-pool-accent font-body text-xs tracking-widest uppercase mb-3 block">{step.num}</span>
                    <h3 className="font-display text-lg font-bold text-pool-navy mb-2">{step.title}</h3>
                    <p className="text-pool-navy/60 text-sm leading-relaxed">{step.desc}</p>
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
