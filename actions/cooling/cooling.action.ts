"use server";

import { CPUCooler, UserRole } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";
import { CPUCoolerModel } from "@/prisma/zod";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

const apiUrl = process.env.API_URL;

export async function getCoolings() {
  const data: CPUCooler[] = await prisma.cPUCooler.findMany();

  return data;
}

export async function getCoolingById(coolingId: string) {
  const data = await prisma.cPUCooler.findUnique({
    where: {
      id: coolingId,
    },
  });

  return data;
}

export async function createCooling(formData: FormData) {
  const session = await getServerSession(authConfig);

  if (
    session?.user.role === "ADMINISTRATOR" ||
    session?.user.role === "MODERATOR"
  ) {
    const validSchema = CPUCoolerModel.parse(formData);

    if (!validSchema) {
      toast.error("Wrong data input");
      return validSchema;
    }

    const data = await prisma.cPUCooler.create({
      data: validSchema,
    });

    if (!data) {
      toast.error("Cooling not created");
      return false;
    }

    return true;
  }

  toast.error(
    "You have the wrong role to perform this action. Upgrade your plan !",
  );
  throw new Error("Wrong role !");
}

export async function updateCooling(coolingId: string, formData: FormData) {
  const session = await getServerSession(authConfig);

  if (
    session?.user.role === "ADMINISTRATOR" ||
    session?.user.role === "MODERATOR"
  ) {
    const validSchema = CPUCoolerModel.parse(formData);

    if (!validSchema) {
      toast.error("Wrong data input");
      return validSchema;
    }

    const data = await prisma.cPUCooler.update({
      where: {
        id: coolingId,
      },
      data: validSchema,
    });

    if (!data) {
      toast.error("Cooling not updated");
      return false;
    }

    return true;
  }

  toast.error(
    "You have the wrong role to perform this action. Upgrade your plan !",
  );
  throw new Error("Wrong role !");
}

export async function deleteCooling(coolingId: string) {
  const session = await getServerSession(authConfig);

  if (session?.user.role === "ADMINISTRATOR") {
    const data = await prisma.cPUCooler.delete({
      where: {
        id: coolingId,
      },
    });

    if (!data) {
      toast.error("Cooling not deleted");
      return false;
    }

    return true;
  }

  toast.error(
    "You have the wrong role to perform this action. Upgrade your plan !",
  );
  throw new Error("Wrong role !");
}
