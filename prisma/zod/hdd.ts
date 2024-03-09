import * as z from "zod"
import { CompleteSetup, RelatedSetupModel } from "./index"

export const HDDModel = z.object({
  id: z.string(),
  capacity: z.number().int(),
  price_per_gb: z.number().int(),
  amazonLink: z.string().nullish(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  type: z.string().nullish(),
  cache: z.number().int().nullish(),
  rpm: z.number().int().nullish(),
  form_factor: z.string().nullish(),
  interface: z.string().nullish(),
})

export interface CompleteHDD extends z.infer<typeof HDDModel> {
  setups: CompleteSetup[]
}

/**
 * RelatedHDDModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedHDDModel: z.ZodSchema<CompleteHDD> = z.lazy(() => HDDModel.extend({
  setups: RelatedSetupModel.array(),
}))
