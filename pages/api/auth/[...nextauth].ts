import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authConfig = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    // async jwt({ user, token, session, account }) {
    //   if (user) {
    //     const u = user as unknown as any;
    //     console.log(u, "user in jwt");
    //     return {
    //       ...token,
    //       user: user,
    //     };
    //   }
    //   return token;
    // },
    async session({ session, token, user }) {
      session.user = user;

      console.log(user, "user in session");

      return session;
    },
  },
} satisfies NextAuthOptions;

export default NextAuth(authConfig);
