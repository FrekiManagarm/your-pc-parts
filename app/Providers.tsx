'use client'

import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'

const queryClient = new QueryClient()

export default function Providers({ children }: PropsWithChildren) {
  return (
    
        <SessionProvider>
          {children}
        </SessionProvider>
    
  )
}
