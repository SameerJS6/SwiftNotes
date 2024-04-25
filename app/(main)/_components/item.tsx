import React from "react";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/utils/utils";

type ItemProps = {
  id?: Id<"documents">;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  title: string;
  onClick: () => void;
  icon: string;
};

export default function Item({
  id,
  active,
  expanded,
  isSearch,
  level = 0,
  onExpand,
  title,
  onClick,
  icon,
}: ItemProps) {
  const expandIcon = expanded ? "expand_less" : "expand_more";
  return (
    <div
      role="button"
      style={{ paddingLeft: level ? `${level * 16 + 16}px` : "16px" }}
      className={cn(
        "flex w-full cursor-pointer items-center justify-between gap-2 overflow-hidden rounded-full py-0.5 pr-4 transition-all duration-250 ease-in-out hover:bg-surfaceContainerLow",
        active &&
          "bg-primaryContainer text-onPrimaryContainer hover:bg-primaryContainer/50",
      )}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        <span className={`${active && "iconFill"} material-symbols-rounded`}>
          {icon}
        </span>
        <span className="truncate">{title}</span>
      </div>
      {/* <span className="material-symbols-rounded">{expandIcon}</span> */}
      {isSearch && (
        <kbd className="flex select-none items-center gap-0.5 rounded-full border border-surfaceContainerHighest bg-surfaceContainerLow px-2 text-[12px] font-medium tracking-widest text-onSurface">
          <span className="">⌘</span> K
        </kbd>
      )}
    </div>
  );
}
