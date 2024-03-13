import MainNav from '@/components/layout/Header'
import { cn } from '@/lib/utils'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import Providers from '../lib/providers/providers'
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const geist = GeistSans

export const metadata: Metadata = {
  title: 'Your PC Parts',
  description: "Just PC Parts. That's all you need.",
  creator: "Freki Managarm",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        geist.variable
      )}>
        <Providers>
          <MainNav />
          {children}
        </Providers>
        <SpeedInsights />
        <Analytics />
        <Toaster closeButton />
      </body>
    </html>
  )
}
