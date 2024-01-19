import Image from 'next/image'
import React from 'react'
import { Typography } from '../ui/typography'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t border-border'>
        <div className="m-auto w-full max-w-3xl px-2 py-4">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className='flex flex-row items-center gap-2'>
                    <Image 
                        src="https://i.imgur.com/RyzFxN9.png"
                        width={40}
                        height={30}
                        alt='app logo'
                    />
                    <Typography variant="base" as={Link} href="/">
                        Your PC Parts
                    </Typography>
                </div>
                <div className='flex flex-col items-end gap-2 text-sm text-muted-foreground'>
                    <Link className='hover:underline' href="/privacy">
                        Privacy
                    </Link>
                    <Link className='hover:underline' href="/about">
                        About
                    </Link>
                    <Link className='hover:underline' href="/our-api">
                        Our API
                    </Link>
                    <Link className='hover:underline' href="/dashboard">
                        Dashboard
                    </Link>
                </div>
            </div>
            <div className='flex w-full items-center justify-center'>
                <Typography variant="base" className='text-xs text-muted-foreground'>
                    &copy; {new Date().getFullYear()} Your PC Parts
                </Typography>
            </div>
        </div>
    </footer>
  )
}

export default Footer