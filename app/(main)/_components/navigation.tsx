"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/utils";
import { usePathname } from "next/navigation";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Navigation() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navRef = useRef<ElementRef<"div">>(null);

  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapseSidebar();
    } else {
      resetSidebarWidth(450);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapseSidebar();
    }
  }, [isMobile, pathname]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    isResizingRef.current = true;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef.current) return;

    let newWidth = e.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 450) newWidth = 448;

    if (sidebarRef.current && navRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navRef.current.style.setProperty("left", `${newWidth}px`);
      navRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetSidebarWidth = (timeout: number) => {
    if (sidebarRef.current && navRef.current) {
      setIsResetting(true);
      setIsCollapsed(false);

      sidebarRef.current.style.transitionDuration = `${timeout}ms`;
      sidebarRef.current.style.width = isMobile ? "100%" : "240px";

      navRef.current.style.transitionDuration = `${timeout}ms`;
      navRef.current.style.setProperty(
        "left",
        isMobile ? "0" : isTablet ? "384px" : "240px",
      );
      navRef.current.style.setProperty(
        "width",
        isMobile ? "0" : isTablet ? "calc(100% - 384px)" : "calc(100% - 240px)",
      );

      setTimeout(() => setIsResetting(false), timeout);
    }
  };

  const collapseSidebar = () => {
    if (sidebarRef.current && navRef.current) {
      setIsResetting(true);
      setIsCollapsed(true);

      sidebarRef.current.style.width = "0";
      sidebarRef.current.style.transitionDuration = "250ms";

      navRef.current.style.left = "0";
      navRef.current.style.width = "100%";
      navRef.current.style.transitionDuration = "250ms";

      setTimeout(() => setIsResetting(false), 250);
    }
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar relative z-[99999] flex min-h-dvh w-60 max-w-sm flex-col overflow-y-auto rounded-e-3xl bg-surfaceContainerLow text-onSurfaceVariant md:max-w-md",
          isResetting && "transition-all duration-[450ms] ease-in-out",
          isMobile && isTablet && "w-0",
        )}
      >
        <Button
          variant="text"
          size="icon"
          iconPosition="iconOnly"
          onClick={collapseSidebar}
          centeredRipple
          className={cn(
            "pointer-events-none absolute right-2 top-2 translate-x-2 scale-75  text-onSecondaryContainer opacity-0 group-hover/sidebar:pointer-events-auto group-hover/sidebar:translate-x-0 group-hover/sidebar:scale-100 group-hover/sidebar:opacity-100",
            isMobile &&
              isTablet &&
              "pointer-events-auto translate-x-0 scale-100 opacity-100",
          )}
        >
          <span className="material-symbols-rounded size-24p">menu_open</span>
        </Button>
        <div>
          <p>Action Item</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
        <div
          onMouseDown={handleMouseDown}
          onClick={() => resetSidebarWidth(250)}
          className="absolute right-2 top-1/2 h-1/6 w-1 origin-center -translate-y-1/2 scale-y-50 cursor-ew-resize rounded-xl bg-onSurfaceVariant/75 opacity-0 transition-all duration-250 ease-in-out group-hover/sidebar:scale-y-100 group-hover/sidebar:opacity-100"
        />
      </aside>

      <div
        ref={navRef}
        className={cn(
          "absolute left-60 top-0 z-[99999] w-[calc(100%-240px)]",
          isResetting && "transition-all duration-[450ms] ease-in-out",
          isMobile && isTablet && "left-0 w-full",
        )}
      >
        <nav className="w-full bg-transparent px-3 py-2">
          {isCollapsed && (
            <Button
              variant="text"
              size="icon"
              iconPosition="iconOnly"
              className="text-onSurface"
              centeredRipple
              onClick={() => resetSidebarWidth(450)}
            >
              <span className="material-symbols-rounded size-24p">menu</span>
            </Button>
          )}
        </nav>
      </div>
    </>
  );
}
