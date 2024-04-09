"use client";

import React, { ReactNode } from "react";

import useRipple from "use-ripple-hook";
import {
  DropdownMenuItem,
  DropdownMenuItemProps,
} from "@radix-ui/react-dropdown-menu";

interface IDropdownItemProps extends DropdownMenuItemProps {
  children: ReactNode;
}

export default function CustomDropdownItem({
  children,
  ...props
}: IDropdownItemProps) {
  const [ref, event] = useRipple({
    color: "rgba(var(--on-surface), 0.1)",
  });
  return (
    <DropdownMenuItem
      ref={ref}
      onMouseDown={event}
      {...props}
      className="relative flex h-11 w-full cursor-pointer select-none items-center gap-3 rounded-sm px-3 outline-none transition-all duration-250 ease-in-out hover:bg-onSurface/[0.08]"
    >
      {children}
    </DropdownMenuItem>
  );
}
