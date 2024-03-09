"use server";

import { HDD } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";

const apiUrl = process.env.API_URL;

export async function getHDDs() {
  const data = await prisma.hDD.findMany();

  return data;
}

export async function getHDDById(hddId: string) {
  const res = await fetch(apiUrl + `/hdd/${hddId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: HDD = await res.json();

  if (!data) {
    toast.error("HDD not found");
    return;
  }

  return data;
}

export async function createHDD(formData: FormData) {
  const res = await fetch(apiUrl + "/hdd", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data: HDD = await res.json();

  if (!data) {
    toast.error("HDD not created");
    return;
  }

  return data;
}

export async function updateHDD(hddId: string, formData: FormData) {
  const res = await fetch(apiUrl + `/hdd/${hddId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: HDD = await res.json();

  if (!data) {
    toast.error("HDD not updated");
    return;
  }

  return data;
}

export async function deleteHDD(hddId: string) {
  const res = await fetch(apiUrl + `/hdd/${hddId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: HDD = await res.json();

  if (!data) {
    toast.error("HDD not deleted");
    return;
  }

  return data;
}
