import { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./utils/utils";
import useRipple from "use-ripple-hook";

const buttonVariants = cva(
  "duration-250 inline-flex touch-none select-none items-center justify-center rounded-3xl text-label-lg capitalize transition-all ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onBackground focus-visible:ring-offset-2 active:rounded-xl disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-onPrimary hover:bg-opacity-[85%] hover:shadow-elevation-1 active:bg-opacity-75",
        outline:
          "border border-outline/50 bg-transparent text-primary hover:border-secondaryContainer hover:bg-secondaryContainer/60 active:bg-secondaryContainer/90",
        ghost:
          "bg-transparent fill-onSecondaryContainer text-onSecondaryContainer hover:bg-secondaryContainer/80 active:bg-secondaryContainer",
        ghostSurface:
          "bg-transparent fill-onSurface text-onSurface hover:bg-surfaceDim/80 active:bg-surfaceDim",
      },
      size: {
        default: "min-w-[80px] px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        block: "w-full py-2.5",
        icon: "h-10 w-10",
        icon2:
          "rounded-xl h-12 w-12 active:rounded-3xl hover:shadow-elevation-2",
      },
      elevation: {
        default: " ",
        elevatedLow: "shadow-elevation-1",
        elevatedMed: "shadow-elevation-2",
        elevatedHigh: "shadow-elevation-3",
      },

      defaultVariants: {
        variant: "default",
        size: "default",
        elevation: "default",
      },
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  rippleColour?: string;
}

function Button({
  className,
  elevation,
  rippleColour = "rgba(var(--surface-bright), 0.15)",
  size,
  variant,
  ...props
}: ButtonProps) {
  const [ripple, event] = useRipple({ color: rippleColour });
  return (
    <button
      ref={ripple}
      onMouseDown={event}
      {...props}
      className={cn(buttonVariants({ elevation, variant, size, className }))}
    />
  );
}

export { Button, buttonVariants };
