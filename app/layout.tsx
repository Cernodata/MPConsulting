import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Build Clarity',
    default: 'Build Clarity | Renovation Consultants Cheshire & Manchester',
  },
  description: 'Expert pre-purchase renovation consulting in Cheshire. Specialising in Knutsford, Wilmslow, Hale, and Alderley Edge. Get accurate costs and design advice before you buy.',
  keywords: 'renovation consultant Cheshire, pre-purchase survey Knutsford, house refurbishment Wilmslow, property advice Alderley Edge, renovation costs Hale, Build Clarity',
  metadataBase: new URL('https://www.buildclarity.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Build Clarity | Expert Renovation Consulting',
    description: 'Don\'t buy a money pit. Get expert construction advice, cost estimates, and design feasibility before you exchange contracts.',
    url: 'https://www.buildclarity.co.uk',
    siteName: 'Build Clarity',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Consultant',
  'name': 'Build Clarity',
  'image': 'https://www.buildclarity.co.uk/logos/build-clarity-logo.svg',
  'description': 'Pre-purchase renovation consulting for high-value properties in Cheshire and Manchester.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Princess Street',
    'addressLocality': 'Knutsford',
    'addressRegion': 'Cheshire',
    'addressCountry': 'UK'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 53.3008,
    'longitude': -2.3753
  },
  'url': 'https://www.buildclarity.co.uk',
  'telephone': '+441234567890',
  'areaServed': [
    { '@type': 'Place', 'name': 'Knutsford' },
    { '@type': 'Place', 'name': 'Wilmslow' },
    { '@type': 'Place', 'name': 'Alderley Edge' },
    { '@type': 'Place', 'name': 'Hale' },
    { '@type': 'Place', 'name': 'Bowdon' },
    { '@type': 'Place', 'name': 'Prestbury' },
    { '@type': 'Place', 'name': 'Altrincham' },
    { '@type': 'Place', 'name': 'Cheshire' }
  ],
  'priceRange': '££'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

