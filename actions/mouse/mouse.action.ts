"use server";

import { getRequiredAuthSession } from "@/lib/auth";
import { Mouse, Role } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getMouses() {
  const res = await fetch(apiUrl + "/mouse", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Mouse[] = await res.json();

  if (!data) {
    toast.error("Mouses not found");
    return;
  }

  return data;
}

export async function getMouseById(mouseId: number) {
  const res = await fetch(apiUrl + `/mouse/${mouseId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Mouse = await res.json();

  if (!data) {
    toast.error("Mouse not found");
    return;
  }

  return data;
}

export async function createMouse(formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + "/mouse", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data: Mouse = await res.json();

  if (!data) {
    toast.error("Mouse not created");
    return;
  }
}

export async function updateMouse(mouseId: number, formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/mouse/${mouseId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: Mouse = await res.json();

  if (!data) {
    toast.error("Mouse not updated");
    return;
  }

  return data;
}

export async function deleteMouse(mouseId: number) {
  const session = await getRequiredAuthSession(Role.ADMINISTRATOR);

  const res = await fetch(apiUrl + `/mouse/${mouseId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: Mouse = await res.json();

  if (!data) {
    toast.error("Mouse not deleted");
    return;
  }

  return data;
}
