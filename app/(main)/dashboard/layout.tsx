import DashboardNavbar from '@/components/DashboardPage/DashboardNavbar'
import { authConfig } from '@/pages/api/auth/[...nextauth]'
import { UserRole } from '@prisma/client'
import { Session, getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React from 'react'
import type { PropsWithChildren } from 'react'

export default function DashboardLayout({ children }: PropsWithChildren) {

  return (
    <div className='w-screen h-screen flex flex-row justify-start'>
      <DashboardNavbar />
      <div className='w-5/6 h-[95%] m-5'>
        {children}
      </div>
    </div>
  )
}
