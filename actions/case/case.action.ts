"use server";

import { Case } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { CaseModel } from "@/prisma/zod";

const apiUrl = process.env.API_URL;

export async function getCases() {
  const data = await prisma.case.findMany();

  return data;
}

export async function getCaseById(caseId: string) {
  const data = await prisma.case.findUnique({
    where: {
      id: caseId,
    },
  });

  if (!data) {
    toast.error("Case not found");
  }

  return data;
}

export async function createCase(formData: FormData) {
  const session = await getServerSession(authConfig);

  if (
    session?.user.role === "ADMINISTRATOR" ||
    session?.user.role === "MODERATOR"
  ) {
    const validSchema = CaseModel.parse(formData);

    if (!validSchema) {
      toast.error("Wrong data");
      return validSchema;
    }

    const data = await prisma.case.create({
      data: validSchema,
    });

    if (!data) {
      toast.error("Case not created");
      return data;
    }

    return data;
  }

  toast.error(
    "You have not the good role to perform this action. Upgrade your plan !",
  );
  throw new Error("Wrong role !");
}

export async function updateCase(caseId: string, formData: FormData) {
  const session = await getServerSession(authConfig);

  if (
    session?.user.role === "ADMINISTRATOR" ||
    session?.user.role === "MODERATOR"
  ) {
    const validSchema = CaseModel.parse(formData);

    if (!validSchema) {
      toast.error("Wrong data");
      return validSchema;
    }

    const data = await prisma.case.update({
      where: {
        id: caseId,
      },
      data: validSchema,
    });

    if (!data) {
      toast.error("Case not created");
      return data;
    }

    return data;
  }

  toast.error(
    "You have not the good role to perform this action. Upgrade your plan !",
  );
  throw new Error("Wrong role !");
}

export async function deleteCase(caseId: string) {
  const session = await getServerSession(authConfig);

  if (session?.user.role !== "ADMINISTRATOR") {
    toast.error(
      "You have not the good role to perform this action. Upgrade your plan !",
    );
  }

  const data = await prisma.case.delete({
    where: {
      id: caseId,
    },
  });

  if (!data) {
    toast.error("Case not deleted");
    return data;
  }

  return data;
}
