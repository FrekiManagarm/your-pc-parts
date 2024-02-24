"use server";

import { PSU } from "@prisma/client";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getPSUs() {
  const res = await fetch(apiUrl + "/psu", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: PSU[] = await res.json();

  if (!data) {
    toast.error("PSUs not found");
    return;
  }

  return data;
}

export async function getPSUById(psuId: string) {
  const res = await fetch(apiUrl + `/psu/${psuId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: PSU = await res.json();

  if (!data) {
    toast.error("PSU not found");
    return;
  }

  return data;
}

export async function createPSU(formData: FormData) {
  const res = await fetch(apiUrl + "/psu", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: PSU = await res.json();

  if (!data) {
    toast.error("PSU not created");
    return;
  }

  return data;
}

export async function updatePSU(formData: FormData, psuId: string) {
  const res = await fetch(apiUrl + `/psu${psuId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: PSU = await res.json();

  if (!data) {
    toast.error("PSU not updated");
    return;
  }

  return data;
}

export async function deletePSU(psuId: string) {
  const res = await fetch(apiUrl + `/psu/${psuId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: PSU = await res.json();

  if (!data) {
    toast.error("PSU not deleted");
    return;
  }

  return data;
}
