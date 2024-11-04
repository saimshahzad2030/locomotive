"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCards } from "swiper/modules";
import { BTS1, BTS2, BTS3, LOGO } from "@/constants/images";
import Image from "@/components/Image/Image";
import { FACEBOOK, INSTA, TWITTER } from "@/constants/svg";
import Link from "next/link";
const slides = [
  {
    image: LOGO,
    title: "Creating Stories That Inspire",
    description: `Locomotive Film Produc%on is more than a film company; we're a storytelling powerhouse,
commited to crating captvatng narra%ves that inspire.`,
  },
  {
    title: " Our Mission & Journey",
    description: `At [Company Name], we bring compelling narratives to life. Founded in [Year], we’ve grown
    from a small team of passionate filmmakers into a dynamic production company known for
    [specific genres or styles].`,
    visuals: [BTS1, BTS2, BTS3],
  },
  {
    title: "Our Team & Work",
    description: `Our diverse team of writers, directors, and producers is dedicated to excellence. From feature
films to documentaries, our portfolio showcases projects that highlight our commitment to
quality`,
    members: [
      { alt: "member1", src: "/assets/member-1.jpg" },
      { alt: "member2", src: "/assets/member-2.jpg" },
      { alt: "member3", src: "/assets/member-3.jpg" },
      { alt: "member4", src: "/assets/member-4.jpg" },
    ],
  },
  {
    title: "Get in Touch",
    description: `Interested in collaborating? Join us on our journey to explore new stories and experiences.`,
    socialLinks: true,
  },
];
export default function App() {
  return (
    <div className="flex flex-col items-center w-full h-[100vh] justify-center">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide>
            {slide.image && (
              <div className="flex flex-col items-center justify-center w-5/12 ">
                <img
                  src={LOGO.src}
                  alt={LOGO.alt}
                  className={"h-auto w-8/12"}
                />
              </div>
            )}
            {slide.visuals && (
              <div className=" flex flex-row items-center justify-evenly mt-4 w-full">
                {slide.visuals.map((image) => (
                  <div className="w-3/12 h-auto object-cover overflow-hidden flex flex-col items-center">
                    <Image
                      className="w-30 h-auto"
                      image={{ src: image.src, alt: image.alt }}
                    />
                  </div>
                ))}
              </div>
            )}
            <h1
              className={` text-[#e1a80e]  font-bold text-[10px] mb-1 mt-2 xl:text-[20px]`}
            >
              {slide.title}
            </h1>
            <p
              className={`text-center font-normal text-white text-[7px] xl:text-[16px]`}
            >
              {slide.description}
            </p>

            {slide.socialLinks && (
              <div className="w-auto flex flex-row items-center justify-center mt-4">
                <Link href={"/"}>
                  <FACEBOOK className={"w-4 h-4 text-white mr-2"} />
                </Link>
                <Link href={"/"}>
                  <INSTA className={"w-4 h-4 text-white mr-2"} />
                </Link>
                <Link href={"/"}>
                  <TWITTER className={"w-4 h-4 text-white mr-2"} />
                </Link>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
