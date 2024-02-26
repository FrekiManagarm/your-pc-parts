"use client"

import React, { createContext, useState, useEffect, useContext, Dispatch, SetStateAction } from "react";

type ConfiguratorContext = {
  configuration: {};
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  addNewComponent: () => void;
  removeComponent: () => void;
  storeCurrent: () => void;
}

const ConfiguratorContext = createContext<ConfiguratorContext | {}>({});

export function ConfiguratorProvider({ children }: { children: React.ReactNode }) {
  const [configuration, setConfiguration] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  function addNewComponent(component: any) {
    setConfiguration({ ...configuration, component });
  }

  function removeComponent() {

  }

  function nextStep() {
    const nextStep = currentStep + 1
    setCurrentStep(nextStep)
  }

  function previousStep() {
    const previousStep = currentStep - 1
    setCurrentStep(previousStep);
  }

  return <ConfiguratorContext.Provider value={{
    configuration,
    currentStep,
    nextStep,
    previousStep,
    addNewComponent,
    removeComponent
  }}>
    {children}
  </ConfiguratorContext.Provider>
}

export default function useConfiguration() {
  const configContext = useContext(ConfiguratorContext)

  if (!configContext) {
    throw new Error("useConfiguration hook must be used inside the Configurator Context")
  }

  return configContext;
}