import Image from 'next/image'
import Link from 'next/link'

export function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — Clearpool style: top divider + 2-column */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-pool-navy leading-tight uppercase">
                Kje se sanje<br />
                <span className="text-gradient">spremenijo</span><br />
                v resničnost
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="text-pool-navy/60 text-lg leading-relaxed mb-8">
                V DreamPoolu vašo vizijo spremenimo v čudovit bazen — od prvega pogovora do prvega skoka,
                z jasnostjo, natančnostjo in skrbjo.
              </p>
              <Link
                href="/ponudba"
                className="inline-flex items-center gap-3 bg-pool-accent hover:bg-pool-blue text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wide font-body"
              >
                Začnite svojo pot
                <span className="w-2 h-2 rounded-full bg-white/50" />
              </Link>
            </div>
          </div>
        </div>

        {/* Asymmetric image grid — Clearpool style */}
        <div className="process-asymmetric-grid">

          {/* Col 1, rows 1–2: large pool image with bottom overlay */}
          <div className="process-card-large relative rounded-2xl overflow-hidden group cursor-default shadow-md">
            <Image
              src="https://cdn.sanity.io/images/u77huvva/production/46910edd87559712e9a315e8e3df4a6001a53040-600x479.jpg?w=800&fit=max&auto=format"
              alt="DreamPool bazeni"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-navy/90 via-pool-navy/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="text-pool-accent font-body text-xs tracking-widest uppercase mb-2 block">01</span>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Kontaktirajte nas</h3>
              <p className="text-white/65 text-sm leading-relaxed max-w-xs">
                Začnite DreamPool pot s hitrim klicem ali sporočilom. Delite svoje sanje — vodili vas bomo
                od prvega koraka z jasnostjo in skrbjo.
              </p>
            </div>
          </div>

          {/* Col 2, row 1: Svetovanje with photo */}
          <div className="relative rounded-2xl overflow-hidden group cursor-default min-h-[240px] shadow-md">
            <Image
              src="https://cdn.sanity.io/images/u77huvva/production/30ddfd07f56ecd8711ba98de78d825d8ab68b279-600x483.jpg?w=600&fit=max&auto=format"
              alt="Svetovanje"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-navy/90 via-pool-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-pool-accent font-body text-xs tracking-widest uppercase mb-1 block">02</span>
              <h3 className="font-display text-lg font-bold text-white mb-1">Svetovanje</h3>
              <p className="text-white/60 text-xs leading-relaxed">
                Vašo vizijo spremenimo v popoln načrt bazena brez presenečenj.
              </p>
            </div>
          </div>

          {/* Col 2, row 2: Ogled — pool-accent gradient card */}
          <div className="relative rounded-2xl overflow-hidden group cursor-default min-h-[200px] shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-pool-accent via-pool-blue to-pool-navy" />
            <div className="relative z-10 h-full flex flex-col justify-end p-5">
              <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-white/70 font-body text-xs tracking-widest uppercase mb-1 block">03</span>
              <h3 className="font-display text-lg font-bold text-white mb-1">Ogled & Ponudba</h3>
              <p className="text-white/75 text-xs leading-relaxed">
                Obiščemo vašo lokacijo in pripravimo transparentno ponudbo brez skritih stroškov.
              </p>
            </div>
          </div>

          {/* Col 3, rows 1–2: construction photo with bottom overlay */}
          <div className="process-card-large relative rounded-2xl overflow-hidden group cursor-default shadow-md">
            <Image
              src="https://cdn.sanity.io/images/u77huvva/production/f859b30257fad7d28d83d3c1996e36cf25fa9119-1200x896.jpg?w=600&fit=max&auto=format"
              alt="Gradnja bazena"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pool-navy/90 via-pool-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-pool-accent font-body text-xs tracking-widest uppercase mb-1 block">04</span>
              <h3 className="font-display text-xl font-bold text-white mb-2">Gradnja & Predaja</h3>
              <p className="text-white/65 text-xs leading-relaxed">
                Naša ekipa izvede celoten projekt z natančnostjo. Bazen predamo z garancijo in vsemi navodili.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
