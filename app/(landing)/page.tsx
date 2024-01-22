import React from "react";
import "material-symbols/rounded.css";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <h1 className="p-4 text-display-sm">Swift Notes</h1>
      <main className="m-4 flex  flex-wrap gap-4">
        {/* <button className="group relative inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[20px] bg-primary px-6 text-label-lg text-onPrimary transition-all duration-250 hover:shadow-elevation-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:rounded-xl disabled:pointer-events-none disabled:bg-onSurface disabled:bg-opacity-[0.12] disabled:text-onSurface disabled:text-opacity-[0.38] has-[span]:pl-4 has-[span]:pr-6">
          <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-onPrimary opacity-0 group-hover:opacity-[0.1]" />
          <span className="material-symbols-rounded optical-24">settings</span>
          Button
        </button>

        <button className="group relative inline-flex h-10 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-[20px] border-[1.5px] border-outline px-6 text-label-lg text-primary transition-all duration-250 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:rounded-xl disabled:pointer-events-none disabled:border-onSurface disabled:border-opacity-[0.12] disabled:bg-onSurface disabled:bg-opacity-[0] disabled:text-onSurface disabled:text-opacity-[0.38] has-[span]:pl-4 has-[span]:pr-6">
          <div className="pointer-events-none absolute inset-0 bg-primary opacity-0 transition-colors duration-250 ease-in-out group-hover:opacity-[0.08] group-focus-visible:opacity-[0.08]" />
          <span className="material-symbols-rounded optical-24">settings</span>
          Button
        </button> */}

        <Button iconPosition="end" asChild>
          <a
            href="https://twitter.com/Sameerjs6"
            target="_blank"
            className="inline-flex items-center gap-2"
          >
            Twitter
            <span className="material-symbols-rounded optical-24">
              north_east
            </span>
          </a>
        </Button>

        <Button variant="outlined" iconPosition="end">
          Label
          <span className="material-symbols-rounded optical-24">add</span>
        </Button>

        <Button variant="elevated" iconPosition="end">
          Favorite
          <span className="material-symbols-rounded optical-24">favorite</span>
        </Button>

        <Button variant="tonal" iconPosition="end" asChild>
          <a
            href="https://github.com/SameerJS6"
            target="_blank"
            className="inline-flex items-center gap-2"
          >
            GitHub
            <span className="material-symbols-rounded optical-24">
              north_east
            </span>
          </a>
        </Button>

        <Button
          variant="text"
          iconPosition="end"
          className="hover:bg-primary/5"
          asChild
        >
          <a
            href="https://github.com/SameerJS6"
            target="_blank"
            className="inline-flex items-center gap-2"
          >
            Download
            <span className="material-symbols-rounded optical-24">
              download
            </span>
          </a>
        </Button>
      </main>
    </>
  );
}
