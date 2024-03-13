import * as z from "zod"
import { CompleteSetup, RelatedSetupModel } from "./index"

export const SoundCardModel = z.object({
  id: z.string(),
  channels: z.string().nullish(),
  digital_audio: z.string().nullish(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  amazonLink: z.string().nullish(),
  snr: z.number().int().nullish(),
  sample_rate: z.number().int().nullish(),
  chipset: z.string().nullish(),
  interface: z.string().nullish(),
})

export interface CompleteSoundCard extends z.infer<typeof SoundCardModel> {
  setups: CompleteSetup[]
}

/**
 * RelatedSoundCardModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSoundCardModel: z.ZodSchema<CompleteSoundCard> = z.lazy(() => SoundCardModel.extend({
  setups: RelatedSetupModel.array(),
}))
