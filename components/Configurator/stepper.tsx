"use client"
import { useStepperContext } from '@/lib/stepperContext';
import { Step, Stepper } from 'react-form-stepper';

export default function ConfiguratorStepper() {

  const { currentStep } = useStepperContext();

  return (
    <Stepper className='' activeStep={currentStep}>
      <Step label='CPU' />
      <Step label='GPU' />
      <Step label='HDD' />
    </Stepper>
  )
}
