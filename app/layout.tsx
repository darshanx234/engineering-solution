import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: {
    default: 'Smart Engineers | Architecture + Interior + Construction',
    template: '%s | Smart Engineers'
  },
  description: 'Smart Engineers is a premier architecture, interior design, and construction company. We design, build, and deliver exceptional residential and commercial spaces.',
  keywords: ['architecture', 'interior design', 'construction', 'turnkey projects', 'civil engineering', 'Smart Engineers'],
  authors: [{ name: 'Smart Engineers' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://smartengineers.in',
    siteName: 'Smart Engineers',
    title: 'Smart Engineers | Architecture + Interior + Construction',
    description: 'Design. Build. Deliver. Premier architecture and construction services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Engineers | Architecture + Interior + Construction',
    description: 'Design. Build. Deliver. Premier architecture and construction services.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
