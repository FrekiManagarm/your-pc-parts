"use server";

import { getRequiredAuthSession } from "@/lib/auth";
import { Role, Webcam } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getWebcams() {
  const res = await fetch(apiUrl + "/webcam", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Webcam[] = await res.json();

  if (!data) {
    toast.error("Webcams not found");
    return;
  }

  return data;
}

export async function getWebcamById(webcamId: number) {
  const res = await fetch(apiUrl + `/webcam/${webcamId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Webcam = await res.json();

  if (!data) {
    toast.error("Webcam not found");
    return;
  }

  return data;
}

export async function createWebcam(formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + "/webcam", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: Webcam = await res.json();

  if (!data) {
    toast.error("Webcam not created");
    return;
  }

  return data;
}

export async function updateWebcam(webcamId: number, formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/webcam/${webcamId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: Webcam = await res.json();

  if (!data) {
    toast.error("Webcam not updated");
    return;
  }

  return data;
}

export async function deleteWebcam(webcamId: number) {
  const session = await getRequiredAuthSession(Role.ADMINISTRATOR);

  const res = await fetch(apiUrl + `/webcam/${webcamId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: Webcam = await res.json();

  if (!data) {
    toast.error("Webcam not deleted");
    return;
  }

  return data;
}
