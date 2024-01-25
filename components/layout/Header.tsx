"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LoggedInButton } from '../authentification/LoggedInButton';
import { components, features } from '../main-nav-links';

export default function MainNav() {

  const pathname = usePathname()
  const { data: session } = useSession();


  return pathname == "/login" ||
    pathname == "/dashboard" ? null : (
    <header
      className='flex flex-row md:pt-6 pt-0'
    >
      <motion.div className='md:w-fit w-full flex flex-row justify-between items-center mx-auto px-5 py-1 md:rounded-full rounded-none bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'>
        <Link
          href="/"
        >
          <Image src="/logo-ypcp.png" alt='logo website' width={40} height={40} className='rounded-md' />
        </Link>
        <NavigationMenu className='flex items-center w-fit flex-wrap gap-y-1 text-[0.9rem] font-medium lg:w-[initial] lg:flex-nowrap lg:gap-5 pl-5 pr-5'>
          <NavigationMenuList>
            <NavigationMenuItem className='pl-5'>
              <NavigationMenuTrigger className='bg-transparent rounded-full dark:bg-primary/50 hover:text-white focus:text-white hover:bg-primary/50 hover:dark:bg-primary/50'>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]'>
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-transparent rounded-full dark:bg-primary/50 hover:bg-primary/50 hover:text-white focus:text-white hover:dark:bg-primary/50 focus:bg-primary/50 focus:dark:bg-primary/50'>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                  {features.map((feature) => (
                    <ListItem
                      key={feature.title}
                      title={feature.title}
                      href={feature.href}
                    >
                      {feature.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className='bg-transparent rounded-full hover:bg-primary/50 hover:dark:bg-primary/50 focus:bg-primary/50 focus:dark:bg-primary/50 hover:text-white focus:text-white'>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "bg-transparent hover:bg-transparent focus:bg-transparent",
                  navigationMenuTriggerStyle()
                )}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='bg-transparent rounded-full hover:bg-primary/60 hover:text-white hover:dark:bg-primary/60 hover:dark:text-white focus:text-white focus:bg-primary/60 focus:dark:bg-primary/60'>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "bg-transparent hover:bg-transparent focus:bg-transparent",
                  navigationMenuTriggerStyle()
                )}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {session?.user ?
          <LoggedInButton user={session.user} />
          :
          <Link href="/api/auth/signin" className='px-3 py-1 rounded-xl font-bold bg-gradient-to-br from-primary to-secondary text-white'>
            Login
          </Link>
        }
      </motion.div>
    </header>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          {...props}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r from-primary/70 to-secondary/50 group focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className='text-lg font-semibold leading-none group-hover:text-white'>{title}</div>
          <p className='line-clamp-2 text-sm text-gray-600 leading-snug group-hover:text-gray-100 text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

