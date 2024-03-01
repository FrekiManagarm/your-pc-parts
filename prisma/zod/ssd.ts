import * as z from "zod"
import { CompleteSSDOfSetup, RelatedSSDOfSetupModel } from "./index"

export const SSDModel = z.object({
  id: z.string(),
  capacity: z.number().int(),
  write_speed: z.number().int().nullish(),
  read_speed: z.number().int().nullish(),
  price_per_gb: z.number().int(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  amazonLink: z.string().nullish(),
  type: z.string().nullish(),
  cache: z.number().int().nullish(),
  form_factor: z.string().nullish(),
  interface: z.string().nullish(),
})

export interface CompleteSSD extends z.infer<typeof SSDModel> {
  setups: CompleteSSDOfSetup[]
}

/**
 * RelatedSSDModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSSDModel: z.ZodSchema<CompleteSSD> = z.lazy(() => SSDModel.extend({
  setups: RelatedSSDOfSetupModel.array(),
}))
