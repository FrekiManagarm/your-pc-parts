import { getRequiredAuthSession } from "@/lib/auth";
import { GPU, Role } from "@/lib/types";
import { toast } from "sonner";

const apiUrl = process.env.API_URL;

export async function getGPUs() {
  const res = await fetch(apiUrl + "/gpu", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: GPU[] = await res.json();

  if (!data) {
    toast.error("GPUs not found");
    return;
  }

  return Response.json(data, {
    status: 200,
    statusText: "GPUs found",
  });
}

export async function getGPUById(gpuId: number) {
  const res = await fetch(apiUrl + `/gpu/${gpuId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data: GPU = await res.json();

  if (!data) {
    toast.error("GPU not found");
    return;
  }

  return Response.json(data, {
    status: 200,
    statusText: "GPU found",
  });
}

export async function createGPU(formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + "/gpu", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
    },
  });

  const data: GPU = await res.json();

  if (!data) {
    toast.error("GPU not created");
    return;
  }

  return Response.json(data, {
    status: 201,
    statusText: "GPU created",
  });
}

export async function updateGPU(gpuId: number, formData: FormData) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/gpu/${gpuId}`, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.tokens.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data: GPU = await res.json();

  if (!data) {
    toast.error("GPU not updated");
    return;
  }

  return Response.json(data, {
    status: 203,
    statusText: "GPU updated",
  });
}

export async function deleteGPU(gpuId: number) {
  const session = await getRequiredAuthSession(
    Role.ADMINISTRATOR || Role.MODERATOR,
  );

  const res = await fetch(apiUrl + `/gpu/${gpuId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data: GPU = await res.json();

  if (!data) {
    toast.error("GPU not deleted");
    return;
  }

  return Response.json(data, {
    status: 204,
    statusText: "",
  });
}
