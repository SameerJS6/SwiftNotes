import "./tooltip.css";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type TooltipProps = {
  children?: ReactNode;
  content: string;
  className?: string;
  asChild?: boolean;
};

export default function Tooltip({
  children,
  content,
  className,
  asChild,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={200} skipDelayDuration={150}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild={asChild}>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={twMerge(
              "TooltipContent rounded bg-secondary px-2 py-1 text-body-lg text-onSecondary",
              className,
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-transparent" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
