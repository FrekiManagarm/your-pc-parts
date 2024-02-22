import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { UserRole } from "@prisma/client";

type ParametersGetServerSession =
  | []
  | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
  | [NextApiRequest, NextApiResponse];

export const getAuthSession = async (
  ...parameters: ParametersGetServerSession
) => {
  const session = await getServerSession(...parameters, authConfig);
  return session;
};

export const getRequiredAuthSession = async (role: UserRole) => {
  const session = await getServerSession(authConfig);

  if (session?.user.role != role || !session.user.id) {
    throw new Error("Unauthorized");
  }

  return session;
};
