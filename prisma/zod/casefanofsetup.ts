import * as z from "zod"
import { CompleteCaseFan, RelatedCaseFanModel, CompleteSetup, RelatedSetupModel } from "./index"

export const CaseFanOfSetupModel = z.object({
  case_fan_id: z.string(),
  setup_id: z.string(),
  quantity: z.number().int(),
})

export interface CompleteCaseFanOfSetup extends z.infer<typeof CaseFanOfSetupModel> {
  case_fan: CompleteCaseFan
  setup: CompleteSetup
}

/**
 * RelatedCaseFanOfSetupModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCaseFanOfSetupModel: z.ZodSchema<CompleteCaseFanOfSetup> = z.lazy(() => CaseFanOfSetupModel.extend({
  case_fan: RelatedCaseFanModel,
  setup: RelatedSetupModel,
}))
