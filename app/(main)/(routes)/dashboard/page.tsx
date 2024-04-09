"use client";

import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";

import { useUser } from "@clerk/clerk-react";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { toast } from "sonner";

export default function Dashboard() {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const handleCreateNote = () => {
    const response = create({
      title: "Untitled",
    });

    toast.promise(response, {
      loading: "Creating note....",
      success: "New note created!",
      error: "Failed to create a new note",
    });
  };
  return (
    <main className="grid h-dvh place-content-center">
      <Image src="/empty.png" alt="Empty" width={450} height={450} />
      <div className="space-y-3 text-center">
        <h1 className="text-headline-sm">
          Welcome to {user?.firstName}&apos;s Note
        </h1>
        <Button onClick={handleCreateNote}>
          <span className="material-symbols-rounded">add</span>Create a note
        </Button>
      </div>
    </main>
  );
}
