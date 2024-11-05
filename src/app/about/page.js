import About from "@/components/About/Page/About";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

export default function AboutPage() {
  return (
    <div
      className="flex flex-col items-center w-full  "
      style={{
        backgroundImage: `url(/assets/bg.gif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto w-full">
    <Navbar />
      </div>
      <About />
    </div>
  );
}
