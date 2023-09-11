import { Dispatch } from "react";
import { Button } from "@/Shared/Button";
import * as Dialog from "@radix-ui/react-dialog";
import NavLink from "@/Shared/NavigationLink/NavLink";
import { navLinks } from "@/Shared/NavigationLink/NavLinksData";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <Dialog.Root open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gradient-to-t from-overlay/75 to-overlay/10 backdrop-blur-sm data-[state=closed]:animate-overlayHide data-[state=open]:animate-overlayShow z-[5]" />
        <Dialog.Content className="fixed left-0 top-0 h-full w-full max-w-xs space-y-8 rounded-e-3xl bg-surface shadow-elevation-1 data-[state=closed]:animate-sidebarHide data-[state=open]:animate-sidebarShow max-[320px]:rounded-none sm:rounded-e-[2rem] z-10">
          <Dialog.Title className="flex items-center justify-between p-4">
            <span className="pl-2 text-title-lg text-onSurface">Note Sync</span>
            <Dialog.Close className="focus-visible:rounded-full focus-visible:outline-onBackground">
              <Button
                rippleColour="rgb(var(--on-secondary-container), 0.2)"
                onClick={() => setSidebarOpen(true)}
                variant="ghostSurface"
                size="icon"
                className="group hover:bg-secondaryContainer/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className="h-6 w-6 fill-onSurface/90 group-hover:fill-onSurface/100 sm:h-7 sm:w-7"
                >
                  <path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h440q17 0 28.5 11.5T640-280q0 17-11.5 28.5T600-240H160Zm596-68L612-452q-12-12-12-28t12-28l144-144q11-11 28-11t28 11q11 11 11 28t-11 28L696-480l116 116q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM160-440q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h320q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h440q17 0 28.5 11.5T640-680q0 17-11.5 28.5T600-640H160Z" />
                </svg>
              </Button>
            </Dialog.Close>
          </Dialog.Title>

          <Dialog.Description>
            <nav>
              <ul className="flex flex-col gap-0.5">
                {navLinks.map((link, index) => (
                  <NavLink
                    setSidebarOpen={setSidebarOpen}
                    key={index}
                    {...link}
                  />
                ))}
              </ul>
            </nav>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
