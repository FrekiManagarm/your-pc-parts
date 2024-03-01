import { z } from "zod";

export const CaseCreateSchema = z.object({
  type: z.string(),
  color: z.string().nullable(),
  name: z.string(),
  imageUrl: z.string().nullable(),
  included_PSU_W: z.number().nullable(),
  amazonLink: z.string().nullable(),
  side_panel: z.string().nullable(),
  external_volume: z.string().nullable(),
  internal_35_bays: z.number().nullable(),
});

export const CaseUpdateSchema = z.object({
  type: z.string(),
  color: z.string().nullable(),
  name: z.string(),
  imageUrl: z.string().nullable(),
  included_PSU_W: z.number().nullable(),
  amazonLink: z.string().nullable(),
  side_panel: z.string().nullable(),
  external_volume: z.string().nullable(),
  internal_35_bays: z.number().nullable(),
});
