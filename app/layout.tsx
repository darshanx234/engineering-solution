import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Preloader } from "@/components/preloader"
import { SmoothScroll } from "@/components/smooth-scroll"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: {
    default: 'Smart Engineers | Architecture + Interior + Construction',
    template: '%s | Smart Engineers'
  },
  description: 'Smart Engineers is a premier architecture, interior design, and construction company based in Gujarat. We design, build, and deliver exceptional residential and commercial spaces with precision and elegance.',
  keywords: [
    'architecture', 'interior design', 'construction', 'turnkey projects',
    'civil engineering', 'Smart Engineers', 'Gujarat', 'residential design',
    'commercial construction', 'home design Gujarat', 'building contractor Ratanpar'
  ],
  authors: [{ name: 'Smart Engineers', url: 'https://smartengineers.in' }],
  creator: 'Smart Engineers',
  publisher: 'Smart Engineers',
  metadataBase: new URL('https://smartengineers.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://smartengineers.in',
    siteName: 'Smart Engineers',
    title: 'Smart Engineers | Architecture + Interior + Construction',
    description: 'Design. Build. Deliver. Premier architecture, interior design and construction services across Gujarat.',
    images: [
      {
        url: '/logo.svg',
        width: 526,
        height: 330,
        alt: 'Smart Engineers Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Engineers | Architecture + Interior + Construction',
    description: 'Design. Build. Deliver. Premier architecture and construction services across Gujarat.',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-256x256.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-167x167.png', sizes: '167x167', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.svg',
    other: [
      { rel: 'mask-icon', url: '/icon.svg', color: '#bbbaaf' },
    ],
  },
  manifest: undefined,
  alternates: {
    canonical: 'https://smartengineers.in',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
