"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/utils";
import { usePathname } from "next/navigation";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import UserItem from "./user-item";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import Item from "./item";

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

  const documents = useQuery(api.documents.getDocument);

  const create = useMutation(api.documents.create);

  const handleCreateNote = () => {
    const response = create({
      title: "Untitled",
    });

    toast.promise(response, {
      loading: "Creating note....",
      success: "New note created!",
      error: "Failed to create a new note",
    });
  };
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar relative z-[99999] flex min-h-dvh w-60 max-w-sm flex-col overflow-y-auto rounded-e-3xl bg-primaryContainer/15 text-onSurfaceVariant md:max-w-md",
          isResetting && "transition-all duration-[450ms] ease-out",
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
            "pointer-events-none absolute right-2 top-2 translate-x-2 scale-75 text-onSecondaryContainer opacity-0 group-hover/sidebar:pointer-events-auto group-hover/sidebar:translate-x-0 group-hover/sidebar:scale-100 group-hover/sidebar:opacity-100",
            isMobile &&
              isTablet &&
              "pointer-events-auto translate-x-0 scale-100 opacity-100",
          )}
        >
          <span className="material-symbols-rounded size-24p">menu_open</span>
        </Button>
        <div
          className={`mt-4 w-full rounded-2xl ${isResetting && "transition-opacity duration-[10000] ease-out"}`}
        >
          <UserItem />

          <div className="mt-4 w-full rounded-2xl px-2">
            <Button
              variant="FAB"
              iconPosition="start"
              size="full"
              onClick={handleCreateNote}
            >
              <span className="material-symbols-rounded">add_circle</span>
              New Document
            </Button>

            <Button
              variant="text"
              iconPosition="start"
              size="full"
              className="my-2 justify-between text-secondary"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-rounded size-24p">
                  search
                </span>
                Search
              </div>
              <kbd className="flex select-none items-center gap-0.5 rounded-full border border-surfaceContainerHighest bg-surfaceContainerLow px-2 text-[12px] font-medium tracking-widest text-onSurface">
                <span className="">⌘</span> K
              </kbd>
            </Button>
          </div>

          <div className="mt-4 w-full space-y-2 px-2">
            {documents?.map((document, index) => (
              <Item
                icon="draft"
                key={document._id}
                title={document.title}
                onClick={() => console.log("Clicked on Item")}
                active={index === 0}
              />
              // <Button
              //   key={document._id}
              //   variant="text"
              //   size="sm"
              //   className="w-full justify-start"
              // >
              //   {document.title}
              // </Button>
            ))}
          </div>
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
          isResetting && "transition-all duration-[450ms] ease-out",
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
