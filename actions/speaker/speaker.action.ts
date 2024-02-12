"use server";
import { getRequiredAuthSession } from "@/lib/auth";
import { Role, Speakers } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getSpeakers() {
  const res = await fetch(apiUrl + "/speaker", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Speakers[] = await res.json();

  if (!data) {
    toast.error("Speakers not found");
    return;
  }

  return data;
}

export async function getSpeakerById(speakerId: number) {
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
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + "/speaker", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: Speakers = await res.json();

  if (!data) {
    toast.error("Speaker not created");
    return;
  }

  return data;
}

export async function updateSpeaker(speakerId: number, formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/speaker/${speakerId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: Speakers = await res.json();

  if (!data) {
    toast.error("Speaker not updated");
    return;
  }

  return data;
}

export async function deleteSpeaker() {
  const session = await getRequiredAuthSession(Role.ADMINISTRATOR);

  const res = await fetch(apiUrl + "/speaker", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: Speakers = await res.json();

  if (!data) {
    toast.error("Speaker not deleted");
    return;
  }

  return data;
}
