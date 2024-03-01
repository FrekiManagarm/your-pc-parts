import * as z from "zod"
import { KeyboardStyle, ConnectionType } from "@prisma/client"
import { CompleteSetup, RelatedSetupModel } from "./index"

export const KeyboardModel = z.object({
  id: z.string(),
  style: z.nativeEnum(KeyboardStyle),
  switches: z.string().nullish(),
  backlit: z.string().nullish(),
  name: z.string(),
  amazonLink: z.string().nullish(),
  imageUrl: z.string().nullish(),
  tenkeyless: z.boolean().nullish(),
  connection_type: z.nativeEnum(ConnectionType),
  color: z.string().nullish(),
})

export interface CompleteKeyboard extends z.infer<typeof KeyboardModel> {
  setups: CompleteSetup[]
}

/**
 * RelatedKeyboardModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedKeyboardModel: z.ZodSchema<CompleteKeyboard> = z.lazy(() => KeyboardModel.extend({
  setups: RelatedSetupModel.array(),
}))
