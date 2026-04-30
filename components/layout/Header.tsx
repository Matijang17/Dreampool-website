'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  {
    label: 'Storitve',
    href: '#',
    dropdown: [
      { label: 'Novogradnja bazenov', href: '/gradnja-bazenov' },
      { label: 'Servis bazenske tehnike', href: '/servis' },
      { label: 'Vzdrževanje bazenov', href: '/vzdrzevanje-bazenov' },
      { label: 'Pokrivala za bazene', href: '/pokrivala-za-bazene' },
      { label: 'Kronsko (diamantno) vrtanje', href: '/kronsko-vrtanje' },
      { label: 'Hidroizolacije rezervoarjev', href: '/hidroizolacija/rezervoarji' },
      { label: 'Hidroizolacija s folijo', href: '/hidroizolacija/folija' },
    ],
  },
  { label: 'Projekti', href: '/projekti' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const pill = scrolled || !isHome

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${pill ? 'pt-3' : 'pt-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pill container */}
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            pill
              ? 'bg-white rounded-full shadow-xl shadow-black/10 px-5 py-2.5'
              : 'bg-transparent px-1 py-0'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/Dreampool_logo.png"
              alt="DreamPool"
              width={90}
              height={90}
              className={`object-contain transition-all duration-500 ${pill ? 'w-16 h-16' : 'w-20 h-20'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button
                    className={`transition-colors duration-200 text-sm font-medium tracking-wide flex items-center gap-1.5 ${
                      pill
                        ? 'text-pool-navy/70 hover:text-pool-accent'
                        : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`transition-colors duration-200 text-sm font-medium tracking-wide ${
                      pill
                        ? 'text-pool-navy/70 hover:text-pool-accent'
                        : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/10 py-2 overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-pool-navy/65 hover:text-pool-accent hover:bg-gray-50 transition-all duration-150"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+38670579648"
              className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                pill ? 'text-pool-navy/55 hover:text-pool-accent' : 'text-white/65 hover:text-white'
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              070 579 648
            </a>

            <Link
              href="/ponudba"
              className={`inline-flex items-center gap-2.5 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 tracking-wide ${
                pill
                  ? 'bg-pool-accent hover:bg-pool-blue text-white hover:shadow-lg hover:shadow-pool-accent/25'
                  : 'bg-white text-pool-navy hover:bg-white/90'
              }`}
            >
              Brezplačna ponudba
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${pill ? 'bg-white/40' : 'bg-pool-accent/60'}`} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              pill ? 'text-pool-navy' : 'text-white'
            }`}
            aria-label="Menu"
          >
            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <div className={`w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className={`lg:hidden mt-2 rounded-3xl overflow-hidden shadow-2xl ${
              pill ? 'bg-white' : 'bg-pool-navy/95 backdrop-blur-md border border-white/10'
            }`}
          >
            <nav className="flex flex-col py-3">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <p className={`text-xs uppercase tracking-widest px-5 py-2 mt-1 ${
                        pill ? 'text-pool-navy/35' : 'text-white/35'
                      }`}>
                        {link.label}
                      </p>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block px-6 py-2.5 text-sm transition-colors ${
                            pill
                              ? 'text-pool-navy/70 hover:text-pool-accent hover:bg-gray-50'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-5 py-2.5 text-sm font-medium transition-colors ${
                        pill
                          ? 'text-pool-navy/70 hover:text-pool-accent'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="px-5 py-4 mt-1 border-t border-current/10">
                <Link
                  href="/ponudba"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2.5 w-full bg-pool-accent hover:bg-pool-blue text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-300"
                >
                  Brezplačna ponudba
                  <span className="w-2 h-2 rounded-full bg-white/40 flex-shrink-0" />
                </Link>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  )
}
