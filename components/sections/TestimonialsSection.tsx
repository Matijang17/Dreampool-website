const testimonials = [
  {
    name: 'Marko P.',
    location: 'Ljubljana',
    text: 'Izjemna ekipa! Od prvega stika do predaje je vse potekalo gladko. Bazen je presegel vsa moja pričakovanja. Priporočam vsem, ki iščejo kakovost brez kompromisov.',
    rating: 5,
    type: 'Vkopan bazen',
  },
  {
    name: 'Nataša K.',
    location: 'Primorska',
    text: 'Profesionalni, točni in natančni. Vse je bilo narejeno, kot smo se dogovorili, v dogovorjenem roku. Fiberglass bazen je lepo videti in enostaven za vzdrževanje.',
    rating: 5,
    type: 'Fiberglass bazen',
  },
  {
    name: 'Gregor in Ana',
    location: 'Gorenjska',
    text: 'DreamPool je postavil naš sanjski bazen z jacuzzijem. Strokovno svetovanje, kakovostna izvedba in odlična poprodajna podpora. Absolutno zadovoljni!',
    rating: 5,
    type: 'Wellness bazen',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <p className="section-subtitle">Mnenja strank</p>
              <div className="gold-line mb-6" />
              <h2 className="font-display text-5xl md:text-6xl font-bold text-pool-navy leading-tight uppercase">
                Kar pravijo<br />
                <span className="text-gradient">naše stranke</span>
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="text-pool-navy/60 text-lg leading-relaxed mb-6">
                Naša uspešnost se meri z zadovoljstvom strank. Vsak projekt je zgrajen z enako skrbjo in predanostjo.
              </p>
              <a
                href="https://g.page/r/dreampool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pool-accent font-semibold text-sm tracking-wide hover:text-pool-blue transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Preberite vse Google recenzije
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-light p-7 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-pool-accent fill-pool-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-pool-navy/65 leading-relaxed italic flex-grow mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-pool-navy text-sm">{t.name}</p>
                  <p className="text-pool-navy/40 text-xs">{t.location}</p>
                </div>
                <span className="text-pool-accent text-xs bg-pool-accent/10 px-2 py-1 rounded-lg">
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
