"use server";

import { GPU } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";

const apiUrl = process.env.API_URL;

export async function getGPUs() {
  const data: GPU[] = await prisma.gPU.findMany();

  return data;
}

export async function getGPUById(gpuId: string) {
  const res = await fetch(apiUrl + `/gpu/${gpuId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: GPU = await res.json();

  if (!data) {
    toast.error("GPU not found");
    return;
  }

  return data;
}

export async function createGPU(formData: FormData) {
  const res = await fetch(apiUrl + "/gpu", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: GPU = await res.json();

  if (!data) {
    toast.error("GPU not created");
    return;
  }

  return data;
}

export async function updateGPU(gpuId: string, formData: FormData) {
  const res = await fetch(apiUrl + `/gpu/${gpuId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: GPU = await res.json();

  if (!data) {
    toast.error("GPU not updated");
    return;
  }

  return data;
}

export async function deleteGPU(gpuId: string) {
  const res = await fetch(apiUrl + `/gpu/${gpuId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: GPU = await res.json();

  if (!data) {
    toast.error("GPU not deleted");
    return;
  }

  return data;
}
