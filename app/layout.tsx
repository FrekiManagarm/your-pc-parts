import MainNav from '@/components/layout/Header'
import { cn } from '@/lib/utils'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import Providers from './Providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" })

export const metadata: Metadata = {
  title: 'YourPCParts',
  description: "Just PC Parts. That's all you need.",
  creator: "Freki Managarm",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className='dark'>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <Providers>
          <MainNav />
          {children}
        </Providers>
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  )
}
