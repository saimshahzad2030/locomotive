"use client";
import React from "react";
import Image from "../Image/Image";
import { LOGO } from "@/constants/images";
import {
  CROSS,
  FACEBOOK,
  HAMBURGER,
  INSTA,
  MOON,
  SUN,
  TWITTER,
} from "@/constants/svg";
import Link from "next/link";

import { useTheme } from "next-themes";
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is mounted before accessing theme
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevents hydration issues on the server

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="w-full h-[100px] dark:bg-white bg-[#303e41] dark:text-white text-[#303e41] flex flex-row items-center justify-between px-4">
        <Link href={"/about"}>
          <Image className={`h-12 w-auto`} image={LOGO} />
        </Link>
        <div className={"flex flex-row items-center"}>
          {/* <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2   text-white dark:text-[#303e41] rounded-full focus:outline-none flex flex-row items-center"
          >
            {"Theme: "}
            {theme === "dark" ? (
              <SUN className=" ml-1 w-6 h-6   text-[#303e41]" />
            ) : (
              <MOON className="ml-1 w-6 h-6 text-white" />
            )}
          </button> */}
          <HAMBURGER
            className="w-12 h-12 dark:text-[#303e41] text-white cursor-pointer"
            clickHandler={toggleSidebar}
          />
        </div>
      </div>

      <div
        className={`z-50 fixed top-0 right-0 h-screen w-screen dark:bg-white bg-[#303e41] dark:text-[#303e41] text-white transform transition-transform duration-1000 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8">
          <Link
            href="/about"
            className={`text-2xl hover:text-gray-400 transform transition-all duration-500 ${
              sidebarOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: sidebarOpen ? "1.1s" : "0s" }} // delayed by 1.1s after parent
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-2xl hover:text-gray-400 transform transition-all duration-500 ${
              sidebarOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: sidebarOpen ? "1.3s" : "0s" }} // delayed by 1.3s
          >
            About Us
          </Link>
          <Link
            href="/about"
            className={`text-2xl hover:text-gray-400 transform transition-all duration-500 ${
              sidebarOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: sidebarOpen ? "1.5s" : "0s" }} // delayed by 1.5s
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`text-2xl hover:text-gray-400 transform transition-all duration-500 ${
              sidebarOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: sidebarOpen ? "1.7s" : "0s" }} // delayed by 1.7s
          >
            Contact Us
          </Link>

          <div
            className={`flex space-x-6 mt-8 transform transition-all duration-500 ${
              sidebarOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: sidebarOpen ? "1.9s" : "0s" }}
          >
            <Link href="https://facebook.com">
              <FACEBOOK
                className={
                  "w-8 h-8 text-white dark:text-[#303e41]    transform hover:scale-125 transition-transform duration-200 "
                }
              />
            </Link>
            <a href="https://twitter.com" target="_blank">
              <TWITTER
                className={
                  "w-8 h-8 text-white dark:text-[#303e41]   transform hover:scale-125 transition-transform duration-200 "
                }
              />
            </a>
            <a href="https://instagram.com" target="_blank">
              <INSTA
                className={
                  "w-8 h-8  text-white dark:text-[#303e41]  transform hover:scale-125 transition-transform duration-200 "
                }
              />
            </a>
          </div>
        </div>

        {/* Close Button */}
        <CROSS
          className="absolute top-4 right-4 dark:text-[#303e41] text-white w-8 h-8 cursor-pointer"
          clickHandler={toggleSidebar} // Your close action function
        />
      </div>
    </div>
  );
};

export default Navbar;
