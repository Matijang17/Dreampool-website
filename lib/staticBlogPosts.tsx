import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { FaqItem } from '@/lib/seo'

/**
 * Static fallback content for blog post detail pages.
 *
 * The blog listing ([blog/page.tsx]) already renders a set of `staticPosts`
 * when the Sanity CMS is unreachable. This registry provides the matching
 * full article bodies so those tiles resolve to a real page instead of
 * "Članek ni najden". Keyed by slug, mirroring the Sanity `slug.current`.
 */
export type StaticBlogPost = {
  title: string
  excerpt: string
  metaTitle?: string
  metaDescription?: string
  publishedAt: string
  author?: string
  category?: string
  image?: string
  faqs: FaqItem[]
  body: ReactNode
}

const CDN = 'https://cdn.sanity.io/images/u77huvva/production'
const heroImg = `${CDN}/6da0045ebc99873dd993284fa370bc86a4dc51fa-5120x2880.jpg?w=1200&fit=max&auto=format`
const img2 = `${CDN}/7ee2f8ad2f09fc39781fb51d3857c7613b4f66f7-5120x2880.jpg?w=800&fit=max&auto=format`
const img3 = `${CDN}/de537d3e33593130bfe59dc259ccea1babc816fa-5120x2880.jpg?w=800&fit=max&auto=format`

/** Inline article image, styled to match the Sanity PortableText image serializer. */
function BodyImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-8">
      <Image src={src} alt={alt} width={800} height={450} className="w-full rounded-sm" sizes="(max-width: 768px) 100vw, 768px" />
      <figcaption className="text-pool-white/40 text-sm text-center mt-2">{caption}</figcaption>
    </figure>
  )
}

const STATIC_BLOG_POSTS: Record<string, StaticBlogPost> = {
  'koliko-stane-bazen-slovenija-2026': {
    title: 'Koliko stane bazen v Sloveniji 2026?',
    excerpt:
      'Celovit vodič po cenah gradnje bazenov — montažni, betonski in folijski, z vsemi skritimi stroški in nasveti za pametno investicijo.',
    metaTitle: 'Koliko stane bazen v Sloveniji 2026? | Cene & Nasveti',
    metaDescription:
      'Koliko stane bazen v Sloveniji 2026? Pregled cen po tipih bazenov, dejavniki cene, stroški vzdrževanja in nasveti za pametno investicijo.',
    publishedAt: '2026-01-15',
    author: 'Ekipa DreamPool',
    category: 'Nasveti',
    image: heroImg,
    faqs: [
      {
        q: 'Kolikšen je najnižji realni proračun za bazen v Sloveniji 2026?',
        a: 'Za kakovosten manjši montažni (poliestrski) bazen z osnovno vgradnjo je realen izhodiščni proračun okoli 15.000 EUR. Pri tem znesku je smiselno upoštevati tudi rezervo za pripravo terena in osnovno opremo.',
      },
      {
        q: 'Ali potrebujem gradbeno dovoljenje za bazen?',
        a: 'Za večino domačih bazenov manjše do srednje velikosti gradbeno dovoljenje ni potrebno, lahko pa veljajo lokalni odmiki od sosednje parcele in prijava posega. Priporočamo preverbo pri vaši občini ali pri nas pred začetkom del.',
      },
      {
        q: 'Koliko časa traja izgradnja bazena?',
        a: 'Montažni bazen je lahko vgrajen v nekaj dneh, medtem ko betonski bazen z vsemi deli in obdelavo okolice običajno zahteva od 4 do 8 tednov, odvisno od zahtevnosti projekta in vremenskih razmer.',
      },
    ],
    body: (
      <>
        <p>
          Lasten bazen ni več zgolj luksuz, ki si ga lahko privoščijo redki — v zadnjih letih je postal
          dosegljiva naložba v kakovost bivanja, vrednost nepremičnine in družinske trenutke na domačem
          vrtu. A prvo vprašanje, ki si ga zastavi skoraj vsak bodoči lastnik, je povsem logično:{' '}
          <strong>koliko pravzaprav stane bazen v Sloveniji v letu 2026?</strong>
        </p>
        <p>
          Odgovor ni ena sama številka. Cena je odvisna od tipa bazena, velikosti, izbire materialov,
          zahtevnosti terena in dodatne opreme. V tem vodniku vam kot izkušeni gradbeniki bazenov
          razložimo realne cenovne razrede, dejavnike, ki najbolj vplivajo na končni znesek, ter skrite
          stroške, na katere morate biti pozorni. Cilj je preprost: da boste znali sprejeti premišljeno
          odločitev.
        </p>

        <BodyImage
          src={img2}
          alt="Sodoben betonski bazen z lesno teraso na sončnem domačem vrtu v Sloveniji"
          caption="Dobro načrtovan bazen poveča vrednost nepremičnine in postane osrednji prostor druženja."
        />

        <h2>Cenovni razredi bazenov v Sloveniji 2026 (pregled)</h2>
        <p>
          Spodnje cene so okvirne in vključujejo izkop, vgradnjo ter osnovno filtracijo. Veljajo za leto
          2026 in upoštevajo trenutne cene materialov in dela na slovenskem trgu.
        </p>

        <h3>1. Montažni (poliestrski / GRP) bazeni</h3>
        <p>
          Gre za tovarniško izdelano školjko iz steklenih vlaken, ki jo na lokacijo pripeljejo v enem
          kosu. To je najhitrejša rešitev — vgradnja pogosto traja le nekaj dni. Cenovni razred za
          kakovostno školjko z vgradnjo se običajno giblje med <strong>15.000 in 30.000 EUR</strong>,
          odvisno od velikosti in opreme.
        </p>

        <h3>2. Betonski bazeni (klasična gradnja)</h3>
        <p>
          Betonski bazen je najbolj prilagodljiva izbira — omogoča poljubno obliko, velikost in globino
          ter ima najdaljšo življenjsko dobo. Prav zaradi prilagodljivosti in trpežnosti je tudi najbolj
          zaželen pri zahtevnejših naročnikih. Cene se običajno začnejo pri <strong>30.000 EUR</strong> in
          lahko pri večjih, luksuznih izvedbah presežejo <strong>60.000 EUR</strong>.
        </p>

        <h3>3. Folijski (skimmer ali prelivni) bazeni</h3>
        <p>
          Bazeni z armirano PVC folijo predstavljajo dobro razmerje med ceno in kakovostjo. Folija je
          vodotesna obloga, ki jo je mogoče čez leta tudi obnoviti. Cenovni razred se običajno giblje med{' '}
          <strong>20.000 in 45.000 EUR</strong>.
        </p>

        <h2>Kateri dejavniki najbolj vplivajo na ceno bazena?</h2>
        <p>
          Dva navidezno enaka bazena lahko stane povsem različno. Razlog so naslednji dejavniki, ki jih je
          treba upoštevati že v fazi načrtovanja:
        </p>

        <h3>Velikost in globina</h3>
        <p>
          Več vode pomeni večji izkop, več materiala in zmogljivejšo filtracijo. Velikost je največji
          posamični dejavnik cene.
        </p>

        <h3>Tip prelivanja: skimmer ali prelivni rob</h3>
        <p>
          <strong>Skimmer</strong> bazeni so cenovno ugodnejši, saj gladina vode poteka tik pod robom.{' '}
          <strong>Prelivni (infinity) bazeni</strong> z dodatnim prelivnim kanalom in izravnalnim
          rezervoarjem delujejo razkošno, a podražijo investicijo za 20–40 %.
        </p>

        <h3>Stanje terena in dostopnost</h3>
        <p>
          Skalnata podlaga, visoka podtalnica ali oteženo dostop z gradbeno mehanizacijo lahko bistveno
          podražijo zemeljska dela. Zato je terenski ogled pred ponudbo ključen.
        </p>

        <h3>Dodatna oprema in tehnologija</h3>
        <p>
          Toplotna črpalka za ogrevanje, protitokovna naprava, LED osvetlitev, slana elektroliza
          (razkuževanje s soljo namesto klasičnega klora), avtomatsko pokrivalo (roleta) in pametno
          krmiljenje — vsak od teh elementov dvigne udobje, a tudi ceno.
        </p>

        <BodyImage
          src={img3}
          alt="Tehnični prostor bazena s toplotno črpalko, filtracijo in pametnim krmiljenjem"
          caption="Kakovostna tehnologija filtracije in ogrevanja je srce vsakega dolgoročno vzdržnega bazena."
        />

        <h2>Stroški vzdrževanja: koliko stane bazen na leto?</h2>
        <p>
          Pri načrtovanju ne pozabite na obratovalne stroške. Letni strošek vzdrževanja povprečnega
          družinskega bazena v Sloveniji se običajno giblje med <strong>500 in 1.500 EUR</strong> in
          vključuje:
        </p>
        <p>
          <strong>Elektriko</strong> (črpalka filtracije, toplotna črpalka), <strong>kemijo</strong> za
          uravnavanje pH in razkuževanje vode, <strong>vodo</strong> za dopolnjevanje ter{' '}
          <strong>zimovanje in odpiranje</strong> bazena. Sodobna oprema — predvsem toplotne črpalke z
          visokim izkoristkom (COP) in pokrivala, ki zmanjšujejo izhlapevanje — te stroške občutno znižajo.
        </p>

        <h2>Se naložba v bazen splača?</h2>
        <p>
          Poleg očitnih koristi za počitek in zdravje dobro izveden bazen dviguje vrednost nepremičnine in
          privlačnost na trgu. Ključ do dobre investicije je kakovostna izvedba: prihranek pri gradnji se
          pogosto maščuje skozi višje stroške vzdrževanja in popravil.
        </p>
        <p>
          Če vas zanima, kako so videti realni projekti in kakšne rešitve so mogoče za vaš vrt, si oglejte{' '}
          <Link href="/projekti">naše referenčne projekte bazenov</Link>. Za konkretno, brezplačno oceno
          cene glede na vaš teren in želje pa nas{' '}
          <Link href="/kontakt">kontaktirajte za nezavezujočo ponudbo</Link> — z veseljem svetujemo, katera
          rešitev je za vas cenovno in tehnično najbolj smiselna.
        </p>
      </>
    ),
  },
}

/** Returns the static fallback article for a slug, or null if none exists. */
export function getStaticBlogPost(slug: string): StaticBlogPost | null {
  return STATIC_BLOG_POSTS[slug] ?? null
}
