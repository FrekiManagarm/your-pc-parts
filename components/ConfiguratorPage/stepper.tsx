"use client"
import useConfiguration from '@/lib/providers/configuratorProvider';
import { Step, Stepper } from 'react-form-stepper';

export default function ConfiguratorStepper() {

  const { currentStep } = useConfiguration();

  switch (currentStep) {
    case 1:
      return

    default:
      break;
  }
}
