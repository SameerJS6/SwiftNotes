/* eslint-disable react/display-name */
import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/utils/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  endIcon?: boolean;
}

const buttonVariants = cva(
  `group relative inline-flex h-10 text-center items-center justify-center gap-2 whitespace-nowrap rounded-[20px] px-6 text-label-lg transition-all duration-250 ease-in-out hover:shadow-elevation-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:rounded-xl disabled:pointer-events-none disabled:bg-onSurface disabled:bg-opacity-[0.12] disabled:text-onSurface disabled:text-opacity-[0.38]`,
  {
    variants: {
      variant: {
        default: "bg-primary text-onPrimary focus-visible:ring-primary",
        outlined:
          "border-[1.5px] border-outline bg-transparent text-primary hover:shadow-none focus-visible:border-primary disabled:border-onSurface disabled:border-opacity-[0.12] disabled:bg-opacity-[0]",
        tonal: "bg-secondaryContainer text-onSecondaryContainer",
        elevated:
          "bg-surfaceContainerLow text-primary shadow-elevation-1 hover:shadow-elevation-2 focus-visible:ring-secondary",
        text: "bg-transparent text-primary hover:shadow-none disabled:bg-opacity-[0]",
      },
      size: {
        default: "h-10",
        full: "w-full h-11",
      },
      iconPosition: {
        start: "pl-4 pr-6",
        end: "pl-6 pr-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      iconPosition: "start",
    },
  },
);

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      variant,
      iconPosition,
      asChild = false,
      endIcon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, iconPosition, className }),
        )}
        {...props}
      />
    );
  },
);

export { Button, buttonVariants };
