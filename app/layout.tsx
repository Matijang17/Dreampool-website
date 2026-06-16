import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyContact } from '@/components/ui/StickyContact'
import { CookieBanner } from '@/components/ui/CookieBanner'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE, organizationSchema, localBusinessSchema, websiteSchema } from '@/lib/seo'

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0A1628' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1628' },
  ],
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'DreamPool — Premium Bazeni po Meri | Slovenija & Hrvaška',
    template: '%s | DreamPool',
  },
  description: SITE.description,
  applicationName: SITE.name,
  generator: 'Next.js',
  keywords: [
    'bazeni',
    'gradnja bazenov',
    'bazeni slovenija',
    'vkopani bazeni',
    'overflow bazen',
    'wellness bazen',
    'bazen cena',
    'bazeni ljubljana',
    'bazeni maribor',
    'premium bazeni',
    'pokrivala za bazene',
    'hidroizolacija bazena',
    'servis bazenov',
    'dreampool',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'sl-SI': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sl_SI',
    url: SITE.url,
    siteName: SITE.name,
    title: 'DreamPool — Premium Bazeni po Meri',
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: 'DreamPool — Premium Bazeni',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitterHandle,
    creator: SITE.twitterHandle,
    title: 'DreamPool — Premium Bazeni po Meri',
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/dreampool-favicon.webp', type: 'image/webp', sizes: 'any' },
    ],
    apple: { url: '/images/dreampool-favicon.webp', type: 'image/webp', sizes: '180x180' },
    shortcut: '/images/dreampool-favicon.webp',
  },
  manifest: '/site.webmanifest',
  category: 'business',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl-SI" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="geo.region" content="SI" />
        <meta name="geo.placename" content="Volčja Draga" />
        <meta name="geo.position" content={`${SITE.latitude};${SITE.longitude}`} />
        <meta name="ICBM" content={`${SITE.latitude}, ${SITE.longitude}`} />

        {/* Google Tag Manager & Consent Mode v2 Initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });

              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T6G97LQS');`,
          }}
        />
      </head>
      <body className="bg-pool-white text-pool-white font-body antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6G97LQS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <JsonLd data={[organizationSchema, localBusinessSchema, websiteSchema]} id="schema-root" />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContact />
        <CookieBanner />
      </body>
    </html>
  )
}
