"use client"
import useConfiguration from '@/lib/providers/configuratorProvider';
import CPUStep from './steps/cpu-step';
import GPUStep from './steps/gpu-step';
import RAMStep from './steps/ram-step';
import MotherboardStep from './steps/motherboard-step';
import SSDStep from './steps/ssd-step';
import HDDStep from './steps/hdd-step';
import PSUStep from './steps/psu-step';
import WebcamStep from './steps/webcam-step';
import SpeakerStep from './steps/speaker-step';
import CaseStep from './steps/case-step';
import CoolingStep from './steps/cooling-step';
import SoundCardStep from './steps/sound-card-step';
import MouseStep from './steps/mouse-step';
import MonitorStep from './steps/monitor-step';
import HeadphonesStep from "./steps/headphones-step";

export default function ConfiguratorStepper() {

  const { currentStep } = useConfiguration();

  switch (currentStep) {
    case 1:
      return <CPUStep />
    case 2:
      return <GPUStep />
    case 3:
      return <RAMStep />
    case 4:
      return <MotherboardStep />
    case 5:
      return <SSDStep />
    case 6:
      return <HDDStep />
    case 7:
      return <PSUStep />
    case 8:
      return <CaseStep />
    case 9:
      return <CoolingStep />
    case 10:
      return <WebcamStep />
    case 11:
      return <SpeakerStep />
    case 12:
      return <SoundCardStep />
    case 13:
      return <MouseStep />
    case 14:
      return <MonitorStep />
    case 15:
      return <HeadphonesStep />
    default: return null;
  }
}
