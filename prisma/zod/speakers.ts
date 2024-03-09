import * as z from "zod"
import { CompleteSpeakersOfSetup, RelatedSpeakersOfSetupModel } from "./index"

export const SpeakersModel = z.object({
  id: z.string(),
  configuration: z.string().nullish(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  wattage: z.number().int().nullish(),
  frequency_response: z.number().int().nullish(),
  amazonLink: z.string().nullish(),
  color: z.string().nullish(),
})

export interface CompleteSpeakers extends z.infer<typeof SpeakersModel> {
  setups: CompleteSpeakersOfSetup[]
}

/**
 * RelatedSpeakersModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSpeakersModel: z.ZodSchema<CompleteSpeakers> = z.lazy(() => SpeakersModel.extend({
  setups: RelatedSpeakersOfSetupModel.array(),
}))
