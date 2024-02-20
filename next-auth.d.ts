import { DefaultSession, User, AdapterUser } from "next-auth";
import "next-auth/jwt";
import { Role } from "./lib/types";
import { Setup, UserRole } from "@prisma/client";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id?: string;
      role?: UserRole;
      stripeId?: string;
      setups?: Setup[];
      emailVerified?: Date | null;
    };
  }

  interface User extends AdapterUser {
    user: AdapterUser & {
      id?: string;
      role?: UserRole;
      stripeId?: string;
      setups?: Setup[];
      emailVerified?: Date | null;
    };
  }
}
