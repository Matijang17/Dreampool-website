import './globals.css' // ali karkoli je vaša globalna CSS datoteka

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl">
      <head>
        {/* Google Tag Manager - gtag.js */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', { 'anonymize_ip': true }); // Dodajte anonymize_ip za skladnost z GDPR
            // Initial consent state (default to denied until user interacts with banner)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `,
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}