import * as z from "zod";
import { CompleteSetup, RelatedSetupModel } from "./index";

export const GPUModel = z.object({
  chipset: z.string().nullish(),
  memory: z.number().int().nullish(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  amazonLink: z.string().nullish(),
  core_clock: z.number().int().nullish(),
  power: z.number().int().nullish(),
  proc_unit: z.number().int().nullish(),
  brand: z.string().nullish(),
  led: z.boolean().nullish(),
  boost_clock: z.number().int().nullish(),
  color: z.string().nullish(),
  length: z.number().int().nullish(),
});

export interface CompleteGPU extends z.infer<typeof GPUModel> {
  setups: CompleteSetup[];
}

/**
 * RelatedGPUModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedGPUModel: z.ZodSchema<CompleteGPU> = z.lazy(() =>
  GPUModel.extend({
    setups: RelatedSetupModel.array(),
  }),
);
