"use client"

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LayoutDashboard, LogOut, User2 } from "lucide-react";
import { DefaultSession, Session } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { signOut } from "next-auth/react";
import Link from "next/link";

export type LoggedInButtonProps = {
    user: Session['user']
}

export const LoggedInButton = ({ user }: LoggedInButtonProps) => {
    return (
        <DropdownMenu>
            <AlertDialog>
                <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                        <AvatarFallback>{user.name}</AvatarFallback>
                        {user.image && (
                            <AvatarImage
                                className="h-10 w-10 object-cover"
                                src={user.image}
                                alt={user.name ?? "user picture"}
                            />
                        )}
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link href="/dashboard/profile" className="flex flex-row justify-center items-center h-6">
                            <User2 className="mr-2" size={14} />
                            <p>Account</p>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/dashboard" className="flex flex-row justify-center items-center h-6">
                            <LayoutDashboard size={14} className="mr-2 dark:text-white" />
                            <p>Dashboard</p>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-300 px-2" />
                    <AlertDialogTrigger asChild>
                        <DropdownMenuItem className="h-8 dark:text-white">
                            <LogOut className="mr-2" size={14} />
                            Logout
                        </DropdownMenuItem>
                    </AlertDialogTrigger>
                </DropdownMenuContent>
                <AlertDialogContent>
                    <AlertDialogHeader className="text-center">
                        <AlertDialogTitle className="dark:text-white">Are you sure you want to logout ?</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel asChild>
                            <Button className="dark:text-white" variant="secondary">Cancel</Button>
                        </AlertDialogCancel>
                        <Button
                            className="dark:text-white"
                            variant="destructive"
                            onClick={() => {
                                signOut()
                            }}
                        >
                            <LogOut className="mr-2" size={12} />
                            Logout
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </DropdownMenu>
    )
}