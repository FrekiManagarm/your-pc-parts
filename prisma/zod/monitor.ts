import * as z from "zod";
import { MonitorPanelType } from "@prisma/client";
import { CompleteMonitorsOfSetup, RelatedMonitorsOfSetupModel } from "./index";

export const MonitorModel = z.object({
  screen_size: z.number().int().nullish(),
  resolution: z.number().int().array(),
  amazonLink: z.string().nullish(),
  name: z.string(),
  imageUrl: z.string().nullish(),
  refresh_rate: z.number().int().nullish(),
  response_time: z.number().int().nullish(),
  panel_type: z.nativeEnum(MonitorPanelType),
  aspect_ratio: z.string().nullish(),
});

export interface CompleteMonitor extends z.infer<typeof MonitorModel> {
  setups: CompleteMonitorsOfSetup[];
}

/**
 * RelatedMonitorModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMonitorModel: z.ZodSchema<CompleteMonitor> = z.lazy(() =>
  MonitorModel.extend({
    setups: RelatedMonitorsOfSetupModel.array(),
  }),
);
