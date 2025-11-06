import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

// Fonts configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Site metadata
export const metadata: Metadata = {
  title: {
    default: 'Weena Decor - Peinture et Décoration Bordeaux',
    template: '%s | Weena Decor',
  },
  description:
    'Artisan peintre à Bordeaux. Peinture intérieure, papier peint, décors muraux. Devis gratuit. Zone: Bordeaux et agglomération.',
  keywords: [
    'peinture bordeaux',
    'décoration intérieure',
    'artisan peintre',
    'papier peint',
    'décors muraux',
    'bruges',
    'gironde',
  ],
  authors: [{ name: 'Weena Decor' }],
  creator: 'Weena Decor',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Weena Decor',
    title: 'Weena Decor - Peinture et Décoration Bordeaux',
    description:
      'Artisan peintre à Bordeaux. Peinture intérieure, papier peint, décors muraux.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Weena Decor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weena Decor',
    description: 'Artisan peintre à Bordeaux',
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
