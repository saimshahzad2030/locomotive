import About from "@/components/About/Page/About";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full bg-slate-900">
      <div className="container mx-auto w-full">
        <Navbar />
      </div>
      <div className="container mx-auto w-full">
        <About />
      </div>
    </div>
  );
}
