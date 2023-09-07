import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      placeholder=" "
      className={twMerge(
        "inputShadow bg-transparent peer relative w-full max-w-xs rounded-lg border border-onSurface/60 px-6 py-3 text-body-lg text-onSurface transition-all duration-200 hover:border-onSurface/90 focus:border-primary focus:caret-primary focus:outline-none",
        className,
      )}
    />
  );
}
