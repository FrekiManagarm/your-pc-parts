"use server";

import { Webcam } from "@prisma/client";
import { toast } from "sonner";
import prisma from "@/lib/prisma";

const apiUrl = process.env.API_URL;

export async function getWebcams() {
  const data = await prisma.webcam.findMany();

  return data;
}

export async function getWebcamById(webcamId: string) {
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
  const res = await fetch(apiUrl + "/webcam", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: Webcam = await res.json();

  if (!data) {
    toast.error("Webcam not created");
    return;
  }

  return data;
}

export async function updateWebcam(webcamId: string, formData: FormData) {
  const res = await fetch(apiUrl + `/webcam/${webcamId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: Webcam = await res.json();

  if (!data) {
    toast.error("Webcam not updated");
    return;
  }

  return data;
}

export async function deleteWebcam(webcamId: string) {
  const res = await fetch(apiUrl + `/webcam/${webcamId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: Webcam = await res.json();

  if (!data) {
    toast.error("Webcam not deleted");
    return;
  }

  return data;
}
