"use server";

import { CPUCooler, UserRole } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";
import { CPUCoolerModel } from "@/prisma/zod";
import { NextResponse } from "next/server";
import { getRequiredAuthSession } from "@/lib/auth";

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
  const user = await getRequiredAuthSession(
    UserRole.ADMINISTRATOR || UserRole.MODERATOR,
  );

  if (!user) {
    toast.error("Unauthorized");
    throw new Error("Unauthorized");
  }

  const body = CPUCoolerModel.parse(formData);

  if (!body) {
    toast.error("Invalid data format");
    return body;
  }

  const data = await prisma.cPUCooler.create({
    data: body,
  });

  if (!data) {
    toast.error("Cooling not created");
    throw new Error("Cooling not created");
  }

  return data;
}

export async function updateCooling(coolingId: string, formData: FormData) {
  const res = await fetch(apiUrl + `/cpu-cooler/${coolingId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: CPUCooler = await res.json();

  if (!data) {
    toast.error("Can't update this Cooling");
    return;
  }

  return data;
}

export async function deleteCooling(coolingId: string) {
  const res = await fetch(apiUrl + `/cpu-cooler/${coolingId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: CPUCooler = await res.json();

  if (!data) {
    toast.error("Cooling not deleted");
    return;
  }

  return data;
}
