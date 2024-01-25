"use server";

import { getRequiredAuthSession } from "@/lib/auth";
import { Case, Role } from "@/lib/types";

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

  if (!data) return Error("Cannot find cases");

  return Response.json(data, {
    status: 200,
    statusText: "Cases found",
  });
}

export async function getCaseById(caseId: number) {
  const res = await fetch(apiUrl + `/case/${caseId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: Case = await res.json();

  if (!data) return Error("Cannot found this case");

  return Response.json(data, {
    status: 200,
    statusText: "Case found",
  });
}

export async function createCase(formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.MODERATOR && Role.ADMINISTRATOR,
  );

  const res = await fetch(apiUrl + "/case", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Authorization: `Bearer ${session.tokens.accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data: Case = await res.json();

  if (!data) return Error("Case not created");

  return Response.json(data, {
    status: 201,
    statusText: "Case created",
  });
}

export async function updateCase(caseId: number, formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.MODERATOR && Role.ADMINISTRATOR,
  );

  const res = await fetch(apiUrl + `/case/${caseId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: Case = await res.json();

  if (!data) return Error("Cannot update this case");

  return Response.json(data, {
    status: 203,
    statusText: "Case updated",
  });
}

export async function deleteCase(caseId: number) {
  const session = await getRequiredAuthSession(Role.ADMINISTRATOR);

  const res = await fetch(apiUrl + `/case/${caseId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session.tokens.accessToken}`,
      Accept: "application/json",
    },
  });

  const data: Case = await res.json();

  if (!data) return Error("Cannot delete this case");

  return Response.json(data, {
    status: 204,
    statusText: "Case deleted",
  });
}
