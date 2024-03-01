import * as z from "zod"
import { CompleteSSD, RelatedSSDModel, CompleteSetup, RelatedSetupModel } from "./index"

export const SSDOfSetupModel = z.object({
  ssd_id: z.string(),
  setup_id: z.string(),
})

export interface CompleteSSDOfSetup extends z.infer<typeof SSDOfSetupModel> {
  ssd: CompleteSSD
  setup: CompleteSetup
}

/**
 * RelatedSSDOfSetupModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSSDOfSetupModel: z.ZodSchema<CompleteSSDOfSetup> = z.lazy(() => SSDOfSetupModel.extend({
  ssd: RelatedSSDModel,
  setup: RelatedSetupModel,
}))
