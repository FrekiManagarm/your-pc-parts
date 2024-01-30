"use server";

import { getRequiredAuthSession } from "@/lib/auth";
import { CPUCooler, Role } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getCoolings() {
  const res = await fetch(apiUrl + "/cpu-cooler", {
    method: "GET",
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  const data: CPUCooler[] = await res.json();

  if (!data) {
    toast.error("Can't get Coolings");
    return;
  }

  return data;
}

export async function getCoolingById(coolingId: number) {
  const res = await fetch(apiUrl + "/cpu-cooler", {
    method: "GET",
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  const data: CPUCooler = await res.json();

  if (!data) {
    toast.error("Can't get this Cooling");
    return;
  }

  return data;
}

export async function createCooling(formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + "/cpu-cooler", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Authorization: `Bearer ${session.tokens.accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: CPUCooler = await res.json();

  if (!data) {
    toast.error("Can't create Cooling");
    return;
  }

  return data;
}

export async function updateCooling(coolingId: number, formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/cpu-cooler/${coolingId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data: CPUCooler = await res.json();

  if (!data) {
    toast.error("Can't update this Cooling");
    return;
  }

  return data;
}

export async function deleteCooling(coolingId: number) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/cpu-cooler/${coolingId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: CPUCooler = await res.json();

  if (!data) {
    toast.error("Cooling not deleted");
    return;
  }

  return data;
}
