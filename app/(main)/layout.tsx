"use client";

import React, { ReactNode } from "react";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import Spinner from "@/components/ui/spinner";
import Navigation from "./_components/navigation";

export default function MainLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading)
    return (
      <div className="flex min-h-dvh w-full items-center justify-center">
        <Spinner size="xl" />
      </div>
    );

  if (!isAuthenticated && isLoading) {
    return redirect("/");
  }

  return (
    <div className="mx-auto flex h-full max-w-screen-2xl">
      <Navigation />
      <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
