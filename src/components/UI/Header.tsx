import { Button, buttonVariants } from "@/Shared/Button";
import { useState } from "react";
import DarkMode from "./DarkMode";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import useRipple from "use-ripple-hook";
import { useAuth } from "../../context/AuthContext";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const { currentUser } = useAuth();
  const [listView, setListView] = useState(false); //By default, its going to be Grid so false, and if it is true then flex
  const [ripple, event] = useRipple({ color: "rgb(var(--surface), 0.15)" });

  return (
    <header className="duration-250 bg-surfaceContainerLow/50 py-4 transition-all ease-in-out">
      <nav className="mx-auto max-w-[1440px] px-2 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Left Side  */}
          <div className="flex items-center gap-1 sm:gap-4">
            {currentUser && (
              <Button
                rippleColour="rgb(var(--on-secondary-container), 0.1)"
                className="group"
                variant="ghostSurface"
                size="icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  height="28"
                  width="28"
                  className="fill-onSurface/90 group-hover:fill-onSurface/100"
                >
                  <path d="M180-264q-15.3 0-25.65-10.289-10.35-10.29-10.35-25.5Q144-315 154.35-325.5 164.7-336 180-336h600q15.3 0 25.65 10.289 10.35 10.29 10.35 25.5Q816-285 805.65-274.5 795.3-264 780-264H180Zm0-180q-15.3 0-25.65-10.289-10.35-10.29-10.35-25.5Q144-495 154.35-505.5 164.7-516 180-516h600q15.3 0 25.65 10.289 10.35 10.29 10.35 25.5Q816-465 805.65-454.5 795.3-444 780-444H180Zm0-180q-15.3 0-25.65-10.289-10.35-10.29-10.35-25.5Q144-675 154.35-685.5 164.7-696 180-696h600q15.3 0 25.65 10.289 10.35 10.29 10.35 25.5Q816-645 805.65-634.5 795.3-624 780-624H180Z" />
                </svg>
              </Button>
            )}
            <h1 className="text-title-md text-onSurface sm:text-headline-lg lg:text-headline-lg">
              Note Sync
            </h1>
          </div>

          {/* Login  */}
          {!currentUser && (
            <div className="flex items-center gap-2">
              <DarkMode />
              <Link
                ref={ripple}
                onMouseDown={event}
                to="/login"
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                  className="mr-1.5 fill-onPrimary"
                >
                  <path d="M516-144q-15.3 0-25.65-10.289-10.35-10.29-10.35-25.5Q480-195 490.35-205.5 500.7-216 516-216h228v-528H516q-15.3 0-25.65-10.289-10.35-10.29-10.35-25.5Q480-795 490.35-805.5 500.7-816 516-816h228q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H516Zm-78-300H179.963q-15.284 0-25.624-10.289Q144-464.579 144-479.789 144-495 154.339-505.5q10.34-10.5 25.624-10.5H438l-56-56q-11-11-11-25.571 0-14.572 11-25.5Q393-634 407.5-634t25.5 11l118 118q11 10.636 11 24.818Q562-466 551-455L433-337q-11 11-25 10.5T382.522-338Q372-349 372-363.5t11-25.5l55-55Z" />
                </svg>
                Log In
              </Link>
            </div>
          )}

          {/* Right Side  */}
          {currentUser && (
            <div className="flex items-center">
              <Button
                rippleColour="rgb(var(--on-secondary-container), 0.1)"
                className="group"
                variant="ghostSurface"
                size="icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  // height="24"
                  // width="24"
                  className="h-[22px] w-[22px] fill-onSurface/80 group-hover:fill-onSurface/100 sm:h-6 sm:w-6"
                >
                  <path d="M384.035-336Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.035q0 40.381-12.5 76.173T577-434l214 214q11 11 11 25t-11 25q-11 11-25.5 11T740-170L526-383q-30 22-65.792 34.5T384.035-336ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
                </svg>
              </Button>
              {/* List View  */}
              <Button
                rippleColour="rgb(var(--on-secondary-container), 0.1)"
                className="group"
                onClick={() => setListView(!listView)}
                variant="ghostSurface"
                size="icon"
              >
                {listView ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    // height="24"
                    // width="24"
                    className="h-[22px] w-[22px] fill-onSurface/90 group-hover:fill-onSurface/100 sm:h-6 sm:w-6"
                  >
                    <path d="M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 480q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Zm0-80h560v-160H200v160Zm0-560v160-160Zm0 400v160-160Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    // height="24"
                    // width="24"
                    className="h-[22px] w-[22px] fill-onSurface/90 group-hover:fill-onSurface/100 sm:h-6 sm:w-6"
                  >
                    <path d="M144-528v-288h288v288H144Zm0 384v-288h288v288H144Zm384-384v-288h288v288H528Zm0 384v-288h288v288H528ZM216-600h144v-144H216v144Zm384 0h144v-144H600v144Zm0 384h144v-144H600v144Zm-384 0h144v-144H216v144Zm384-384Zm0 240Zm-240 0Zm0-240Z" />
                  </svg>
                )}
              </Button>
              <DarkMode />
              <div className="p-2">
                <Profile />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
