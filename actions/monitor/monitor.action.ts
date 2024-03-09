"use server";

import { Monitor } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";

const apiUrl = process.env.API_URL;

export async function getMonitors() {
  const data = await prisma.monitor.findMany();

  return data;
}

export async function getMonitorById(monitorId: string) {
  const res = await fetch(apiUrl + `/monitor/${monitorId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Monitor = await res.json();

  if (!data) {
    toast.error("Monitor not found");
    return;
  }

  return data;
}

export async function createMonitor(formData: FormData) {
  const res = await fetch(apiUrl + "/monitor", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: Monitor = await res.json();

  if (!data) {
    toast.error("Monitor not created");
    return;
  }

  return data;
}

export async function updateMonitor(monitorId: string, formData: FormData) {
  const res = await fetch(apiUrl + `/monitor/${monitorId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: Monitor = await res.json();

  if (!data) {
    toast.error("Monitor not updated");
    return;
  }

  return data;
}

export async function deleteMonitor(monitorId: string) {
  const res = await fetch(apiUrl + `/monitor/${monitorId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: Monitor = await res.json();

  if (!data) {
    toast.error("Monitor not deleted");
    return;
  }

  return data;
}
