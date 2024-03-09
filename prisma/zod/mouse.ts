import * as z from "zod"
import { MouseTrackMethod, ConnectionType, MouseOrientation } from "@prisma/client"
import { CompleteSetup, RelatedSetupModel } from "./index"

export const MouseModel = z.object({
  id: z.string(),
  tracking_method: z.nativeEnum(MouseTrackMethod),
  connection_type: z.nativeEnum(ConnectionType),
  max_dpi: z.number().int().nullish(),
  amazonLink: z.string().nullish(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  hand_orientation: z.nativeEnum(MouseOrientation),
  color: z.string().nullish(),
})

export interface CompleteMouse extends z.infer<typeof MouseModel> {
  setups: CompleteSetup[]
}

/**
 * RelatedMouseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMouseModel: z.ZodSchema<CompleteMouse> = z.lazy(() => MouseModel.extend({
  setups: RelatedSetupModel.array(),
}))
