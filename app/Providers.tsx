"use client";

import { StepperProvider } from "@/lib/stepperContext";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <StepperProvider>
        {children}
      </StepperProvider>
    </SessionProvider>
  );
}
