import { getRequiredAuthSession } from "@/lib/auth";
import { HDD, Role } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getHDDs() {
  const res = await fetch(apiUrl + "/hdd", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: HDD[] = await res.json();

  if (!data) {
    toast.error("HDDs not found");
    return;
  }

  return data;
}

export async function getHDDById(hddId: number) {
  const res = await fetch(apiUrl + `/hdd/${hddId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: HDD = await res.json();

  if (!data) {
    toast.error("HDD not found");
    return;
  }

  return data;
}

export async function createHDD(formData: FormData) {
  const res = await fetch(apiUrl + "/hdd", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data: HDD = await res.json();

  if (!data) {
    toast.error("HDD not created");
    return;
  }

  return data;
}

export async function updateHDD(hddId: number, formData: FormData) {
  const res = await fetch(apiUrl + `/hdd/${hddId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: HDD = await res.json();

  if (!data) {
    toast.error("HDD not updated");
    return;
  }

  return data;
}

export async function deleteHDD(hddId: number) {
  const res = await fetch(apiUrl + `/hdd/${hddId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  const data: HDD = await res.json();

  if (!data) {
    toast.error("HDD not deleted");
    return;
  }

  return data;
}
