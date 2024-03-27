"use client"

import { useSession } from "next-auth/react";
import Image from "next/image"
import Link from "next/link";
import { Boxes, UserRoundCog, Cog, Share2, Home } from "lucide-react";
import { redirect, usePathname } from "next/navigation"
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const DashboardNavbar = () => {

  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="h-[95%] w-1/6 bg-card border border-white/20 shadow-md rounded-xl m-5 p-3 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex flex-row justify-start items-center">
          <Link href="/">
            <Image
              src='/logo-ypcp.png'
              alt="Site logo"
              width={50}
              height={50}
              className="rounded-xl"
            />
          </Link>
          <span className="px-1" />
          <h3 className="font-bold text-xl">Your PC Parts</h3>
        </div>
        <span className="h-[0.1rem] bg-white/20 mt-1 mb-5" />
        <div className="flex flex-col gap-3">
          <Link href="/dashboard" className={cn("w-full rounded-lg p-2 text-white font-medium flex flex-row justify-start items-center gap-2", pathname == "/dashboard" ? "bg-primary" : "hover:bg-accent")}>
            <Home />
            <p>Home</p>
          </Link>
          <Link
            href="/dashboard/configs"
            className={cn("w-full rounded-lg p-2 text-white font-medium flex flex-row justify-start items-center gap-2", pathname == "/dashboard/configs" ? "bg-primary" : "hover:bg-accent")}
          >
            <Boxes fontSize={12} />
            <p>Configurations</p>
          </Link>
          <Link href="/dashboard/manage" className={cn("w-full rounded-lg p-2 text-white font-medium flex flex-row justify-start items-center gap-2", pathname == "/dashboard/manage" ? "bg-primary" : "hover:bg-accent")}>
            <Cog />
            <p>Management</p>
          </Link>
          <Link href="/dashboard/api" className={cn("w-full rounded-lg p-2 text-white font-medium flex flex-row justify-start items-center gap-2", pathname == "/dashboard/api" ? "bg-primary" : "hover:bg-accent")}>
            <Share2 />
            <p>API</p>
          </Link>
        </div>
      </div>
      <div>
        <span className="h-[0.1rem] bg-white/20 mt-1 mb-5" />
        <div className="flex flex-row justify-center items-center p-2 gap-1">
          <Image
            src={session?.user.image as string}
            alt={`${session?.user.name} image`}
            width={30}
            height={30}
            className="rounded-xl"
          />
          <span className="" />
          <h2>{session?.user.name}</h2>
        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar