import * as z from "zod"
import { CaseType } from "@prisma/client"
import { CompleteSetup, RelatedSetupModel } from "./index"

export const CaseModel = z.object({
  id: z.string(),
  type: z.nativeEnum(CaseType),
  color: z.string().nullish(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  included_PSU_W: z.number().int().nullish(),
  amazonLink: z.string().nullish(),
  side_panel: z.string().nullish(),
  external_volume: z.string().nullish(),
  internal_35_bays: z.number().int().nullish(),
})

export interface CompleteCase extends z.infer<typeof CaseModel> {
  setups: CompleteSetup[]
}

/**
 * RelatedCaseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCaseModel: z.ZodSchema<CompleteCase> = z.lazy(() => CaseModel.extend({
  setups: RelatedSetupModel.array(),
}))
