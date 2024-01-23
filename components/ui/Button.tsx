"use client";
import React, { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/utils/utils";
import useRipple from "use-ripple-hook";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  centeredRipple?: boolean;
}

const buttonVariants = cva(
  `button group relative inline-flex h-10 text-center items-center justify-center gap-2 whitespace-nowrap rounded-[20px] px-6 text-label-lg transition-all duration-250 ease-in-out hover:shadow-elevation-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:rounded-xl disabled:pointer-events-none disabled:bg-onSurface disabled:bg-opacity-[0.12] disabled:text-onSurface disabled:text-opacity-[0.38] overflow-hidden hover:before:bg-primary hover:before:bg-opacity-[0.08] focus-visible:before:bg-primary focus-visible:before:bg-opacity-[0.1]`,
  {
    variants: {
      variant: {
        default:
          "bg-primary text-onPrimary focus-visible:ring-primary hover:before:bg-onPrimary focus-visible:before:bg-onPrimary",
        outlined:
          "border-[1.5px] border-outline bg-transparent text-primary hover:shadow-none focus-visible:border-primary disabled:border-onSurface disabled:border-opacity-[0.12] disabled:bg-opacity-[0]",
        tonal:
          "bg-secondaryContainer text-onSecondaryContainer hover:before:bg-onSecondaryContainer focus-visible:before:bg-onSecondaryContainer",
        elevated:
          "bg-surfaceContainerLow text-primary shadow-elevation-1 hover:shadow-elevation-2 focus-visible:ring-secondary",
        text: "bg-transparent text-primary hover:shadow-none disabled:bg-opacity-[0]",
        FAB: "bg-primaryContainer text-onPrimaryContainer active:rounded-[45px]",
        tonalFAB:
          "bg-tertiaryContainer text-onTertiaryContainer active:rounded-[45px] hover:before:bg-onTertiaryContainer focus-visible:before:bg-onTertiaryContainer",
        secondaryFAB:
          "bg-secondaryContainer text-onSecondaryContainer active:rounded-[45px] hover:before:bg-onSecondaryContainer focus-visible:before:bg-onSecondaryContainer",
      },
      size: {
        default: "h-10",
        icon: "size-10 rounded-[30px]",
        full: "w-full h-11 rounded-[30px]",
        sm: "rounded-xl size-10 smFAB",
        lg: "rounded-[28px] size-24 lgFAB",
        fab: "rounded-2xl size-14 smFAB",
      },
      iconPosition: {
        default: "px-6",
        start: "pl-4 pr-6",
        end: "pl-6 pr-4",
        both: "pl-6 pr-5",
        iconOnly: "px-0",
        fab: "px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      iconPosition: "default",
    },
  },
);

const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  centeredRipple = false,
  iconPosition,
  asChild = false,
  ...props
}) => {
  const [ref, event] = useRipple({
    className: centeredRipple ? "centeredRipple" : "ripple",
    color:
      "radial-gradient(circle, transparent, rgba(var(--inverse-surface), 0.2)),url(/Grain.svg)",
  });
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      onMouseDown={event}
      className={cn(buttonVariants({ variant, size, className, iconPosition }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
