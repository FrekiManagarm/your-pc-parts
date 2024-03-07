import * as z from "zod";
import { CompleteCaseFanOfSetup, RelatedCaseFanOfSetupModel } from "./index";

export const CaseFanModel = z.object({
  size: z.number().int(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  color: z.string().nullish(),
  amazonLink: z.string().nullish(),
  rpm: z.number().int().array(),
  airflow: z.number().int().array(),
});

export interface CompleteCaseFan extends z.infer<typeof CaseFanModel> {
  setups: CompleteCaseFanOfSetup[];
}

/**
 * RelatedCaseFanModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCaseFanModel: z.ZodSchema<CompleteCaseFan> = z.lazy(() =>
  CaseFanModel.extend({
    setups: RelatedCaseFanOfSetupModel.array(),
  }),
);
