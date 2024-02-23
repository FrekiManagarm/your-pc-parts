import { getAuthSession } from "./auth";
import { createSafeActionClient } from "next-safe-action";

class ServerError extends Error {}

export const authenticatedAction = createSafeActionClient({
  handleReturnedServerError(error) {
    if (error instanceof ServerError) {
      return error.message;
    }

    return error.message;
  },
  middleware: async () => {
    const session = await getAuthSession();

    const user = session?.user;
    const userId = user?.id;
    const role = user?.role;

    if (!userId) {
      throw new ServerError("You must be logged in to perform this action");
    }

    return {
      userId,
      user,
    };
  },
});
