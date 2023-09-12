import { Link } from "react-router-dom";
import { buttonVariants } from "@/Shared/Button";
import { useTheme } from "../context/ThemeContext";

type NotFoundProps = {};

export default function NotFound({}: NotFoundProps) {
  const { isDark } = useTheme();
  let imageURL = isDark
    ? "https://lh3.googleusercontent.com/pw/AIL4fc9ETO0Fyyb7b3CWcg4iOQFu7Hl4yB3_pQibgYOaSRtwr594jPLu4YHGSCH5pZONEXGWgKTT8FS9FG3iaBviERI1nW2wqiFE74I9OD8izqCkgV0fCWnOV56JLws2Rb7sgX-UxBhhhavWBeOz2MvXz0Vu=w1362-h681-s-no"
    : "https://lh3.googleusercontent.com/pw/AIL4fc_KgFVkmRrUXoWImu-B6VozonnBhCcsOuPndRSawAhMrd7E8rtnNIMHLh6G-3KCDY1haZmFXA_-bUN445zsfPjdE5cQ-Gf-7CG6tMiRcXsdN-EFD4y8SW_op3fLKsm1v0gnl3URk0rRHt2_635ujPUY=w1362-h681-s-no";
  return (
    <main className="centered transition-all duration-250 ease-in-out">
      <div className="w-ful mx-auto max-w-2xl">
        <img src={imageURL} alt="404 Error Image" />
      </div>
      <div className="space-y-2 text-center transition-all duration-250 ease-in-out">
        <h1 className="text-headline-md text-onSurface sm:text-headline-lg lg:text-display-sm">
          This page cannot be found
        </h1>
        <p className="mx-auto max-w-[35ch] text-body-md text-onSurface sm:text-body-lg">
          Try a different destination head back to the{" "}
          <Link to="/home" className={buttonVariants({ variant: "link" })}>
            Homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
