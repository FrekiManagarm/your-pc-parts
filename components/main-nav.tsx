"use client"

import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from './ui/navigation-menu';
import { cn } from '@/lib/utils';
import { components, features } from './main-nav-links';
import { usePathname, useRouter } from 'next/navigation'; 

export default function MainNav() {

  const pathname = usePathname()

  return pathname == "/login" ||
        pathname == "/dashboard" ? null : (
    <motion.header
      className='flex flex-row items-center justify-between px-5 fixed top-0 lg:left-[25rem] sm:left-0 h-[7rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] lg:top-6 lg:h-[3.25rem] lg:w-[45rem] lg:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
    >
      <Link
        href="/"
      >
        <Image src="https://i.imgur.com/RyzFxN9.png" alt='logo website' width={40} height={40} className='rounded-full' />
      </Link>
      <NavigationMenu className='flex items-center w-[28rem] flex-wrap gap-y-1 text-[0.9rem] font-medium lg:w-[initial] lg:flex-nowrap lg:gap-5 pl-5'>
        <NavigationMenuList>
          <NavigationMenuItem className='pl-5'>
            <NavigationMenuTrigger className='bg-transparent rounded-full dark:bg-accent/50 hover:bg-accent/50 hover:dark:bg-accent/50'>Components</NavigationMenuTrigger>
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
          <NavigationMenuItem className=''>
          <NavigationMenuTrigger className='bg-transparent rounded-full dark:bg-accent/50 hover:bg-accent/50 hover:dark:bg-accent/50 focus:bg-accent/50 focus:dark:bg-accent/50'>Features</NavigationMenuTrigger>
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
          <NavigationMenuItem className='bg-transparent rounded-full transition-all duration-300 hover:bg-accent/50 hover:dark:bg-accent/50 focus:bg-accent/50 focus:dark:bg-accent/50'>
            <Link href="/our-api" legacyBehavior passHref>
              <NavigationMenuLink className={cn(
                "bg-transparent hover:bg-transparent focus:bg-transparent",
                navigationMenuTriggerStyle()
              )}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='bg-transparent rounded-full transition-all duration-300 hover:bg-accent/50 hover:dark:bg-accent/50 focus:bg-accent/50 focus:dark:bg-accent/50'>
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
      <Link href="/login" className='px-3 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl bg-white hover:bg-secondary hover:text-white focus:bg-secondary focus:dark:bg-secondary'>
        Login
      </Link>
    </motion.header>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary group focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className='text-lg font-semibold leading-none group-hover:text-white'>{title}</div>
          <p className='line-clamp-2 text-sm text-gray-600 leading-snug group-hover:text-gray-300 text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
