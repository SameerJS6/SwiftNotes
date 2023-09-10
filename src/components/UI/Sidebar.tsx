import { Dispatch } from "react";
import { Button } from "@/Shared/Button";
import * as Dialog from "@radix-ui/react-dialog";
import NavLink from "@/Shared/NavLink";
import { useLocation } from "react-router-dom";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const currentLocation = useLocation();

  const navLinks = [
    {
      id: 1,
      label: "Notes",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // height="24"
          viewBox="0 -960 960 960"
          // width="24"
          className="h-5 w-5 fill-onSurface/90 group-hover:fill-onSurface/100"
        >
          <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM360-200q-17 0-28.5-11.5T320-240q0-17 11.5-28.5T360-280h240q17 0 28.5 11.5T640-240q0 17-11.5 28.5T600-200H360Zm-30-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z" />
        </svg>
      ),
      to: "/home",
    },
    {
      id: 2,
      label: "Reminder",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // height="24"
          viewBox="0 -960 960 960"
          // width="24"
          className="h-5 w-5 fill-onSurface/90 group-hover:fill-onSurface/100"
        >
          <path d="M200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200Zm280-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
        </svg>
      ),
      to: "/reminder",
    },
    {
      id: 3,
      label: "Edit Label",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // height="24"
          viewBox="0 -960 960 960"
          // width="24"
          className="h-5 w-5 fill-onSurface/90 group-hover:fill-onSurface/100"
        >
          <path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57ZM160-120q-17 0-28.5-11.5T120-160v-113q0-8 3-15.5t9-13.5l412-412 170 170-412 412q-6 6-13.5 9t-15.5 3H160Zm413-453-28-28 56 56-28-28Z" />
        </svg>
      ),
      to: currentLocation.pathname,
    },
    {
      id: 4,
      label: "Trash",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 -960 960 960"
          className="h-5 w-5 fill-onSurface/90 group-hover:fill-onSurface/100"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      ),
      to: "/trash",
    },
  ];
  return (
    <Dialog.Root open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide from-overlay/75 to-overlay/10 fixed inset-0 bg-gradient-to-t backdrop-blur-sm" />
        <Dialog.Content className="data-[state=open]:animate-sidebarShow data-[state=closed]:animate-sidebarHide fixed left-0 top-0 h-full w-full max-w-xs space-y-8 rounded-e-3xl bg-surface shadow-elevation-1 max-[320px]:rounded-none sm:rounded-e-[2rem]">
          <Dialog.Title className="flex items-center justify-between p-4 ">
            <span className="text-title-lg text-onSurface">Note Sync</span>
            <Dialog.Close>
              <Button
                rippleColour="rgb(var(--on-secondary-container), 0.2)"
                onClick={() => setSidebarOpen(true)}
                variant="ghostSurface"
                className="group hover:bg-secondaryContainer/50"
                size="icon"
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
