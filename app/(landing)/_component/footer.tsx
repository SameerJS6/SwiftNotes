import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 px-4 py-2 sm:justify-between sm:px-8">
      <Image
        src="/logo.svg"
        height="40"
        width="40"
        alt="Jotion Logo"
        className="hidden sm:block"
      />
      <div className="flex">
        <Button
          variant="text"
          size="sm"
          iconPosition="fab"
          className="text-onSurface/90 hover:text-primary"
        >
          Privacy Policy
        </Button>
        <Button
          variant="text"
          size="sm"
          iconPosition="fab"
          className="text-onSurface/90 hover:text-primary"
        >
          Terms & Conditions
        </Button>
      </div>
    </footer>
  );
}
