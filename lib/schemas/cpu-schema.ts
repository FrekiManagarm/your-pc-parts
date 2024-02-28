import { z } from "zod";

export const CPUCreateSchema = z.object({
  core_count: z.number(),
  threads_count: z.number(),
  name: z.string(),
  imageUrl: z.string().nullable(),
  core_clock: z.number(),
  boost_clock: z.number(),
  amazonLink: z.string().nullable(),
  tdp: z.number().nullable(),
  graphics: z.boolean().nullable(),
  smt: z.boolean().nullable(),
});

export const CPUUpdateSchema = z.object({
  core_count: z.number(),
  threads_count: z.number(),
  name: z.string(),
  imageUrl: z.string().nullable(),
  core_clock: z.number(),
  boost_clock: z.number(),
  amazonLink: z.string().nullable(),
  tdp: z.number().nullable(),
  graphics: z.boolean().nullable(),
  smt: z.boolean().nullable(),
});
