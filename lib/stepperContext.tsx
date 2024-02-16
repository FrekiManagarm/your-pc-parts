"use client";
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

type StepperContextInterface = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const StepperContext = createContext<StepperContextInterface | null>(null);

export default function StepperProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </StepperContext.Provider>
  )
}

export function useStepperContext() {
  const context = useContext(StepperContext);

  if (context === null) {
    throw new Error(
      "useStepperContext must be used within an StepperProvider"
    );
  }

  return context
}