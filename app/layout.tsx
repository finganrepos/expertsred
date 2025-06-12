import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { TooltipProvider } from "../components/ui/tooltip"
import { Toaster } from "../components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Experts.Red - Premium Software Development Consultancy',
  description: 'US-based team of elite software engineers building, optimizing, and scaling world-class applications while leveling up your team.',
  keywords: 'software development, consulting, React, Next.js, mobile apps, AI, machine learning, web development',
  authors: [{ name: 'Experts.Red' }],
  openGraph: {
    title: 'Experts.Red - Premium Software Development Consultancy',
    description: 'US-based team of elite software engineers building world-class applications',
    url: 'https://experts.red',
    siteName: 'Experts.Red',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experts.Red - Premium Software Development Consultancy',
    description: 'US-based team of elite software engineers building world-class applications',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  )
}