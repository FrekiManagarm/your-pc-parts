"use server";
import { getRequiredAuthSession } from "@/lib/auth";
import { Headphones, Role } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getHeadphones() {
  const res = await fetch(apiUrl + "/headphones", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Headphones[] = await res.json();

  if (!data) {
    toast.error("Headphones not found");
    return;
  }

  return data;
}

export async function getHeaphonesById(heaphonesId: number) {
  const res = await fetch(apiUrl + `/headphones/${heaphonesId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Headphones = await res.json();

  if (!data) {
    toast.error("Heaphones not found");
    return;
  }

  return data;
}

export async function createHeaphones(formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + "/headphones", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data: Headphones = await res.json();

  if (!data) {
    toast.error("Headphones not created");
    return;
  }

  return data;
}

export async function updateHeadphones(heaphonesId: number) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/headphones/${heaphonesId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Authorization: `Bearer ${session.tokens.accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: Headphones = await res.json();

  if (!data) {
    toast.error("Headphones not updated");
    return;
  }

  return data;
}

export async function deleteHeadphones(headphonesId: number) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/headphones/${headphonesId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session.tokens.accessToken}`,
      Accept: "application/json",
    },
  });

  const data: Headphones = await res.json();

  if (!data) {
    toast.error("Headphones not deleted");
    return;
  }

  return data;
}
