import * as z from "zod"
import { CompleteCPU, RelatedCPUModel, CompleteGPU, RelatedGPUModel, CompleteHDD, RelatedHDDModel, CompleteCase, RelatedCaseModel, CompleteRAM, RelatedRAMModel, CompletePSU, RelatedPSUModel, CompleteMonitorsOfSetup, RelatedMonitorsOfSetupModel, CompleteSSDOfSetup, RelatedSSDOfSetupModel, CompleteSoundCard, RelatedSoundCardModel, CompleteCPUCooler, RelatedCPUCoolerModel, CompleteMotherboard, RelatedMotherboardModel, CompleteHeadphones, RelatedHeadphonesModel, CompleteKeyboard, RelatedKeyboardModel, CompleteMouse, RelatedMouseModel, CompleteSpeakersOfSetup, RelatedSpeakersOfSetupModel, CompleteWebcam, RelatedWebcamModel, CompleteCaseFanOfSetup, RelatedCaseFanOfSetupModel, CompleteUser, RelatedUserModel } from "./index"

export const SetupModel = z.object({
  id: z.string(),
  cpu_id: z.string(),
  gpu_id: z.string(),
  hdd_id: z.string(),
  case_id: z.string(),
  psu_id: z.string(),
  ram_id: z.string(),
  name: z.string().nullish(),
  sound_card_id: z.string(),
  cpu_cooler_id: z.string(),
  motherboard_id: z.string(),
  headphones_id: z.string(),
  keyboard_id: z.string(),
  mouse_id: z.string(),
  webcam_id: z.string(),
  user_id: z.string(),
})

export interface CompleteSetup extends z.infer<typeof SetupModel> {
  cpu: CompleteCPU
  gpu: CompleteGPU
  hdd: CompleteHDD
  case: CompleteCase
  ram: CompleteRAM
  psu: CompletePSU
  monitors: CompleteMonitorsOfSetup[]
  sdds: CompleteSSDOfSetup[]
  sound_card: CompleteSoundCard
  cpu_cooler: CompleteCPUCooler
  motherboard: CompleteMotherboard
  headphones: CompleteHeadphones
  keyboard: CompleteKeyboard
  mouse: CompleteMouse
  speakers: CompleteSpeakersOfSetup[]
  webcam: CompleteWebcam
  case_fans: CompleteCaseFanOfSetup[]
  user: CompleteUser
}

/**
 * RelatedSetupModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSetupModel: z.ZodSchema<CompleteSetup> = z.lazy(() => SetupModel.extend({
  cpu: RelatedCPUModel,
  gpu: RelatedGPUModel,
  hdd: RelatedHDDModel,
  case: RelatedCaseModel,
  ram: RelatedRAMModel,
  psu: RelatedPSUModel,
  monitors: RelatedMonitorsOfSetupModel.array(),
  sdds: RelatedSSDOfSetupModel.array(),
  sound_card: RelatedSoundCardModel,
  cpu_cooler: RelatedCPUCoolerModel,
  motherboard: RelatedMotherboardModel,
  headphones: RelatedHeadphonesModel,
  keyboard: RelatedKeyboardModel,
  mouse: RelatedMouseModel,
  speakers: RelatedSpeakersOfSetupModel.array(),
  webcam: RelatedWebcamModel,
  case_fans: RelatedCaseFanOfSetupModel.array(),
  user: RelatedUserModel,
}))
