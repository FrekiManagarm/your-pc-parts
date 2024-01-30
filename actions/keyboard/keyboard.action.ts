"use server";
import { getRequiredAuthSession } from "@/lib/auth";
import { Keyboard, Role } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getKeyboards() {
  const res = await fetch(apiUrl + "/keyboard", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Keyboard[] = await res.json();

  if (!data) {
    toast.error("Keyboards not found");
    return;
  }

  return data;
}

export async function getKeyboardById(keyboardId: number) {
  const res = await fetch(apiUrl + `/keyboard/${keyboardId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Keyboard = await res.json();

  if (!data) {
    toast.error("Keyboard not found");
    return;
  }

  return data;
}

export async function createKeyboard(formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + "/keyboard", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data: Keyboard = await res.json();

  if (!data) {
    toast.error("Keyboard not created");
    return;
  }

  return data;
}

export async function updateKeyboard(keyboardId: number, formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/keyboard/${keyboardId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data: Keyboard = await res.json();

  if (!data) {
    toast.error("Keyboard not updated");
    return;
  }

  return data;
}

export async function deleteKeyboard(keyboardId: number) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/keyboard/${keyboardId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: Keyboard = await res.json();

  if (!data) {
    toast.error("Keyboard not deleted");
    return;
  }

  return data;
}
