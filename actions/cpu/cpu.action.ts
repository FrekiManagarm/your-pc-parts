"use server";

import { CPU } from "@prisma/client";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getCPUs() {
  const res = await fetch(apiUrl + "/cpu", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: CPU[] = await res.json();

  if (!data) {
    toast.error("Can't get CPUs");
  }

  return data;
}

export async function getCPUById(cpuId: string) {
  const res = await fetch(apiUrl + `/cpu/${cpuId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: CPU = await res.json();

  if (!data) {
    toast.error("CPU not found");
  }

  return data;
}

export async function createCPU(formData: FormData) {
  const res = await fetch(apiUrl + "/cpu", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: CPU = await res.json();

  if (!data) {
    toast.error("CPU not created");
    return;
  }

  return data;
}

export async function updateCPU(cpuId: string, formData: FormData) {
  const res = await fetch(apiUrl + `/cpu/${cpuId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: CPU = await res.json();

  if (!data) {
    toast.error("CPU not updated");
    return;
  }

  return data;
}

export async function deleteCPU(cpuId: string) {
  const res = await fetch(apiUrl + `/cpu/${cpuId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: CPU = await res.json();

  if (!data) {
    toast.error("CPU not deleted");
    return;
  }

  return data;
}
