"use server";

import { Headphones } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";

const apiUrl = process.env.API_URL;

export async function getHeadphones() {
  const data = await prisma.headphones.findMany();

  return data;
}

export async function getHeaphonesById(heaphonesId: string) {
  const res = await fetch(apiUrl + `/headphones/${heaphonesId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Headphones = await res.json();

  if (!data) {
    toast.error("Heaphones not found");
    return;
  }

  return data;
}

export async function createHeaphones(formData: FormData) {
  const res = await fetch(apiUrl + "/headphones", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: Headphones = await res.json();

  if (!data) {
    toast.error("Headphones not created");
    return;
  }

  return data;
}

export async function updateHeadphones(heaphonesId: string) {
  const res = await fetch(apiUrl + `/headphones/${heaphonesId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: Headphones = await res.json();

  if (!data) {
    toast.error("Headphones not updated");
    return;
  }

  return data;
}

export async function deleteHeadphones(headphonesId: string) {
  const res = await fetch(apiUrl + `/headphones/${headphonesId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: Headphones = await res.json();

  if (!data) {
    toast.error("Headphones not deleted");
    return;
  }

  return data;
}
