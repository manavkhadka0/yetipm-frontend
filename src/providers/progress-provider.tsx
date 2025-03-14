// In /app/providers.tsx
"use client";

import { ProgressProvider } from "@bprogress/next/app";

const ProgressProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ProgressProvider
      height="4px"
      color="#003d21"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default ProgressProviderComponent;
