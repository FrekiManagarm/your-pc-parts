import MainNav from '@/components/layout/Header'
import { cn } from '@/lib/utils'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import Providers from './providers'
import { GeistSans } from 'geist/font/sans';
import './globals.css'

// const inter = Inter({ subsets: ['latin'], variable: "--font-sans" })
const geist = GeistSans

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
        <Toaster />
      </body>
    </html>
  )
}
