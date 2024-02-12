"use client"

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function MainNav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-6 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/290shots_so_gruelx.png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/155shots_so_acab66.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/53shots_so_wygjpf.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109139/framer%20motion%20components/356shots_so_hwpzvs.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

// export default function MainNav() {

//   const pathname = usePathname()
//   const { data: session } = useSession();


//   return pathname == "/login" ||
//     pathname == "/dashboard" ? null : (
//     <header
//       className='flex flex-row md:pt-6 pt-0'
//     >
//       <motion.div className='md:w-fit w-full flex flex-row justify-between items-center mx-auto px-5 py-1 md:rounded-full rounded-none bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'>
//         <Link
//           href="/"
//         >
//           <Image src="/logo-ypcp.png" alt='logo website' width={40} height={40} className='rounded-md' />
//         </Link>
//         <NavigationMenu className='flex items-center w-fit flex-wrap gap-y-1 text-[0.9rem] font-medium lg:w-[initial] lg:flex-nowrap lg:gap-5 pl-5 pr-5'>
//           <NavigationMenuList>
//             <NavigationMenuItem className='pl-5'>
//               <NavigationMenuTrigger className='bg-transparent rounded-full dark:bg-primary/50 hover:text-white focus:text-white hover:bg-primary/50 hover:dark:bg-primary/50'>Components</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <ul className='grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]'>
//                   {components.map((component) => (
//                     <ListItem
//                       key={component.title}
//                       title={component.title}
//                       href={component.href}
//                     >
//                       {component.description}
//                     </ListItem>
//                   ))}
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger className='bg-transparent rounded-full dark:bg-primary/50 hover:bg-primary/50 hover:text-white focus:text-white hover:dark:bg-primary/50 focus:bg-primary/50 focus:dark:bg-primary/50'>Features</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
//                   {features.map((feature) => (
//                     <ListItem
//                       key={feature.title}
//                       title={feature.title}
//                       href={feature.href}
//                     >
//                       {feature.description}
//                     </ListItem>
//                   ))}
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem className='bg-transparent rounded-full hover:bg-primary/50 hover:dark:bg-primary/50 focus:bg-primary/50 focus:dark:bg-primary/50 hover:text-white focus:text-white'>
//               <Link href="/pricing" legacyBehavior passHref>
//                 <NavigationMenuLink className={cn(
//                   "bg-transparent hover:bg-transparent focus:bg-transparent",
//                   navigationMenuTriggerStyle()
//                 )}>
//                   Pricing
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem className='bg-transparent rounded-full hover:bg-primary/60 hover:text-white hover:dark:bg-primary/60 hover:dark:text-white focus:text-white focus:bg-primary/60 focus:dark:bg-primary/60'>
//               <Link href="/about" legacyBehavior passHref>
//                 <NavigationMenuLink className={cn(
//                   "bg-transparent hover:bg-transparent focus:bg-transparent",
//                   navigationMenuTriggerStyle()
//                 )}>
//                   About
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//         {session?.user ?
//           <LoggedInButton user={session.user} />
//           :
//           <Link href="/api/auth/signin" className='px-3 py-1 rounded-xl font-bold bg-gradient-to-br from-primary to-secondary text-white'>
//             Login
//           </Link>
//         }
//       </motion.div>
//     </header>
//   );
// }

// const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           {...props}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r from-primary/70 to-secondary/50 group focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//         >
//           <div className='text-lg font-semibold leading-none group-hover:text-white'>{title}</div>
//           <p className='line-clamp-2 text-sm text-gray-600 leading-snug group-hover:text-gray-100 text-muted-foreground'>
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2 hover:bg-gradient-to-r from-primary/70 to-secondary/50 group focus:bg-accent focus:text-accent-foreground">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white group-hover:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300 group-hover:text-gray-100 text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};


