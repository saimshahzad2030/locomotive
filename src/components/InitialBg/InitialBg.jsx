"use client";
import React, { useState } from "react";
import "./initialBg.css";
const InitialBg = ({ children }) => {
  const [renderChild, setRenderChild] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start the fade-out animation
      setTimeout(() => setRenderChild(true), 500); // Wait for the fade-out to finish
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (renderChild) {
    return <>{children}</>;
  }
  return (
    <div
      className={` absolute w-full h-[100vh] overflow-hidden flex flex-col items-center justify-center ${
        fadeOut ? "fade-out" : ""
      }`}
    >
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w--full h-full object-cover"
      >
        <source src="/assets/initial-bg.mp4" type="video/mp4" />
      </video>
      <h1 className="absolute top-0 left-0 font-black w-full h-full bg-[#fff] text-[13vw] text-center uppercase text-[#000] leading-[100vh] mix-blend-screen">
        LOCOMOTIVE
      </h1>
      <p className="absolute top-[10vw] left-0  w-full h-full   text-[2vw] text-center uppercase text-[#000] leading-[100vh] ">
        Where Stories Pick Up Speed
      </p>
    </div>
  );
};

export default InitialBg;
