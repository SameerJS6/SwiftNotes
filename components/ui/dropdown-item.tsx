"use client";

import React, { ReactNode } from "react";

import useRipple from "use-ripple-hook";
import {
  DropdownMenuItem,
  DropdownMenuItemProps,
} from "@radix-ui/react-dropdown-menu";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/utils/utils";

interface IDropdownItemProps extends DropdownMenuItemProps {
  onClick?: () => void;
  children: ReactNode;
}

export default function CustomDropdownItem({
  children,
  onClick,
  className,
  ...props
}: IDropdownItemProps) {
  const [ref, event] = useRipple({
    color: "rgba(var(--on-surface), 0.1)",
  });
  let controls = useAnimationControls();
  return (
    <DropdownMenuItem
      ref={ref}
      onMouseDown={event}
      onClick={(e) => {
        e.preventDefault();

        controls.start({
          backgroundColor: "red",
          color: "white",
          transition: { duration: 1 },
        });

        onClick && onClick();
      }}
      {...props}
      className={cn(
        "relative h-11 w-full cursor-pointer select-none rounded-sm px-3 outline-none transition-all duration-250 ease-in-out data-[highlighted]:bg-onSurface/[0.08]",
        className,
      )}
    >
      <motion.div
        initial={{
          opacity: 0.25,
          y: "-80px",
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, ease: "circOut" },
        }}
        exit={{
          opacity: 0.25,
          y: "-80px",
        }}
        className="flex h-full items-center gap-3"
      >
        {children}
      </motion.div>
    </DropdownMenuItem>
  );
}
