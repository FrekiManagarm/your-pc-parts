"use server";
import { getRequiredAuthSession } from "@/lib/auth";
import { Role, SoundCard } from "@/lib/types";
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

  const data: SoundCard = await res.json();

  if (!data) {
    toast.error("Sound Cards not found");
    return;
  }

  return data;
}

export async function getSoundCardById(soundCardId: number) {
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

export async function updateSoundCard(soundCardId: number, formData: FormData) {
  const res = await fetch(apiUrl + "/sound-card", {
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

export async function deleteSoundCard(soundCardId: number) {
  const res = await fetch(apiUrl + "/sound-card", {
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
