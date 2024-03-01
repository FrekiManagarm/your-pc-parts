import * as z from "zod"
import { CompleteMonitor, RelatedMonitorModel, CompleteSetup, RelatedSetupModel } from "./index"

export const MonitorsOfSetupModel = z.object({
  monitor_id: z.string(),
  setup_id: z.string(),
  quantity: z.number().int(),
})

export interface CompleteMonitorsOfSetup extends z.infer<typeof MonitorsOfSetupModel> {
  monitor: CompleteMonitor
  setup: CompleteSetup
}

/**
 * RelatedMonitorsOfSetupModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMonitorsOfSetupModel: z.ZodSchema<CompleteMonitorsOfSetup> = z.lazy(() => MonitorsOfSetupModel.extend({
  monitor: RelatedMonitorModel,
  setup: RelatedSetupModel,
}))
