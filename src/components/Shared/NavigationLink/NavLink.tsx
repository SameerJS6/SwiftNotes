import { Dispatch } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import useRipple from "use-ripple-hook";

type NavLinksProps = {
  label: string;
  to: string;
  icon?: JSX.Element;
  setSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
};

export default function NavLink({
  label,
  icon,
  to,
  setSidebarOpen,
}: NavLinksProps) {
  const [ripple, event] = useRipple({ color: "rgb(var(--on-surface), 0.2)" });
  return (
    <RouterNavLink
      to={to}
      ref={ripple}
      onMouseDown={event}
      onClick={() => setSidebarOpen(false)}
      className={({ isActive }) =>
        isActive
          ? "inline-flex w-full items-center gap-3 rounded-e-[2rem] bg-primary fill-onPrimary p-4 px-8 text-body-lg text-onPrimary shadow transition-all duration-250 ease-in-out active:rounded-e-2xl"
          : "inline-flex w-full items-center gap-3 rounded-e-[2rem] bg-transparent fill-onSurface/90 p-4 px-8 text-body-lg text-onSurface transition-all duration-250 ease-in-out hover:bg-onSurface/10"
      }
    >
      {icon}
      {label}
    </RouterNavLink>
  );
}
