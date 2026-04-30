import Image from 'next/image'

const partners = [
  { name: 'Alkorplan', src: 'https://cdn.sanity.io/images/u77huvva/production/c6d106fa9ba66fd818a5cac26e4109718f62c0a5-361x26.svg?w=256&fit=max&auto=format', w: 130, h: 30 },
  { name: 'Astralpool', src: 'https://cdn.sanity.io/images/u77huvva/production/107ddad5b2b417bc80af678a33a89cac3237d969-180x28.svg?w=256&fit=max&auto=format', w: 130, h: 30 },
  { name: 'Bayrol', src: 'https://cdn.sanity.io/images/u77huvva/production/26e9abc54139aaaa1f592474420c4fd6a2caa183-1800x600.webp?w=256&fit=max&auto=format', w: 100, h: 35 },
  { name: 'Cepex', src: 'https://cdn.sanity.io/images/u77huvva/production/a8c05ec8307ba4fa4a7cf02fbad8244955c56249-271x55.png?w=256&fit=max&auto=format', w: 100, h: 35 },
  { name: 'Microwell', src: 'https://cdn.sanity.io/images/u77huvva/production/fe7e16614e323c36da3383ea975491b553b0ae51-1140x400.jpg?w=256&fit=max&auto=format', w: 120, h: 35 },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-pool-navy/35 text-xs uppercase tracking-widest mb-10">
          Zaupanje vodilnih v industriji
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {partners.map((p) => (
            <div key={p.name} className="opacity-30 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0">
              <Image
                src={p.src}
                alt={p.name}
                width={p.w}
                height={p.h}
                className="object-contain brightness-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
