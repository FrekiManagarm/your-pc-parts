"use server";

import { CaseFan } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { CaseFanModel } from "@/prisma/zod";

const apiUrl = process.env.API_URL;

export async function getCaseFans() {
  const data = await prisma.caseFan.findMany();

  return data;
}

export async function getCaseFansById(caseFanId: string) {
  const data = await prisma.caseFan.findUnique({
    where: {
      id: caseFanId,
    },
  });

  if (!data) {
    toast.error("Case Fan not found");
    return data;
  }

  return data;
}

export async function createCaseFan(formData: FormData) {
  const session = await getServerSession(authConfig);

  if (
    session?.user.role === "ADMINISTRATOR" ||
    session?.user.role === "MODERATOR"
  ) {
    const validSchema = CaseFanModel.parse(formData);

    if (!validSchema) {
      toast.error("Wrong data");
      return validSchema;
    }

    const data = await prisma.caseFan.create({
      data: validSchema,
    });

    if (!data) {
      toast.error("Case Fan not created");
      return data;
    }

    return data;
  }

  toast.error(
    "You have the wrong role to perform this action. Upgrade your plan !",
  );
  throw new Error("Wrong role !");
}

export async function updateCaseFan(caseFanId: string, formData: FormData) {
  const session = await getServerSession(authConfig);

  if (
    session?.user.role === "ADMINISTRATOR" ||
    session?.user.role === "MODERATOR"
  ) {
    const validSchema = CaseFanModel.parse(formData);

    if (!validSchema) {
      toast.error("Wrong data");
      return validSchema;
    }

    const data = await prisma.caseFan.update({
      where: {
        id: caseFanId,
      },
      data: validSchema,
    });

    if (!data) {
      toast.error("Case Fan not updated");
      return data;
    }

    return data;
  }

  toast.error(
    "You have the wrong role to perform this action. Upgrade your plan !",
  );
  throw new Error("Wrong role !");
}

export async function deleteCaseFan(caseFanId: string) {
  const session = await getServerSession(authConfig);

  if (session?.user.role === "ADMINISTRATOR") {
    const data = await prisma.caseFan.delete({
      where: {
        id: caseFanId,
      },
    });

    if (!data) {
      toast.error("Case Fan not deleted");
      return data;
    }

    return data;
  }

  toast.error(
    "You have the wrong role to perform this action. Upgrade your plan !",
  );
  throw new Error("Wrong role !");
}
