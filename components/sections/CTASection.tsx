import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pool-deep via-pool-blue to-pool-navy" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pool-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="section-subtitle">Začnimo skupaj</p>
        <div className="gold-line mx-auto mb-6" />
        <h2 className="section-title text-pool-white mb-6">
          Zgradimo vaše{' '}
          <span className="text-gradient">sanje</span>
        </h2>
        <p className="text-pool-white/60 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Pripravljeni na potop? Kontaktirajte nas še danes za brezplačno svetovanje. 
          Naši strokovnjaki vam pomagajo pri vsaki odločitvi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/ponudba" className="btn-primary text-base py-4 px-10">
            Brezplačna ponudba
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a href="tel:+38670579648" className="btn-outline text-base py-4 px-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            070 579 648
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-pool-white/40">
          {['Brezplačno svetovanje', 'Brez obveznosti', 'Odgovorimo v 24h', 'Garancija vključena'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-pool-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
