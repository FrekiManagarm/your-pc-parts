import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const apiUrl = process.env.API_URL;

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