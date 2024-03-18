"use client";

import { Button } from "@/components/ui/Button";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";
import React from "react";

export default function Dashboard() {
  const { user } = useUser();
  return (
    <main className="grid h-dvh place-content-center">
      <Image src="/empty.png" alt="Empty" width={450} height={450} />
      <div className="space-y-3 text-center">
        <h1 className="text-headline-sm">
          Welcome to {user?.firstName}&apos;s Note
        </h1>
        <Button>
          <span className="material-symbols-rounded">add</span>Create a note
        </Button>
      </div>
    </main>
  );
}
