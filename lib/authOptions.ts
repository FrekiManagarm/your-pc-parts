import { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthModel, BackendTokens, RefreshTokens } from "./types";
import { JWT } from "next-auth/jwt";

const apiUrl = process.env.API_URL;

async function refreshAccessToken(token: JWT) {
  const response = await fetch(apiUrl + "/auth/refresh", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.tokens.refreshToken}`,
    },
  });

  const refreshedTokens = await response.json();

  return {
    ...token,
    tokens: refreshedTokens,
  };
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        emailAdress: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { emailAdress, password } = credentials as any;

        if (!emailAdress || !password) return null;

        const response = await fetch(apiUrl + "/auth/login", {
          method: "POST",
          body: JSON.stringify({
            emailAddress: emailAdress,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status == 401) {
          console.log(response.statusText);

          return null;
        }

        const user = await response.json();

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      if (new Date().getTime() < token.tokens.expiresIn) return token;

      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.user = token.user;
      session.tokens = token.tokens;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};
