# DreamPool — Next.js 14 + Sanity v3

Premium bazenski website z CMS za blog in projekte.

---

## 🚀 Quickstart (lokalno)

```bash
# 1. Namestite odvisnosti
npm install

# 2. Kopirajte env datoteko
cp .env.local.example .env.local

# 3. Zaženite razvojni strežnik
npm run dev
```

Odprite [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Sanity CMS Setup (OBVEZNO)

### Korak 1: Ustvarite Sanity projekt

Greste na [sanity.io](https://sanity.io), se registrirate (brezplačno) in:

```bash
npm create sanity@latest -- --project <vaš-project-id> --dataset production
```

Ali pa zaženite v projektu:

```bash
npx sanity init
```

### Korak 2: Dodajte environment variables

Uredite `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxxxxxx   ← iz sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=xxxxxxxxxxxxxxxxxxxx        ← ustvarite v sanity.io/manage → API → Tokens
NEXT_PUBLIC_SITE_URL=https://dreampool.si
```

### Korak 3: CMS Login

Ko dodate project ID, odprite:

```
http://localhost:3000/studio
```

Tu imate Sanity Studio — vaš CMS. Tukaj:
- 📝 Objavljate **blog članke**
- 🏊 Dodajate **projekte** (s slikami, lokacijo, tipom)
- 👤 Upravljate **avtorje** in **kategorije**

---

## 📧 Kontaktna forma — Email Setup

Izberite eno možnost in odkomentirajte kodo v `app/api/contact/route.ts`:

### Možnost A: Resend (priporočeno — brezplačno do 3000/mesec)

```bash
npm install resend
```

Registrirajte se na [resend.com](https://resend.com) in dodajte v `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=info@dreampool.si
```

### Možnost B: Nodemailer (SMTP)

```bash
npm install nodemailer @types/nodemailer
```

Dodajte v `.env.local`:

```
SMTP_HOST=mail.dreampool.si
SMTP_USER=info@dreampool.si
SMTP_PASS=vaše_geslo
CONTACT_EMAIL=info@dreampool.si
```

---

## 📁 Struktura projekta

```
dreampool/
├── app/
│   ├── layout.tsx              ← Root layout (Header, Footer, fonts)
│   ├── page.tsx                ← Homepage
│   ├── globals.css             ← Global styles
│   ├── sitemap.ts              ← Auto SEO sitemap
│   ├── robots.ts               ← robots.txt
│   ├── not-found.tsx           ← 404 stran
│   ├── (site)/                 ← Vse podstrani (route group)
│   │   ├── gradnja-bazenov/
│   │   ├── bazeni/
│   │   │   ├── fiberglass-bazeni/
│   │   │   ├── vkopani-bazeni/
│   │   │   ├── overflow-bazeni/
│   │   │   └── wellness-bazeni/
│   │   ├── servis/
│   │   ├── projekti/
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   ├── kontakt/
│   │   ├── ponudba/            ← ⭐ Glavni conversion page
│   │   └── zasebnost/
│   ├── api/
│   │   └── contact/route.ts    ← Contact form API
│   └── studio/[[...tool]]/     ← Sanity CMS Studio
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/               ← Homepage sekcije
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── BlogPreviewSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── ContactForm.tsx     ← Lead forma z vsemi polji
│       └── StickyContact.tsx   ← Floating kontakt gumbi
├── sanity/
│   ├── lib/client.ts           ← Sanity client + queries
│   └── schemas/                ← CMS data modeli
│       ├── post.ts
│       ├── project.ts
│       ├── category.ts
│       └── author.ts
├── sanity.config.ts            ← Sanity Studio konfiguracija
├── tailwind.config.ts
├── next.config.js
└── .env.local.example
```

---

## 🎨 Barve (brand)

```
Navy:       #0A1628  ← Osnovno ozadje
Deep:       #0D1F3C  ← Sekundarno ozadje (kartice)
Blue:       #1B4F8A  ← Srednji modri ton
Accent:     #2196C9  ← CTA akcenti
Gold:       #C9A84C  ← ⭐ Brand gold (naslovi, CTA gumbi)
Gold-light: #E8C97A  ← Hover stanje za gold
White:      #F8FAFC  ← Tekst
Gray:       #94A3B8  ← Sekundarni tekst
```

---

## 🌐 Deploy na Vercel (priporočeno)

```bash
# 1. Push na GitHub
git init && git add . && git commit -m "initial"
git remote add origin https://github.com/vaš-username/dreampool.git
git push -u origin main

# 2. Pojdite na vercel.com → New Project → Import vaš repo
# 3. Dodajte Environment Variables iz .env.local
# 4. Deploy!
```

### Vercel Environment Variables (dodajte v dashboard):

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_API_VERSION
SANITY_API_TOKEN
NEXT_PUBLIC_SITE_URL
RESEND_API_KEY (ali SMTP_*)
CONTACT_EMAIL
```

---

## 📝 Kako objavljati blog

1. Pojdite na `https://dreampool.si/studio`
2. Prijavite se z vašim Sanity računom
3. Kliknite **Blog Objave** → **+ New**
4. Izpolnite: naslov, slug (URL), slika, vsebina
5. Kliknite **Publish**
6. Članek se takoj pojavi na `/blog`

---

## 🔍 SEO Strani (URL struktura)

| URL | Ključna beseda |
|-----|----------------|
| `/` | dreampool, bazeni slovenija |
| `/gradnja-bazenov` | gradnja bazenov, novogradnja bazena |
| `/bazeni/fiberglass-bazeni` | fiberglass bazeni |
| `/bazeni/vkopani-bazeni` | vkopani bazeni |
| `/bazeni/overflow-bazeni` | overflow bazen |
| `/bazeni/wellness-bazeni` | wellness bazen, jacuzzi |
| `/servis` | servis bazenov, vzdrževanje |
| `/projekti` | bazeni projekti, reference |
| `/blog` | nasveti o bazenih |
| `/ponudba` | ponudba za bazen |

---

## 📞 Kontaktni podatki (posodobite)

Iskanje v kodi: `070 579 648`, `info@dreampool.si`, `Vogrsko 172`

Te najdete v:
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`
- `app/(site)/kontakt/page.tsx`
- `app/(site)/ponudba/page.tsx`
- `app/page.tsx` (schema.org)

---

## ❓ Pogosta vprašanja

**Q: Sanity Studio ne deluje?**
Preverite da ste dodali `NEXT_PUBLIC_SANITY_PROJECT_ID` v `.env.local` in da ste dodali `localhost:3000` v Sanity CORS settings (sanity.io/manage → API → CORS).

**Q: Slike se ne naložijo?**
Slike so direktni Sanity CDN URL-ji — delujejo takoj po setup-u. Za lastne slike jih naložite v Sanity Studio.

**Q: Kontaktna forma ne pošilja e-mailov?**
Odkomentirajte Resend ali Nodemailer kodo v `app/api/contact/route.ts` in dodajte API ključe.
