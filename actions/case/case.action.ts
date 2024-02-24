"use server";

import { Case } from "@prisma/client";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getCases() {
  const res = await fetch(apiUrl + "/case", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Case[] = await res.json();

  if (!data) {
    toast.error("Cases not found");
    return;
  }

  return data;
}

export async function getCaseById(caseId: string) {
  const res = await fetch(apiUrl + `/case/${caseId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Case = await res.json();

  if (!data) {
    toast.error("Case not found");
    return;
  }

  return data;
}

export async function createCase(formData: FormData) {
  const res = await fetch(apiUrl + "/case", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data: Case = await res.json();

  if (!data) {
    toast.error("Case not created");
    return;
  }

  return data;
}

export async function updateCase(caseId: string, formData: FormData) {
  const res = await fetch(apiUrl + `/case/${caseId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data: Case = await res.json();

  if (!data) {
    toast.error("Case not updated !");
    return;
  }

  return data;
}

export async function deleteCase(caseId: string) {
  const res = await fetch(apiUrl + `/case/${caseId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: Case = await res.json();

  if (!data) {
    toast.error("Case not deleted");
    return;
  }

  return data;
}
