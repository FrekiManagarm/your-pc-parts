import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import MainNav from '@/components/main-nav'

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" })

export const metadata: Metadata = {
  title: 'YourPCParts',
  description: 'Generated by create next app',
  creator: "Freki Managarm",
  icons: {
    icon: "/logo.png"
  },
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
          <MainNav />
          {children}
      </body>
    </html>
  )
}
