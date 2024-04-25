"use client";
import React from "react";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";

import { Button } from "@/components/ui/Button";
import Spinner from "@/components/ui/spinner";
import { Link } from "next-view-transitions";
// import Link from "next/link";

export default function Hero() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="space-y-4 p-4 text-center sm:p-8">
      <h1 className="max-w-[45ch] text-balance text-display-sm sm:text-display-md md:text-display-lg">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline underline-offset-4">Jotion</span>
      </h1>

      <h6 className="mx-auto text-body-lg max-sm:text-balance sm:max-w-[40ch] sm:text-title-lg">
        Jotion is the connected workspace where better, faster work happens.
      </h6>

      {isLoading && <Spinner size="xl" className="mx-auto stroke-primary" />}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button
            size="xl"
            variant="FAB"
            className="ml-2 text-[16px] font-normal leading-6 tracking-wide active:rounded-2xl active:font-medium"
          >
            Get Started
            <span className="material-symbols-rounded group-active:gradFont transition-all">
              arrow_forward
            </span>
          </Button>
        </SignInButton>
      )}

      {isAuthenticated && !isLoading && (
        <Button
          size="xl"
          asChild
          className="ml-2 text-[16px] font-normal leading-6 tracking-wide active:rounded-2xl active:font-medium"
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            Explore Swifts Notes
            <span className="material-symbols-rounded group-active:gradFont transition-all">
              arrow_forward
            </span>
          </Link>
        </Button>
      )}
    </div>
  );
}
