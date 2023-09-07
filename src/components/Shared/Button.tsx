import { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./utils/utils";
import useRipple from "use-ripple-hook";

const buttonVariants = cva(
  "inline-flex items-center active:rounded-xl justify-center rounded-3xl text-label-lg transition-all duration-[250ms] ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-onBackground disabled:pointer-events-none disabled:opacity-50 capitalize select-none touch-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-onPrimary hover:bg-opacity-[85%] active:bg-opacity-75 hover:shadow-elevation-1",
        outline:
          "bg-transparent border border-outline hover:bg-secondaryContainer/60 active:bg-secondaryContainer/90 hover:border-secondaryContainer text-primary ",
        ghost:
          "bg-transparent text-onSecondaryContainer hover:bg-secondaryContainer/80 active:bg-secondaryContainer fill-onSecondaryContainer",
      },
      size: {
        default: "px-4 py-2 min-w-[80px]",
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
