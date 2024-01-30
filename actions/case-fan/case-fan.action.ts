"use server";
import { getRequiredAuthSession } from "@/lib/auth";
import { CaseFan, Role } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getCaseFans() {
  const res = await fetch(apiUrl + "/case-fan", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: CaseFan[] = await res.json();

  if (!data) {
    toast.error("Can't get Case Fans");
    return;
  }

  return data;
}

export async function getCaseFansById(caseFanId: number) {
  const res = await fetch(apiUrl + `/case-fan/${caseFanId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: CaseFan = await res.json();

  if (!data) {
    toast.error("Case Fan not found");
    return;
  }

  return data;
}

export async function createCaseFan(formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const response = await fetch(apiUrl + "/case-fan", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: CaseFan = await response.json();

  if (!data) {
    toast.error("Case Fan not created");
    return;
  }

  return data;
}

export async function updateCaseFan(caseFanId: number, formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const response = await fetch(apiUrl + `/case-fan/${caseFanId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data: CaseFan = await response.json();

  if (!data) {
    toast.error("Can't update this Case Fan");
    return;
  }

  return data;
}

export async function deleteCaseFan(caseFanId: number) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/case-fan/${caseFanId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session.tokens.accessToken}`,
      Accept: "application/json",
    },
  });

  const data: CaseFan = await res.json();

  if (!data) {
    toast.error("Can't delete this Case Fan");
    return;
  }

  return data;
}
