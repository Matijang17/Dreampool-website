import Image from 'next/image'

const partners = [
  { name: 'Alkorplan', src: '/images/renolit-alkorplan.svg', w: 130, h: 30 },
  { name: 'Astralpool', src: '/images/astrapool.svg', w: 130, h: 30 },
  { name: 'Bayrol', src: '/images/bayrol.svg', w: 100, h: 35 },
  { name: 'Cepex', src: '/images/cepex.svg', w: 100, h: 35 },
  { name: 'Microwell', src: '/images/microwell.svg', w: 120, h: 35 },
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
