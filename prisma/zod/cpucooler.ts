import * as z from "zod"
import { CompleteSetup, RelatedSetupModel } from "./index"

export const CPUCoolerModel = z.object({
  id: z.string(),
  rpm: z.number().int().nullish(),
  proc_support: z.string().array(),
  led: z.boolean().nullish(),
  tdp_max: z.number().int().nullish(),
  type: z.string().nullish(),
  pressure: z.string().nullish(),
  rpm_min: z.number().int().nullish(),
  rpm_max: z.number().int().nullish(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  amazonLink: z.string().nullish(),
  noise_level: z.number().int().nullish(),
  color: z.string().nullish(),
  size: z.number().int().nullish(),
})

export interface CompleteCPUCooler extends z.infer<typeof CPUCoolerModel> {
  setups: CompleteSetup[]
}

/**
 * RelatedCPUCoolerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCPUCoolerModel: z.ZodSchema<CompleteCPUCooler> = z.lazy(() => CPUCoolerModel.extend({
  setups: RelatedSetupModel.array(),
}))
