"use server";

import { Motherboard } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";

const apiUrl = process.env.API_URL;

export async function getMotherboards() {
  const data = await prisma.motherboard.findMany();

  return data;
}

export async function getMotherboardById(motherboardId: string) {
  const res = await fetch(apiUrl + `/motherboard/${motherboardId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Motherboard = await res.json();

  if (!data) {
    toast.error("Motherboard not found");
    return;
  }

  return data;
}

export async function createMotherboard(formData: FormData) {
  const res = await fetch(apiUrl + "/motherboard", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: Motherboard = await res.json();

  if (!data) {
    toast.error("Motherboard not created");
    return;
  }

  return data;
}

export async function updateMotherboard(
  motherboardId: string,
  formData: FormData,
) {
  const res = await fetch(apiUrl + `/motherboard/${motherboardId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: Motherboard = await res.json();

  if (!data) {
    toast.error("Motherboard not updated");
    return;
  }

  return data;
}

export async function deleteMotherboard(motherboardId: string) {
  const res = await fetch(apiUrl + `/motherboard/${motherboardId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: Motherboard = await res.json();

  if (!data) {
    toast.error("Motherboard not deleted");
    return;
  }

  return data;
}
