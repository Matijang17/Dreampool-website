import { ContactForm } from '@/components/ui/ContactForm'

const benefits = [
  {
    title: 'Brezplačno svetovanje',
    desc: 'Nismo prodajalci. Naši strokovnjaki vam svetujejo, kateri tip bazena se najbolje obnese za vaš prostor in proračun.',
  },
  {
    title: 'Odgovor v 24 urah',
    desc: 'Vsako povpraševanje obravnavamo individualno. Pokličemo vas in se dogovorimo za brezplačen ogled.',
  },
  {
    title: 'Brez obveznosti',
    desc: 'Pošiljanje povpraševanja vas k ničemur ne zavezuje. Pošljemo vam jasno ponudbo z vsemi stroški.',
  },
]

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — intro + benefits */}
            <div>
              <p className="section-subtitle">Brezplačna ponudba</p>
              <div className="gold-line mb-6" />
              <h2 className="font-display text-5xl md:text-6xl font-bold text-pool-navy leading-tight uppercase mb-6">
                Začnimo<br />
                <span className="text-gradient">vaš projekt</span>
              </h2>
              <p className="text-pool-navy/60 text-lg leading-relaxed mb-10">
                Pošljite povpraševanje in v 24 urah vas pokličemo. Brezplačen
                ogled brez obveznosti — povemo vam realno oceno stroškov in časa
                izvedbe.
              </p>

              <div className="space-y-5 mb-10">
                {benefits.map((b, i) => (
                  <div key={b.title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-pool-accent/10 border border-pool-accent/30 text-pool-accent text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-pool-navy mb-1">
                        {b.title}
                      </h3>
                      <p className="text-pool-navy/55 text-sm leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                <div className="flex-1">
                  <p className="text-pool-navy/45 text-xs uppercase tracking-widest mb-1">
                    Raje pokličite
                  </p>
                  <a
                    href="tel:+38670579648"
                    className="font-display text-2xl font-bold text-pool-navy hover:text-pool-accent transition-colors"
                  >
                    +386 70 579 648
                  </a>
                </div>
                <a
                  href="https://wa.me/38670579648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-5 py-3 rounded-full transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right — form card */}
            <div className="card-light p-7 lg:p-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
