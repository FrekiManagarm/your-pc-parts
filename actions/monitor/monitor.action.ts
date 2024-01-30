"use server";
import { getRequiredAuthSession } from "@/lib/auth";
import { Monitor, Role } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getMonitors() {
  const res = await fetch(apiUrl + "/monitor", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Monitor = await res.json();

  if (!data) {
    toast.error("Monitors not found");
    return;
  }

  return data;
}

export async function getMonitorById(monitorId: number) {
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
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + "/monitor", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
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

export async function updateMonitor(monitorId: number, formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/monitor/${monitorId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
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

export async function deleteMonitor(monitorId: number) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/monitor/${monitorId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: Monitor = await res.json();

  if (!data) {
    toast.error("Monitor not deleted");
    return;
  }

  return data;
}
