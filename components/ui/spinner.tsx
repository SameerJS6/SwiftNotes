import React from "react";
import { cn } from "@/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

const spinnerVariants = cva("lucide lucide-loader-2 animate-spin", {
  variants: {
    size: {
      default: "size-5",
      sm: "size-4",
      lg: "size-6",
      xl: "size-7",
    },
    defaultVariant: {
      size: "default",
    },
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

const Spinner = ({ size, className }: SpinnerProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={cn(spinnerVariants({ size, className }))}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export default Spinner;
