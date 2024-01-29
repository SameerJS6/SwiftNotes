"use client";
import { Button } from "@/components/ui/Button";
import { useScrollTop } from "@/hooks/useScrollTop";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  const scrolled = useScrollTop();
  return (
    <header
      className={`flex items-center justify-between px-4 py-4 sm:px-8 ${scrolled && "-translate-y-20"} transition-transform duration-250 ease-in-out`}
    >
      <Image src="/logo.svg" height="40" width="40" alt="Jotion Logo" />

      <Button variant="tonal">
        <span className="material-symbols-rounded">login</span>Login
      </Button>
    </header>
  );
}
