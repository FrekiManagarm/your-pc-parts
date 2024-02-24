"use server";

import { SoundCard } from "@prisma/client";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getSoundCard() {
  const res = await fetch(apiUrl + "/sound-card", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: SoundCard[] = await res.json();

  if (!data) {
    toast.error("Sound Cards not found");
    return;
  }

  return data;
}

export async function getSoundCardById(soundCardId: string) {
  const res = await fetch(apiUrl + `/sound-card/${soundCardId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: SoundCard = await res.json();

  if (!data) {
    toast.error("Sound Card not found");
    return;
  }

  return data;
}

export async function createSoundCard(formData: FormData) {
  const res = await fetch(apiUrl + "/sound-card", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: SoundCard = await res.json();

  if (!data) {
    toast.error("Sound Card not created");
    return;
  }

  return data;
}

export async function updateSoundCard(soundCardId: string, formData: FormData) {
  const res = await fetch(apiUrl + `/sound-card/${soundCardId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: SoundCard = await res.json();

  if (!data) {
    toast.error("Sound Card not updated");
    return;
  }

  return data;
}

export async function deleteSoundCard(soundCardId: string) {
  const res = await fetch(apiUrl + `/sound-card/${soundCardId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: SoundCard = await res.json();

  if (!data) {
    toast.error("Sound Card not deleted");
    return;
  }

  return data;
}
