import { z } from "zod";

export const GPUCreateSchema = z.object({
  chipset: z.string().nullable(),
  memory: z.number().nullable(),
  name: z.string(),
  imageUrl: z.string().nullable(),
});

export const GPUUpdateSchema = z.object({});
