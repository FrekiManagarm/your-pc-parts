import { SoundCard } from "@/lib/types";
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
  });
}

export async function createSoundCard(formData: FormData) {}

export async function updateSoundCard(
  soundCardId: number,
  formData: FormData,
) {}

export async function deleteSoundCard(soundCardId: number) {}
