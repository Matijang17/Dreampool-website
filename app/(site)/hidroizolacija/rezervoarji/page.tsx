import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Hidroizolacije Rezervoarjev in Cistern | DreamPool Slovenija',
  description:
    'Strokovna hidroizolacija vodnih rezervoarjev, cistern in zadrževalnikov v Sloveniji. Certificirani materiali za pitno vodo. Betonski in armirani rezervoarji. Povpraševanje.',
  keywords: ['hidroizolacija rezervoarjev', 'cisterna pitne vode', 'zadrževalnik deževnice', 'požarni rezervoar'],
  alternates: { canonical: '/hidroizolacija/rezervoarji' },
  openGraph: {
    title: 'Hidroizolacije Rezervoarjev | DreamPool',
    description: 'Hidroizolacija cistern, zadrževalnikov in požarnih rezervoarjev. Certifikati za pitno vodo.',
    url: '/hidroizolacija/rezervoarji',
    images: [{ url: '/images/hidroizolacija.webp', width: 1200, height: 630 }],
  },
}

const types = [
  {
    title: 'Pitne vode — cisterne in zbiralniki',
    desc: 'Hidroizolacija zbiralnikov pitne vode s certificiranimi materiali po standardih WRAS in KTW. Brez vplivov na okus, barvo ali kemično sestavo vode.',
    badge: 'Pitna voda',
  },
  {
    title: 'Zadrževalniki deževnice',
    desc: 'Vodotesna izvedba podzemnih in nadzemnih zadrževalnikov deževnice za namakanje ali WC splakovanje. Sanacija razpok in stikovnih mest.',
    badge: 'Deževnica',
  },
  {
    title: 'Požarni rezervoarji',
    desc: 'Hidroizolacija odprtih in zaprtih požarnih rezervoarjev po standardih gasilske zakonodaje. Materiali odporni na UV, temperaturo in mehanske obremenitve.',
    badge: 'Požarna varnost',
  },
  {
    title: 'Industrijski in komunalni rezervoarji',
    desc: 'Sanacija in nova hidroizolacija večjih betonskih rezervoarjev za industrijsko ali komunalno rabo. Injekcijsko tesnjenje razpok, premazi in folije.',
    badge: 'Industrija',
  },
  {
    title: 'Bazeni in SPA rezervoarji',
    desc: 'Hidroizolacija betonskih bazenskih konstrukcij pred vgradnjo folije ali keramike. Sanacija kapilarne vlage in strukturnih razpok.',
    badge: 'Bazeni',
  },
  {
    title: 'Ravne strehe in terase',
    desc: 'Folijska ali premaz hidroizolacija ravnih streh, balkonov in teras. Trajna zaščita pred vdorom vode z zagotovljenim odtokom.',
    badge: 'Strehe',
  },
]

const faqs = [
  {
    q: 'Kako se hidroizolira betonski rezervoar?',
    a: 'Glede na namen in stanje rezervoarja izberemo najprimernejši sistem: specialni mineralnocement premaz (npr. Vandex, Sika), epoksidni premaz za kemično odpornost ali folijska sistema (Alkorplan, HDPE). Vsi materiali za pitno vodo imajo ustrezne certifikate.',
  },
  {
    q: 'Ali so materiali primerni za stik s pitno vodo?',
    a: 'Da. Za zbiralnike pitne vode izključno uporabljamo materiale s certifikati WRAS (Velika Britanija) ali KTW (Nemčija), ki zagotavljajo, da material ne vpliva na okus, vonj ali kemično sestavo pitne vode.',
  },
  {
    q: 'Ali je mogoče sanirati obstoječ, puščajoč rezervoar?',
    a: 'Pogosto da. Sanacija je bistveno cenejša od zamenjave rezervoarja. Najprej ocenimo obseg poškodb — razpoke, slabo zaprte stike, obrabljenost premaza. Glede na oceno predlagamo injekcijsko tesnjenje, premazni sistem ali kombinacijo obojega.',
  },
  {
    q: 'Kako dolgo traja hidroizolacija rezervoarja?',
    a: 'Trajanje je odvisno od velikosti in stanja rezervoarja. Manjša cisterna (5–10 m³) je izvedena v 1–2 dneh. Večji rezervoarji zahtevajo daljšo pripravo površine in morebitno sušilni čas med nanosi premaza. Točen termin in čas dogovorimo ob ogledu.',
  },
  {
    q: 'Ali nudite garancijo na izvedeno hidroizolacijo?',
    a: 'Da. Na izvedeno hidroizolacijo damo pisno garancijo glede na izbrani sistem — za premaze je to praviloma 5 let, za folijske sisteme pa do 10 let.',
  },
]

export default function HidroizolacijaRezervoarevPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Hidroizolacije rezervoarjev',
            description: 'Hidroizolacija vodnih rezervoarjev, cistern in zadrževalnikov s certificiranimi materiali za pitno vodo.',
            url: '/hidroizolacija/rezervoarji',
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Domov', url: '/' },
            { name: 'Hidroizolacija', url: '/hidroizolacija/rezervoarji' },
            { name: 'Hidroizolacije rezervoarjev', url: '/hidroizolacija/rezervoarji' },
          ]),
        ]}
      />

      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <Image
            src="/images/hidroizolacija.webp"
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
              <Link href="/hidroizolacija/folija" className="hover:text-pool-accent transition-colors">Hidroizolacija</Link>
              <span>/</span>
              <span className="text-pool-white/50">Hidroizolacije rezervoarjev</span>
            </nav>
            <div className="max-w-3xl">
              <p className="section-subtitle">Hidroizolacija</p>
              <div className="gold-line mb-6" />
              <h1 className="section-title text-pool-white mb-6">
                Hidroizolacije rezervoarjev — <span className="text-gradient">zanesljivo za vsako rabo</span>
              </h1>
              <p className="text-pool-white/70 text-xl leading-relaxed mb-8">
                Cisterne, zadrževalniki deževnice, požarni rezervoarji in industrijski bazeni.
                Certificirani materiali za pitno vodo, strokovna izvedba, pisna garancija.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Certif. za pitno vodo', 'WRAS / KTW certifikati', 'Sanacija in nova izvedba', 'Pisna garancija'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-pool-white/70">
                    <svg className="w-4 h-4 text-pool-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ponudba" className="btn-primary">Brezplačen ogled</Link>
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
                    Kdaj je rezervoar potreben hidroizolacije?
                  </h2>
                  <div className="space-y-4 text-pool-navy/65 leading-relaxed">
                    <p>Beton je porozen material. Brez ustrezne hidroizolacije voda prodre skozi kapilare, razpoke in slabo zaprte stike — in izhlapeva ali onesnažuje okoliško zemljo.</p>
                    <p>Pri rezervoarjih pitne vode je tesnjenje še posebej kritično: vsaka razpoka ali obrabljenost premaza je potencialna pot za mikrobiološko kontaminacijo. Certificirani materiali za stik s pitno vodo so obvezni — ne le priporočeni.</p>
                    <p>Pri zadrževalnikih deževnice in požarnih rezervoarjih je vodotesnost pogoj za pravilno delovanje celotnega sistema.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-pool-navy/40 text-xs uppercase tracking-widest mb-4">Znaki, da rezervoar potrebuje sanacijo</p>
                  {[
                    'Mokre lise ali vlaga na zunanji strani rezervoarja',
                    'Vidne razpoke v betonski steni ali dnu',
                    'Padec nivoja vode brez porabe',
                    'Sluz ali alge v vodi kljub redni dezinfekciji',
                    'Obrabljenost ali luščenje obstoječega premaza',
                    'Vonj ali spremenjen okus pitne vode',
                  ].map((sign) => (
                    <div key={sign} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <svg className="w-4 h-4 text-pool-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p className="text-pool-navy/65 text-sm">{sign}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="font-display text-3xl font-bold text-pool-navy mb-10 text-center">
                Vrste rezervoarjev, ki jih obdelujemo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {types.map((type, i) => (
                  <div key={i} className="card-light p-6">
                    <span className="inline-block bg-pool-accent/10 text-pool-accent text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                      {type.badge}
                    </span>
                    <h3 className="font-display text-lg font-bold text-pool-navy mb-2">{type.title}</h3>
                    <p className="text-pool-navy/60 text-sm leading-relaxed">{type.desc}</p>
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
