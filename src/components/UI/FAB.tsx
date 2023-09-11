import { Link } from "react-router-dom";
import useRipple from "use-ripple-hook";
import Tooltip from "@/Shared/Tooltip/Tooltip";

type Props = {};

export default function Fab({}: Props) {
  const [ripple, event] = useRipple({ color: "rgb(var(--surface), 0.2)" });
  return (
    <>
      <Tooltip asChild={true} content="Create New Note">
        <Link
          ref={ripple}
          onMouseDown={event}
          to="/create-note"
          className="focusState fixed bottom-10 right-6 z-[1] rounded-2xl bg-primary fill-onPrimary p-3.5 text-body-lg transition-all duration-250 ease-in-out hover:bg-primary/90 hover:shadow-elevation-1 active:rounded-3xl sm:bottom-12 sm:right-10 sm:p-4 md:bottom-14 lg:bottom-16 lg:right-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="h-7 w-7 sm:h-8 sm:w-8"
          >
            <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
          </svg>
        </Link>
      </Tooltip>
    </>
  );
}
