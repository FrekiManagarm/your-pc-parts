"use client"

import { useSession } from "next-auth/react";
import Image from "next/image"
import Link from "next/link";
import { redirect, usePathname } from "next/navigation"
import { toast } from "sonner";

const DashboardNavbar = () => {

  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="h-[95%] w-1/6 bg-secondary/20 border border-secondary/40 shadow-md rounded-xl m-5 p-3">
      <div className="flex flex-row justify-start items-center">
        <Image
          src='/logo-ypcp.png'
          alt="Site logo"
          width={50}
          height={50}
          className="rounded-xl"
        />
        <span className="px-1" />
        <h3 className="font-bold text-2xl">Your PC Parts</h3>
      </div>
      <div className="flex flex-col">
        <Link
          href="/dashboard/configs"
          className="w-3/4 bg-primary/50 rounded-lg p-2 text-white font-semibold"
        >
          <p>Configurations</p>
        </Link>
        <Link href="/manage" className="w-3/4 bg-primary/50 rounded-lg p-2 text-white font-semibold">
          <p>Management</p>
        </Link>
        <Link href="/dashboard/profile" className="w-3/4 bg-primary/50 rounded-lg p-2 text-white font-semibold">
          <p>Profile</p>
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