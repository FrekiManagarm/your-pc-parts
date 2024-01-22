import { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { RefreshTokens } from "./types";

const apiUrl = process.env.API_URL;

async function refreshAccessToken(session: Session) {
  try {
    const response = await fetch(apiUrl + "/users/refresh", {
      headers: {
        Authorization: `Bearer ${session.tokens.accessToken}`,
      },
    });

    const newTokens: RefreshTokens = await response.json();

    if (!response.ok) {
      throw newTokens;
    }

    return {
      ...session,
      accessToken: newTokens.accessToken,
      accessTokenExpires: Date.now() + newTokens.expires_in * 1000,
      refreshToken: newTokens.refreshToken ?? session.tokens.refreshToken,
    };
  } catch (err) {
    console.log(err);

    return {
      ...session,
      error: "RefreshAccessTokenError",
    };
  }
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        emailAdress: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { emailAdress, password } = credentials as any;

        if (!credentials?.emailAdress && !credentials?.password) return null;

        const res = await fetch(apiUrl + "/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emailAdress,
            password,
          }),
        });

        if (res.status == 401) {
          console.log(res.statusText);

          return null;
        }

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
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.tokens = token.tokens;

      return session;
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
    signOut: "/logOut",
  },
  session: {
    strategy: "jwt",
  },
};
