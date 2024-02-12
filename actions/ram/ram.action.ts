"use server";
import { getRequiredAuthSession } from "@/lib/auth";
import { RAM, Role } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getRAMs() {
  const res = await fetch(apiUrl + "/ram", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: RAM = await res.json();

  if (!data) {
    toast.error("RAM not found");
    return;
  }

  return data;
}

export async function getRAMById(ramId: number) {
  const res = await fetch(apiUrl + `/ram/${ramId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: RAM = await res.json();

  if (!data) {
    toast.error("RAM not found");
    return;
  }

  return data;
}

export async function createRAM(formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + "/ram", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: RAM = await res.json();

  if (!data) {
    toast.error("RAM not created");
    return;
  }

  return data;
}

export async function updateRAM(ramId: number, formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/ram/${ramId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: RAM = await res.json();

  if (!data) {
    toast.error("RAM not updated");
    return;
  }

  return data;
}

export async function deleteRAM(ramId: number) {
  const session = await getRequiredAuthSession(Role.ADMINISTRATOR);

  const res = await fetch(apiUrl + `/ram/${ramId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: RAM = await res.json();

  if (!data) {
    toast.error("RAM not deleted");
    return;
  }

  return data;
}
