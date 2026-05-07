import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Novogradnja bazenov',
    description:
      'Spremenite svoje dvorišče v zasebni vodni raj. Projektiramo in gradimo bazene po meri od prvotne ideje do prvega skoka — celoten proces v enih rokah.',
    image: '/public/images/novogradnja-bazenov.webp',
    href: '/gradnja-bazenov',
    featured: true,
  },
  {
    title: 'Servis bazenske tehnike',
    description:
      'Servisiramo filtrske naprave, črpalke, grelce in dozirne sisteme. Redno vzdrževanje in hitre intervencije po vsej Sloveniji.',
    image: 'https://cdn.sanity.io/images/u77huvva/production/30ddfd07f56ecd8711ba98de78d825d8ab68b279-600x483.jpg?w=600&fit=max&auto=format',
    href: '/servis',
  },
  {
    title: 'Vzdrževanje bazenov',
    description:
      'Prepustite skrb za bazen nam. Tedensko, mesečno ali enkratno čiščenje in kemijska obdelava vode Bayrol.',
    image: 'https://cdn.sanity.io/images/u77huvva/production/a513af9a8bc73b2caa378d7473023b813f56930f-600x327.jpg?w=600&fit=max&auto=format',
    href: '/vzdrzevanje-bazenov',
  },
  {
    title: 'Pokrivala za bazene',
    description:
      'Zimska pokrivala in letne rolete z ročnim ali avtomatskim pogonom. Zaščitite bazen in prihranite pri vzdrževanju.',
    image: 'https://cdn.sanity.io/images/u77huvva/production/1bb606657d2e476e823436bac196ec3f3b965e0d-600x383.jpg?w=600&fit=max&auto=format',
    href: '/pokrivala-za-bazene',
  },
  {
    title: 'Hidroizolacija s folijo',
    description:
      'Zamenjava ali nova vgradnja bazenske folije Alkorplan. Trajna zaščita pred puščanjem z 10-letno garancijo.',
    image: 'https://cdn.sanity.io/images/u77huvva/production/f859b30257fad7d28d83d3c1996e36cf25fa9119-1200x896.jpg?w=600&fit=max&auto=format',
    href: '/hidroizolacija/folija',
  },
  {
    title: 'Hidroizolacije rezervoarjev',
    description:
      'Zanesljiva hidroizolacija cistern, zadrževalnikov deževnice in požarnih rezervoarjev. Certificirani materiali za pitno vodo.',
    image: 'https://cdn.sanity.io/images/u77huvva/production/f859b30257fad7d28d83d3c1996e36cf25fa9119-1200x896.jpg?w=600&fit=max&auto=format',
    href: '/hidroizolacija/rezervoarji',
  },
  {
    title: 'Kronsko (diamantno) vrtanje',
    description:
      'Natančno diamantno vrtanje skozi beton, armirani beton in ploščice — brez razpok in poškodb. Za vse bazensko-inštalacijske preboje in renovacije.',
    href: '/kronsko-vrtanje',
    wide: true,
  },
]

export function ServicesSection() {
  const [featured, ...remaining] = services
  const regularCards = remaining.filter((s) => !s.wide)
  const wideCard = remaining.find((s) => s.wide)

  return (
    <section id="storitve" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <p className="section-subtitle">Naše storitve</p>
              <div className="gold-line mb-6" />
              <h2 className="font-display text-5xl md:text-6xl font-bold text-pool-navy leading-tight uppercase">
                Celovite rešitve<br />
                <span className="text-gradient">za vaš bazen</span>
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="text-pool-navy/60 text-lg leading-relaxed mb-8">
                Od gradnje do vzdrževanja — vse na enem mestu. Pokrijemo celoten življenjski cikel
                vašega bazena z izkušeno ekipo in prvorazrednimi materiali.
              </p>
              <Link href="/ponudba" className="btn-primary">
                Brezplačna ponudba
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="services-asymmetric-grid">

          {/* Featured card */}
          <Link href={featured.href} className="services-card-featured card-light group relative">
            <div className="services-card-image relative h-72 lg:h-full min-h-[300px]">
              <Image
                src={featured.image!}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pool-navy/80 via-pool-navy/10 to-transparent" />
              <div className="absolute top-5 left-5 bg-pool-accent text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                Glavna storitev
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-display text-2xl font-bold text-pool-navy mb-3 group-hover:text-pool-accent transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="text-pool-navy/60 text-sm leading-relaxed mb-4">
                {featured.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-pool-accent font-semibold text-xs tracking-wider uppercase">
                Več o storitvi
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Regular cards */}
          {regularCards.map((service, i) => (
            <Link key={i} href={service.href} className="card-light group relative">
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <Image
                  src={service.image!}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-pool-navy mb-2 group-hover:text-pool-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-pool-navy/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-pool-accent font-semibold text-xs tracking-wider uppercase">
                  Več o storitvi
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}

          {/* Wide banner card — Kronsko vrtanje */}
          {wideCard && (
            <Link href={wideCard.href} className="services-card-wide group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-pool-navy via-pool-blue to-pool-accent" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8">
                <div>
                  <p className="text-pool-accent/80 text-xs tracking-widest uppercase mb-2">Specializirana storitev</p>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-pool-light transition-colors duration-300">
                    {wideCard.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed max-w-2xl">
                    {wideCard.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0">
                  Več o storitvi
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          )}

        </div>
      </div>
    </section>
  )
}
