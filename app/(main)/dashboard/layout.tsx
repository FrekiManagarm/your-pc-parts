import React from 'react'
import type { PropsWithChildren } from 'react'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className='w-screen h-screen flex flex-row'>
      {children}
    </div>
  )
}
