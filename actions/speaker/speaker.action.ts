"use server";

import { Speakers } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";

const apiUrl = process.env.API_URL;

export async function getSpeakers() {
  const data = await prisma.speakers.findMany();

  return data;
}

export async function getSpeakerById(speakerId: string) {
  const res = await fetch(apiUrl + `/speaker/${speakerId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Speakers = await res.json();

  if (!data) {
    toast.error("Speaker not found");
    return;
  }

  return data;
}

export async function createSpeaker(formData: FormData) {
  const res = await fetch(apiUrl + "/speaker", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: Speakers = await res.json();

  if (!data) {
    toast.error("Speaker not created");
    return;
  }

  return data;
}

export async function updateSpeaker(speakerId: string, formData: FormData) {
  const res = await fetch(apiUrl + `/speaker/${speakerId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: Speakers = await res.json();

  if (!data) {
    toast.error("Speaker not updated");
    return;
  }

  return data;
}

export async function deleteSpeaker(speakerId: string) {
  const res = await fetch(apiUrl + `/speaker/${speakerId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: Speakers = await res.json();

  if (!data) {
    toast.error("Speaker not deleted");
    return;
  }

  return data;
}
