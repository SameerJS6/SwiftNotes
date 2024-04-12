"use client";

import React, { ReactNode } from "react";

import useRipple from "use-ripple-hook";

import {
  DropdownMenuItem,
  DropdownMenuItemProps,
} from "@radix-ui/react-dropdown-menu";

import { cn } from "@/utils/utils";
import { motion } from "framer-motion";

interface IDropdownItemProps extends DropdownMenuItemProps {
  index: number;
  onClick?: () => void;
  children: ReactNode;
  closeMenu: () => Promise<void>;
}

export default function CustomDropdownItem({
  index,
  children,
  onClick,
  className,
  closeMenu,
  ...props
}: IDropdownItemProps) {
  const [ref, event] = useRipple({
    color: "rgba(var(--on-surface), 0.1)",
  });
  return (
    <DropdownMenuItem
      ref={ref}
      onMouseDown={event}
      onSelect={async (e) => {
        e.preventDefault();
        await closeMenu();
        onClick && onClick();
      }}
      {...props}
      className={cn(
        "relative h-11 w-full cursor-pointer select-none rounded-sm px-3 text-onSecondaryContainer outline-none transition-all duration-250 ease-in-out data-[highlighted]:bg-onSurface/[0.08]",
        className,
      )}
    >
      <motion.div
        initial="hidden"
        animate="open"
        exit="hidden"
        custom={index}
        variants={{
          hidden: (index) => ({
            opacity: 0,
            y: -40 * index,
          }),
          open: (index) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.025 * index, ease: "easeOut" },
          }),
        }}
        className="flex h-full items-center gap-3"
      >
        {children}
      </motion.div>
    </DropdownMenuItem>
  );
}
