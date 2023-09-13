import * as Popover from "@radix-ui/react-popover";
import profilePicture from "../../assets/profile-picture.jpg";
import { useState } from "react";

type ProfileProps = {};

export default function Profile({}: ProfileProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger>
        <button
          data-show={isOpen}
          className="profile m-2 rounded-full shadow-elevation-1"
        >
          <img
            className="h-7 w-7 rounded-full"
            src={profilePicture}
            alt="Profile Picture"
          />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={10}
          collisionPadding={10}
          className="PopoverContent rounded-[0.8rem] bg-surfaceContainerLowest text-onSurface shadow-elevation-2 transition-all duration-250 ease-in-out"
        >
          <div className="grid space-y-2 p-0.5">
            <button className="flex items-center justify-start gap-2 rounded-xl bg-transparent px-4 py-2 text-body-md transition-all duration-250 ease-in-out hover:bg-onSurface/10 active:bg-onSurface/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                // height="24"
                // width="24"
                className="fill-onSurfaceVariant h-5 w-5"
              >
                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
              </svg>
              Profile
            </button>
            <button className="flex items-center justify-center gap-1 rounded-xl bg-transparent px-4 py-2 text-body-md transition-all duration-250 ease-in-out hover:bg-onSurface/10 active:bg-onSurface/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                // height="24"
                // width="24"
                className="fill-onSurfaceVariant h-5 w-5"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h240q17 0 28.5 11.5T480-160q0 17-11.5 28.5T440-120H200Zm487-320H400q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h287l-75-75q-11-11-11-27t11-28q11-12 28-12.5t29 11.5l143 143q12 12 12 28t-12 28L669-309q-12 12-28.5 11.5T612-310q-11-12-10.5-28.5T613-366l74-74Z" />
              </svg>
              Log Out
            </button>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
