import { RefreshTokens } from "@/lib/types";
import type { NextAuthOptions, Session } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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

export const options : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                emailAdress: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { emailAdress, password } = credentials as any;

                const res = await fetch(apiUrl + "/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        emailAdress,
                        password,
                    })
                });

                const user = await res.json();

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            account
            return { ...token, ...user }
        },
        async session({ session, token }) {
            session.user = token as any
            return session;
        }
    },
    pages: {
        signIn: "/login",
        signOut: "/logOut",
    },
    session: {
        strategy: "jwt"
    }
}

const handler = NextAuth(options);

export { handler as GET, handler as POST };