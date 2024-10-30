import InitialBg from "@/components/InitialBg/InitialBg";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center w-full bg-[#303e41] h-[100vh]"
      style={{
        backgroundImage: `url(/assets/bg.gif)`, // Use the GIF as background
        backgroundSize: "cover", // Ensure it covers the entire element
        backgroundPosition: "center", // Center the GIF
        backgroundRepeat: "no-repeat", // Avoid repeating the GIF
      }}
    >
      <div className="container mx-auto w-full">
        <InitialBg>
          <Navbar />
        </InitialBg>
      </div>
    </div>
  );
}
