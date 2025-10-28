import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'El Gran Salto | Producción Documental Deportiva en México',
    template: '%s | El Gran Salto',
  },
  description:
    'Productora especializada en documentales deportivos. Creamos historias que trascienden el juego. Portfolio de proyectos con atletas de élite.',
  keywords: [
    'producción documental deportivo',
    'productora video deportivo México',
    'documentales deportivos',
    'video producción deportiva',
    'filmación eventos deportivos',
    'producción audiovisual deportes',
  ],
  authors: [{ name: 'El Gran Salto' }],
  creator: 'El Gran Salto',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://elgransalto.com',
    siteName: 'El Gran Salto',
    title: 'El Gran Salto | Producción Documental Deportiva en México',
    description:
      'Productora especializada en documentales deportivos. Creamos historias que trascienden el juego.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'El Gran Salto - Producción Documental Deportiva',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Gran Salto | Producción Documental Deportiva',
    description: 'Creamos historias que trascienden el juego.',
    images: ['/images/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoProductionCompany',
              name: 'El Gran Salto',
              description: 'Productora especializada en documentales deportivos',
              url: 'https://elgransalto.com',
              logo: 'https://elgransalto.com/images/logo.png',
              email: 'hola@sutilde.com',
              telephone: '+526144273301',
              sameAs: [
                'https://www.instagram.com/elgransalto',
                'https://www.facebook.com/elgransalto',
                'https://www.youtube.com/@elgransalto',
              ],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'MX',
                addressLocality: 'Ciudad de México',
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
