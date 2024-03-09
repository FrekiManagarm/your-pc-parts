"use server";

import { Keyboard } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";

const apiUrl = process.env.API_URL;

export async function getKeyboards() {
  const data = await prisma.keyboard.findMany();

  return data;
}

export async function getKeyboardById(keyboardId: string) {
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
  const res = await fetch(apiUrl + "/keyboard", {
    method: "POST",
    headers: {
      Accept: "application/json",
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

export async function updateKeyboard(keyboardId: string, formData: FormData) {
  const res = await fetch(apiUrl + `/keyboard/${keyboardId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
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

export async function deleteKeyboard(keyboardId: string) {
  const res = await fetch(apiUrl + `/keyboard/${keyboardId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: Keyboard = await res.json();

  if (!data) {
    toast.error("Keyboard not deleted");
    return;
  }

  return data;
}
