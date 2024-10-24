import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-[#303e41]">
      <div className="container mx-auto w-full">
        <Navbar />
      </div>
    </div>
  );
}
