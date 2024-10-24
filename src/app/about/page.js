import About from "@/components/About/Page/About";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full bg-[#303e41]">
      <div className="container mx-auto w-full">
        <Navbar />
      </div>
      <About />
    </div>
  );
}
