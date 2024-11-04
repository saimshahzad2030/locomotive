import About from "@/components/About/Page/About";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

export default function AboutPage() {
  return (
    <div
      className="flex flex-col items-center w-full  "
      style={{
        backgroundImage: `url(/assets/bg.gif)`, // Use the GIF as background
        backgroundSize: "cover", // Ensure it covers the entire element
        backgroundPosition: "center", // Center the GIF
        backgroundRepeat: "no-repeat", // Avoid repeating the GIF
      }}
    >
      <div className="container mx-auto w-full">
        <Navbar />
      </div>
      <About />
    </div>
  );
}
