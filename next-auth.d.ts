import { DefaultSession } from "next-auth";
import "next-auth/jwt";
import { Role } from "./lib/types";

declare module "next-auth" {
  interface Session extends DefaultSession {
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
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
      expiresIn: number;
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
