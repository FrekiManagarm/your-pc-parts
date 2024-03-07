import * as z from "zod";
import { HeadphoneTypes, EnclosureType } from "@prisma/client";
import { CompleteSetup, RelatedSetupModel } from "./index";

export const HeadphonesModel = z.object({
  type: z.nativeEnum(HeadphoneTypes),
  frequency_response: z.number().int().array(),
  microphone: z.boolean().nullish(),
  wireless: z.boolean().nullish(),
  amazonLink: z.string().nullish(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  noise_cancellation: z.boolean().nullish(),
  enclosure_type: z.nativeEnum(EnclosureType),
  color: z.string().nullish(),
});

export interface CompleteHeadphones extends z.infer<typeof HeadphonesModel> {
  setups: CompleteSetup[];
}

/**
 * RelatedHeadphonesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedHeadphonesModel: z.ZodSchema<CompleteHeadphones> = z.lazy(
  () =>
    HeadphonesModel.extend({
      setups: RelatedSetupModel.array(),
    }),
);
