import { Button } from "@/Shared/Button";
import Tooltip from "@/Shared/Tooltip/Tooltip";
import { InnerMoon } from "@theme-toggles/react";
import "@theme-toggles/react/css/InnerMoon.css";
import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

type DarkModeProps = {};

export default function DarkMode({}: DarkModeProps) {
  const { isDark, setIsDark } = useTheme();
  useEffect(() => {
    isDark
      ? document.body.classList.add("darkMode")
      : document.body.classList.remove("darkMode");
  }, [isDark]);

  return (
    <Tooltip content={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <Button
        rippleColour="rgb(var(--on-secondary-container), 0.1)"
        className="group"
        variant="ghostSurface"
        size="icon"
      >
        <InnerMoon toggled={isDark} toggle={setIsDark} duration={500} />
      </Button>
    </Tooltip>
  );
}
