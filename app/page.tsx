import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'DreamPool — Premium Bazeni po Meri | Slovenija & Hrvaška',
  description:
    'Projektiranje, dobava in montaža premium bazenov po meri v Sloveniji in na Hrvaškem. 50+ projektov. Garancija vključena. Pokličite za brezplačno ponudbo.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'DreamPool — Premium Bazeni po Meri',
    description:
      'Projektiranje, dobava in montaža premium bazenov po meri v Sloveniji in na Hrvaškem.',
    url: '/',
  },
}

export default function HomePage() {
  return (
    <>
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
