'use client'

import { useState } from 'react'

const projectTypes = [
  'Novogradnja bazena',
  'Fiberglass bazen',
  'Vkopani bazen',
  'Overflow bazen',
  'Infinity bazen',
  'Wellness / Jacuzzi',
  'Servis & vzdrževanje',
  'Pokrivalo za bazen',
  'Hidroizolacija',
  'Drugo',
]

const budgets = [
  'Do 15.000 €',
  '15.000 – 30.000 €',
  '30.000 – 50.000 €',
  '50.000 – 80.000 €',
  'Nad 80.000 €',
  'Še ne vem',
]

const timelines = [
  'Čim prej (letos)',
  'Prihodnje leto',
  'V 2 letih',
  'Samo se informiram',
]

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', email: '', location: '', projectType: '', budget: '', timeline: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-pool-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-pool-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-pool-white mb-3">Hvala za povpraševanje!</h3>
        <p className="text-pool-white/60">Kontaktirali vas bomo v roku 24 ur. Medtem nas pokličite na <a href="tel:+38670579648" className="text-pool-accent">070 579 648</a>.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="font-display text-2xl font-bold text-pool-white mb-6">Pošljite povpraševanje</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-pool-white/60 text-xs uppercase tracking-widest mb-2">
            Ime in priimek *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Janez Novak"
            className="w-full bg-pool-navy border border-pool-white/15 focus:border-pool-accent rounded-sm px-4 py-3 text-pool-white placeholder-pool-white/25 text-sm outline-none transition-colors duration-200"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-pool-white/60 text-xs uppercase tracking-widest mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+386 XX XXX XXX"
            className="w-full bg-pool-navy border border-pool-white/15 focus:border-pool-accent rounded-sm px-4 py-3 text-pool-white placeholder-pool-white/25 text-sm outline-none transition-colors duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className="block text-pool-white/60 text-xs uppercase tracking-widest mb-2">
            E-pošta
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="janez@email.com"
            className="w-full bg-pool-navy border border-pool-white/15 focus:border-pool-accent rounded-sm px-4 py-3 text-pool-white placeholder-pool-white/25 text-sm outline-none transition-colors duration-200"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-pool-white/60 text-xs uppercase tracking-widest mb-2">
            Lokacija / kraj *
          </label>
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="Ljubljana, Maribor..."
            className="w-full bg-pool-navy border border-pool-white/15 focus:border-pool-accent rounded-sm px-4 py-3 text-pool-white placeholder-pool-white/25 text-sm outline-none transition-colors duration-200"
          />
        </div>
      </div>

      {/* Project type */}
      <div>
        <label className="block text-pool-white/60 text-xs uppercase tracking-widest mb-2">
          Tip projekta *
        </label>
        <select
          name="projectType"
          required
          value={formData.projectType}
          onChange={handleChange}
          className="w-full bg-pool-navy border border-pool-white/15 focus:border-pool-accent rounded-sm px-4 py-3 text-pool-white text-sm outline-none transition-colors duration-200 appearance-none"
        >
          <option value="" disabled>Izberite tip projekta</option>
          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Budget */}
        <div>
          <label className="block text-pool-white/60 text-xs uppercase tracking-widest mb-2">
            Okvirni budget
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-pool-navy border border-pool-white/15 focus:border-pool-accent rounded-sm px-4 py-3 text-pool-white text-sm outline-none transition-colors duration-200 appearance-none"
          >
            <option value="">Izberite razpon</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-pool-white/60 text-xs uppercase tracking-widest mb-2">
            Kdaj planirate?
          </label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full bg-pool-navy border border-pool-white/15 focus:border-pool-accent rounded-sm px-4 py-3 text-pool-white text-sm outline-none transition-colors duration-200 appearance-none"
          >
            <option value="">Izberite termin</option>
            {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-pool-white/60 text-xs uppercase tracking-widest mb-2">
          Sporočilo / dodatne informacije
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Opišite vaš projekt, velikost vrta, posebne zahteve..."
          className="w-full bg-pool-navy border border-pool-white/15 focus:border-pool-accent rounded-sm px-4 py-3 text-pool-white placeholder-pool-white/25 text-sm outline-none transition-colors duration-200 resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">Prišlo je do napake. Prosimo pokličite nas na 070 579 648.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Pošiljam...
          </>
        ) : (
          <>
            Pošlji povpraševanje
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
      <p className="text-pool-white/25 text-xs text-center">
        Brez obveznosti · Odgovorimo v 24 urah · Vaši podatki so varni
      </p>
    </form>
  )
}
