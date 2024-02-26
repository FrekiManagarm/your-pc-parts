"use client"
import useConfiguration from '@/lib/providers/configuratorProvider';
import { Step, Stepper } from 'react-form-stepper';

export default function ConfiguratorStepper() {

  const { currentStep } = useConfiguration();

  return (
    <Stepper className='' activeStep={currentStep}>
      <Step label='CPU' />
      <Step label='GPU' />
      <Step label='HDD' />
    </Stepper>
  )
}
