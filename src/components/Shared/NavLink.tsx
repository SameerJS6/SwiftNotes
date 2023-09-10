import { Dispatch } from "react";
import { Link } from "react-router-dom";
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
  const [ripple, event] = useRipple();
  return (
    <Link
      to={to}
      ref={ripple}
      onMouseDown={event}
      onClick={() => setSidebarOpen(false)}
      className="inline-flex w-full items-center gap-3 rounded-e-[2rem] bg-transparent p-4 px-8 text-body-lg text-onSurface transition-all duration-250 ease-in-out hover:bg-secondaryContainer/75 active:rounded-e-2xl"
    >
      {icon}
      {label}
    </Link>
  );
}
