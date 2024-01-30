"use client";

import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import React, { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Navigation() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(null);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navRef = useRef<ElementRef<"div">>(null);

  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  return (
    <aside className="group/sidebar relative z-[99999] flex min-h-dvh w-60 flex-col rounded-e-2xl bg-surfaceContainerLow text-onSurfaceVariant">
      Navigation
      <Button
        variant="text"
        size="icon"
        iconPosition="iconOnly"
        className="absolute right-2 top-2 translate-x-2  scale-75 text-onSecondaryContainer opacity-0 group-hover/sidebar:translate-x-0 group-hover/sidebar:scale-100 group-hover/sidebar:opacity-100"
      >
        <span className="material-symbols-rounded size-24p">menu_open</span>
      </Button>
      <div>
        <p>Action Item</p>
      </div>
      <div className="mt-4">
        <p>Documents</p>
      </div>
      <div className="absolute right-2 top-1/2 h-1/6 w-1 origin-center -translate-y-1/2 scale-y-50 cursor-ew-resize rounded-xl bg-onSurfaceVariant/75 opacity-0 transition-all duration-250 ease-in-out group-hover/sidebar:scale-y-100 group-hover/sidebar:opacity-100" />
    </aside>
  );
}
