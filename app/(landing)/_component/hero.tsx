import React from "react";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <div className="space-y-4 p-4 text-center sm:p-8">
      <h1 className="max-w-[45ch] text-balance text-display-sm sm:text-display-md md:text-display-lg">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline underline-offset-4">Jotion</span>
      </h1>

      <h6 className="mx-auto text-body-lg max-sm:text-balance sm:max-w-[40ch] sm:text-title-lg">
        Jotion is the connected workspace where better, faster work happens.
      </h6>

      <Button
        size="xl"
        variant="FAB"
        className="ml-2 text-[16px] font-medium leading-6 tracking-wide active:font-normal"
      >
        Get Started
        <span className="material-symbols-rounded">arrow_forward</span>
      </Button>
    </div>
  );
}
