import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://amanosdijital.com'),
  title: 'Amanos Dijital — Dijital Çözüm Ortağınız',
  description: 'İzmir ve Hatay merkezli dijital ajans. Web sitesi, logo tasarım, SEO ve sosyal medya yönetimi hizmetleri.',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://amanosdijital.com/#organization',
      name: 'Amanos Dijital',
      url: 'https://amanosdijital.com',
      telephone: '+905445317980',
      email: 'info@amanosdijital.com',
      description:
        'İzmir ve Hatay merkezli dijital ajans. Web sitesi tasarımı, logo, SEO ve sosyal medya yönetimi hizmetleri.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İzmir',
        addressRegion: 'Hatay',
        addressCountry: 'TR',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://amanosdijital.com/#localbusiness',
      name: 'Amanos Dijital',
      url: 'https://amanosdijital.com',
      telephone: '+905445317980',
      email: 'info@amanosdijital.com',
      description:
        'İzmir ve Hatay merkezli dijital ajans. Web sitesi tasarımı, logo, SEO ve sosyal medya yönetimi hizmetleri.',
      priceRange: '₺₺',
      areaServed: ['İzmir', 'Hatay', 'TR'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İzmir',
        addressRegion: 'Hatay',
        addressCountry: 'TR',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#F8FAFF] text-[#0A1628]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
