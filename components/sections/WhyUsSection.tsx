const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Premium materiali',
    description: 'Uporabljamo izključno prvorazredne materiale evropskih proizvajalcev z dokazano dolgoživostjo in odpornostjo.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Hitra montaža',
    description: 'Naša izkušena ekipa zagotavlja učinkovito in hitro izvedbo brez nepotrebnih zamud ali presenečenj.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Celoten projekt',
    description: 'Ključ v roke — od svetovanja in projektiranja do montaže, zagonskih testov in predaje.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Garancija',
    description: 'Na vse naše projekte nudimo pisno garancijo. Vaša investicija je zaščitena.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Izkušena ekipa',
    description: 'Več kot 8 let izkušenj in 50+ realiziranih projektov po vsej Sloveniji in Hrvaški.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Poprodajna podpora',
    description: 'Servis, vzdrževanje in hitro odzivanje tudi po predaji projekta. Z vami smo dolgoročno.',
  },
]

export function WhyUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — Clearpool 2-column with top divider */}
        <div className="border-t border-gray-200 pt-12 mb-14">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <p className="section-subtitle">Zakaj DreamPool</p>
              <div className="gold-line mb-6" />
              <h2 className="font-display text-5xl md:text-6xl font-bold text-pool-navy leading-tight uppercase">
                Naša predanost<br />
                <span className="text-gradient">kakovosti</span>
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="text-pool-navy/60 text-lg leading-relaxed mb-6">
                Nismo samo gradbeniki — smo partnerji, ki z vami soustvarijo prostor za sprostitev,
                zabavo in kakovostne trenutke z družino. Vsak bazen je unikaten, vsak projekt je naša ponos.
              </p>
              <div className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-pool-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-pool-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-pool-navy/40 text-xs uppercase tracking-widest mb-1">Brezplačno svetovanje</p>
                  <p className="text-pool-navy font-semibold">Pokličite nas za brezplačen ogled in ponudbo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="card-light p-6 group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 bg-pool-accent/10 rounded-xl flex items-center justify-center text-pool-accent mb-4 group-hover:bg-pool-accent/20 transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-pool-navy mb-2">
                {reason.title}
              </h3>
              <p className="text-pool-navy/55 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
