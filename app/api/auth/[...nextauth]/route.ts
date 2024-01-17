import { options } from "@/lib/authOptions";
import { RefreshTokens } from "@/lib/types";
import type { Session } from "next-auth";
import NextAuth from "next-auth";

const apiUrl = process.env.API_URL;

async function refreshAccessToken(session: Session) {
    try {
        const response = await fetch(apiUrl + "/users/refresh", {
            headers: {
                Authorization: `Bearer ${session.tokens.accessToken}`
            }
        })

        const newTokens: RefreshTokens = await response.json();

        if (!response.ok) {
            throw newTokens;
        }

        return {
            ...session,
            accessToken: newTokens.accessToken,
            accessTokenExpires: Date.now() + newTokens.expires_in * 1000,
            refreshToken: newTokens.refreshToken ?? session.tokens.refreshToken,
        }
    } catch (err) {
        console.log(err)

        return {
            ...session,
            error: "RefreshAccessTokenError",
        }
    }
}

const handler = NextAuth(options);

export { handler as GET, handler as POST };