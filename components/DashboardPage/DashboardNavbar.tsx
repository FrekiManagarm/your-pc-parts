"use client"

import { useSession } from "next-auth/react";
import Image from "next/image"
import Link from "next/link";
import { Boxes, UserRoundCog, Cog, Share2 } from "lucide-react";
import { redirect, usePathname } from "next/navigation"
import { toast } from "sonner";

const DashboardNavbar = () => {

  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="h-[95%] w-1/6 bg-background border border-border shadow-md rounded-xl m-5 p-3 flex flex-col justify-between">
      <div className="flex flex-row justify-start items-center">
        <Image
          src='/logo-ypcp.png'
          alt="Site logo"
          width={50}
          height={50}
          className="rounded-xl"
        />
        <span className="px-1" />
        <h3 className="font-bold text-2xl">Welcome, {session?.user.name}</h3>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href="/dashboard/configs"
          className="w-3/4 bg-primary/50 rounded-lg p-2 text-white font-medium flex flex-row justify-start items-center gap-2"
        >
          <Boxes fontSize={12} />
          <p>Configurations</p>
        </Link>
        <Link href="/manage" className="w-3/4 bg-primary/50 rounded-lg p-2 text-white font-semibold flex flex-row justify-start items-center gap-2">
          <Cog />
          <p>Management</p>
        </Link>
        <Link href="/api" className="w-3/4 bg-secondary/30 border border-secondary/40 rounded-lg p-2 text-white font-semibold flex flex-row justify-start items-center gap-2">
          <Share2 />
          <p>API</p>
        </Link>
      </div>
      <div className="flex flex-row p-2">
        <Image
          src={session?.user.image as string}
          alt={`${session?.user.name} image`}
          width={30}
          height={30}
          className="rounded-xl"
        />
        <h2>{session?.user.name}</h2>
      </div>
    </div>
  )
}

export default DashboardNavbar