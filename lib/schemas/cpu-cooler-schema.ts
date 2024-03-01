import { z } from "zod";

export const CPUCoolerCreateSchema = z.object({
  rpm: z.number().nullable(),
  proc_support: z.array(z.string()),
  led: z.boolean().nullable(),
  tdp_max: z.number().nullable(),
  type: z.string().nullable(),
  pressure: z.string().nullable(),
  rpm_min: z.number().nullable(),
  rpm_max: z.number().nullable(),
  name: z.string(),
  imageUrl: z.string().nullable(),
  amazonLink: z.string().nullable(),
  noise_level: z.string().nullable(),
  color: z.string().nullable(),
  size: z.number().nullable(),
});

export const CPUCoolerUpdateSchema = z.object({
  rpm: z.number().nullable(),
  proc_support: z.array(z.string()),
  led: z.boolean().nullable(),
  tdp_max: z.number().nullable(),
  type: z.string().nullable(),
  pressure: z.string().nullable(),
  rpm_min: z.number().nullable(),
  rpm_max: z.number().nullable(),
  name: z.string(),
  imageUrl: z.string().nullable(),
  amazonLink: z.string().nullable(),
  noise_level: z.string().nullable(),
  color: z.string().nullable(),
  size: z.number().nullable(),
});
