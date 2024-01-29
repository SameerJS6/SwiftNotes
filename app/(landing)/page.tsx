import React from "react";
import Hero from "./_component/hero";
import Footer from "./_component/footer";

export default function LandingPage() {
  return (
    <>
      <div className="flex min-h-dvh flex-col justify-center">
        <section className="grid w-full flex-1 place-content-center ">
          <Hero />
        </section>
        <Footer />
      </div>
    </>
  );
}
