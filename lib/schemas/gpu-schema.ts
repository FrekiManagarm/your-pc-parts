import { z } from "zod";

export const GPUCreateSchema = z.object({
  chipset: z.string().nullable(),
  memory: z.number().nullable(),
  name: z.string(),
  imageUrl: z.string().nullable(),
  amazonLink: z.string().nullable(),
  core_clock: z.number().nullable(),
  boost_clock: z.number().nullable(),
  color: z.string().nullable(),
  length: z.number().nullable(),
});

export const GPUUpdateSchema = z.object({
  chipset: z.string().nullable(),
  memory: z.number().nullable(),
  name: z.string(),
  imageUrl: z.string().nullable(),
  amazonLink: z.string().nullable(),
  core_clock: z.number().nullable(),
  boost_clock: z.number().nullable(),
  color: z.string().nullable(),
  length: z.number().nullable(),
});
