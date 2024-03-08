import * as z from "zod";
import { CompleteSetup, RelatedSetupModel } from "./index";

export const RAMModel = z.object({
  speed: z.number().int().array(),
  modules: z.number().int().array(),
  price_per_gb: z.number().nullish(),
  color: z.string().nullish(),
  imageUrl: z.string().nullish(),
  amazonLink: z.string().nullish(),
  name: z.string(),
  first_word_latency: z.string().nullish(),
  cas_latency: z.string().nullish(),
});

export interface CompleteRAM extends z.infer<typeof RAMModel> {
  setups: CompleteSetup[];
}

/**
 * RelatedRAMModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRAMModel: z.ZodSchema<CompleteRAM> = z.lazy(() =>
  RAMModel.extend({
    setups: RelatedSetupModel.array(),
  }),
);
