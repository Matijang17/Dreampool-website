import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection'
import { CTASection } from '@/components/sections/CTASection'


export const metadata: Metadata = {
  title: 'DreamPool — Premium Bazeni po Meri | Slovenija & Hrvaška',
  description:
    'Projektiranje, dobava in montaža premium bazenov po meri v Sloveniji in na Hrvaškem. 50+ projektov. Garancija vključena. Pokličite za brezplačno ponudbo.',
  alternates: {
    canonical: 'https://dreampool.si',
  },
}

// Schema.org structured data
const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'DreamPool',
  description: 'Premium bazeni po meri v Sloveniji in na Hrvaškem',
  url: 'https://dreampool.si',
  telephone: '+38670579648',
  email: 'info@dreampool.si',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vogrsko 172',
    addressLocality: 'Volčja Draga',
    postalCode: '5293',
    addressCountry: 'SI',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.9,
    longitude: 13.7,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  sameAs: [
    'https://instagram.com/dreampool.si',
    'https://facebook.com/dreampool.si',
  ],
  priceRange: '€€€',
  image: 'https://dreampool.si/og-image.jpg',
}

export default async function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      
      <TestimonialsSection />
      <PartnersSection />
      
      <CTASection />
    </>
  )
}
