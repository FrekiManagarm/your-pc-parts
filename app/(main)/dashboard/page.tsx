import { authConfig } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import React from 'react'

export default async function DashboardHomePage() {
  const session = await getServerSession(authConfig);

  return (
    <>

    </>
  )
}