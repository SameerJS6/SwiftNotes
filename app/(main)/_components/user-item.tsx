"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SignOutButton, useUser } from "@clerk/clerk-react";

import useRipple from "use-ripple-hook";
import CustomDropdownItem from "@/components/ui/dropdown-item";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import { toast } from "sonner";
import { AnimatePresence, motion } from "framer-motion";

export default function UserItem() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const [ref, event] = useRipple({
    color:
      "radial-gradient(circle, transparent, rgba(var(--inverse-surface), 0.2)),url(/Grain.svg)",
  });
  const router = useRouter();
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
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
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: open ? 180 : 0 }}
              className="material-symbols-rounded size-24p"
            >
              expand_more
            </motion.span>
          </div>
        </div>
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {open && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              asChild
              align="center"
              sideOffset={5}
              className="z-[99999] min-w-48 max-w-72 overflow-hidden rounded-md bg-surfaceContainer text-onSecondaryContainer "
            >
              <motion.div
                initial={{ height: 0, opacity: 0.75, boxShadow: "0" }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  boxShadow:
                    "0px 1px 2px 0px rgb(0 0 0 / 0.3), 0px 1px 3px 1px rgb(0 0 0 / 0.15)",
                }}
                exit={{ height: 0, opacity: 0.75, boxShadow: "0" }}
              >
                <CustomDropdownItem
                  onClick={() => toast("Swift Notes User's Profile")}
                  className="mt-2"
                >
                  <span className="material-symbols-rounded size-24p text-onSurfaceVariant">
                    account_circle
                  </span>
                  Profile
                </CustomDropdownItem>

                <CustomDropdownItem>
                  <span className="material-symbols-rounded size-24p text-onSurfaceVariant">
                    settings
                  </span>
                  Setting
                </CustomDropdownItem>

                <CustomDropdownItem className="mb-2">
                  <span className="material-symbols-rounded size-24p text-onSurfaceVariant">
                    logout
                  </span>
                  <SignOutButton signOutCallback={() => router.push("/")}>
                    Log out
                  </SignOutButton>
                </CustomDropdownItem>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
}
