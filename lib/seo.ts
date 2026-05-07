export const SITE = {
  name: 'DreamPool',
  legalName: 'TD inženiring d.o.o.',
  url: 'https://dreampool.si',
  defaultLocale: 'sl_SI',
  description:
    'Projektiranje, dobava in montaža premium bazenov po meri v Sloveniji in na Hrvaškem. 50+ projektov, garancija vključena.',
  phone: '+38670579648',
  phoneDisplay: '+386 70 579 648',
  email: 'info@dreampool.si',
  street: 'Vogrsko 172',
  city: 'Volčja Draga',
  postalCode: '5293',
  country: 'SI',
  countryName: 'Slovenija',
  latitude: 45.9,
  longitude: 13.7,
  priceRange: '€€€',
  ogImage: '/images/Bazen-hero-image.webp',
  twitterHandle: '@dreampool_si',
  social: {
    instagram: 'https://instagram.com/dreampool.si',
    facebook: 'https://facebook.com/dreampool.si',
    whatsapp: 'https://wa.me/38670579648',
  },
  openingHours: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
  ],
}

export const absoluteUrl = (path: string = '/') => {
  if (path.startsWith('http')) return path
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/images/Dreampool_logo.png'),
    width: 512,
    height: 512,
  },
  image: absoluteUrl(SITE.ogImage),
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  sameAs: [SITE.social.instagram, SITE.social.facebook],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#localbusiness`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  image: absoluteUrl(SITE.ogImage),
  logo: absoluteUrl('/images/Dreampool_logo.png'),
  priceRange: SITE.priceRange,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.latitude,
    longitude: SITE.longitude,
  },
  areaServed: [
    { '@type': 'Country', name: 'Slovenija' },
    { '@type': 'Country', name: 'Hrvaška' },
  ],
  openingHoursSpecification: SITE.openingHours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: [SITE.social.instagram, SITE.social.facebook],
  hasMap: 'https://maps.google.com/?q=Vogrsko+172,+5293+Vol%C4%8Dja+Draga',
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: 'sl-SI',
  publisher: { '@id': `${SITE.url}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE.url}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export type BreadcrumbItem = { name: string; url: string }

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  })),
})

export type FaqItem = { q: string; a: string }

export const faqSchema = (faqs: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
})

export type ServiceSchemaInput = {
  name: string
  description: string
  url: string
  serviceType?: string
  image?: string
}

export const serviceSchema = (s: ServiceSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.name,
  description: s.description,
  url: absoluteUrl(s.url),
  serviceType: s.serviceType || s.name,
  ...(s.image ? { image: absoluteUrl(s.image) } : {}),
  provider: { '@id': `${SITE.url}/#localbusiness` },
  areaServed: [
    { '@type': 'Country', name: 'Slovenija' },
    { '@type': 'Country', name: 'Hrvaška' },
  ],
})

export type ArticleSchemaInput = {
  title: string
  description: string
  slug: string
  image?: string
  datePublished: string
  dateModified?: string
  authorName?: string
}

export const articleSchema = (a: ArticleSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.description,
  image: a.image ? [a.image] : undefined,
  datePublished: a.datePublished,
  dateModified: a.dateModified || a.datePublished,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': absoluteUrl(`/blog/${a.slug}`),
  },
  author: { '@type': 'Person', name: a.authorName || SITE.name },
  publisher: { '@id': `${SITE.url}/#organization` },
})

export const renderJsonLd = (data: object | object[]) => {
  const json = Array.isArray(data) ? data : [data]
  return JSON.stringify(json.length === 1 ? json[0] : json)
}
