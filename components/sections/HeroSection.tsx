import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Bazen-hero-image.webp"
          alt="DreamPool premium bazen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Gold gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pool-navy to-transparent" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-pool-accent/40 bg-pool-accent/10 rounded-sm px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-pool-accent animate-pulse" />
            <span className="text-pool-accent text-xs tracking-widest uppercase font-body">
              Premium Bazeni · Slovenija & Hrvaška
            </span>
          </div>

          {/* Headline */}
          <h1 className="section-title text-pool-white mb-6 animate-fade-up opacity-0-initial" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Vaš bazen po meri —{' '}
            <span className="text-gradient">od projekta</span>
            <br />
            do vode.
          </h1>

          {/* Subheadline */}
          <p className="text-pool-white/70 text-lg md:text-xl leading-relaxed mb-4 animate-fade-up opacity-0-initial" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Projektiramo in gradimo premium bazene po vsej Sloveniji.
            Celoten projekt v enih rokah — od prvega načrta do prvega skoka.
          </p>

          {/* Trust line */}
          <div className="flex items-center gap-6 mb-10 animate-fade-up opacity-0-initial" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2 text-sm text-pool-white/60">
              <svg className="w-4 h-4 text-pool-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              50+ projektov
            </div>
            <div className="flex items-center gap-2 text-sm text-pool-white/60">
              <svg className="w-4 h-4 text-pool-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Garancija vključena
            </div>
            <div className="flex items-center gap-2 text-sm text-pool-white/60">
              <svg className="w-4 h-4 text-pool-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Ključ v roke
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0-initial" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Link href="/ponudba" className="btn-primary text-base py-4 px-8">
              Brezplačna ponudba
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="tel:+38670579648" className="btn-outline text-base py-4 px-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              070 579 648
            </a>
            <a
              href="https://wa.me/38670579648"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-base py-4 px-8 border-green-500/40 text-green-400 hover:border-green-400"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-pool-white/30 text-xs tracking-widest uppercase">Scrolla</span>
        <svg className="w-5 h-5 text-pool-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
