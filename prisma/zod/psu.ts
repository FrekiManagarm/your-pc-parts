import * as z from "zod"
import { PSUType, PSUEff, PSUModul } from "@prisma/client"
import { CompleteSetup, RelatedSetupModel } from "./index"

export const PSUModel = z.object({
  id: z.string(),
  type: z.nativeEnum(PSUType),
  name: z.string(),
  imageUrl: z.string().nullish(),
  efficiency: z.nativeEnum(PSUEff),
  amazonLink: z.string().nullish(),
  wattage: z.number().int().nullish(),
  modular: z.nativeEnum(PSUModul),
  color: z.string().nullish(),
})

export interface CompletePSU extends z.infer<typeof PSUModel> {
  setups: CompleteSetup[]
}

/**
 * RelatedPSUModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPSUModel: z.ZodSchema<CompletePSU> = z.lazy(() => PSUModel.extend({
  setups: RelatedSetupModel.array(),
}))
