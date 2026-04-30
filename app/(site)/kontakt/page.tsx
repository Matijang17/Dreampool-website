import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt | DreamPool — Bazeni Slovenija',
  description: 'Stopite v stik z DreamPool. Telefon, e-pošta, WhatsApp. Brezplačno svetovanje za vaš bazen. Vogrsko 172, Volčja Draga.',
  alternates: { canonical: 'https://dreampool.si/kontakt' },
}

const contacts = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Telefon',
    value: '+386 70 579 648',
    href: 'tel:+38670579648',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'E-pošta',
    value: 'info@dreampool.si',
    href: 'mailto:info@dreampool.si',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: 'Pišite nam na WhatsApp',
    href: 'https://wa.me/38670579648',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Naslov',
    value: 'Vogrsko 172, 5293 Volčja Draga',
    href: 'https://maps.google.com/?q=Vogrsko+172,+5293+Volčja+Draga',
  },
]

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-subtitle">Kontakt</p>
          <div className="gold-line mb-6" />
          <h1 className="section-title text-pool-navy mb-4">
            Stopite <span className="text-gradient">v stik</span>
          </h1>
          <p className="text-pool-navy/60 text-lg leading-relaxed">
            Brezplačno svetovanje brez obveznosti. Odgovorimo v 24 urah na dan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-light p-5 flex items-start gap-4 group hover:border-pool-accent/40 transition-colors"
                >
                  <div className="w-10 h-10 bg-pool-accent/10 rounded-lg flex items-center justify-center text-pool-accent flex-shrink-0 group-hover:bg-pool-accent/20 transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-pool-navy/40 text-xs uppercase tracking-widest mb-1">{c.label}</p>
                    <p className="text-pool-navy text-sm font-medium">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Delovni čas */}
            <div className="card-light p-6 mb-6">
              <h3 className="text-pool-accent text-xs uppercase tracking-widest mb-4">Delovni čas</h3>
              <div className="space-y-2 text-sm">
                {[
                  ['Ponedeljek – Petek', '08:00 – 17:00'],
                  ['Sobota', 'Po dogovoru'],
                  ['Nedelja', 'Zaprto'],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between text-pool-navy/60">
                    <span>{day}</span>
                    <span className="text-pool-navy/80">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden h-48 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.0!2d13.7!3d45.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVm9ncnNrbywgU2xvdmVuaWE!5e0!3m2!1ssl!2ssi!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DreamPool lokacija"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div className="card-light p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
