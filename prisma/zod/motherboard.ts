import * as z from "zod";
import { MemorySupport } from "@prisma/client";
import { CompleteSetup, RelatedSetupModel } from "./index";

export const MotherboardModel = z.object({
  socket: z.string().array(),
  form_factor: z.string(),
  chipset: z.string().nullish(),
  support: z.nativeEnum(MemorySupport).nullish(),
  max_memory: z.number().int(),
  memory_slots: z.number().int(),
  audio: z.boolean().nullish(),
  bluetooth: z.boolean().nullish(),
  wifi: z.boolean().nullish(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  amazonLink: z.string().nullish(),
  color: z.string().nullish(),
});

export interface CompleteMotherboard extends z.infer<typeof MotherboardModel> {
  setups: CompleteSetup[];
}

/**
 * RelatedMotherboardModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMotherboardModel: z.ZodSchema<CompleteMotherboard> = z.lazy(
  () =>
    MotherboardModel.extend({
      setups: RelatedSetupModel.array(),
    }),
);
