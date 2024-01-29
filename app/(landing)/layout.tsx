import React from "react";
import Navbar from "./_component/navbar";

type LandingLayoutProps = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <main className="mx-auto max-w-screen-2xl">
      <Navbar />
      <div className="">{children}</div>
    </main>
  );
}
