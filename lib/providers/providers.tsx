"use client";
import { ConfiguratorProvider } from "./configuratorProvider";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <ConfiguratorProvider>
        {children}
      </ConfiguratorProvider>
    </SessionProvider>
  );
}
