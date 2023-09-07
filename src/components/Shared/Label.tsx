import { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({ className, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={twMerge(
        "onSurface peer-placeholder-shown:left-6 peer-placeholder-shown:top-4 peer-placeholder-shown:text-label-lg peer-hover:text-onSurface/90 peer-focus:-top-2 peer-focus:left-3.5",
        className,
      )}
    />
  );
}
// "absolute -top-[9px] left-2.5 bg-suface text-label-md text-onSurface transition-all duration-[250ms] ease-in-out peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2   peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-label-lg peer-focus:-top-[9px] peer-focus:left-2.5 peer-focus:translate-y-0 peer-focus:text-label-md peer-focus:text-primary",
