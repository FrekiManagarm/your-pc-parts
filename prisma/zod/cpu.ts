import * as z from "zod";
import { CPUType } from "@prisma/client";
import { CompleteSetup, RelatedSetupModel } from "./index";

export const CPUModel = z.object({
  core_count: z.number().int(),
  threads_count: z.number().int(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  core_clock: z.number(),
  boost_clock: z.number(),
  amazonLink: z.string().nullish(),
  socket: z.string().nullish(),
  cpu_type: z.nativeEnum(CPUType).nullish(),
  cache: z.number().int().nullish(),
  tdp: z.number().int().nullish(),
  graphics: z.boolean().nullish(),
  smt: z.boolean().nullish(),
});

export interface CompleteCPU extends z.infer<typeof CPUModel> {
  setups: CompleteSetup[];
}

/**
 * RelatedCPUModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCPUModel: z.ZodSchema<CompleteCPU> = z.lazy(() =>
  CPUModel.extend({
    setups: RelatedSetupModel.array(),
  }),
);
