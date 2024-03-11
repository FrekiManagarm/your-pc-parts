import * as z from "zod";
import { UserRole } from "@prisma/client";
import {
  CompleteSetup,
  RelatedSetupModel,
  CompleteAccount,
  RelatedAccountModel,
  CompleteSession,
  RelatedSessionModel,
} from "./index";

export const UserModel = z.object({
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  role: z.nativeEnum(UserRole),
});

export interface CompleteUser extends z.infer<typeof UserModel> {
  setups: CompleteSetup[];
  accounts: CompleteAccount[];
  sessions: CompleteSession[];
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() =>
  UserModel.extend({
    setups: RelatedSetupModel.array(),
    accounts: RelatedAccountModel.array(),
    sessions: RelatedSessionModel.array(),
  }),
);
