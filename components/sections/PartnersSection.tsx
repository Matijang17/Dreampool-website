import Image from 'next/image'

const partners = [
  {
    name: 'Renolit Alkorplan',
    src: '/images/partnerji/renolit-alkorplan.svg',
    w: 140, h: 36,
    href: 'https://www.renolit.com/alkorplan/',
  },
  {
    name: 'Astralpool',
    src: '/images/partnerji/astralpool-logo.webp',
    w: 140, h: 36,
    href: 'https://www.astralpool.com',
  },
  {
    name: 'Bayrol',
    src: '/images/partnerji/bayrol.webp',
    w: 110, h: 36,
    href: 'https://www.bayrol.com',
  },
  {
    name: 'Cepex',
    src: '/images/partnerji/cepex-tile.webp',
    w: 110, h: 36,
    href: 'https://www.cepex.com',
  },
  {
    name: 'Microwell',
    src: '/images/partnerji/microwell_logo-img.webp',
    w: 130, h: 36,
    href: 'https://www.microwell.eu',
  },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-pool-navy/35 text-xs uppercase tracking-widest mb-10">
          Zaupanje vodilnih v industriji
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={p.name}
              title={p.name}
              className="opacity-35 hover:opacity-75 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={p.w}
                height={p.h}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
