import { LoggedInButton } from "./LoggedInButton";
import LoginButton from './LoginButton';
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

export type AuthButtonProps = {}

export const AuthButton = async (props: AuthButtonProps) => {
    const session = await getServerSession(authConfig);

    const user = session?.user;

    if (!user) {
        return <LoginButton />
    }

    return <LoggedInButton user={user} />
}