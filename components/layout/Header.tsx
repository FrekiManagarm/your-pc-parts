"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LoggedInButton } from "../AuthentificationPage/LoggedInButton";
import { components, features } from "../main-nav-links";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Menu } from "lucide-react";

export default function MainNav() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return pathname == "/login" || pathname == "/dashboard" ? null : (
    <>
      <header className="md:flex flex-row pt-0 md:pt-6 hidden">
        <motion.div className="mx-auto flex w-full flex-row items-center justify-between rounded-none bg-white bg-opacity-80 px-5 py-1 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:w-fit md:rounded-full dark:border-black/40 dark:bg-gray-800/60 dark:bg-opacity-75">
          <Link href="/">
            <Image
              src="/logo-ypcp.png"
              alt="logo website"
              width={40}
              height={40}
              className="rounded-md"
            />
          </Link>
          <NavigationMenu className="flex w-fit flex-wrap items-center gap-y-1 pl-5 pr-5 text-[0.9rem] font-medium lg:w-[initial] lg:flex-nowrap lg:gap-5">
            <NavigationMenuList>
              <NavigationMenuItem className="pl-5">
                <NavigationMenuTrigger className="hover:bg-primary/50 dark:text-white hover:dark:bg-primary/50 rounded-full bg-transparent hover:text-white focus:text-white">
                  Components
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
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
                <NavigationMenuTrigger className="hover:bg-primary/50 hover:dark:bg-primary/50 dark:text-white focus:bg-primary/50 focus:dark:bg-primary/50 rounded-full bg-transparent hover:text-white focus:text-white">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
              <NavigationMenuItem className="hover:bg-primary/50 hover:dark:bg-primary/50 dark:text-white focus:bg-primary/50 focus:dark:bg-primary/50 rounded-full bg-transparent hover:text-white focus:text-white">
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "bg-transparent hover:bg-transparent focus:bg-transparent",
                      navigationMenuTriggerStyle(),
                    )}
                  >
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="hover:bg-primary/60 hover:dark:bg-primary/60 dark:text-white focus:bg-primary/60 focus:dark:bg-primary/60 rounded-full bg-transparent hover:text-white focus:text-white hover:dark:text-white">
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "bg-transparent hover:bg-transparent focus:bg-transparent",
                      navigationMenuTriggerStyle(),
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {session?.user ? (
            <LoggedInButton user={session.user} />
          ) : (
            <Link
              href="/api/auth/signin"
              className="from-primary to-secondary rounded-xl bg-gradient-to-br px-3 py-1 font-bold text-white"
            >
              Login
            </Link>
          )}
        </motion.div>
      </header>
      <header className="md:hidden flex flex-row justify-between items-center h-20 shadow-md bg-white px-5">
        <Image
          src="/logo-ypcp.png"
          width={40}
          height={40}
          alt="logo website"
          className="rounded-lg"
        />
        {session?.user ? (
          <LoggedInButton user={session.user} />
        ) : (
          <Link
            href="/api/auth/signin"
            className="from-primary to-secondary rounded-xl bg-gradient-to-br px-3 py-1 font-bold text-white"
          >
            Login
          </Link>
        )}
      </header>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          {...props}
          className={cn(
            "from-primary/70 to-secondary/50 focus:bg-accent focus:text-accent-foreground group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r",
            className,
          )}
        >
          <div className="text-lg font-semibold leading-none group-hover:text-white">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug text-gray-600 group-hover:text-gray-100">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
