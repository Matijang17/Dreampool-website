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

/** Hero images per article, matching the thumbnails used on the blog listing. */
const heroVkopani = `${CDN}/7ee2f8ad2f09fc39781fb51d3857c7613b4f66f7-5120x2880.jpg?w=1200&fit=max&auto=format`
const heroDovoljenje = `${CDN}/1ec7050f3670dd73d67ef907f398c548f2e64e4f-5120x2880.jpg?w=1200&fit=max&auto=format`
const heroOgrevanje = `${CDN}/de537d3e33593130bfe59dc259ccea1babc816fa-5120x2880.jpg?w=1200&fit=max&auto=format`

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

  'vkopani-bazen-izbira-oblike': {
    title: 'Vkopani bazen: vodič po izbiri prave oblike',
    excerpt:
      'Pravokotni, ovalni ali atipični — kako izbrati obliko vkopanega bazena, ki najbolj ustreza vašemu vrtu, načinu uporabe in proračunu.',
    metaTitle: 'Vkopani bazen: kako izbrati pravo obliko | DreamPool',
    metaDescription:
      'Vodič po izbiri oblike vkopanega bazena: pravokotni, ovalni ali atipični. Kako obliko uskladiti z vrtom, ceno in namenom uporabe.',
    publishedAt: '2026-01-05',
    author: 'Ekipa DreamPool',
    category: 'Vodniki',
    image: heroVkopani,
    faqs: [
      {
        q: 'Katera oblika vkopanega bazena je cenovno najugodnejša?',
        a: 'Praviloma je najugodnejša pravokotna oblika, saj omogoča enostavnejši izkop, opaženje in pokrivanje z lamelno roleto. Atipične in krivuljaste oblike zahtevajo več ročnega dela in materiala, zato so dražje.',
      },
      {
        q: 'Kako velik naj bo vkopani bazen za družino?',
        a: 'Za štiričlansko družino se v praksi dobro obnese bazen velikosti okoli 7 × 3,5 m z globino 1,3–1,5 m. Tak bazen omogoča sproščeno plavanje in igro, hkrati pa stroški ogrevanja in vzdrževanja ostanejo obvladljivi.',
      },
      {
        q: 'Ali oblika bazena vpliva na stroške vzdrževanja?',
        a: 'Da. Bolj razgibane oblike z ozkimi koti otežijo kroženje vode in čiščenje, kar lahko nekoliko poveča porabo kemije in čas vzdrževanja. Zaobljeni prehodi in premišljena postavitev šob to v veliki meri odpravijo.',
      },
    ],
    body: (
      <>
        <p>
          Odločitev za <strong>vkopani bazen</strong> je naložba za desetletja, zato oblika ni le stvar
          okusa — vpliva na ceno gradnje, način uporabe, vzdrževanje in končni videz vašega vrta. Prava
          oblika je tista, ki se naravno vključi v prostor in hkrati ustreza temu, kako boste bazen
          dejansko uporabljali.
        </p>
        <p>
          V tem vodniku vam kot izvajalci z dolgoletnimi izkušnjami pri gradnji bazenov razložimo, katere
          oblike so na voljo, za koga so primerne in na kaj morate biti pozorni, preden se dokončno
          odločite.
        </p>

        <BodyImage
          src="/images/Marezige/marezige_bazen.webp"
          alt="Pravokotni vkopani bazen z lesno teraso ob hiši v Marezigah"
          caption="Pravokotna oblika je klasika — brezčasna, funkcionalna in cenovno najučinkovitejša."
        />

        <h2>Zakaj je oblika bazena tako pomembna?</h2>
        <p>
          Oblika določa, koliko vodne površine in dna boste imeli, kako enostavno bo bazen pokriti z
          roleto ali prekrivalom ter kako učinkovito bo kroženje in filtracija vode. Vpliva tudi na
          razmerje med bazenom in razpoložljivim prostorom: pravilno izbrana oblika lahko majhen vrt
          optično poveča, napačna pa še tako lep prostor naredi natrpan.
        </p>

        <h2>Najpogostejše oblike vkopanih bazenov</h2>

        <h3>1. Pravokotni bazen</h3>
        <p>
          Najbolj razširjena izbira in praviloma najbolj racionalna. Pravokotna oblika omogoča
          učinkovito plavanje v dolžino, enostavno vgradnjo <strong>lamelne rolete</strong> (pokrivala) in
          čist, sodoben videz, ki se odlično ujema z moderno arhitekturo. Je tudi cenovno najugodnejša,
          saj izkop, opaženje in obdelava robov potekajo brez zahtevnih krivin.
        </p>

        <h3>2. Ovalni in zaobljeni bazeni</h3>
        <p>
          Mehkejše, organske linije delujejo prijazno in se lepo vključijo v vrtove z naravnim,
          sproščenim slogom urejanja. Ovalna oblika je priljubljena pri družinah, ki bazen vidijo
          predvsem kot prostor za počitek in igro. Pri pokrivanju je treba upoštevati, da zaobljeni robovi
          pogosto zahtevajo prilagojeno (in dražjo) prekrivalo.
        </p>

        <h3>3. Atipični in arhitekturni bazeni (L-oblika, prosta oblika)</h3>
        <p>
          Kadar želite, da bazen postane osrednji oblikovni element vrta, pridejo v poštev atipične
          oblike — od oblike črke L, ki ločuje plavalni in plitvi del, do popolnoma proste oblike,
          prilagojene terenu. Te rešitve omogočajo največ kreativnosti, a zahtevajo natančno načrtovanje,
          več ročnega dela in višji proračun.
        </p>

        <BodyImage
          src="/images/Pivka/pivka-bazen.webp"
          alt="Vkopani bazen prilagojene oblike, vključen v razgiban teren vrta"
          caption="Atipična oblika lahko bazen spremeni v osrednji oblikovni poudarek vrta."
        />

        <h2>Kako izbrati pravo obliko za svoj vrt?</h2>

        <h3>Upoštevajte namen uporabe</h3>
        <p>
          Če vas mika redno plavanje, ima prednost čim daljša ravna poteza — torej pravokotnik. Če bo
          bazen predvsem prostor za sprostitev in druženje, lahko obliko bolj svobodno prilagodite estetiki
          vrta. Razmislite tudi o <strong>plitvem delu</strong> ali stopnišču po celotni širini, ki je
          priročno za otroke in počitek.
        </p>

        <h3>Prilagodite obliko prostoru in arhitekturi</h3>
        <p>
          Linije bazena naj se pogovarjajo z linijami hiše, terase in vrta. Pri moderni, ravni
          arhitekturi praviloma najbolje deluje pravokotnik, pri starejših ali rustikalnih objektih pa
          mehkejše oblike. Pomembni so tudi odmiki od objektov in meje parcele — to je dobro preveriti že
          v fazi idejne zasnove.
        </p>

        <h3>Mislite na vzdrževanje in pokrivanje</h3>
        <p>
          Pravilne, geometrijske oblike je preprosteje pokriti z avtomatsko roleto, kar zmanjšuje
          izhlapevanje, izgubo toplote in umazanijo v vodi. Pri razgibanih oblikah je smiselno že vnaprej
          načrtovati rešitev za pokrivanje, da pozneje ne pride do presenečenj.
        </p>

        <h2>Naš nasvet iz prakse</h2>
        <p>
          Najboljša oblika je tista, ki uravnoteži vaše želje, značilnosti terena in proračun. V praksi
          se najpogosteje izkaže, da preprostejša oblika z dobro premišljenimi detajli — kakovostnimi
          robovi, pravilno postavljenimi šobami in urejeno okolico — deluje bolj prestižno kot
          komplicirana oblika brez doslednih detajlov.
        </p>
        <p>
          Za navdih si oglejte{' '}
          <Link href="/projekti">naše referenčne projekte vkopanih bazenov</Link>, kjer boste videli
          različne oblike v realnem okolju. Ko boste pripravljeni na konkreten korak, nas{' '}
          <Link href="/kontakt">kontaktirajte za brezplačen terenski ogled in svetovanje</Link> — skupaj
          bomo poiskali obliko, ki bo vašemu vrtu pisana na kožo.
        </p>
      </>
    ),
  },

  'gradbeno-dovoljenje-bazen-slovenija': {
    title: 'Ali potrebujem gradbeno dovoljenje za bazen?',
    excerpt:
      'Pravila za gradnjo bazenov v Sloveniji — kdaj potrebujete gradbeno dovoljenje, kdaj zadošča prijava in na katere odmike morate biti pozorni.',
    metaTitle: 'Gradbeno dovoljenje za bazen 2026 | DreamPool',
    metaDescription:
      'Ali potrebujete gradbeno dovoljenje za bazen v Sloveniji? Pojasnjujemo pravila, odmike od sosednje parcele in kdaj zadošča prijava posega.',
    publishedAt: '2025-12-20',
    author: 'Ekipa DreamPool',
    category: 'Predpisi',
    image: heroDovoljenje,
    faqs: [
      {
        q: 'Ali za domač bazen na vrtu potrebujem gradbeno dovoljenje?',
        a: 'Za večino domačih bazenov manjše do srednje velikosti gradbeno dovoljenje ni potrebno, saj sodijo med enostavne oziroma nezahtevne objekte. Veljajo pa pravila glede odmikov in lokalnih prostorskih aktov, zato je preverba pri občini vedno priporočljiva.',
      },
      {
        q: 'Kolikšen mora biti odmik bazena od sosednje parcele?',
        a: 'Odmik je odvisen od velikosti objekta in določil občinskega prostorskega akta, pogosto pa znaša okoli 1,5 metra od meje. Z izrecnim soglasjem soseda je v številnih primerih mogoč tudi manjši odmik.',
      },
      {
        q: 'Kaj se zgodi, če bazen zgradim brez ustreznih dovoljenj?',
        a: 'Gradnja brez zahtevanih dovoljenj ali v nasprotju z odmiki lahko pomeni inšpekcijski ukrep, globo ali celo zahtevo po odstranitvi. Zato je vsako dilemo bolje razrešiti že pred začetkom del.',
      },
    ],
    body: (
      <>
        <p>
          Eno prvih vprašanj, ki si ga zastavi vsak bodoči lastnik, je: <strong>ali za bazen potrebujem
          gradbeno dovoljenje?</strong> Dobra novica je, da za večino domačih bazenov zahtevnega
          postopka pridobivanja gradbenega dovoljenja ni. A to ne pomeni, da pravil ni — obstajajo pomembni
          pogoji, predvsem glede velikosti, odmikov in lokalnih prostorskih aktov.
        </p>
        <p>
          V tem članku pregledno pojasnjujemo, kdaj je bazen mogoče graditi brez dovoljenja, na kaj morate
          biti pozorni in zakaj se vsaka dilema splača razrešiti še pred prvim izkopom.{' '}
          <em>Opozorilo: vsebina je informativne narave; za pravno zavezujočo razlago vedno preverite
          veljavne predpise in svojo občino.</em>
        </p>

        <BodyImage
          src="/images/gradnja-bazenov.webp"
          alt="Gradbišče vkopanega bazena z opaženjem in armaturo pred betoniranjem"
          caption="Že pred izkopom je smiselno preveriti odmike in lokalne prostorske pogoje."
        />

        <h2>Bazen kot nezahteven oziroma enostaven objekt</h2>
        <p>
          V slovenski gradbeni zakonodaji so objekti razvrščeni glede na zahtevnost. Domači bazeni se
          praviloma uvrščajo med <strong>enostavne ali nezahtevne objekte</strong>, za katere gradbenega
          dovoljenja v klasičnem smislu ni treba pridobivati. Ključna sta dva dejavnika: <strong>velikost
          (površina in prostornina)</strong> bazena ter <strong>umestitev na parceli</strong>.
        </p>
        <p>
          Pri večjih bazenih, bazenih v sklopu zahtevnejših posegov ali ob posebnih pogojih (npr.
          varovana območja, bližina vodotokov) pa se zahteve lahko spremenijo. Prav zato je posplošeno
          pravilo »bazen ne potrebuje dovoljenja« nevarno — vedno je odvisno od konkretnega primera.
        </p>

        <h2>Odmiki od meje in soglasje soseda</h2>
        <p>
          Najpogostejši kamen spotike v praksi niso dovoljenja, ampak <strong>odmiki od sosednje
          parcele</strong>. Občinski prostorski akti običajno določajo najmanjšo dovoljeno razdaljo med
          objektom in mejo. Če želite bazen postaviti bliže meji, kot dovoljuje akt, boste praviloma
          potrebovali <strong>pisno soglasje soseda</strong>.
        </p>
        <p>
          Zato je pametno že pri umeščanju bazena na parcelo upoštevati odmike — tako se izognete poznejšim
          zapletom z inšpekcijo ali sosedskimi spori.
        </p>

        <BodyImage
          src="/images/novogradnja-bazenov.webp"
          alt="Novogradnja bazena, umeščenega na parcelo ob upoštevanju odmikov od meje"
          caption="Pravilna umestitev na parcelo je pogosto pomembnejša od samega dovoljenja."
        />

        <h2>Lokalni prostorski akti in posebni pogoji</h2>
        <p>
          Vsaka občina ima svoj <strong>občinski prostorski načrt (OPN)</strong>, ki lahko določa dodatne
          pogoje glede pozidanosti parcele, oblikovanja, odvajanja vode in podobno. Posebna pozornost je
          potrebna na:
        </p>
        <p>
          <strong>varovanih in zavarovanih območjih</strong> (kulturna dediščina, naravne vrednote),{' '}
          <strong>vodovarstvenih območjih</strong> ter parcelah z <strong>visoko podtalnico ali na
          strmini</strong>, kjer lahko veljajo strožja pravila ali so potrebna dodatna soglasja.
        </p>

        <h2>Kaj pa odvajanje vode iz bazena?</h2>
        <p>
          Pogosto spregledan vidik je <strong>praznjenje in odvajanje bazenske vode</strong>. Vode z
          ostanki kemije praviloma ni dovoljeno spuščati neposredno v okolje ali meteorno kanalizacijo
          brez ustrezne priprave. Smiselno je vnaprej predvideti način praznjenja in to uskladiti z
          lokalnimi predpisi.
        </p>

        <h2>Naš nasvet: dilemo razrešite pred začetkom del</h2>
        <p>
          V praksi se večina zapletov zgodi zato, ker se vprašanja dovoljenj in odmikov lotimo prepozno.
          Najbolj zanesljiva pot je preprosta: pred začetkom preverite pogoje pri svoji občini in se
          posvetujte z izkušenim izvajalcem, ki pozna lokalno prakso.
        </p>
        <p>
          Pri nas vam pri tem pomagamo že v fazi načrtovanja — svetujemo glede umestitve bazena, odmikov
          in dokumentacije. Oglejte si{' '}
          <Link href="/projekti">naše izvedene projekte</Link> in nas{' '}
          <Link href="/kontakt">kontaktirajte za nezavezujoč posvet</Link>, da skupaj poskrbimo, da bo
          vaš bazen ne le lep, ampak tudi skladen s predpisi.
        </p>
      </>
    ),
  },

  'ogrevanje-bazena-stroski': {
    title: 'Ogrevanje bazena: stroški in možnosti',
    excerpt:
      'Toplotne črpalke, solarni sistemi ali električni grelci — primerjava sistemov ogrevanja bazena, njihovih stroškov in tega, kaj se dolgoročno splača.',
    metaTitle: 'Ogrevanje bazena: stroški in možnosti | DreamPool',
    metaDescription:
      'Ogrevanje bazena 2026: primerjava toplotne črpalke, solarnih sistemov in električnih grelcev. Kateri sistem je najbolj ekonomičen in zakaj.',
    publishedAt: '2025-12-01',
    author: 'Ekipa DreamPool',
    category: 'Nasveti',
    image: heroOgrevanje,
    faqs: [
      {
        q: 'Kateri način ogrevanja bazena je najbolj ekonomičen?',
        a: 'Za večino domačih bazenov je dolgoročno najbolj ekonomična toplotna črpalka, saj iz ene enote elektrike pridobi več enot toplote (visok COP). Začetna investicija je višja, a obratovalni stroški so bistveno nižji od električnih grelcev.',
      },
      {
        q: 'Koliko stane ogrevanje bazena na sezono?',
        a: 'Strošek je odvisen od velikosti bazena, želene temperature, sistema ogrevanja in uporabe pokrivala. Pri toplotni črpalki v kombinaciji z roleto se sezonski strošek pri povprečnem družinskem bazenu pogosto giblje v razponu nekaj sto evrov.',
      },
      {
        q: 'Ali pokrivalo res zmanjša stroške ogrevanja?',
        a: 'Da, in to občutno. Največ toplote bazen izgubi z izhlapevanjem z vodne gladine. Kakovostno pokrivalo ali lamelna roleta izhlapevanje močno zmanjša, zato je to najučinkovitejši posamezni ukrep za nižje stroške ogrevanja.',
      },
    ],
    body: (
      <>
        <p>
          Ogrevan bazen podaljša kopalno sezono z nekaj poletnih tednov na več mesecev prijetnega
          kopanja — od pomladi do jeseni. A med lastniki se hitro pojavi vprašanje: <strong>koliko stane
          ogrevanje bazena in kateri sistem se dejansko splača?</strong> Odgovor je odvisen od izbire
          tehnologije, velikosti bazena in tega, kako dosledno boste bazen pokrivali.
        </p>
        <p>
          V tem vodniku primerjamo tri najpogostejše načine ogrevanja, pojasnimo njihove prednosti in
          slabosti ter pokažemo, kako lahko z nekaj premišljenimi odločitvami obratovalne stroške občutno
          znižate.
        </p>

        <BodyImage
          src="/images/pokrivala-za-bazene.webp"
          alt="Lamelna roleta, ki prekriva vodno gladino bazena in zmanjšuje izgubo toplote"
          caption="Pokrivalo je najučinkovitejši ukrep za zmanjšanje izgube toplote z bazena."
        />

        <h2>1. Toplotna črpalka — najbolj priljubljena izbira</h2>
        <p>
          <strong>Toplotna črpalka za bazen</strong> deluje podobno kot toplotna črpalka za ogrevanje
          hiše: iz zunanjega zraka odvzame toploto in jo prenese v bazensko vodo. Njena učinkovitost se
          meri s koeficientom <strong>COP (Coefficient of Performance)</strong> — vrednost COP 5 na primer
          pomeni, da iz 1 kWh elektrike pridobimo približno 5 kWh toplote.
        </p>
        <p>
          To je razlog, da je toplotna črpalka dolgoročno <strong>najbolj ekonomičen</strong> način
          ogrevanja. Začetna investicija je višja, a nizki obratovalni stroški jo v nekaj sezonah
          povrnejo. Najbolje deluje ob zmernih zunanjih temperaturah, torej prav v obdobju razširjene
          kopalne sezone.
        </p>

        <h2>2. Solarno ogrevanje — najnižji obratovalni strošek</h2>
        <p>
          Solarni sistemi vodo ogrevajo z energijo sonca, bodisi prek solarnih absorberjev (preprog) ali
          v kombinaciji s sodobnimi rešitvami. Njihova velika prednost je, da je <strong>energija
          praktično brezplačna</strong> — po začetni investiciji so obratovalni stroški minimalni.
        </p>
        <p>
          Slabost je odvisnost od vremena in sončnega obsevanja ter potreba po zadostni površini za
          namestitev. Solarno ogrevanje pogosto najbolje deluje kot <strong>dopolnilo</strong> toplotni
          črpalki, ne nujno kot edini vir toplote.
        </p>

        <BodyImage
          src="/images/Bazara/bazara_bazen.webp"
          alt="Ogrevan vkopani bazen z urejeno okolico, primeren za podaljšano kopalno sezono"
          caption="Dobro zasnovan sistem ogrevanja podaljša sezono z nekaj tednov na več mesecev."
        />

        <h2>3. Električni grelec — hiter, a drag v obratovanju</h2>
        <p>
          <strong>Električni pretočni grelec</strong> vodo segreje hitro in zanesljivo, njegova nabavna
          cena pa je nizka. Težava je v obratovanju: elektriko pretvarja v toploto v razmerju ena proti
          ena, kar pomeni <strong>visoke stroške</strong> pri rednem ogrevanju večjih količin vode.
        </p>
        <p>
          Zato je električni grelec smiseln predvsem kot rezervna ali dopolnilna rešitev, za hitro
          dogrevanje ali za manjše bazene, ne pa kot glavni vir ogrevanja celotne sezone.
        </p>

        <h2>Kako znižati stroške ogrevanja — ne glede na sistem</h2>
        <p>
          Ne glede na izbrano tehnologijo največ prihranite z ukrepi, ki preprečujejo izgubo toplote:
        </p>
        <p>
          <strong>Pokrivalo ali lamelna roleta</strong> je najpomembnejši ukrep — največ toplote bazen
          izgubi z izhlapevanjem z gladine, zato pokrita voda ostane topla bistveno dlje.{' '}
          <strong>Pravilno dimenzioniranje sistema</strong> glede na prostornino bazena prepreči
          predimenzionirane stroške, <strong>vetrna zaščita okolice</strong> in <strong>realno
          nastavljena temperatura</strong> (vsaka dodatna stopinja pomeni več porabe) pa dodatno znižajo
          račun.
        </p>

        <h2>Kateri sistem izbrati?</h2>
        <p>
          Za večino slovenskih družinskih bazenov je najboljša osnova <strong>toplotna črpalka v
          kombinaciji s kakovostnim pokrivalom</strong> — to razmerje med investicijo in obratovalnim
          stroškom se v praksi izkaže za najbolj smiselno. Kjer je na voljo dovolj prostora in sonca, je
          odlična nadgradnja solarni sistem.
        </p>
        <p>
          Optimalna rešitev je vedno odvisna od velikosti bazena, lokacije in vaših navad. Oglejte si{' '}
          <Link href="/projekti">naše projekte ogrevanih bazenov</Link> in nas{' '}
          <Link href="/kontakt">kontaktirajte za izračun in svetovanje</Link> — pomagamo vam izbrati
          sistem, ki bo vašo kopalno sezono podaljšal brez nepotrebno visokih stroškov.
        </p>
      </>
    ),
  },
}

/** Returns the static fallback article for a slug, or null if none exists. */
export function getStaticBlogPost(slug: string): StaticBlogPost | null {
  return STATIC_BLOG_POSTS[slug] ?? null
}
