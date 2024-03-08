"use server";

import { CPUCooler } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";

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
  const res = await fetch(apiUrl + "/cpu-cooler", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: CPUCooler = await res.json();

  if (!data) {
    toast.error("Can't create Cooling");
    return;
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
