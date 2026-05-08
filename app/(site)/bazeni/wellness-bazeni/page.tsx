import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/sections/CTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Wellness Bazeni in Jacuzzi | DreamPool Slovenija',
  description: 'Wellness bazeni, jacuzzi in hidroterapija za dom. Masažne šobe, LED osvetlitev, ogrevanje — zasebni spa v vašem vrtu. Brezplačna ponudba.',
  keywords: ['wellness bazen', 'jacuzzi', 'hidroterapija', 'spa bazen', 'masažni bazen slovenija'],
  alternates: { canonical: '/bazeni/wellness-bazeni' },
  openGraph: {
    title: 'Wellness Bazeni in Jacuzzi | DreamPool',
    description: 'Zasebni spa v vrtu — masažne šobe, LED osvetlitev, hidroterapija.',
    url: '/bazeni/wellness-bazeni',
    images: [{ url: '/images/Bazen-hero-image.webp', width: 1200, height: 630 }],
  },
}

export default function WellnessBazeni() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Wellness bazeni in jacuzzi',
            description: 'Wellness bazeni, jacuzzi in hidroterapija — zasebni spa v vašem vrtu.',
            url: '/bazeni/wellness-bazeni',
            image: '/images/Bazen-hero-image.webp',
          }),
          breadcrumbSchema([
            { name: 'Domov', url: '/' },
            { name: 'Bazeni', url: '/gradnja-bazenov' },
            { name: 'Wellness bazeni', url: '/bazeni/wellness-bazeni' },
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
              <Link href="/" className="hover:text-pool-accent transition-colors">Domov</Link><span>/</span>
              <Link href="/gradnja-bazenov" className="hover:text-pool-accent transition-colors">Bazeni</Link><span>/</span>
              <span className="text-pool-white/50">Wellness bazeni</span>
            </nav>
            <div className="max-w-3xl">
              <p className="section-subtitle">Sprostitev & zdravje</p>
              <div className="gold-line mb-6" />
              <h1 className="section-title text-pool-white mb-6">
                Wellness bazeni <span className="text-gradient">in jacuzzi</span>
              </h1>
              <p className="text-pool-white/70 text-xl leading-relaxed mb-8">
                Zasebni spa v vašem vrtu. Masažne šobe, hidroterapija, LED osvetlitev in ogrevane vode — popolna sprostitev brez odhoda iz doma.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Masažne šobe', 'Ogrevanje celoletno', 'LED RGB osvetlitev', 'Hidroterapija'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-pool-white/70">
                    <svg className="w-4 h-4 text-pool-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ponudba" className="btn-primary">Brezplačna ponudba</Link>
                <a href="tel:+38670579648" className="btn-outline">070 579 648</a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-pool-navy mb-6">Vaš zasebni wellness center</h2>
                <div className="space-y-4 text-pool-navy/65 leading-relaxed">
                  <p>Wellness bazeni in jacuzzi niso več privilegij hotelov. DreamPool projektira in montira zasebne wellness rešitve za domove in počitniške objekte po vsej Sloveniji.</p>
                  <p>Naša ponudba vključuje kompaktne jacuzzi bazene, kombinirane plavalne bazene z wellness cono, hidromasažne sedeže in sisteme za hidroterapijo.</p>
                  <p>Vsak wellness bazen opremimo s toplotno črpalko za celoletno ogrevanje, LED osvetlitvijo, masažnimi šobami Astralpool in digitalnim upravljanjem temperature in kemije.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image src="https://cdn.sanity.io/images/u77huvva/production/3148dc011711f8ce31c71fd854c39d43ba78280c-5120x2880.jpg?w=800&fit=max&auto=format" alt="Wellness bazen" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  )
}
