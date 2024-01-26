"use server";

import { getRequiredAuthSession } from "@/lib/auth";
import { CPU, Role } from "@/lib/types";
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
    return;
  }

  return Response.json(data, {
    status: 200,
    statusText: "CPUs found",
  });
}

export async function getCPUById(cpuId: number) {
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
    return;
  }

  return Response.json(data, {
    status: 200,
    statusText: "CPU found",
  });
}

export async function createCPU(formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + "/cpu", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Authorization: `Bearer ${session.tokens.accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: CPU = await res.json();

  if (!data) {
    toast.error("CPU not created");
    return;
  }

  return Response.json(data, {
    status: 201,
    statusText: "CPU created",
  });
}

export async function updateCPU(cpuId: number, formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/cpu/${cpuId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Authorization: `Bearer ${session.tokens.accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: CPU = await res.json();

  if (!data) {
    toast.error("CPU not updated");
    return;
  }

  return Response.json(data, {
    status: 203,
    statusText: "CPU updated",
  });
}

export async function deleteCPU(cpuId: number) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/cpu/${cpuId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: CPU = await res.json();

  if (!data) {
    toast.error("CPU not deleted");
    return;
  }

  return Response.json(data, {
    status: 204,
    statusText: "",
  });
}
