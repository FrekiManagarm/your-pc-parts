import NextAuth from "next-auth/next";
import { Role } from "./lib/types";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
    user: {
      id: number;
      lastname: string;
      firstname: string;
      role: Role;
      avatarUrl: string;
      stripeId: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
    user: {
      id: number;
      lastname: string;
      firstname: string;
      role: Role;
      avatarUrl: string;
      stripeId: string;
    };
  }
}
