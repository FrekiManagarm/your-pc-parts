import { getServerSession } from "next-auth";
import { options } from "./authOptions";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { Role } from "./types";

type ParametersGetServerSession = 
    | []
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse];

export const getAuthSession = async (...parameters: ParametersGetServerSession) => {
    const session = await getServerSession(...parameters, options);
    return session
}

export const getRequiredAuthSession = async (parameters: ParametersGetServerSession, role: Role) => {
    const session = await getServerSession(...parameters, options);

    if (session?.user.role != role || !session.user.id) {
        throw new Error('Unauthorized');
    }

    return session;
}