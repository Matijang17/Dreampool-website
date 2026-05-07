import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Novogradnja bazenov',
    description:
      'Spremenite svoje dvorišče v zasebni vodni raj. Projektiramo in gradimo bazene po meri od prvotne ideje do prvega skoka — celoten proces v enih rokah.',
    image: '/images/novogradnja-bazenov.webp',
    href: '/gradnja-bazenov',
    featured: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 18c2 -2 4 -2 6 0s4 2 6 0 4 -2 6 0M3 13c2 -2 4 -2 6 0s4 2 6 0 4 -2 6 0M3 8c2 -2 4 -2 6 0s4 2 6 0 4 -2 6 0" />
      </svg>
    ),
  },
  {
    title: 'Servis bazenske tehnike',
    description:
      'Servisiramo filtrske naprave, črpalke, grelce in dozirne sisteme. Redno vzdrževanje in hitre intervencije po vsej Sloveniji.',
    image: 'https://cdn.sanity.io/images/u77huvva/production/30ddfd07f56ecd8711ba98de78d825d8ab68b279-600x483.jpg?w=600&fit=max&auto=format',
    href: '/servis',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Vzdrževanje bazenov',
    description:
      'Prepustite skrb za bazen nam. Tedensko, mesečno ali enkratno čiščenje in kemijska obdelava vode Bayrol.',
    image: 'https://cdn.sanity.io/images/u77huvva/production/a513af9a8bc73b2caa378d7473023b813f56930f-600x327.jpg?w=600&fit=max&auto=format',
    href: '/vzdrzevanje-bazenov',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2.286 6.857L22 12l-6.714 2.143L13 21l-2.286-6.857L4 12l6.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Pokrivala za bazene',
    description:
      'Zimska pokrivala in letne rolete z ročnim ali avtomatskim pogonom. Zaščitite bazen in prihranite pri vzdrževanju.',
    image: 'https://cdn.sanity.io/images/u77huvva/production/1bb606657d2e476e823436bac196ec3f3b965e0d-600x383.jpg?w=600&fit=max&auto=format',
    href: '/pokrivala-za-bazene',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 3l8 4v5c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V7l8-4z" />
      </svg>
    ),
  },
  {
    title: 'Hidroizolacija s folijo',
    description:
      'Zamenjava ali nova vgradnja bazenske folije Alkorplan. Trajna zaščita pred puščanjem z 10-letno garancijo.',
    image: 'https://cdn.sanity.io/images/u77huvva/production/f859b30257fad7d28d83d3c1996e36cf25fa9119-1200x896.jpg?w=600&fit=max&auto=format',
    href: '/hidroizolacija/folija',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5l5.5 8a6.5 6.5 0 11-11 0L12 2.5z" />
      </svg>
    ),
  },
  {
    title: 'Hidroizolacije rezervoarjev',
    description:
      'Zanesljiva hidroizolacija cistern, zadrževalnikov deževnice in požarnih rezervoarjev. Certificirani materiali za pitno vodo.',
    image: 'https://cdn.sanity.io/images/u77huvva/production/f859b30257fad7d28d83d3c1996e36cf25fa9119-1200x896.jpg?w=600&fit=max&auto=format',
    href: '/hidroizolacija/rezervoarji',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8c0-2.2 3.1-4 7-4s7 1.8 7 4v8c0 2.2-3.1 4-7 4s-7-1.8-7-4V8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 8c0 2.2-3.1 4-7 4s-7-1.8-7-4M19 12c0 2.2-3.1 4-7 4s-7-1.8-7-4" />
      </svg>
    ),
  },
  {
    title: 'Kronsko (diamantno) vrtanje',
    description:
      'Natančno diamantno vrtanje skozi beton, armirani beton in ploščice — brez razpok in poškodb. Za vse bazensko-inštalacijske preboje in renovacije.',
    href: '/kronsko-vrtanje',
    wide: true,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
]

const formatNumber = (i: number) => String(i + 1).padStart(2, '0')

export function ServicesSection() {
  const [featured, ...remaining] = services
  const regularCards = remaining.filter((s) => !s.wide)
  const wideCard = remaining.find((s) => s.wide)

  return (
    <section id="storitve" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-pool-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-pool-gold/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
          <Link
            href={featured.href}
            className="services-card-featured group relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-pool-accent/15 hover:border-pool-gold/40 transition-all duration-500 hover:-translate-y-1 block min-h-[420px]"
          >
            <div className="absolute inset-0">
              <Image
                src={featured.image!}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pool-navy via-pool-navy/70 to-pool-navy/10" />
            </div>

            {/* Number */}
            <div className="absolute top-6 right-6 font-display text-6xl font-bold text-white/15 leading-none select-none">
              {formatNumber(0)}
            </div>

            {/* Featured badge */}
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-gradient-to-r from-pool-gold to-pool-gold-light text-pool-navy text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg shadow-pool-gold/30">
              <span className="w-1.5 h-1.5 rounded-full bg-pool-navy" />
              Glavna storitev
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-pool-gold-light group-hover:bg-pool-gold/20 group-hover:border-pool-gold/40 transition-all duration-500">
                  {featured.icon}
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white group-hover:text-pool-gold-light transition-colors duration-300">
                  {featured.title}
                </h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-xl">
                {featured.description}
              </p>
              <span className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/25 group-hover:border-pool-gold/50 text-white font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300">
                Več o storitvi
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Regular cards */}
          {regularCards.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-pool-accent/10 hover:border-pool-accent/40 transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <Image
                  src={service.image!}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pool-navy/70 via-pool-navy/15 to-transparent" />

                {/* Number */}
                <div className="absolute top-4 right-4 font-display text-3xl font-bold text-white/40 leading-none select-none">
                  {formatNumber(i + 1)}
                </div>
              </div>

              {/* Icon badge — sibling of image, not clipped */}
              <div className="absolute top-[10.5rem] left-5 z-10 w-11 h-11 rounded-xl bg-white shadow-lg shadow-pool-navy/15 border border-gray-100 flex items-center justify-center text-pool-accent group-hover:bg-pool-accent group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>

              <div className="p-5 pt-9 flex-grow flex flex-col">
                <h3 className="font-display text-lg font-bold text-pool-navy mb-2 group-hover:text-pool-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-pool-navy/60 text-sm leading-relaxed mb-4 flex-grow">
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
            <Link
              href={wideCard.href}
              className="services-card-wide group relative overflow-hidden rounded-2xl border border-pool-accent/20 hover:border-pool-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-pool-accent/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pool-navy via-pool-blue to-pool-accent" />

              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Glowing orb */}
              <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-pool-gold/20 blur-3xl group-hover:bg-pool-gold/30 transition-colors duration-500" />

              {/* Number watermark */}
              <div className="absolute right-6 bottom-2 font-display text-[8rem] font-bold text-white/5 leading-none select-none pointer-events-none">
                {formatNumber(services.length - 1)}
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8">
                <div className="flex items-start md:items-center gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-pool-gold-light group-hover:bg-pool-gold/20 group-hover:border-pool-gold/40 group-hover:rotate-45 transition-all duration-700">
                    {wideCard.icon}
                  </div>
                  <div>
                    <p className="text-pool-gold-light/80 text-[11px] tracking-[0.25em] uppercase mb-2 font-semibold">
                      Specializirana storitev
                    </p>
                    <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-pool-gold-light transition-colors duration-300">
                      {wideCard.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed max-w-2xl">
                      {wideCard.description}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 group-hover:border-pool-gold/50 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0">
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
