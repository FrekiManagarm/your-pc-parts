import * as z from "zod"
import { CompleteSpeakers, RelatedSpeakersModel, CompleteSetup, RelatedSetupModel } from "./index"

export const SpeakersOfSetupModel = z.object({
  speakers_id: z.string(),
  setup_id: z.string(),
  quantity: z.number().int(),
})

export interface CompleteSpeakersOfSetup extends z.infer<typeof SpeakersOfSetupModel> {
  speakers: CompleteSpeakers
  setup: CompleteSetup
}

/**
 * RelatedSpeakersOfSetupModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSpeakersOfSetupModel: z.ZodSchema<CompleteSpeakersOfSetup> = z.lazy(() => SpeakersOfSetupModel.extend({
  speakers: RelatedSpeakersModel,
  setup: RelatedSetupModel,
}))
