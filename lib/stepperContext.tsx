import React, { createContext, useState } from "react";

export const StepperContext = createContext({});

export const StepperProvider = ({ children }: { children: React.ReactNode }) => {
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