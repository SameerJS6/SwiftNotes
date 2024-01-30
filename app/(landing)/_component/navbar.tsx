"use client";
import { Button } from "@/components/ui/Button";
import Spinner from "@/components/ui/spinner";
import { useScrollTop } from "@/hooks/useScrollTop";
import { SignInButton, UserButton, UserProfile } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <header
      className={`flex items-center justify-between px-4 py-4 sm:px-8 ${scrolled && "-translate-y-20"} transition-transform duration-250 ease-in-out`}
    >
      <Image src="/logo.svg" height="40" width="40" alt="Jotion Logo" />

      <div className="flex items-center gap-2">
        {!isAuthenticated && !isLoading && (
          <>
            <Button variant="text" size="icon" iconPosition="iconOnly">
              <a href="https://twitter.com/Sameerjs6" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="size-5 fill-onBackground"
                  id="twitter"
                >
                  <path d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path>
                </svg>
              </a>
            </Button>

            <Button variant="text" size="icon" iconPosition="iconOnly">
              <a href="https://github.com/SameerJS6" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  className="size-7 fill-onBackground"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                </svg>
              </a>
            </Button>
          </>
        )}
        {isLoading && <Spinner size="lg" />}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button>
                <span className="material-symbols-rounded">login</span>Login
              </Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button variant="tonal" asChild iconPosition="end">
              <Link href="/dashboard" className="flex items-center gap-2">
                Create Now
                <span className="material-symbols-rounded">arrow_forward</span>
              </Link>
            </Button>

            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </header>
  );
}
