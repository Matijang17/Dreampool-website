import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyContact } from '@/components/ui/StickyContact'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dreampool.si'),
  title: {
    default: 'DreamPool — Premium Bazeni po Meri | Slovenija & Hrvaška',
    template: '%s | DreamPool',
  },
  description:
    'Projektiranje, dobava in montaža premium bazenov po meri v Sloveniji in na Hrvaškem. 50+ projektov. Garancija vključena. Brezplačna ponudba.',
  keywords: [
    'bazeni',
    'gradnja bazenov',
    'bazeni slovenija',
    'fiberglass bazeni',
    'vkopani bazeni',
    'bazen cena',
    'bazeni ljubljana',
    'bazeni maribor',
    'premium bazeni',
    'dreampool',
  ],
  authors: [{ name: 'DreamPool' }],
  creator: 'DreamPool',
  openGraph: {
    type: 'website',
    locale: 'sl_SI',
    url: 'https://dreampool.si',
    siteName: 'DreamPool',
    title: 'DreamPool — Premium Bazeni po Meri',
    description:
      'Projektiranje, dobava in montaža premium bazenov po meri v Sloveniji in na Hrvaškem.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DreamPool — Premium Bazeni',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DreamPool — Premium Bazeni po Meri',
    description:
      'Projektiranje, dobava in montaža premium bazenov v Sloveniji in na Hrvaškem.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-pool-white text-pool-white font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContact />
      </body>
    </html>
  )
}
