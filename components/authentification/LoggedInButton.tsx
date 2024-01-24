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
import { LogOut, User2 } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

export type LoggedInButtonProps = {
    user: Session['user']
}

export const LoggedInButton = (props: LoggedInButtonProps) => {
    return (
        <DropdownMenu>
            <AlertDialog>
                <DropdownMenuTrigger asChild>
                    <Avatar className="h-10 w-10 cover-full object-fill">
                        <AvatarFallback>{props.user.firstname}</AvatarFallback>
                        {props.user.avatarUrl && (
                            <AvatarImage
                                src={props.user.avatarUrl}
                                alt={props.user.firstname ?? "user picture"}
                            />
                        )}
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link href="/dashboard/profile">
                            <User2 className="mr-2" size={12} />
                            Account
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <AlertDialogTrigger asChild>
                        <DropdownMenuItem>
                            <LogOut className="mr-2" size={12} />
                            Logout
                        </DropdownMenuItem>
                    </AlertDialogTrigger>
                </DropdownMenuContent>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sur you want to logout ?</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel asChild>
                            <Button variant="secondary">Cancel</Button>
                        </AlertDialogCancel>
                        <Button
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