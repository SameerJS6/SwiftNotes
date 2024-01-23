import React from "react";
import "material-symbols/rounded.css";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <h1 className="p-4 text-display-sm">Swift Notes</h1>
      <main className="m-4 space-y-4">
        <p className="text-headline-md">Buttons</p>
        <div className="flex flex-wrap gap-4">
          <Button iconPosition="start" asChild>
            <a
              href="https://twitter.com/Sameerjs6"
              target="_blank"
              className="inline-flex items-center gap-2"
            >
              <span className="material-symbols-rounded optical-24">
                north_east
              </span>
              Twitter
            </a>
          </Button>
          <Button variant="outlined" iconPosition="start">
            <span className="material-symbols-rounded optical-24">add</span>
            Label
          </Button>
          <Button variant="elevated" iconPosition="both">
            <span className="material-symbols-rounded optical-24">
              favorite
            </span>
            Favorite
            <span className="material-symbols-rounded optical-24">
              expand_more
            </span>
          </Button>
          <Button variant="tonal" iconPosition="start" asChild>
            <a
              href="https://github.com/SameerJS6"
              target="_blank"
              className="inline-flex items-center gap-2"
            >
              <span className="material-symbols-rounded optical-24">
                north_east
              </span>
              GitHub
            </a>
          </Button>
          <Button variant="text" iconPosition="start">
            <span className="material-symbols-rounded optical-24">
              download
            </span>
            Download
          </Button>
          <Button size="icon" iconPosition="iconOnly" centeredRipple>
            <span className="material-symbols-rounded size-24p">bookmark</span>
          </Button>
          <Button
            variant="tonal"
            size="icon"
            iconPosition="iconOnly"
            centeredRipple
          >
            <span className="material-symbols-rounded size-24p">mood</span>
          </Button>
          <Button
            variant="outlined"
            size="icon"
            iconPosition="iconOnly"
            centeredRipple
          >
            <span className="material-symbols-rounded size-24p">search</span>
          </Button>
          <Button
            variant="text"
            size="icon"
            iconPosition="iconOnly"
            centeredRipple
          >
            <span className="material-symbols-rounded size-24p">star</span>
          </Button>
        </div>
      </main>

      <div className="space-y-4 px-4">
        <p className="text-headline-md">FAB</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="FAB" size="sm" iconPosition="fab" centeredRipple>
            <span className="material-symbols-rounded">palette</span>
          </Button>
          <Button variant="FAB" size="fab" iconPosition="fab" centeredRipple>
            <span className="material-symbols-rounded">chat</span>
          </Button>
          <Button variant="FAB" size="lg" iconPosition="fab" centeredRipple>
            <span className="material-symbols-rounded">edit</span>
          </Button>
          <Button
            variant="secondaryFAB"
            size="lg"
            iconPosition="fab"
            centeredRipple
          >
            <span className="material-symbols-rounded">edit</span>
          </Button>
          <Button
            variant="secondaryFAB"
            size="fab"
            iconPosition="fab"
            centeredRipple
          >
            <span className="material-symbols-rounded">chat</span>
          </Button>
          <Button
            variant="secondaryFAB"
            size="sm"
            iconPosition="fab"
            centeredRipple
          >
            <span className="material-symbols-rounded">palette</span>
          </Button>
          <Button
            variant="tonalFAB"
            size="sm"
            iconPosition="fab"
            centeredRipple
          >
            <span className="material-symbols-rounded">palette</span>
          </Button>
          <Button
            variant="tonalFAB"
            size="fab"
            iconPosition="fab"
            centeredRipple
          >
            <span className="material-symbols-rounded">chat</span>
          </Button>
          <Button
            variant="tonalFAB"
            size="lg"
            iconPosition="fab"
            centeredRipple
          >
            <span className="material-symbols-rounded">edit</span>
          </Button>
        </div>
      </div>
    </>
  );
}
