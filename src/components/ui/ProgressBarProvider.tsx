"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#013d20"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
