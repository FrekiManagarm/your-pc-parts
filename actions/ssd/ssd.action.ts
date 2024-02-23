"use server";

import { getRequiredAuthSession } from "@/lib/auth";
import { Role, SSD } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getSSDs() {
  const res = await fetch(apiUrl + "/ssd", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: SSD[] = await res.json();

  if (!data) {
    toast.error("SSDs not found");
    return;
  }

  return data;
}

export async function getSSDById(ssdId: string) {
  const res = await fetch(apiUrl + `/ssd/${ssdId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: SSD = await res.json();

  if (!data) {
    toast.error("SSD not found");
    return;
  }

  return data;
}

export async function createSSD(formData: FormData) {
  const res = await fetch(apiUrl + "/ssd", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: SSD = await res.json();

  if (!data) {
    toast.error("SSD not created");
    return;
  }

  return data;
}

export async function updateSSD(ssdId: string, formData: FormData) {
  const res = await fetch(apiUrl + `/ssd/${ssdId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: SSD = await res.json();

  if (!data) {
    toast.error("SSD not updated");
    return;
  }

  return data;
}

export async function deleteSSD(ssdId: string) {
  const res = await fetch(apiUrl + `/ssd/${ssdId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: SSD = await res.json();

  if (!data) {
    toast.error("SSD not deleted");
    return;
  }

  return data;
}
