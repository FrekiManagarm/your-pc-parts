import * as z from "zod"
import { ConnectionType, FocusType } from "@prisma/client"
import { CompleteSetup, RelatedSetupModel } from "./index"

export const WebcamModel = z.object({
  id: z.string(),
  resolutions: z.string().array(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  connection: z.nativeEnum(ConnectionType),
  focus_type: z.nativeEnum(FocusType),
  os: z.string().array(),
  amazonLink: z.string().nullish(),
  fov: z.number().int().nullish(),
})

export interface CompleteWebcam extends z.infer<typeof WebcamModel> {
  setups: CompleteSetup[]
}

/**
 * RelatedWebcamModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWebcamModel: z.ZodSchema<CompleteWebcam> = z.lazy(() => WebcamModel.extend({
  setups: RelatedSetupModel.array(),
}))
