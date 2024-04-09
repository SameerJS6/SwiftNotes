"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SignOutButton, useUser } from "@clerk/clerk-react";

import useRipple from "use-ripple-hook";
import CustomDropdownItem from "@/components/ui/dropdown-item";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import { toast } from "sonner";

export default function UserItem() {
  const { user } = useUser();
  const [ref, event] = useRipple({
    color:
      "radial-gradient(circle, transparent, rgba(var(--inverse-surface), 0.2)),url(/Grain.svg)",
  });
  const router = useRouter();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div
          ref={ref}
          onMouseDown={event}
          className="z-50 flex w-full items-center gap-2 rounded-full p-2 transition-all duration-250 ease-in-out hover:bg-onSurface/15 "
          role="button"
        >
          <Avatar className="inline-flex size-8 select-none items-center justify-center overflow-hidden rounded-full align-middle lg:size-5 2xl:size-8">
            <AvatarImage
              src={user?.imageUrl}
              alt={user?.fullName || "Profile Picture"}
              className="h-full w-full rounded-[inherit] object-cover"
            />
            <AvatarFallback delayMs={600}>
              {user?.firstName?.slice(0, 1)} {user?.lastName?.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center">
            <span className="line-clamp-1 text-body-md">
              {user?.fullName}&apos;s Notes
            </span>
            <span className="material-symbols-rounded size-24p">
              expand_more
            </span>
          </div>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="z-[99999] min-w-48 max-w-72 rounded-md bg-surfaceContainer py-2 text-onSecondaryContainer shadow-elevation-1"
        >
          <CustomDropdownItem
            onClick={() => toast("Swift Notes User's Profile")}
          >
            <>
              <span className="material-symbols-rounded size-24p text-onSurfaceVariant">
                account_circle
              </span>
              Profile
            </>
          </CustomDropdownItem>
          <CustomDropdownItem>
            <>
              <span className="material-symbols-rounded size-24p text-onSurfaceVariant">
                settings
              </span>
              Setting
            </>
          </CustomDropdownItem>
          <CustomDropdownItem>
            <>
              <span className="material-symbols-rounded size-24p text-onSurfaceVariant">
                logout
              </span>
              <SignOutButton signOutCallback={() => router.push("/")}>
                Log out
              </SignOutButton>
            </>
          </CustomDropdownItem>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
