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

const components: { title: string, href: string, description: string }[] = [
  {
    title: "Processor",
    href: "/cpu",
    description: "The CPU in a PC acts as the brain, swiftly processing instructions and making decisions to drive the computer's actions and tasks",
  },
  {
    title: "Graphics Card",
    href: "/components/gpu",
    description: "A graphics card in a PC is like an artist, meticulously rendering images and videos to bring the visual elements of games and multimedia to life on your screen"
  },
  {
    title: "SSD",
    href: "/components/ssd",
    description: "An SSD, or Solid State Drive, in a PC is like a lightning-fast vault, storing data on flash memory chips for quicker access and faster boot times compared to traditional hard drives"
  },
  {
    title: "Hard Drive",
    href: "/components/hdd",
    description: "The HDD, or Hard Disk Drive, in a PC serves as a vast library, storing all your files, programs, and the operating system, like a digital warehouse for data"
  },
  {
    title: "Case",
    href: "/components/case",
    description: "The case of a PC is like the skeleton of the system, providing structure and protection to the components inside while often showcasing the machine's personality through its design and lighting"
  },
  {
    title: "RAM",
    href: "/components/ram",
    description: "RAM in a PC acts like a super-fast scratchpad, temporarily holding data for quick access and smooth operation, allowing the computer to multitask efficiently"
  },
  {
    title: "Cooling",
    href: "/components/cooling",
    description: "In a PC, cooling is achieved through a network of fans and heatsinks, which work together like a mini air conditioning unit to prevent the computer's brain—the CPU—from overheating"
  },
  {
    title: "Power Supply",
    href: "/components/psu",
    description: "The power supply in a PC converts electricity from your wall outlet into a usable form for the computer's internal components, like the motherboard, CPU, and hard drives",
  },
  {
    title: "Motherboard",
    href: "/components/motherboard",
    description: "The motherboard is the main circuit board in a PC that connects and allows communication between crucial components like the CPU, RAM, and hard drives",
  },
  {
    title: "Headphones",
    href: "/components/headphones",
    description: "De bons écouteurs pour une bonne écoute ou pour détecter vos ennemis !",
  },
  {
    title: "Keyboard",
    href: "/components/keyboard",
    description: "Un clavier adapté pour vos usages est un confort assuré",
  },
  {
    title: "Monitor",
    href: "/components/monitor",
    description: "Un bon écran. Pour aller plus loin !",
  },
  {
    title: "Mouse",
    href: "/components/mouse",
    description: "Un mulot rapide pour les plus aguéris",
  },
  {
    title: "Sound Card",
    href: "/components/sound-card",
    description: "",
  },
  {
    title: "Speaker",
    href: "/components/speaker",
    description: "",
  },
  {
    title: "Thermal Paste",
    href: "/components/thermal-paste",
    description: "",
  },
  {
    title: "Webcam",
    href: "/components/webcam",
    description: "",
  },
]

const features : { title: string, href: string, description: string }[] = [
  {
    title: "Our API",
    href: "/our-api",
    description: "Enjoy our API today too!"
  },
  {
    title: "Configurator",
    href: "/configurator",
    description: "Our foolproof PC configurator! Build the PC of your dreams !"
  }
];

export default function MainNav() {
  return (
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
            <NavigationMenuTrigger className='bg-transparent rounded-full dark:bg-transparent hover:bg-gray-100 hover:dark:bg-gray-800'>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
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
          <NavigationMenuItem className='bg-transparent rounded-full hover:bg-gray-100 hover:dark:bg-gray-800'>
          <NavigationMenuTrigger className='bg-transparent rounded-full dark:bg-transparent hover:bg-gray-100 hover:dark:bg-gray-800'>Features</NavigationMenuTrigger>
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
          <NavigationMenuItem className='bg-transparent rounded-full transition-all hover:bg-gray-100 hover:dark:bg-gray-800'>
            <Link href="/our-api" legacyBehavior passHref>
              <NavigationMenuLink className={cn(
                "bg-transparent hover:bg-transparent focus:bg-transparent",
                navigationMenuTriggerStyle()
              )}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link href="/login" className='px-3 py-2 rounded-full shadow-lg bg-gray-800/80 transition-all duration-100 hover:bg-gray-600'>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
